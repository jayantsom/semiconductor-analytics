(function () {
  const directory = document.querySelector("#directory");
  const searchForm = document.querySelector(".search");
  const searchInput = document.querySelector("#search");
  const totalCount = document.querySelector("#total-count");
  const empty = document.querySelector("#empty");
  const modal = document.querySelector("#modal");
  const modalClose = document.querySelector("#modal-close");
  const modalBackdrop = document.querySelector("#modal-backdrop");
  let lastTrigger = null;
  const selected = new Set();
  const tabs = document.querySelector("#tabs");

  const categoryById = new Map(CATALOG.categories.map((category) => [category.id, category]));
  const datasetById = new Map(CATALOG.datasets.map((dataset) => [dataset.id, dataset]));

  function formatCount(count) {
    return count + " " + (count === 1 ? "dataset" : "datasets");
  }

  function tagText(categoryId, subcategoryId) {
    const category = categoryById.get(categoryId);
    const subcategory = category.subcategories.find((item) => item.id === subcategoryId);
    return category.name + " / " + subcategory.name;
  }

  function matches(dataset, query) {
    if (!query) return true;
    const parts = [
      dataset.code,
      dataset.title,
      dataset.summary,
      dataset.contents,
      dataset.use,
      dataset.reality,
      dataset.access
    ];
    dataset.tags.forEach((tag) => {
      parts.push(tagText(tag[0], tag[1]));
    });
    return parts.join(" ").toLowerCase().includes(query);
  }

  function createCard(dataset) {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "card";
    card.dataset.id = dataset.id;

    const code = document.createElement("span");
    code.className = "card-code";
    code.textContent = dataset.code;

    const title = document.createElement("span");
    title.className = "card-title";
    title.textContent = dataset.title;

    const summary = document.createElement("span");
    summary.className = "card-summary";
    summary.textContent = dataset.summary;

    const action = document.createElement("span");
    action.className = "card-open";
    action.textContent = "Open dataset →";

    card.append(code, title, summary, action);
    card.addEventListener("click", () => openModal(dataset.id, card));
    return card;
  }

  function render() {
    CATALOG.categories.forEach((category) => {
      const section = document.createElement("section");
      section.className = "category is-collapsed";
      section.dataset.category = category.id;

      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "category-toggle";
      toggle.setAttribute("aria-expanded", "false");

      const label = document.createElement("span");
      label.className = "category-label";
      const chevron = document.createElement("span");
      chevron.className = "chevron";
      chevron.setAttribute("aria-hidden", "true");
      const name = document.createElement("span");
      name.textContent = category.name;
      label.append(chevron, name);

      const count = document.createElement("span");
      count.className = "count";
      count.dataset.count = "category";
      toggle.append(label, count);

      const body = document.createElement("div");
      body.className = "category-body";

      const description = document.createElement("span");
      description.className = "category-description";
      description.textContent = category.description;
      toggle.append(description);

      category.subcategories.forEach((subcategory) => {
        const datasets = CATALOG.datasets.filter((dataset) =>
          dataset.tags.some((tag) => tag[0] === category.id && tag[1] === subcategory.id)
        );
        if (!datasets.length) return;

        const group = document.createElement("div");
        group.className = "subcategory is-collapsed";
        group.dataset.subcategory = subcategory.id;

        const subToggle = document.createElement("button");
        subToggle.type = "button";
        subToggle.className = "subcategory-toggle";
        subToggle.setAttribute("aria-expanded", "false");
        const subLabel = document.createElement("span");
        subLabel.className = "subcategory-label";
        const subChevron = document.createElement("span");
        subChevron.className = "chevron";
        subChevron.setAttribute("aria-hidden", "true");
        const subName = document.createElement("span");
        subName.textContent = subcategory.name;
        subLabel.append(subChevron, subName);
        const subCount = document.createElement("span");
        subCount.className = "count";
        subCount.dataset.count = "subcategory";
        subToggle.append(subLabel, subCount);

        const subBody = document.createElement("div");
        subBody.className = "subcategory-body";
        const grid = document.createElement("div");
        grid.className = "grid";
        datasets.forEach((dataset) => grid.append(createCard(dataset)));
        subBody.append(grid);

        subToggle.addEventListener("click", () => {
          const collapsed = group.classList.toggle("is-collapsed");
          subToggle.setAttribute("aria-expanded", String(!collapsed));
        });

        group.append(subToggle, subBody);
        body.append(group);
      });

      const close = document.createElement("button");
      close.type = "button";
      close.className = "category-close";
      close.textContent = "Close";
      close.setAttribute("aria-label", "Close " + category.name);
      close.addEventListener("click", () => setExpanded(section, false));

      toggle.addEventListener("click", () => {
        const collapsed = section.classList.toggle("is-collapsed");
        toggle.setAttribute("aria-expanded", String(!collapsed));
      });

      section.append(close, toggle, body);
      directory.append(section);
    });
  }

  function setExpanded(block, expanded) {
    block.classList.toggle("is-collapsed", !expanded);
    const toggle = block.querySelector(".category-toggle, .subcategory-toggle");
    if (toggle) toggle.setAttribute("aria-expanded", String(expanded));
  }

  function tagKey(categoryId, subcategoryId) {
    return categoryId + "/" + subcategoryId;
  }

  function categoryHasSelection(categoryId) {
    for (const key of selected) {
      if (key.indexOf(categoryId + "/") === 0) return true;
    }
    return false;
  }

  function renderTabs() {
    const all = document.createElement("button");
    all.type = "button";
    all.className = "tab";
    all.dataset.key = "";
    all.textContent = "All";
    all.setAttribute("aria-pressed", "true");
    all.addEventListener("click", clearSelection);
    tabs.append(all);

    CATALOG.categories.forEach((category) => {
      category.subcategories.forEach((subcategory) => {
        const tab = document.createElement("button");
        tab.type = "button";
        tab.className = "tab";
        tab.dataset.category = category.id;
        tab.dataset.key = tagKey(category.id, subcategory.id);
        tab.textContent = subcategory.name;
        tab.title = category.name + " / " + subcategory.name;
        tab.setAttribute("aria-pressed", "false");
        tab.addEventListener("click", () => toggleSubcategory(category.id, subcategory.id));
        tabs.append(tab);
      });
    });
  }

  function syncTabs() {
    tabs.querySelectorAll(".tab").forEach((button) => {
      const key = button.dataset.key;
      const pressed = key === "" ? selected.size === 0 : selected.has(key);
      button.setAttribute("aria-pressed", String(pressed));
    });
  }

  function clearSelection() {
    selected.clear();
    searchInput.value = "";
    syncTabs();
    applyView();
  }

  function toggleSubcategory(categoryId, subcategoryId) {
    const key = tagKey(categoryId, subcategoryId);
    const turningOn = !selected.has(key);
    if (turningOn) selected.add(key);
    else selected.delete(key);
    syncTabs();
    applyView();
    if (turningOn) {
      const section = directory.querySelector('.category[data-category="' + categoryId + '"]');
      if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function visibleCards(scope) {
    return Array.from(scope.querySelectorAll(".card")).filter((card) => !card.classList.contains("is-faded"));
  }

  function applyView() {
    const query = searchInput.value.trim().toLowerCase();
    const hasQuery = query.length > 0;
    const hasSelection = selected.size > 0;

    directory.querySelectorAll(".card").forEach((card) => {
      const dataset = datasetById.get(card.dataset.id);
      card.classList.toggle("is-faded", hasQuery && !matches(dataset, query));
    });

    directory.querySelectorAll(".subcategory").forEach((group) => {
      const cards = visibleCards(group);
      group.hidden = false;
      group.querySelector("[data-count='subcategory']").textContent = formatCount(
        hasQuery ? cards.length : group.querySelectorAll(".card").length
      );
    });

    directory.querySelectorAll(".category").forEach((section) => {
      const categoryId = section.dataset.category;
      const selectedHere = categoryHasSelection(categoryId);
      const matchCount = visibleCards(section).length;
      const totalInCategory = new Set(
        Array.from(section.querySelectorAll(".card")).map((card) => card.dataset.id)
      ).size;
      section.hidden = false;
      section.classList.toggle("is-faded", (hasSelection && !selectedHere) || (hasQuery && !hasSelection && matchCount === 0));
      section.querySelector("[data-count='category']").textContent = formatCount(hasQuery ? matchCount : totalInCategory);

      const openCategory = (selectedHere && (!hasQuery || matchCount > 0)) || (!hasSelection && hasQuery && matchCount > 0);
      setExpanded(section, openCategory);
      section.querySelectorAll(".subcategory").forEach((group) => {
        const chosen = selected.has(tagKey(categoryId, group.dataset.subcategory));
        const hasCards = visibleCards(group).length > 0;
        const hardFade = Boolean(openCategory && hasSelection && !chosen);
        group.classList.toggle("is-faded", hardFade || (hasQuery && !hasCards));
        if (!openCategory || group.hidden) return;
        const openGroup = hasSelection ? chosen && (!hasQuery || hasCards) : !hasQuery || hasCards;
        setExpanded(group, openGroup);
      });
    });

    const visible = CATALOG.datasets.filter((dataset) => {
      const inSelection = !hasSelection || dataset.tags.some((tag) => selected.has(tagKey(tag[0], tag[1])));
      return inSelection && matches(dataset, query);
    });
    totalCount.textContent = formatCount(visible.length);
    empty.hidden = visible.length !== 0;
  }

  function openModal(id, trigger) {
    const dataset = datasetById.get(id);
    lastTrigger = trigger;
    document.querySelector("#modal-code").textContent = dataset.code;
    document.querySelector("#modal-title").textContent = dataset.title;
    document.querySelector("#modal-meta").textContent = dataset.reality;
    document.querySelector("#modal-contents").textContent = dataset.contents;
    document.querySelector("#modal-use").textContent = dataset.use;
    document.querySelector("#modal-access").textContent = dataset.access;

    const tags = document.querySelector("#modal-tags");
    tags.replaceChildren();
    dataset.tags.forEach((tag) => {
      const item = document.createElement("li");
      item.dataset.category = tag[0];
      item.textContent = tagText(tag[0], tag[1]);
      tags.append(item);
    });

    const source = document.querySelector("#modal-source");
    if (dataset.url) {
      source.hidden = false;
      source.href = dataset.url;
    } else {
      source.hidden = true;
      source.removeAttribute("href");
    }

    modal.hidden = false;
    document.body.classList.add("modal-open");
    modalClose.focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    if (lastTrigger) lastTrigger.focus();
  }

  const themeButton = document.querySelector("#theme");

  function syncThemeButton() {
    const dark = document.documentElement.dataset.theme === "dark";
    themeButton.textContent = dark ? "Light mode" : "Dark mode";
    themeButton.setAttribute("aria-pressed", String(dark));
  }

  if (localStorage.getItem("catalog-theme") === "dark") {
    document.documentElement.dataset.theme = "dark";
  }
  syncThemeButton();

  themeButton.addEventListener("click", () => {
    const dark = document.documentElement.dataset.theme === "dark";
    if (dark) {
      delete document.documentElement.dataset.theme;
      localStorage.setItem("catalog-theme", "light");
    } else {
      document.documentElement.dataset.theme = "dark";
      localStorage.setItem("catalog-theme", "dark");
    }
    syncThemeButton();
  });

  document.querySelector("#home").addEventListener("click", () => {
    clearSelection();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.querySelector("#clear-filter").addEventListener("click", clearSelection);
  searchForm.addEventListener("submit", (event) => event.preventDefault());
  searchInput.addEventListener("input", () => applyView());
  modalClose.addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", closeModal);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) closeModal();
  });

  renderTabs();
  render();
  applyView();
})();

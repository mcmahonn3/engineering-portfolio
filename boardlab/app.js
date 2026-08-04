const storageKey = "boardlab-prototype-state-v5";
const taskStorageKey = "boardlab-study-task-v2";
const canvasSize = { width: 2200, height: 1500 };

const sampleImages = [
  "assets/workspace-reference.png",
  "assets/evidence-example.png",
  "assets/team-review.png",
];

const defaultState = {
  activeBoardId: "home",
  inbox: [
    "Clarify the first-click task",
    "Screenshot participant confusion",
    "Ask what felt missing",
  ],
  boards: {
    home: {
      id: "home",
      title: "College Group Project",
      parentId: null,
      cards: [
        {
          id: "column-research",
          type: "column",
          title: "Research",
          body: "Find and evaluate sources",
          color: "white",
          x: 150,
          y: 110,
          width: 304,
          items: [
            "Find three credible sources",
            "Pull one useful quote",
            "Save links for citation",
          ],
        },
        {
          id: "column-drafting",
          type: "column",
          title: "Drafting",
          body: "Turn research into content",
          color: "white",
          x: 510,
          y: 110,
          width: 304,
          items: [
            "Outline the main argument",
            "Assign intro/body/conclusion",
            "Review draft for clarity",
          ],
        },
        {
          id: "column-presentation",
          type: "column",
          title: "Presentation",
          body: "Prepare the final handoff",
          color: "white",
          x: 870,
          y: 110,
          width: 304,
          items: [
            "Build slides",
            "Add speaker notes",
            "Practice as a group",
          ],
        },
        {
          id: "note-overview",
          type: "note",
          title: "Project overview",
          body: "Create a clear group project plan with research, drafting, and presentation work visible on one board.",
          color: "yellow",
          x: 145,
          y: 475,
          width: 296,
        },
        {
          id: "image-reference",
          type: "image",
          title: "Reference workspace",
          body: "Use this board to collect notes, tasks, links, and teammate comments.",
          color: "white",
          image: sampleImages[0],
          x: 510,
          y: 470,
          width: 342,
        },
        {
          id: "todo-team",
          type: "todo",
          title: "Team tasks",
          body: "Coordination checklist",
          color: "sky",
          x: 920,
          y: 495,
          width: 288,
          items: [
            { text: "Choose topic by Friday", done: true },
            { text: "Assign roles", done: false },
            { text: "Schedule practice time", done: false },
          ],
        },
        {
          id: "board-resources",
          type: "board",
          title: "Shared resources",
          body: "Nested board for research links, quotes, and source notes.",
          color: "mint",
          boardId: "resources",
          x: 1260,
          y: 112,
          width: 286,
        },
        {
          id: "link-class",
          type: "link",
          title: "Assignment brief",
          body: "Add a class handout, rubric, or shared document link here.",
          url: "example.edu/group-project-brief",
          color: "white",
          x: 1260,
          y: 390,
          width: 318,
        },
        {
          id: "comment-teammate",
          type: "comment",
          title: "Teammate note",
          body: "Can someone confirm who is presenting the research section?",
          color: "coral",
          x: 1265,
          y: 635,
          width: 280,
          replies: ["Add a deadline or role once the group decides."],
        },
        {
          id: "table-deadlines",
          type: "table",
          title: "Deadline tracker",
          body: "Use this for due dates and owners",
          color: "white",
          x: 145,
          y: 800,
          width: 392,
          rows: [
            ["Item", "Owner", "Due"],
            ["Research notes", "Alex", "Tue"],
            ["Draft review", "Jordan", "Thu"],
            ["Slides", "Group", "Fri"],
          ],
        },
        {
          id: "sketch-project-flow",
          type: "sketch",
          title: "Project flow",
          body: "Rough sequence from research to final presentation.",
          color: "lilac",
          x: 600,
          y: 820,
          width: 362,
        },
        {
          id: "note-open-question",
          type: "note",
          title: "Open question",
          body: "What part of the project still needs a teammate decision?",
          color: "yellow",
          x: 1015,
          y: 825,
          width: 300,
        },
        {
          id: "board-presentation-planning",
          type: "board",
          title: "Presentation planning",
          body: "Nested board for slide order, speakers, and practice notes.",
          color: "yellow",
          boardId: "presentation",
          x: 1380,
          y: 840,
          width: 286,
        },
      ],
    },
    resources: {
      id: "resources",
      title: "Shared Resources",
      parentId: "home",
      cards: [
        {
          id: "source-1",
          type: "note",
          title: "Source note",
          body: "Add one research source and why it might help the project.",
          color: "yellow",
          x: 170,
          y: 140,
          width: 304,
        },
        {
          id: "column-source-types",
          type: "column",
          title: "Source types",
          body: "Research categories",
          color: "white",
          x: 535,
          y: 126,
          width: 304,
          items: ["Academic article", "News or report", "Interview note", "Image or chart"],
        },
        {
          id: "todo-sources",
          type: "todo",
          title: "Research tasks",
          body: "Source work",
          color: "mint",
          x: 904,
          y: 150,
          width: 304,
          items: [
            { text: "Find two sources", done: false },
            { text: "Save citation details", done: false },
            { text: "Choose best quote", done: true },
          ],
        },
        {
          id: "comment-source",
          type: "comment",
          title: "Teammate note",
          body: "Check whether the chosen sources support the final presentation.",
          color: "coral",
          x: 360,
          y: 520,
          width: 290,
          replies: ["Add questions for the group meeting."],
        },
      ],
    },
    presentation: {
      id: "presentation",
      title: "Presentation Planning",
      parentId: "home",
      cards: [
        {
          id: "image-slides",
          type: "image",
          title: "Slide reference",
          body: "Use this space for visual direction or slide inspiration.",
          color: "white",
          image: sampleImages[1],
          x: 170,
          y: 130,
          width: 354,
        },
        {
          id: "note-speakers",
          type: "note",
          title: "Speaker assignments",
          body: "Write who will present each part of the project.",
          color: "lilac",
          x: 585,
          y: 160,
          width: 310,
        },
        {
          id: "column-slide-order",
          type: "column",
          title: "Slide order",
          body: "Presentation sequence",
          color: "white",
          x: 950,
          y: 136,
          width: 310,
          items: ["Introduction", "Research findings", "Draft/process", "Conclusion"],
        },
      ],
    },
  },
};

const templates = {
  brief: [
    {
      type: "column",
      title: "Research",
      body: "Find and evaluate sources",
      color: "white",
      x: 180,
      y: 140,
      width: 310,
      items: ["Find sources", "Pull useful evidence", "Save citations"],
    },
    {
      type: "column",
      title: "Drafting",
      body: "Write and review the project",
      color: "white",
      x: 540,
      y: 140,
      width: 310,
      items: ["Outline", "Write section drafts", "Peer review"],
    },
    {
      type: "column",
      title: "Presentation",
      body: "Prepare final delivery",
      color: "white",
      x: 900,
      y: 140,
      width: 310,
      items: ["Build slides", "Assign speakers", "Practice"],
    },
  ],
  research: [
    {
      type: "column",
      title: "Quotes",
      body: "Raw observations",
      color: "white",
      x: 180,
      y: 140,
      width: 310,
      items: ["Participant quote", "Moderator note", "Confusing moment"],
    },
    {
      type: "column",
      title: "Patterns",
      body: "Synthesis",
      color: "white",
      x: 550,
      y: 140,
      width: 310,
      items: ["Repeated friction", "Successful path", "Open question"],
    },
    {
      type: "comment",
      title: "Debrief",
      body: "What changed after the test?",
      color: "coral",
      x: 925,
      y: 160,
      width: 290,
      replies: ["Use this for the class write-up."],
    },
  ],
  moodboard: [
    {
      type: "image",
      title: "Visual reference",
      body: "Add a concrete interface or workplace reference.",
      color: "white",
      image: sampleImages[2],
      x: 170,
      y: 130,
      width: 354,
    },
    {
      type: "note",
      title: "Direction",
      body: "Describe the visual qualities this reference supports.",
      color: "yellow",
      x: 585,
      y: 150,
      width: 310,
    },
    {
      type: "table",
      title: "Evaluation",
      body: "Moodboard criteria",
      color: "white",
      x: 950,
      y: 150,
      width: 380,
      rows: [
        ["Quality", "Fit", "Notes"],
        ["Clarity", "High", "Strong hierarchy"],
        ["Warmth", "Medium", "Needs more human evidence"],
      ],
    },
  ],
};

let state = loadState();
let selectedId = getActiveBoard().cards[0]?.id || null;
let zoom = 1;
let zIndex = 20;
let testMode = false;
let searchEventTimer;
let taskTimerInterval;
let taskSession = loadTaskSession();

const shell = document.querySelector(".app-shell");
const board = document.getElementById("board");
const boardStage = document.getElementById("boardStage");
const template = document.getElementById("cardTemplate");
const boardList = document.getElementById("boardList");
const breadcrumbs = document.getElementById("breadcrumbs");
const boardTitle = document.getElementById("boardTitle");
const inboxList = document.getElementById("inboxList");
const inboxCount = document.getElementById("inboxCount");
const cardCount = document.getElementById("cardCount");
const meterBar = document.getElementById("meterBar");
const templatePicker = document.getElementById("templatePicker");
const titleInput = document.getElementById("titleInput");
const bodyInput = document.getElementById("bodyInput");
const urlInput = document.getElementById("urlInput");
const urlField = document.getElementById("urlField");
const inspectorType = document.getElementById("inspectorType");
const deleteButton = document.getElementById("deleteButton");
const duplicateButton = document.getElementById("duplicateButton");
const openBoardButton = document.getElementById("openBoardButton");
const swatches = document.getElementById("swatches");
const searchInput = document.getElementById("searchInput");
const zoomRange = document.getElementById("zoomRange");
const zoomOutput = document.getElementById("zoomOutput");
const startTaskButton = document.getElementById("startTaskButton");
const completeTaskButton = document.getElementById("completeTaskButton");
const studyTaskPanel = document.getElementById("studyTaskPanel");
const studyPanelToggle = document.getElementById("studyPanelToggle");
const taskTimer = document.getElementById("taskTimer");

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function uid(prefix) {
  const random = Math.random().toString(36).slice(2, 8);
  return `${prefix}-${Date.now().toString(36)}-${random}`;
}

function loadState() {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return clone(defaultState);
    const parsed = JSON.parse(raw);
    if (!parsed?.boards?.home) return clone(defaultState);
    return parsed;
  } catch {
    return clone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function loadTaskSession() {
  try {
    return JSON.parse(localStorage.getItem(taskStorageKey)) || { startedAt: null, completedAt: null };
  } catch {
    return { startedAt: null, completedAt: null };
  }
}

function saveTaskSession() {
  localStorage.setItem(taskStorageKey, JSON.stringify(taskSession));
}

function getActiveBoard() {
  return state.boards[state.activeBoardId] || state.boards.home;
}

function getSelectedCard() {
  return getActiveBoard().cards.find((card) => card.id === selectedId) || null;
}

function normalizeText(value) {
  return String(value || "").replace(/\s+/g, " ").trim().toLowerCase();
}

function cardSearchText(card) {
  return normalizeText(
    [
      card.type,
      card.title,
      card.body,
      card.url,
      card.items?.map((item) => (typeof item === "string" ? item : item.text)).join(" "),
      card.rows?.flat().join(" "),
      card.replies?.join(" "),
    ].join(" "),
  );
}

function trackUxEvent(name, tags = {}) {
  Object.entries(tags).forEach(([key, value]) => {
    window.BoardLabAnalytics?.tag(key, value);
  });
  window.BoardLabAnalytics?.event(name);
}

function formatDuration(milliseconds) {
  const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function durationBucket(seconds) {
  if (seconds < 60) return "under_1_minute";
  if (seconds < 180) return "1_to_3_minutes";
  if (seconds < 300) return "3_to_5_minutes";
  if (seconds < 600) return "5_to_10_minutes";
  return "over_10_minutes";
}

function updateTaskTimer() {
  const started = Boolean(taskSession.startedAt);
  const completed = Boolean(taskSession.completedAt);
  const end = completed ? taskSession.completedAt : Date.now();
  const elapsed = started ? end - taskSession.startedAt : 0;

  taskTimer.textContent = started
    ? completed
      ? `Completed in ${formatDuration(elapsed)}`
      : formatDuration(elapsed)
    : "Not started";

  startTaskButton.disabled = started && !completed;
  completeTaskButton.disabled = !started || completed;
  startTaskButton.querySelector("span").textContent = completed ? "Restart" : started ? "Running" : "Start task";
  studyTaskPanel.classList.toggle("is-running", started && !completed);
  studyTaskPanel.classList.toggle("is-complete", completed);
  studyPanelToggle.title = studyTaskPanel.classList.contains("is-compact") ? "Show instructions" : "Hide instructions";
}

function startStudyTask() {
  taskSession = { startedAt: Date.now(), completedAt: null };
  saveTaskSession();
  updateTaskTimer();
  clearInterval(taskTimerInterval);
  taskTimerInterval = setInterval(updateTaskTimer, 1000);
  studyTaskPanel.classList.add("is-compact");
  trackUxEvent("task_started", {
    task_name: "college_group_project_board",
    active_board: getActiveBoard().id,
  });
  showToast("Task timer started");
}

function completeStudyTask() {
  if (!taskSession.startedAt || taskSession.completedAt) return;
  taskSession.completedAt = Date.now();
  saveTaskSession();
  clearInterval(taskTimerInterval);
  const durationSeconds = Math.round((taskSession.completedAt - taskSession.startedAt) / 1000);
  trackUxEvent("task_completed", {
    task_name: "college_group_project_board",
    task_duration_seconds: durationSeconds,
    task_duration_bucket: durationBucket(durationSeconds),
    task_card_count: getActiveBoard().cards.length,
    task_board_count: Object.keys(state.boards).length,
  });
  studyTaskPanel.classList.remove("is-compact");
  updateTaskTimer();
  showToast(`Finished in ${formatDuration(durationSeconds * 1000)}`);
}

function makeIcon(name) {
  const paths = {
    board: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
    link: "M9 12a4 4 0 0 0 6 3l3-3a4 4 0 0 0-6-6l-1 1M15 12a4 4 0 0 1-6 3l-3-3a4 4 0 0 1 6-6l1 1",
    comment: "M5 5h14v10H9l-4 4z",
    image: "M5 5h14v14H5zM8 15l3-3 2 2 3-4 3 5M8.5 9.5h.1",
    table: "M4 5h16v14H4zM4 10h16M9 5v14M15 5v14",
  };
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("aria-hidden", "true");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", paths[name] || paths.board);
  svg.append(path);
  return svg;
}

function render() {
  renderNav();
  renderInbox();
  renderBoard();
  renderInspector();
}

function renderNav({ syncTitle = true } = {}) {
  const activeBoard = getActiveBoard();
  if (syncTitle) boardTitle.textContent = activeBoard.title;
  boardList.textContent = "";

  Object.values(state.boards).forEach((item) => {
    const button = document.createElement("button");
    button.className = "board-pill";
    button.classList.toggle("is-active", item.id === activeBoard.id);
    button.type = "button";
    button.dataset.boardId = item.id;
    button.append(makeIcon("board"), document.createTextNode(item.title));
    button.addEventListener("click", () => switchBoard(item.id));
    boardList.append(button);
  });

  breadcrumbs.textContent = "";
  const trail = [];
  let cursor = activeBoard;
  while (cursor) {
    trail.unshift(cursor);
    cursor = cursor.parentId ? state.boards[cursor.parentId] : null;
  }
  trail.forEach((item, index) => {
    const crumb = document.createElement("button");
    crumb.type = "button";
    crumb.textContent = item.title;
    crumb.addEventListener("click", () => switchBoard(item.id));
    breadcrumbs.append(crumb);
    if (index < trail.length - 1) {
      const separator = document.createElement("span");
      separator.textContent = "/";
      breadcrumbs.append(separator);
    }
  });

  const totalCards = Object.values(state.boards).reduce((total, item) => total + item.cards.length, 0);
  cardCount.textContent = `${totalCards} cards`;
  meterBar.style.width = `${Math.min(100, Math.round((totalCards / 40) * 100))}%`;
}

function renderInbox() {
  inboxList.textContent = "";
  inboxCount.textContent = state.inbox.length;
  state.inbox.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "inbox-item";
    button.textContent = item;
    button.addEventListener("click", () => {
      const card = makeCard("note", index + 1);
      card.title = "Unsorted note";
      card.body = item;
      card.x = 110 + index * 28 + boardStage.scrollLeft / zoom;
      card.y = 120 + index * 28 + boardStage.scrollTop / zoom;
      getActiveBoard().cards.push(card);
      state.inbox.splice(index, 1);
      selectedId = card.id;
      trackUxEvent("move_inbox_item");
      saveState();
      render();
    });
    inboxList.append(button);
  });
}

function renderBoard() {
  const query = normalizeText(searchInput.value);
  board.textContent = "";
  board.style.width = `${canvasSize.width * zoom}px`;
  board.style.height = `${canvasSize.height * zoom}px`;
  board.style.transform = `scale(${zoom})`;

  getActiveBoard().cards.forEach((card) => {
    const node = template.content.firstElementChild.cloneNode(true);
    node.dataset.id = card.id;
    node.dataset.type = card.type;
    node.classList.add(card.type, card.color || "white");
    node.classList.toggle("is-selected", card.id === selectedId);
    node.classList.toggle("is-muted", Boolean(query && !cardSearchText(card).includes(query)));
    node.style.left = `${card.x}px`;
    node.style.top = `${card.y}px`;
    node.style.width = `${card.width || 288}px`;
    node.style.zIndex = String(card.z || 1);

    node.querySelector(".card-type-label").textContent = card.type;
    node.querySelector(".delete-card").addEventListener("click", (event) => {
      event.stopPropagation();
      removeCard(card.id);
    });
    node.querySelector(".duplicate-card").addEventListener("click", (event) => {
      event.stopPropagation();
      duplicateCard(card.id);
    });
    const openButton = node.querySelector(".open-board-card");
    openButton.hidden = card.type !== "board";
    openButton.addEventListener("click", (event) => {
      event.stopPropagation();
      if (card.boardId) switchBoard(card.boardId);
    });

    node.querySelector(".card-content").append(renderCardContent(card));
    wireCard(node, card);
    board.append(node);
  });
}

function editableText(tag, card, field, className) {
  const element = document.createElement(tag);
  element.className = className;
  element.textContent = card[field] || "";
  element.contentEditable = "true";
  element.spellcheck = true;
  element.setAttribute("data-clarity-mask", "true");
  element.addEventListener("pointerdown", (event) => event.stopPropagation());
  element.addEventListener("input", () => {
    card[field] = element.innerText.trim();
    if (selectedId === card.id) renderInspector();
    saveState();
  });
  return element;
}

function renderCardContent(card) {
  const fragment = document.createDocumentFragment();

  if (card.type === "image") {
    const frame = document.createElement("div");
    frame.className = "image-frame";
    const img = document.createElement("img");
    img.alt = card.title || "Board reference";
    img.src = card.image || sampleImages[0];
    frame.append(img);
    fragment.append(frame, editableText("h3", card, "title", "card-title"), editableText("p", card, "body", "card-body"));
    return fragment;
  }

  if (card.type === "link") {
    const domain = document.createElement("span");
    domain.className = "link-domain";
    domain.append(makeIcon("link"), document.createTextNode(card.url || "example.com"));
    fragment.append(domain, editableText("h3", card, "title", "card-title"), editableText("p", card, "body", "card-body"));
    return fragment;
  }

  if (card.type === "todo") {
    fragment.append(editableText("h3", card, "title", "card-title"), todoElement(card));
    return fragment;
  }

  if (card.type === "column") {
    fragment.append(editableText("h3", card, "title", "card-title"), columnElement(card));
    return fragment;
  }

  if (card.type === "board") {
    const preview = document.createElement("div");
    preview.className = "board-preview";
    preview.append(makeIcon("board"));
    const child = state.boards[card.boardId];
    const count = document.createElement("span");
    count.textContent = `${child?.cards.length || 0} cards`;
    preview.append(count);
    fragment.append(preview, editableText("h3", card, "title", "card-title"), editableText("p", card, "body", "card-body"));
    return fragment;
  }

  if (card.type === "table") {
    fragment.append(editableText("h3", card, "title", "card-title"), tableElement(card));
    return fragment;
  }

  if (card.type === "comment") {
    const badge = document.createElement("div");
    badge.className = "comment-badge";
    badge.append(makeIcon("comment"), document.createTextNode(card.title || "Comment"));
    const body = editableText("p", card, "body", "card-body");
    const replies = document.createElement("div");
    replies.className = "reply-stack";
    (card.replies || []).forEach((reply) => {
      const pill = document.createElement("span");
      pill.textContent = reply;
      replies.append(pill);
    });
    fragment.append(badge, body, replies);
    return fragment;
  }

  if (card.type === "sketch") {
    const sketch = document.createElement("div");
    sketch.className = "sketch-pad";
    sketch.innerHTML = `
      <svg viewBox="0 0 260 140" aria-hidden="true">
        <path d="M22 98 C72 12, 90 124, 142 54 S214 24, 238 94" />
        <path d="M38 36h54v32H38zM160 72h58v34h-58z" />
        <path d="M95 52h56M92 86h64" />
      </svg>
    `;
    fragment.append(sketch, editableText("h3", card, "title", "card-title"), editableText("p", card, "body", "card-body"));
    return fragment;
  }

  fragment.append(editableText("h3", card, "title", "card-title"), editableText("p", card, "body", "card-body"));
  return fragment;
}

function todoElement(card) {
  card.items = normalizeTodoItems(card);
  const list = document.createElement("ul");
  list.className = "todo-list";
  card.items.forEach((item, index) => {
    const row = document.createElement("li");
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = Boolean(item.done);
    checkbox.addEventListener("pointerdown", (event) => event.stopPropagation());
    checkbox.addEventListener("change", () => {
      item.done = checkbox.checked;
      trackUxEvent("toggle_task");
      saveState();
    });
    const span = document.createElement("span");
    span.textContent = item.text;
    span.contentEditable = "true";
    span.spellcheck = true;
    span.setAttribute("data-clarity-mask", "true");
    span.addEventListener("pointerdown", (event) => event.stopPropagation());
    span.addEventListener("input", () => {
      item.text = span.innerText.trim();
      saveState();
    });
    label.append(checkbox, span);
    row.append(label);
    list.append(row);
  });
  return list;
}

function columnElement(card) {
  card.items = Array.isArray(card.items) ? card.items : [];
  const wrap = document.createElement("div");
  wrap.className = "column-stack";
  card.items.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "column-item";
    row.contentEditable = "true";
    row.spellcheck = true;
    row.setAttribute("data-clarity-mask", "true");
    row.textContent = item;
    row.addEventListener("pointerdown", (event) => event.stopPropagation());
    row.addEventListener("input", () => {
      card.items[index] = row.innerText.trim();
      saveState();
    });
    wrap.append(row);
  });
  const addButton = document.createElement("button");
  addButton.type = "button";
  addButton.className = "column-add";
  addButton.textContent = "+";
  addButton.title = "Add row";
  addButton.addEventListener("click", (event) => {
    event.stopPropagation();
    card.items.push("New item");
    trackUxEvent("add_column_item");
    saveState();
    renderBoard();
  });
  wrap.append(addButton);
  return wrap;
}

function tableElement(card) {
  card.rows = Array.isArray(card.rows) ? card.rows : [["Field", "Value"], ["Audience", "Students"]];
  const table = document.createElement("table");
  table.className = "mini-table";
  card.rows.forEach((row, rowIndex) => {
    const tr = document.createElement("tr");
    row.forEach((cell, cellIndex) => {
      const cellNode = document.createElement(rowIndex === 0 ? "th" : "td");
      cellNode.textContent = cell;
      cellNode.contentEditable = "true";
      cellNode.spellcheck = true;
      cellNode.setAttribute("data-clarity-mask", "true");
      cellNode.addEventListener("pointerdown", (event) => event.stopPropagation());
      cellNode.addEventListener("input", () => {
        card.rows[rowIndex][cellIndex] = cellNode.innerText.trim();
        saveState();
      });
      tr.append(cellNode);
    });
    table.append(tr);
  });
  return table;
}

function normalizeTodoItems(card) {
  if (Array.isArray(card.items)) {
    return card.items.map((item) =>
      typeof item === "string" ? { text: item, done: false } : { text: item.text || "", done: Boolean(item.done) },
    );
  }
  return String(card.body || "")
    .split("|")
    .map((item) => item.trim())
    .filter(Boolean)
    .map((text, index) => ({ text, done: Boolean(card.done?.[index]) }));
}

function wireCard(node, card) {
  node.addEventListener("dblclick", (event) => {
    if (card.type === "board" && !event.target.closest("[contenteditable], button")) {
      switchBoard(card.boardId);
    }
  });

  node.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || event.target.closest("[contenteditable], button, input, textarea, label")) return;

    selectCard(card.id);
    card.z = ++zIndex;
    const startX = event.clientX;
    const startY = event.clientY;
    const originX = card.x;
    const originY = card.y;
    node.classList.add("is-dragging");
    try {
      node.setPointerCapture(event.pointerId);
    } catch {
      // Some browsers cancel pointer capture during rapid double-click navigation.
    }

    const onMove = (moveEvent) => {
      const nextX = originX + (moveEvent.clientX - startX) / zoom;
      const nextY = originY + (moveEvent.clientY - startY) / zoom;
      card.x = Math.max(24, Math.min(canvasSize.width - 360, Math.round(nextX)));
      card.y = Math.max(24, Math.min(canvasSize.height - 280, Math.round(nextY)));
      node.style.left = `${card.x}px`;
      node.style.top = `${card.y}px`;
    };

    const onUp = () => {
      node.classList.remove("is-dragging");
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerup", onUp);
      node.removeEventListener("pointercancel", onUp);
      trackUxEvent("move_card", { card_type: card.type });
      saveState();
      renderInspector();
    };

    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerup", onUp);
    node.addEventListener("pointercancel", onUp);
  });

  node.addEventListener("click", () => selectCard(card.id));
  node.addEventListener("focus", () => selectCard(card.id));
}

function renderInspector() {
  const card = getSelectedCard();
  const disabled = !card;
  inspectorType.textContent = card ? `${card.type[0].toUpperCase()}${card.type.slice(1)}` : "No selection";
  titleInput.disabled = disabled;
  bodyInput.disabled = disabled;
  urlInput.disabled = disabled || !["link", "image"].includes(card?.type);
  deleteButton.disabled = disabled;
  duplicateButton.disabled = disabled;
  openBoardButton.disabled = disabled || card?.type !== "board";
  urlField.classList.toggle("is-hidden", !["link", "image"].includes(card?.type));

  titleInput.value = card?.title || "";
  bodyInput.value = card?.type === "todo" ? normalizeTodoItems(card).map((item) => item.text).join("|") : card?.body || "";
  urlInput.value = card?.type === "image" ? card?.image || "" : card?.url || "";

  [...swatches.querySelectorAll(".swatch")].forEach((button) => {
    button.disabled = disabled;
    button.classList.toggle("is-active", button.dataset.color === card?.color);
  });
}

function selectCard(id) {
  if (selectedId === id) return;
  selectedId = id;
  const card = getSelectedCard();
  if (card) trackUxEvent("select_card", { card_type: card.type });
  renderBoard();
  renderInspector();
}

function switchBoard(boardId) {
  if (!state.boards[boardId]) return;
  state.activeBoardId = boardId;
  selectedId = getActiveBoard().cards[0]?.id || null;
  boardStage.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  trackUxEvent("open_board", { board_id: boardId });
  saveState();
  render();
}

function makeCard(type, sequence = 1) {
  const base = {
    id: uid(type),
    type,
    title: `New ${type}`,
    body: "Add content here.",
    color: type === "comment" ? "coral" : type === "todo" ? "sky" : "yellow",
    x: 160 + sequence * 28 + boardStage.scrollLeft / zoom,
    y: 120 + sequence * 28 + boardStage.scrollTop / zoom,
    width: 292,
    z: ++zIndex,
  };

  if (type === "image") {
    base.title = "New image";
    base.body = "Add a caption.";
    base.image = sampleImages[sequence % sampleImages.length];
    base.color = "white";
    base.width = 342;
  }
  if (type === "link") {
    base.title = "New source";
    base.body = "Add a summary.";
    base.url = "example.com/source";
    base.color = "white";
    base.width = 316;
  }
  if (type === "todo") {
    base.title = "New checklist";
    base.body = "Task list";
    base.items = [
      { text: "First task", done: false },
      { text: "Second task", done: false },
      { text: "Follow-up", done: false },
    ];
  }
  if (type === "column") {
    base.title = "New column";
    base.body = "Organized notes";
    base.color = "white";
    base.items = ["Add item", "Add another item"];
  }
  if (type === "board") {
    const childId = uid("board");
    base.title = "New board";
    base.body = "Open this board to organize related material.";
    base.boardId = childId;
    base.color = "mint";
    state.boards[childId] = {
      id: childId,
      title: base.title,
      parentId: getActiveBoard().id,
      cards: [],
    };
  }
  if (type === "comment") {
    base.title = "Reviewer";
    base.body = "Leave contextual feedback here.";
    base.replies = ["Reply thread"];
    base.width = 282;
  }
  if (type === "table") {
    base.title = "New table";
    base.body = "Structured notes";
    base.color = "white";
    base.width = 392;
    base.rows = [
      ["Field", "Value", "Status"],
      ["Audience", "Students", "Draft"],
      ["Action", "Review", "Open"],
    ];
  }
  if (type === "sketch") {
    base.title = "New sketch";
    base.body = "Diagram or rough flow.";
    base.color = "lilac";
    base.width = 360;
  }

  return base;
}

function addCard(type) {
  const count = getActiveBoard().cards.filter((card) => card.type === type).length + 1;
  const card = makeCard(type, count);
  getActiveBoard().cards.push(card);
  selectedId = card.id;
  trackUxEvent("add_card", { card_type: type });
  saveState();
  render();
}

function removeCard(id) {
  const active = getActiveBoard();
  const deleted = active.cards.find((card) => card.id === id);
  active.cards = active.cards.filter((card) => card.id !== id);
  selectedId = active.cards[0]?.id || null;
  trackUxEvent("delete_card", { card_type: deleted?.type || "unknown" });
  saveState();
  render();
}

function duplicateCard(id) {
  const card = getActiveBoard().cards.find((item) => item.id === id);
  if (!card) return;
  const copy = clone(card);
  copy.id = uid(card.type);
  copy.title = `${card.title} copy`;
  copy.x += 34;
  copy.y += 34;
  copy.z = ++zIndex;
  if (copy.type === "board") {
    const childId = uid("board");
    state.boards[childId] = {
      id: childId,
      title: copy.title,
      parentId: getActiveBoard().id,
      cards: [],
    };
    copy.boardId = childId;
  }
  getActiveBoard().cards.push(copy);
  selectedId = copy.id;
  trackUxEvent("duplicate_card", { card_type: card.type });
  saveState();
  render();
}

function applyTemplate(name) {
  const cards = templates[name];
  if (!cards) return;
  const active = getActiveBoard();
  active.cards = cards.map((card, index) => ({
    ...clone(card),
    id: uid(card.type || "card"),
    z: index + 1,
  }));
  selectedId = active.cards[0]?.id || null;
  templatePicker.classList.remove("is-open");
  trackUxEvent("apply_template", { template: name });
  saveState();
  render();
}

function setZoom(value) {
  zoom = Math.max(0.6, Math.min(1.4, value));
  zoomRange.value = Math.round(zoom * 100);
  zoomOutput.value = `${zoomRange.value}%`;
  renderBoard();
}

function showToast(message) {
  const existing = document.querySelector(".toast");
  if (existing) existing.remove();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.append(toast);
  setTimeout(() => toast.remove(), 2200);
}

document.querySelectorAll("[data-add]").forEach((button) => {
  button.addEventListener("click", () => addCard(button.dataset.add));
});

document.querySelectorAll("[data-template]").forEach((button) => {
  button.addEventListener("click", () => applyTemplate(button.dataset.template));
});

boardTitle.addEventListener("input", () => {
  const active = getActiveBoard();
  active.title = boardTitle.innerText.trim() || "Untitled board";
  const parentCards = Object.values(state.boards)
    .flatMap((item) => item.cards)
    .filter((card) => card.type === "board" && card.boardId === active.id);
  parentCards.forEach((card) => {
    card.title = active.title;
  });
  saveState();
  renderNav({ syncTitle: false });
});

titleInput.addEventListener("input", () => {
  const card = getSelectedCard();
  if (!card) return;
  card.title = titleInput.value;
  if (card.type === "board" && card.boardId && state.boards[card.boardId]) {
    state.boards[card.boardId].title = card.title || "Untitled board";
  }
  saveState();
  renderBoard();
  renderNav();
});

bodyInput.addEventListener("input", () => {
  const card = getSelectedCard();
  if (!card) return;
  if (card.type === "todo") {
    card.items = bodyInput.value
      .split("|")
      .map((text, index) => ({ text: text.trim(), done: Boolean(card.items?.[index]?.done) }))
      .filter((item) => item.text);
  } else {
    card.body = bodyInput.value;
  }
  saveState();
  renderBoard();
});

urlInput.addEventListener("input", () => {
  const card = getSelectedCard();
  if (!card) return;
  if (card.type === "image") card.image = urlInput.value;
  if (card.type === "link") card.url = urlInput.value;
  saveState();
  renderBoard();
});

swatches.addEventListener("click", (event) => {
  const button = event.target.closest(".swatch");
  const card = getSelectedCard();
  if (!button || !card) return;
  card.color = button.dataset.color;
  trackUxEvent("change_card_color", { card_type: card.type, card_color: card.color });
  saveState();
  render();
});

deleteButton.addEventListener("click", () => {
  const card = getSelectedCard();
  if (card) removeCard(card.id);
});

duplicateButton.addEventListener("click", () => {
  const card = getSelectedCard();
  if (card) duplicateCard(card.id);
});

openBoardButton.addEventListener("click", () => {
  const card = getSelectedCard();
  if (card?.type === "board" && card.boardId) switchBoard(card.boardId);
});

searchInput.addEventListener("input", () => {
  renderBoard();
  clearTimeout(searchEventTimer);
  searchEventTimer = setTimeout(() => {
    if (searchInput.value.trim()) trackUxEvent("search_board");
  }, 600);
});

zoomRange.addEventListener("input", () => setZoom(Number(zoomRange.value) / 100));
zoomRange.addEventListener("change", () => trackUxEvent("change_zoom", { zoom_level: zoomRange.value }));
document.getElementById("zoomOutButton").addEventListener("click", () => {
  setZoom(zoom - 0.1);
  trackUxEvent("change_zoom", { zoom_level: zoomRange.value });
});
document.getElementById("zoomInButton").addEventListener("click", () => {
  setZoom(zoom + 0.1);
  trackUxEvent("change_zoom", { zoom_level: zoomRange.value });
});

document.getElementById("homeButton").addEventListener("click", () => switchBoard("home"));
document.getElementById("templateToggle").addEventListener("click", () => {
  templatePicker.classList.toggle("is-open");
  trackUxEvent("toggle_templates");
});
document.getElementById("closeTemplates").addEventListener("click", () => templatePicker.classList.remove("is-open"));

document.getElementById("resetButton").addEventListener("click", () => {
  state = clone(defaultState);
  selectedId = getActiveBoard().cards[0]?.id || null;
  trackUxEvent("reset_workspace");
  saveState();
  render();
});

document.getElementById("exportButton").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "boardlab-export.json";
  link.click();
  URL.revokeObjectURL(link.href);
  trackUxEvent("export_board");
});

document.getElementById("shareButton").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    showToast("Share link copied");
  } catch {
    showToast("Share link ready");
  }
  trackUxEvent("share_board");
});

studyPanelToggle.addEventListener("click", () => {
  studyTaskPanel.classList.toggle("is-compact");
  updateTaskTimer();
  trackUxEvent(studyTaskPanel.classList.contains("is-compact") ? "hide_study_prompt" : "show_study_prompt");
});

startTaskButton.addEventListener("click", startStudyTask);
completeTaskButton.addEventListener("click", completeStudyTask);

document.getElementById("testModeButton").addEventListener("click", (event) => {
  testMode = !testMode;
  shell.classList.toggle("test-mode", testMode);
  event.currentTarget.setAttribute("aria-pressed", String(testMode));
  trackUxEvent(testMode ? "enter_focus_mode" : "exit_focus_mode");
});

saveState();
render();
updateTaskTimer();
if (taskSession.startedAt && !taskSession.completedAt) {
  taskTimerInterval = setInterval(updateTaskTimer, 1000);
}

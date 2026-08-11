/* ==========================================================================
   CrewDog AI — Landing page data + rendering
   Renders the repeating sections from data and wires up light interactivity.
   ========================================================================== */

const data = {
  features: [
    { icon: "globe", title: "Global demand", body: "Track oil and gas activity across major producing regions." },
    { icon: "radio-tower", title: "Find demand early", body: "Discover project awards, expansions and hiring signals before they become obvious." },
    { icon: "users", title: "Find the buyers", body: "Identify the companies and people behind the hiring so you can go direct." },
    { icon: "trophy", title: "Get there before your bigger competitors", body: "Discover where in the world there is likely to be demand for your most placeable contractors." },
  ],
  steps: [
    { n: "1", icon: "crosshair", title: "Find where the work is", body: "CrewDog identifies projects, awards and hiring activity worldwide." },
    { n: "2", icon: "users", title: "Find who is hiring", body: "Surface the companies, decision makers and recruitment contacts connected to the opportunity." },
    { n: "3", icon: "handshake", title: "Win the recruitment work", body: "Approach the client, present candidates and earn the placement fee." },
  ],
  finds: [
    { icon: "crosshair", label: "Projects and awards" },
    { icon: "users", label: "Hiring signals and skills in demand" },
    { icon: "building-2", label: "Companies and decision makers" },
    { icon: "clipboard-list", label: "Market insights and benchmarks" },
  ],
  rows: [
    { project: "Rovuma LNG Expansion", country: "Mozambique", discipline: "Project Controls", company: "Eni", stage: "FEED", signal: "New contract award", reported: "2h ago" },
    { project: "Upper Zakum Development", country: "UAE", discipline: "Drilling Supervisor", company: "ADNOC", stage: "Drilling", signal: "Hiring activity detected", reported: "3h ago" },
    { project: "Scarborough Gas Project", country: "Australia", discipline: "Subsea Engineer", company: "Woodside", stage: "Construction", signal: "Vendor mobilization", reported: "5h ago" },
    { project: "LNG Canada Phase 2", country: "Canada", discipline: "HSE Specialist", company: "Shell", stage: "FEED", signal: "Team expansion", reported: "6h ago" },
    { project: "Bonga North Expansion", country: "Nigeria", discipline: "Commissioning Lead", company: "TotalEnergies", stage: "Pre-FEED", signal: "Skills in demand", reported: "8h ago" },
  ],
  trust: [
    { icon: "globe", title: "Global coverage", body: "100+ countries" },
    { icon: "shield-check", title: "Trusted intelligence", body: "Human verified" },
    { icon: "clock", title: "Save time", body: "Find opportunities faster" },
    { icon: "user", title: "Built for one", body: "Run your agency your way" },
  ],
};

/* ----- tiny helpers ----- */
const el = (id) => document.getElementById(id);
const icon = (name, opts) => window.CrewDogIcons.svg(name, opts);

/* ----- renderers ----- */
function renderFeatures() {
  el("features").innerHTML = data.features.map((f) => `
    <div class="feature">
      <div class="feature__icon">${icon(f.icon, { size: 40 })}</div>
      <div class="feature__title">${f.title}</div>
      <div class="feature__body">${f.body}</div>
    </div>`).join("");
}

function renderSteps() {
  el("steps").innerHTML = data.steps.map((s, i) => {
    const step = `
      <div class="step">
        <div class="step__num">${s.n}</div>
        <div class="step__icon">${icon(s.icon, { size: 46 })}</div>
        <div class="step__title">${s.title}</div>
        <div class="step__body">${s.body}</div>
      </div>`;
    const arrow = i < data.steps.length - 1
      ? `<div class="step-arrow">${icon("move-right", { width: 42, height: 20, stroke: 1.4, style: "stroke-dasharray:3 3;" })}</div>`
      : "";
    return step + arrow;
  }).join("");
}

function renderFinds() {
  el("finds").innerHTML = data.finds.map((c) => `
    <div class="find">
      <span class="find__icon">${icon(c.icon, { size: 26, stroke: 1.5 })}</span>
      <span class="find__label">${c.label}</span>
    </div>`).join("");
}

function renderRows() {
  el("signal-rows").innerHTML = data.rows.map((r) => `
    <tr>
      <td><a href="#" class="signals__project">${r.project}</a></td>
      <td>${r.country}</td>
      <td>${r.discipline}</td>
      <td>${r.company}</td>
      <td>${r.stage}</td>
      <td>${r.signal}</td>
      <td>${r.reported}</td>
    </tr>`).join("");
}

function renderTrust() {
  el("trust-stats").innerHTML = data.trust.map((t) => `
    <div>
      <div class="trust__icon">${icon(t.icon, { size: 30, stroke: 1.5 })}</div>
      <div class="trust__stat-title">${t.title}</div>
      <div class="trust__stat-body">${t.body}</div>
    </div>`).join("");
}

/* ----- light interactivity (mockup only) ----- */
function wireSearch() {
  const form = el("search-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = el("search-input").value.trim();
    // Mockup: no backend — just acknowledge the query.
    console.log("CrewDog search:", q || "(empty)");
    form.classList.add("search--submitted");
  });
}

/* ----- init ----- */
document.addEventListener("DOMContentLoaded", () => {
  renderFeatures();
  renderSteps();
  renderFinds();
  renderRows();
  renderTrust();
  wireSearch();
  window.CrewDogIcons.hydrate(); // hydrate static [data-icon] placeholders
});

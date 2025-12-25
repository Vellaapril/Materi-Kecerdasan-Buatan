let pdfMap = {
  1: "components/21_pert 1TPL0403_KECERDASAN BUATAN-FULL.pdf",
  2: "components/31_pert 2TPL0403_KECERDASAN BUATAN-FULL.pdf",
  3: "components/42_pert 3TPL0403_KECERDASAN BUATAN-FULL.pdf",
  4: "components/54_pert 4TPL0403_KECERDASAN BUATAN-FULL.pdf",
  5: "components/67_pert 5TPL0403_KECERDASAN BUATAN-FULL.pdf",
  6: "components/79_pert 6TPL0403_KECERDASAN BUATAN-FULL.pdf",
  7: "components/89_pert 7TPL0403_KECERDASAN BUATAN-FULL.pdf",
  8: "components/100_pert 8TPL0403_KECERDASAN BUATAN-FULL.pdf",
  9: "components/111_pert 9TPL0403_KECERDASAN BUATAN-FULL.pdf",
  10: "components/122_pert 10TPL0403_KECERDASAN BUATAN-FULL.pdf",
  11: "components/133_pert 11TPL0403_KECERDASAN BUATAN-FULL.pdf",
  12: "components/143_pert 12TPL0403_KECERDASAN BUATAN-FULL.pdf",
  13: "components/153_pert 13TPL0403_KECERDASAN BUATAN-FULL.pdf",
  14: "components/164_pert 14TPL0403_KECERDASAN BUATAN-FULL.pdf",
  15: "components/176_pert 15TPL0403_KECERDASAN BUATAN-FULL.pdf",
  16: "components/188_pert 16TPL0403_KECERDASAN BUATAN-FULL.pdf",
  17: "components/200_pert 17TPL0403_KECERDASAN BUATAN-FULL.pdf",
  18: "components/213_pert 18TPL0403_KECERDASAN BUATAN-FULL.pdf",
  19: "components/Jurnal Fuzzy.pdf",
  20: "components/Sistem Pakar.pdf",
  21: "components/Etika dan Tantangan Dalam Pengembangan dan Penggunaan Artificial Intelligence.pdf",
};

// =====================================================
// STATUS GLOBAL
// =====================================================
let current = null;

// =====================================================
// RENDER DAFTAR PERTEMUAN
// =====================================================
function renderList(filter = "") {
  const container = document.getElementById("meetingsList");
  container.innerHTML = "";

  const keyword = filter.trim().toLowerCase();

  meetings.forEach((m) => {
    if (keyword && !m.title.toLowerCase().includes(keyword) && !m.content.toLowerCase().includes(keyword)) {
      return;
    }

    const button = document.createElement("button");
    button.className = "meet-item";
    button.textContent = `Pertemuan ${m.id} — ${m.title}`;
    button.dataset.id = m.id;

    button.onclick = () => showMaterial(m.id);
    button.onkeydown = (e) => {
      if (e.key === "Enter") showMaterial(m.id);
    };

    if (current === m.id) {
      button.classList.add("active");
    }

    container.appendChild(button);
  });
}

// =====================================================
// TAMPILKAN MATERI
// =====================================================
function showMaterial(id) {
  const materialData = meetings.find((m) => m.id === id);
  if (!materialData) return;

  current = id;

  const article = document.getElementById("material");

  let html = `
    <h2>Pertemuan ${materialData.id} — ${materialData.title}</h2>
    <div class="meta">
      Pertemuan ${materialData.id} dari ${meetings.length}
    </div>
    ${materialData.content}
  `;

  if (pdfMap[id]) {
    html += `
      <p>
        <a class="note" href="${pdfMap[id]}" target="_blank" rel="noopener">
          Buka / Unduh Materi (PDF)
        </a>
      </p>
    `;
  }

  article.innerHTML = html;

  updateActiveInList();
  updateNavButtons();
  initGADemoIfNeeded(id);
}

// =====================================================
// UPDATE STATUS AKTIF DI LIST
// =====================================================
function updateActiveInList() {
  document.querySelectorAll(".meet-item").forEach((item) => {
    item.classList.toggle("active", Number(item.dataset.id) === current);
  });
}

// =====================================================
// NAVIGASI PREV / NEXT
// =====================================================
function updateNavButtons() {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  prevBtn.disabled = current === null || current === 1;
  nextBtn.disabled = current === null || current === meetings.length;
}

// =====================================================
// ALGORITMA GENETIKA (DEMO)
// =====================================================
function fx(x) {
  return Math.exp(-2 * x) * Math.sin(3 * x);
}

function initGADemoIfNeeded(id) {
  if (id !== 16) return;

  const startBtn = document.getElementById("gaStart");
  if (!startBtn || startBtn._bound) return;

  startBtn._bound = true;
  startBtn.addEventListener("click", runGAFromUI);

  drawFunctionBackground();
}

function runGAFromUI() {
  const popSize = Math.max(4, Number(document.getElementById("gaPop").value) || 40);

  const generations = Math.max(1, Number(document.getElementById("gaGens").value) || 80);

  const pc = Number(document.getElementById("gaCross").value) || 0.7;
  const pm = Number(document.getElementById("gaMut").value) || 0.02;

  runGA({ popSize, generations, pc, pm });
}

// =====================================================
// INTI ALGORITMA GENETIKA
// =====================================================
function randomChrom(bits = 16) {
  let chrom = "";
  for (let i = 0; i < bits; i++) {
    chrom += Math.random() < 0.5 ? "0" : "1";
  }
  return chrom;
}

function decode(chrom, bits = 16, min = -2, max = 2) {
  const value = parseInt(chrom, 2);
  const maxInt = Math.pow(2, bits) - 1;
  return min + (value / maxInt) * (max - min);
}

function tournamentSelect(population, scores, k = 3) {
  let best = null;

  for (let i = 0; i < k; i++) {
    const idx = Math.floor(Math.random() * population.length);
    if (best === null || scores[idx] > scores[best]) {
      best = idx;
    }
  }

  return population[best];
}

function crossover(a, b, pc = 0.7) {
  if (Math.random() > pc) return [a, b];

  const point = 1 + Math.floor(Math.random() * (a.length - 1));
  return [a.slice(0, point) + b.slice(point), b.slice(0, point) + a.slice(point)];
}

function mutate(chrom, pm = 0.02) {
  return chrom
    .split("")
    .map((bit) => (Math.random() < pm ? (bit === "0" ? "1" : "0") : bit))
    .join("");
}

// =====================================================
// RUN GENETIC ALGORITHM
// =====================================================
async function runGA({ popSize = 40, generations = 80, pc = 0.7, pm = 0.02 } = {}) {
  const bits = 16;
  let population = Array.from({ length: popSize }, () => randomChrom(bits));

  const history = [];
  const canvas = document.getElementById("gaCanvas");
  const info = document.getElementById("gaInfo");
  const ctx = canvas.getContext("2d");

  for (let gen = 0; gen < generations; gen++) {
    const decoded = population.map((c) => decode(c, bits));
    const scores = decoded.map((x) => fx(x));

    let bestIndex = scores.indexOf(Math.max(...scores));
    history.push(scores[bestIndex]);

    info.innerHTML = `
      Gen ${gen + 1}/${generations} —
      best x=${decoded[bestIndex].toFixed(4)},
      f=${scores[bestIndex].toFixed(6)}
    `;

    drawBestHistory(ctx, history);

    const newPopulation = [population[bestIndex]];

    while (newPopulation.length < popSize) {
      const p1 = tournamentSelect(population, scores);
      const p2 = tournamentSelect(population, scores);

      let [c1, c2] = crossover(p1, p2, pc);
      c1 = mutate(c1, pm);
      c2 = mutate(c2, pm);

      newPopulation.push(c1);
      if (newPopulation.length < popSize) newPopulation.push(c2);
    }

    population = newPopulation;
    await new Promise((r) => setTimeout(r, 16));
  }
}

// =====================================================
// CANVAS VISUALIZATION
// =====================================================
function drawFunctionBackground() {
  const canvas = document.getElementById("gaCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const { width, height } = canvas;

  ctx.clearRect(0, 0, width, height);

  ctx.strokeStyle = "#ddd";
  ctx.beginPath();
  ctx.moveTo(0, height / 2);
  ctx.lineTo(width, height / 2);
  ctx.stroke();

  ctx.strokeStyle = "#888";
  ctx.beginPath();

  for (let i = 0; i < width; i++) {
    const x = -2 + (i / (width - 1)) * 4;
    const y = fx(x);
    const yy = height - ((y + 1) / 2) * height;

    i === 0 ? ctx.moveTo(i, yy) : ctx.lineTo(i, yy);
  }

  ctx.stroke();
}

function drawBestHistory(ctx, history) {
  drawFunctionBackground();

  const { width, height } = ctx.canvas;

  ctx.strokeStyle = "#d9534f";
  ctx.lineWidth = 2;
  ctx.beginPath();

  history.forEach((val, i) => {
    const x = (i / Math.max(1, history.length - 1)) * width;
    const y = height - ((val + 1) / 2) * height;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });

  ctx.stroke();
}

// =====================================================
// INISIALISASI
// =====================================================
document.addEventListener("DOMContentLoaded", () => {
  renderList();
  showMaterial(1);

  document.getElementById("searchInput").addEventListener("input", (e) => renderList(e.target.value));

  document.getElementById("prevBtn").addEventListener("click", () => {
    if (current > 1) showMaterial(current - 1);
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    if (current < meetings.length) showMaterial(current + 1);
  });
});

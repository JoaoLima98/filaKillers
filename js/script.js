const availableKillers = [
  { name: "TRAPPER", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/81/K01_TheTrapper_Portrait.png" },
  { name: "WRAITH", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/c2/K02_TheWraith_Portrait.png" },
  { name: "HILLBILLY", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/2/24/K03_TheHillbilly_Portrait.png" },
  { name: "NURSE", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/3b/K04_TheNurse_Portrait.png" },
  { name: "SHAPE", img: "https://deadbydaylight.wiki.gg/images/b/b5/K05_TheShape_Portrait.png" },
  { name: "DOCTOR", img: "https://deadbydaylight.wiki.gg/images/5/58/K07_TheDoctor_Portrait.png" },
  { name: "HAG", img: "https://deadbydaylight.wiki.gg/images/c/c7/K06_TheHag_Portrait.png" },
  { name: "HUNTRESS", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/f1/K08_TheHuntress_Portrait.png" },
  { name: "CANNIBAL", img: "https://deadbydaylight.wiki.gg/images/6/6f/K09_TheCannibal_Portrait.png" },
  { name: "NIGHTMARE", img: "https://deadbydaylight.wiki.gg/images/d/d5/K10_TheNightmare_Portrait.png" },
  { name: "PIG", img: "https://deadbydaylight.wiki.gg/images/5/5c/K11_ThePig_Portrait.png" },
  { name: "CLOWN", img: "https://deadbydaylight.wiki.gg/images/d/d1/K12_TheClown_Portrait.png" },
  { name: "SPIRIT", img: "https://deadbydaylight.wiki.gg/images/f/f1/K13_TheSpirit_Portrait.png" },
  { name: "LEGION", img: "https://deadbydaylight.wiki.gg/images/5/53/K14_TheLegion_Portrait.png" },
  { name: "PLAGUE", img: "https://deadbydaylight.wiki.gg/images/f/fe/K15_ThePlague_Portrait.png" },
  { name: "GHOST FACE", img: "https://deadbydaylight.wiki.gg/images/d/d1/K16_TheGhostFace_Portrait.png" },
  { name: "DEMOGORGON", img: "https://deadbydaylight.wiki.gg/images/7/75/K17_TheDemogorgon_Portrait.png" },
  { name: "ONI", img: "https://deadbydaylight.wiki.gg/images/8/80/K18_TheOni_Portrait.png" },
  { name: "DEATHSLINGER", img: "https://deadbydaylight.wiki.gg/images/a/ac/K19_TheDeathslinger_Portrait.png" },
  { name: "EXECUTIONER", img: "https://deadbydaylight.wiki.gg/images/c/c9/K20_TheExecutioner_Portrait.png" },
  { name: "BLIGHT", img: "https://deadbydaylight.wiki.gg/images/1/1f/K21_TheBlight_Portrait.png" },
  { name: "TWINS", img: "https://deadbydaylight.wiki.gg/images/1/17/K22_TheTwins_Portrait.png" },
  { name: "TRICKSTER", img: "https://deadbydaylight.wiki.gg/images/c/c9/K23_TheTrickster_Portrait.png" },
  { name: "NEMESIS", img: "https://deadbydaylight.wiki.gg/images/6/67/K24_TheNemesis_Portrait.png" },
  { name: "CENOBITA", img: "https://deadbydaylight.wiki.gg/images/3/3b/K25_TheCenobite_Portrait.png" },
  { name: "ARTIST", img: "https://deadbydaylight.wiki.gg/images/0/01/K26_TheArtist_Portrait.png" },
  { name: "ONRYO", img: "https://deadbydaylight.wiki.gg/images/5/5f/K27_TheOnryo_Portrait.png" },
  { name: "DREDGE", img: "https://deadbydaylight.wiki.gg/images/7/7e/K28_TheDredge_Portrait.png" },
  { name: "MASTERMIND", img: "https://deadbydaylight.wiki.gg/images/e/ec/K29_TheMastermind_Portrait.png" },
  { name: "KNIGHT", img: "https://deadbydaylight.wiki.gg/images/6/69/K30_TheKnight_Portrait.png" },
  { name: "SKULL MERCHANT", img: "https://deadbydaylight.wiki.gg/images/6/64/K31_TheSkullMerchant_Portrait.png" },
  { name: "SINGULARITY", img: "https://deadbydaylight.wiki.gg/images/2/24/K32_TheSingularity_Portrait.png" },
  { name: "XENOMORPH", img: "https://deadbydaylight.wiki.gg/images/6/64/K33_TheXenomorph_Portrait.png" },
  { name: "CHUCKY", img: "https://deadbydaylight.wiki.gg/images/8/81/K34_TheGoodGuy_Portrait.png" },
  { name: "UNKNOW", img: "https://deadbydaylight.wiki.gg/images/5/51/K35_TheUnknown_Portrait.png" },
  { name: "LICH", img: "https://deadbydaylight.wiki.gg/images/f/f0/K36_TheLich_Portrait.png" },
  { name: "DARK LORD", img: "https://deadbydaylight.wiki.gg/images/6/62/K37_TheDarkLord_Portrait.png" },
  { name: "HOUNDMASTER", img: "https://deadbydaylight.wiki.gg/images/9/96/K38_TheHoundmaster_Portrait.png" },
  { name: "GHOUL", img: "https://deadbydaylight.wiki.gg/images/c/c9/K39_TheGhoul_Portrait.png?fbb95c" }
];


const availableList = document.getElementById("availableKillers");
const queueList = document.getElementById("queueKillers");

function createKillerItem(killer) {
  const li = document.createElement("li");
  li.innerHTML = `
      <img src="${killer.img}" alt="${killer.name}">
      <span>${killer.name}</span>
  `;

  // Se for a página "Gestão de Killers", o card se torna um botão clicável
  if (document.title === "Gestão de Killers") {
    li.classList.add("clickable");
    li.addEventListener("click", () => addToQueue(killer, li));  // Ao clicar no card, adiciona à fila
  }

  return li;
}

// Função para criar um item da fila de killers
function createQueueItem(killer) {
  const li = document.createElement("li");
  li.innerHTML = `
      <img src="${killer.img}" alt="${killer.name}">
      <span>${killer.name}</span>
  `;

  // Permite remover o killer da fila ao clicar no próprio card
  if (document.title === "Gestão de Killers") {
    li.classList.add("clickable"); // Adiciona classe de estilo para indicar que é clicável
    li.addEventListener("click", () => removeFromQueue(killer, li));  // Ao clicar no card, remove da fila
  }

  return li;
}

// Função para adicionar um killer na fila
function addToQueue(killer, li) {
  const queueItem = createQueueItem(killer);
  queueList.appendChild(queueItem);
  li.remove(); // Remove da lista de disponíveis

  // Atualiza a fila no localStorage
  const queue = JSON.parse(localStorage.getItem("killerQueue")) || [];
  queue.push(killer);
  localStorage.setItem("killerQueue", JSON.stringify(queue));
}

// Função para remover um killer da fila
function removeFromQueue(killer, li) {
  const availableItem = createKillerItem(killer);
  availableList.appendChild(availableItem);
  li.remove(); // Remove da fila

  // Atualiza a fila no localStorage
  let queue = JSON.parse(localStorage.getItem("killerQueue")) || [];
  queue = queue.filter(k => k.name !== killer.name); // Remove o killer da fila
  localStorage.setItem("killerQueue", JSON.stringify(queue));
}

// Função para carregar os killers disponíveis
function loadKillers() {
  const queue = JSON.parse(localStorage.getItem("killerQueue")) || []; // Recupera a fila
  availableKillers.forEach(killer => {
    // Verifica se o killer já está na fila antes de exibi-lo
    if (!queue.some(k => k.name === killer.name)) {
      const item = createKillerItem(killer);
      availableList.appendChild(item);
    }
  });
}

// Função para carregar a fila do localStorage
function loadQueue() {
  const queue = JSON.parse(localStorage.getItem("killerQueue")) || [];
  queue.forEach(killer => {
    const item = createQueueItem(killer);
    queueList.appendChild(item);
  });
}

// Carrega a fila ao carregar a página
loadQueue();

// Carrega os killers disponíveis se for a página do streamer
if (document.title === "Gestão de Killers") {
  loadKillers();
}

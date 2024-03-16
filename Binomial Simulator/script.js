const Nnumb = document.getElementById("nnum");
const Pnumb = document.getElementById("pnum");
const Trials = document.getElementById("tnum");
const Suc = document.getElementById("snum");

button1.addEventListener("click", simulator)
button2.addEventListener("click", clearSim)

function simulator() {
  const n = parseInt(Nnumb.value);
  const p = parseFloat(Pnumb.value);
  const t = parseInt(Trials.value);
  const s = parseInt(Suc.value);
  
  let totalExitos = 0;
  
  for (let i = 0; i < t; i++) {
    let exitos = 0;
    
    for (let x = 0; x < n; x++) {
      if (Math.random() < p) {
      exitos++;
      }
    }
    if (exitos === s) {
    totalExitos++;
    }
  }
  
  let results = (totalExitos / t) * 100;
  
  document.getElementById("results").textContent = `${results.toFixed(2)}%`    
}

function clearSim() {
  const Nnumb = document.getElementById("nnum");
  const Pnumb = document.getElementById("pnum");
  const Trials = document.getElementById("tnum");
  const Suc = document.getElementById("snum");
  
  Nnumb.value = '';
  Pnumb.value = '';
  Trials.value = '';
  Suc.value = '';
  
  document.getElementById("results").textContent = '';
}
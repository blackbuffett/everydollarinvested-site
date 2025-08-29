const C = window.BABYCOINZ_CONFIG || {};
function fmt(ts){ return new Date(ts).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}); }
async function fetchDemo(symbol){ const base=100+Math.random()*50; let price=base; const pts=[]; const now=Date.now(); for(let i=120;i>=0;i--){ price+=(Math.random()-0.5)*0.8; pts.push({ t:now-i*5*60*1000, c:Math.max(1,price)});} return pts; }
async function getSeries(symbol){ return await fetchDemo(symbol); }
async function renderSymbol(symbol){
  const wrap=document.createElement('div'); wrap.className='card stack';
  wrap.innerHTML=`<div style="display:flex;align-items:center;justify-content:space-between;gap:1rem;"><div><h3 style="margin:.2rem 0;">${symbol}</h3><small class="muted">5-min candles • realtime*</small></div></div><canvas height="120"></canvas><div class="muted disclaimer">*Realtime subject to provider & plan. Demo shows simulated data.</div>`;
  const canvas=wrap.querySelector('canvas'); const series=await getSeries(symbol); const labels=series.map(p=>fmt(p.t)); const data=series.map(p=>p.c);
  new Chart(canvas.getContext('2d'),{type:'line',data:{labels,datasets:[{label:symbol,data,tension:.25,fill:false}]},options:{responsive:true,maintainAspectRatio:false,scales:{x:{display:false}}}}); return wrap;
}
async function init(){ const grid=document.getElementById('symbolsGrid'); if(!grid) return; grid.innerHTML=''; const syms=C.defaultSymbols||['VOO','VTI','QQQ']; for(const s of syms){ grid.appendChild(await renderSymbol(s)); } }
document.addEventListener('DOMContentLoaded', init);

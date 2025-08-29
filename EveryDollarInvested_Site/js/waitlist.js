(function(){
  const C = window.BABYCOINZ_CONFIG || {};
  const W = C.waitlist || {};
  const provider = (W.provider||'demo').toLowerCase();
  const endpoints = W.endpoints||{};
  function byId(id){ return document.getElementById(id); }

  async function submit(form){
    const msg = byId('waitlistMsg') || document.createElement('div');
    if (!msg.id){ msg.id = 'waitlistMsg'; msg.className = 'muted'; form.appendChild(msg); }
    msg.textContent = 'Submitting…';
    const data = Object.fromEntries(new FormData(form).entries());
    try{
      if (provider==='mailchimp'){
        const action = endpoints.mailchimp?.action || form.getAttribute('action');
        if (!action) throw new Error('Missing Mailchimp action');
        const body = new URLSearchParams(data);
        await fetch(action, { method:'POST', mode:'no-cors', body });
        msg.textContent = 'Thanks! Check your email to confirm.';
      } else if (provider==='convertkit'){
        const action = endpoints.convertkit?.action || form.getAttribute('action');
        if (!action) throw new Error('Missing ConvertKit action');
        const fd = new FormData(form);
        if (endpoints.convertkit.api_key && !fd.get('api_key')) fd.append('api_key', endpoints.convertkit.api_key);
        const res = await fetch(action, { method:'POST', body: fd });
        if (!res.ok) throw new Error('Network');
        msg.textContent = 'You’re on the list!';
      } else if (provider==='formspree'){
        const action = endpoints.formspree?.action || form.getAttribute('action');
        if (!action) throw new Error('Missing Formspree action');
        const res = await fetch(action, { method:'POST', headers:{'Accept':'application/json'}, body: new FormData(form) });
        if (!res.ok) throw new Error('Network');
        msg.textContent = 'You’re on the list!';
      } else {
        const key = 'edi_waitlist';
        const arr = JSON.parse(localStorage.getItem(key) || '[]');
        arr.push({ ...data, at: new Date().toISOString() });
        localStorage.setItem(key, JSON.stringify(arr));
        msg.textContent = 'Added locally (demo). Swap to Mailchimp/ConvertKit/Formspree in js/config.js.';
      }
      form.reset();
    }catch(e){
      console.error(e);
      msg.textContent = 'Something went wrong. Please try again.';
    }
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.getElementById('waitlistForm');
    if (form){
      form.addEventListener('submit', (e)=>{ e.preventDefault(); submit(form); });
    }
  });
})();

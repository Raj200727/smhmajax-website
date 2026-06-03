// ── Mobile menu ──
function toggleMenu(){
  const m=document.getElementById('mobile-menu');
  m.classList.toggle('open');
}

// ── Scroll animations ──
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible')}});
},{threshold:0.1});
document.querySelectorAll('.fade-up').forEach(el=>obs.observe(el));

// ── Sticky nav shadow ──
window.addEventListener('scroll',()=>{
  const nav=document.getElementById('nav');
  nav.style.boxShadow=window.scrollY>50?'0 4px 30px rgba(74,0,0,0.4)':'none';
});

// ── Donate amount picker ──
function selectAmount(el,val){
  document.querySelectorAll('.amount-btn').forEach(b=>b.classList.remove('active'));
  el.classList.add('active');
  const inp=document.getElementById('donate-amount');
  if(val!=='0') inp.value=val; else{inp.value='';inp.focus();}
}

// ── Load YouTube stream ──
function loadStream(){
  document.getElementById('yt-embed').src='https://www.youtube.com/embed/live_stream?channel=UCsankatmochanhanumanmandir1366&autoplay=1';
  document.getElementById('yt-embed').style.display='block';
  document.getElementById('stream-placeholder').style.display='none';
}

// ── Donate button ──
document.querySelector('.donate-submit').addEventListener('click',()=>{
  const amt=document.getElementById('donate-amount').value;
  alert('Thank you for your seva!\n\nPlease send Interac E-Transfer of $'+amt+' CAD to:\ndonatesmhm@gmail.com\n\nOr call 647-334-8491 for other arrangements.\n\nJai Hanuman Ji!');
});
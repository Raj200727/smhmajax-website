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
const donateBtn = document.querySelector('.donate-submit');

if (donateBtn) {
  donateBtn.addEventListener('click', () => {
    const amt = document.getElementById('donate-amount').value;
    alert(
      'Thank you for your seva!\n\nPlease send Interac E-Transfer of $' +
      amt +
      ' CAD to:\ndonatesmhm@gmail.com\n\nOr call 647-334-8491.'
    );
  });
}
// ── POSTER SLIDER (EVENTS PAGE) ──
let currentSlide = 0;

function moveSlide(direction) {
  const track = document.getElementById('sliderTrack');
  
  // Safety check: If the slider doesn't exist on this page, do nothing
  if (!track) return; 
  
  const totalSlides = track.querySelectorAll('img').length;
  currentSlide += direction;
  
  // Loop back to the end if clicking left on the first image
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } 
  // Loop back to the start if clicking right on the last image
  else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }

  // Move the track sideways based on which slide we are on
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
}
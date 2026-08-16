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
// ── POSTER SLIDER (MANUAL & AUTOMATIC) ──
let currentSlide = 0;
let slideTimer; 

function moveSlide(direction) {
  const track = document.getElementById('sliderTrack');

  if (!track) return; 
  
  const totalSlides = track.querySelectorAll('img').length;
  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } 
  else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }

  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  
  startSlideTimer();
}

function startSlideTimer() {
  const track = document.getElementById('sliderTrack');
  if (!track) return; 

  clearInterval(slideTimer);

  slideTimer = setInterval(() => {
    moveSlide(1);
  }, 4000);
}

// Start the automatic timer as soon as the page loads
if (document.readyState === 'loading') {
  document.addEventListener("DOMContentLoaded", startSlideTimer);
} else {
  startSlideTimer();
}
  function filterGallery(year) {
    // 1. Update active styling on the buttons
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
      btn.classList.remove('active');
      // If the button's onclick attribute matches the clicked year, make it active
      if(btn.getAttribute('onclick').includes(year)) {
        btn.classList.add('active');
      }
    });

    // 2. Show or Hide the Year Sections
    const yearSections = document.querySelectorAll('.year-section');
    yearSections.forEach(section => {
      if (year === 'all') {
        section.style.display = 'block'; // Show all
      } else {
        if (section.getAttribute('data-year') === year) {
          section.style.display = 'block'; // Show matching year
        } else {
          section.style.display = 'none'; // Hide other years
        }
      }
    });
  }
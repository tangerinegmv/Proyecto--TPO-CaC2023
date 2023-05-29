window.addEventListener('scroll', function() {
    var btnScrollToTop = document.getElementById('btnScrollToTop');
  
    if (window.scrollY > 300) {
      btnScrollToTop.style.display = 'block';
    } else {
      btnScrollToTop.style.display = 'none';
    }
  });
  
  document.getElementById('btnScrollToTop').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
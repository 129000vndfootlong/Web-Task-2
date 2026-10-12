
(function(){
  var slides=document.querySelectorAll('.slide'); if(!slides.length) return;
  var dots=document.querySelectorAll('.dots button'), i=0, timer;
  function show(n){i=(n+slides.length)%slides.length;
    slides.forEach(function(s,k){s.classList.toggle('active',k===i)});
    dots.forEach(function(d,k){d.classList.toggle('active',k===i)});}
  function start(){timer=setInterval(function(){show(i+1)},4000)}
  function reset(){clearInterval(timer);start()}
  document.querySelector('.arrow.prev').onclick=function(){show(i-1);reset()};
  document.querySelector('.arrow.next').onclick=function(){show(i+1);reset()};
  dots.forEach(function(d,k){d.onclick=function(){show(k);reset()}});
  show(0);start();
})();

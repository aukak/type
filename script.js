var timeline = anime.timeline({
  duration: 1200,
  easing: 'linear',
  autoplay: true,
  loop:true,
  direction:'alternate',
  easing:'easeInOutQuad'
});

timeline.add({
  targets: ['feTurbulence', 'feMorphology'],
  // baseFrequency: ['0.014 0.014', '0.023 0.023'],
  radius: [14, 8, 20, 8, 14]
  // seed: [4, 8, 20, 8, 4]
});
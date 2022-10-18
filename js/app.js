tsParticles.load('tsparticles', {
  particles: {
    links: {
      enable: true,
      opacity: 1,
      distance: 100
    },
    move: {
      enable: true,
      speed: {min: 1, max: 2},
    },
    opacity: {
      value: {min: 0.3, max: 0.7},
    },
    size: {
      value: {min: 1, max: 3},
    },
  },
});
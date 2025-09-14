'use strict';

  const { animate, scroll } = Motion
  console.log(animate, scroll)
  animate(
    '#greet',
    { rotate: [45, 0], },
    { duration: 0.3,  easing: 'ease-out' }
  )

  animate(
    '#hero-description',
    { opacity: [0, 1], maxHeight: ['0px', '200px'] },
    { duration: 3,  easing: 'ease-out' }
  )

   animate(
    '#view-work',
    { y: ['500%', 0],  },
    { duration: 1, easing: 'ease-out' }
  ) 
  animate(
    '#resume',
    { y: ['500%', 0],  },
    { duration: 1.5, easing: 'ease-out' }
  )
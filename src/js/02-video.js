import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

player.on('timeupdate', 
    throttle(function (data) {localStorage.setItem('videoplayer-current-time', data.seconds)
}, 1000)
   );

const time = localStorage.getItem('videoplayer-current-time') || 0;





player
  .setCurrentTime(time);



import './../scss/index.scss';
import Glide from '@glidejs/glide';

new Glide('.home-banner.glide', {
  type: 'carousel',
}).mount();

new Glide('.product-tile-list.glide', {
  type: 'carousel',
  perView: 3,
  breakpoints: {
    991: {
      perView: 1,
    },
  },
}).mount();

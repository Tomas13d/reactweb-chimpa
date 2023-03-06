import Shuffle from 'shufflejs';
import $ from 'jquery'; 

const jqueryMasonryGalery = () => {
      // Shuffle js filter and masonry
      const myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
        itemSelector: '.shuffle-item',
        buffer: 1,
      });

      $('input[name="shuffle-filter"]').on('change', function (evt) {
        const input = evt.currentTarget;
        if (input.checked) {
          myShuffle.filter(input.value);
        }
      });
}

export default jqueryMasonryGalery;
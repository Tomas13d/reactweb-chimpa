import Shuffle from 'shufflejs';
import $ from 'jquery'; 

const jqueryMasonryGalery = () => {
    // Progress Bar
    $('.progress-bar').each(function () {
        const width = $(this).data('percent');
        $(this).css({ transition: 'width 3s' });
        $(this).appear(function () {
          $(this).css('width', `${width}%`);
          $(this)
            .find('.count')
            .countTo({
              from: 0,
              to: width,
              speed: 3000,
              refreshInterval: 50,
            });
        });
      });
  
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
(function(){
  'use strict';

  /**
   * Trigger Features
   */
  var CHECKBOX_CLASS = 'js-checkbox';
  var checkboxes = document.querySelectorAll("." + CHECKBOX_CLASS);

  checkboxes.forEach(function(checkbox){
    checkbox.addEventListener('change', function(){
      var feature = checkbox.id.slice(3); // trim cb- from id
      var strings = document.querySelectorAll('.' + feature);

      strings.forEach(function (string) {
        var activeClass = feature + '-on';
        var hasClass = string.classList.contains(activeClass);

        string.classList[hasClass ? 'remove' : 'add'](activeClass);
      });
    });
  });

  /**
   * Trigger Font Families
   */

  var FF_RADIOS = document.querySelectorAll('input[type="radio"][name="fontfamily"]');
  var FF_NAME = document.querySelector('.js-font-name');

  FF_RADIOS.forEach(function(radio) {
    radio.addEventListener('change', function(selector) {
      var fontFamily = selector.target.value;
      document.documentElement.classList = '';
      document.documentElement.classList.add('font-' + fontFamily);
      FF_NAME.textContent = fontFamily.toUpperCase();
    });
  });

})();


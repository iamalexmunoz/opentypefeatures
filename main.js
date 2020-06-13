(function(){
  'use strict';
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
})();


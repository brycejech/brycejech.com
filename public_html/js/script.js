'use strict';

(function(){

    var activateNav = (function(){
        // cache navigation elements
        var elems = [].slice.call(document.querySelector('nav').querySelectorAll('li'));

        return function activateNav(el){
            elems.forEach(function(elem){
                elem.classList.remove('active');
            });

            el.parentNode.classList.add('active');
        }

    })();

    document.querySelector('nav').querySelectorAll('a')
        .forEach(function(elem){
            elem.addEventListener('click', function(){ activateNav(this) });
        });


    // Activate nav item for corresponding section
    var sections = [
        '#about',
        '#projects',
        '#talks',
        '#contact'
    ]

    setInterval(function(){
        for(var i = 0, len = sections.length; i < len; i++){
            var section = sections[i],
                bounds  = document.querySelector(section)
                            .getBoundingClientRect();

            if(Math.floor(bounds.top) <= 0 && Math.floor(bounds.bottom) > 0){
                var el = document.querySelector('[href="' + section + '"]');
                activateNav(el);
                break;
            }
        }
    }, 500);

})();

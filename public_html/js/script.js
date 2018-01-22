'use strict';

(function(){

    function navClick(event){
        document.querySelector('nav').querySelectorAll('li')
            .forEach(function(elem){
                elem.classList.remove('active');
            });
        this.parentNode.classList.add('active');
    }

    document.querySelector('nav').querySelectorAll('a')
        .forEach(function(elem){
            elem.addEventListener('click', navClick);
        });

})();

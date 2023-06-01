window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var yellowContainer = document.querySelector('.yellow-block');
    var h4 = document.querySelector('h4');

    yellowContainer.style.transform = 'translateY(' + scrollTop + '0px)';
    h4.style.transform = 'translateY(' + scrollTop + '0px)';
});

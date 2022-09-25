(() => {
    const setPercent = (val, max, min) => (val - min) * 100 / (max - min);

    const range = document.querySelector('#price-range');  
    range.style.backgroundSize = setPercent(range.value, range.max, range.min) + '% 100%';
    range.addEventListener('input', (e) => {
        let target = e.target;
        target.style.backgroundSize = setPercent(target.value, target.max, target.min) + '% 100%';
        document.querySelector('#price-range-sum').textContent = `$${target.value}.00`;
    });

    document.querySelector('.content__gallery').addEventListener('click', (e) => {
        let target = e.target;
        if (target.tagName === 'IMG') {
            document.querySelector('.gallery__item-preview').style.backgroundImage = `url(${target.getAttribute('src')})`
        }
    })

    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        this.scrollLeft -= (delta*50);
        e.preventDefault();
    }

    const catalogue = document.querySelectorAll('.content__catalogue-item-wrap-secondary');
    if (window.matchMedia('(max-width: 767px)').matches) {
        catalogue.forEach((block) => block.addEventListener('mousewheel', scrollHorizontally, false))
        catalogue.forEach((block) => block.addEventListener('DOMMouseScroll', scrollHorizontally, false))
    }
})();
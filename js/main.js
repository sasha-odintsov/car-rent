(() => {
    const setPercent = (val, max, min) => (val - min) * 100 / (max - min);

    const range = document.querySelector('#price-range');
      
    range.style.backgroundSize = setPercent(range.value, range.max, range.min) + '% 100%';

    range.addEventListener('input', (e) => {
        let target = e.target;
        target.style.backgroundSize = setPercent(target.value, target.max, target.min) + '% 100%';
        document.querySelector('#price-range-sum').textContent = `$${target.value}.00`;
    });
})();
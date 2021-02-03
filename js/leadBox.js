window.onload = function() {
    let lis = document.querySelectorAll('li');
    for (let i of lis) {
        i.addEventListener('mouseover', () => {i.style.backgroundColor = '#474D59';});
        i.addEventListener('mouseout', () => {i.style.backgroundColor = 'inherit';});

    }
};

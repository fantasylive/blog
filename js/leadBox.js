export {leadHover};
function leadHover() {
    let lis = document.querySelectorAll('.leadBox li');
    for (let i of lis) {
        i.addEventListener('mouseover', () => {i.style.backgroundColor = '#474D59';});
        i.addEventListener('mouseout', () => {i.style.backgroundColor = 'inherit';});

    }
}

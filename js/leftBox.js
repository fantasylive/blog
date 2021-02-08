export {searchFocus,leftPart2ButtonHover};
function searchFocus() {
    function Focus() {
        inputBox.style.borderColor = 'rgb(245, 106, 106)';
        searchImg.style.borderColor = 'rgb(245, 106, 106)';
    }
    function Blur() {
        inputBox.style.borderColor = 'rgb(221, 225, 227)';
        searchImg.style.borderColor = 'rgb(221, 225, 227)';
    }    
    let inputBox = document.querySelector('.search > input');
    let searchImg = document.querySelector('.search > a'); 
    inputBox.addEventListener('focus', Focus);
    inputBox.addEventListener('blur', Blur);
}

function leftPart2ButtonHover() {
    let button = document.querySelector('.left_part2 button');
    button.addEventListener('mouseover', () => {button.style.backgroundColor = 'rgb(244, 238, 239)';});
    button.addEventListener('mouseout', () => {button.style.backgroundColor = 'inherit';});
}

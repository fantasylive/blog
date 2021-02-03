window.onload = function() {
    function Focus() {
        inputBox.style.borderColor = 'rgb(245, 106, 106)';
        searchImg.style.borderColor = 'rgb(245, 106, 106)';
    }
    function Blur() {
        inputBox.style.borderColor = 'rgb(221, 225, 227)';
        searchImg.style.borderColor = 'rgb(221, 225, 227)';
    }    
    let inputBox = document.querySelector('.search > input');
    let searchImg = document.querySelector('.search > div'); 
    inputBox.addEventListener('focus', Focus);
    inputBox.addEventListener('blur', Blur);
}

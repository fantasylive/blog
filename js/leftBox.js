export {searchFocus,leftPart2ButtonHover,fixedLeftBox};

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

/**
 * 左边栏滚动到指定位置时固定
 */
function fixedLeftBox() {
    let scrollSwitch = true;
    let leftBox = document.querySelector('.leftBox');
    let rightBox = document.querySelector('.rightBox');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset >= 1900 && scrollSwitch) {
            leftBox.style.position = 'fixed';
            leftBox.style.top = '-' + window.pageY +'px';
            leftBox.style.bottom = '0';
            rightBox.style.marginLeft = '405px';
            scrollSwitch = false;
        }else if(window.pageYOffset <= 1900 && !scrollSwitch){
            leftBox.style.position = '';
            rightBox.style.marginLeft = '';
            scrollSwitch = true;
        }
    }); 
}

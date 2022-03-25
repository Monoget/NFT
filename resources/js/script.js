// JavaScript For Responsive Menu

const menu_toggler = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

menu_toggler.addEventListener("click", function(){
    this.classList.toggle("active");
    menu.classList.toggle("active");
})

// For Tab

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]')
tabs.forEach(tab=>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('tab-active')
        })
        target.classList.add('tab-active')
    })
})

// Tab Toogle JS

$(document).on('click', '.tab-item',function(){
    $(this).addClass('item-active').siblings().removeClass('item-active');
})
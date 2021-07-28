berger = document.querySelector('.berger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
navlist = document.querySelector('.nav-list') 

berger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})


// ====================== header =======================//

// Select Elements From Html Page
let navLinks = document.querySelectorAll('#nav li p');
let burgerMenu = document.querySelector('#burger-menu');
let navContainer = document.querySelector('#nav');
let isOpen = false ;

// Scroll To The Chosen Section
navLinks.forEach((el) => {
    el.onclick = () => {
        if (el.dataset.link == 'contact') {
            window.scrollTo({
                top: document.querySelector(`#${el.dataset.link}`).offsetTop,
                behavior: 'smooth',
            })
        } else {
            window.scrollTo({
                top: document.querySelector(`.${el.dataset.link}`).offsetTop,
                behavior: 'smooth',
            })
        }
        if( isOpen ) {
            navContainer.classList.toggle('open-menu');
            isOpen = false ;
        }
    }
})

burgerMenu.onclick = () => {
    navContainer.classList.toggle('open-menu');
    isOpen = isOpen ? false : true ;
}

// ====================== Landing ==========================//

// Selcet The Elements From Html Page
let leftBtn = document.querySelector('#left'),
    rightBtn = document.querySelector('#right'),
    landing = document.querySelector('.landing'),
    bullets = document.querySelector('.bullets'),
    allImags = ['./img/1678902172982.jpg', './img/1678902172976.jpg', './img/1679300486772.jpg'],
    current = 0;
// Set Bullets 
for (let i = 0; i < allImags.length; ++i) {
    let li = document.createElement('li');
    if (i == 0) {
        li.className = 'active';
    }
    li.setAttribute('data-index', i);
    bullets.appendChild(li);
}
// Set Bullets To All Li
bullets = document.querySelectorAll('.bullets li')
    // Set Background Image 
landing.style.cssText = `background-image: url(${allImags[current]});`
rightBtn.onclick = () => {
    current = (current + 1) % allImags.length;
    landing.style.cssText = `background-image: url(${allImags[current]});`
    removAndAddClassActive();
}
leftBtn.onclick = () => {
        current = (current - 1 + allImags.length) % allImags.length;
        landing.style.cssText = `background-image: url(${allImags[current]});`;
        removAndAddClassActive()
    }
    // If Clicked On The Once Of Bullets 
bullets.forEach(bule => {
    bule.onclick = () => {
        current = bule.dataset.index;
        landing.style.cssText = `background-image: url(${allImags[current]});`;
        removAndAddClassActive();
    }
})

function removAndAddClassActive() {
    bullets.forEach(li => {
        li.classList.remove('active');
    })
    bullets[current].classList.add('active');
}
// ============================== image Tag ====================== //

// Select Elements From HTML Page
let vidoTextContainer = document.querySelector('.video .text'),
    mainVidoContainer = document.querySelector('.video');

// ============================== About us ======================= // 

// select Elements From HTML Page
let aboutContainer = document.querySelector('.about'),
    aboutImage = document.querySelector('.about img');

// ================================ status ======================== //

let stausContainer = document.querySelector('.stats'),
    statsNumber = document.querySelectorAll('.stats .container .box .number'),
    isRun = false;

function incresNumber(stat) {
    let goal = stat.dataset.goal;
    let cont = setInterval(() => {
        stat.innerHTML++;
        if (parseInt(stat.innerHTML) >= goal) {
            clearInterval(cont);
        }
    }, 2000 / goal)
}

// ======================== Out Skills ================== //

let allProg = document.querySelectorAll('.our-skills .skills .prog-holder .prog span'),
    skillsContainer = document.querySelector('.our-skills '),
    allBullets = document.querySelectorAll('.our-skills .testimonials .bullets li'),
    allBoxTestimaonials = document.querySelectorAll('.our-skills .testimonials .rows .row'),
    mainBoxTestimaonials = document.querySelector('.our-skills .testimonials .rows');

// Set Value Of Transform To All Box From DataSet
allBoxTestimaonials.forEach(el => {
    el.style.cssText = `transform: translateX(${el.dataset.pos});`
})

allBullets.forEach(bull => {
    bull.onclick = () => {
        removeAndAddClassActive(bull);
        console.log(bull.dataset.pos)
        mainBoxTestimaonials.style.cssText = `transform: translateX(${bull.dataset.pos});`
    }
})


function removeAndAddClassActive(bull) {
    allBullets.forEach(el => {
        el.classList.remove('active');
    })
    bull.classList.add('active')
}

function incresProgreas() {
    allProg.forEach(pro => {
        pro.style.width = pro.dataset.width;
        pro.dataset.progress = pro.dataset.width;
    })
}

function decriesProgreas() {
    allProg.forEach(pro => {
        pro.style.width = 0;
        pro.dataset.progress = '0%';
    })
}
// ======================= Serveces ================= /

// Selcet Elemnts From Html Page

let textBox = document.querySelectorAll('.services .srv-box .text'),
    servecesContainer = document.querySelector('.services'),
    designText = document.querySelector('.design .text'),
    designContainer = document.querySelector('.design'),
    aboutUs = document.querySelectorAll('#nav-about li');

window.onscroll = () => {

    // ======================= scroll Button ================ //
    let btn = document.querySelector('#scrollUp');
    if (window.scrollY >= 600) {
        btn.style.cssText = `opacity : 1`
    } else {
        btn.style.cssText = `opacity : 0 `
    }
    btn.onclick = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        }
        // ======================== Out Skills ================== //
    if (window.scrollY >= skillsContainer.offsetTop - 200) {
        incresProgreas();
    } else {
        decriesProgreas();
    }


    // ======================= Serveces ================= //
    if (window.scrollY >= stausContainer.offsetTop - 400) {
        if (!isRun) {
            statsNumber.forEach(el => {
                incresNumber(el);
            })
            isRun = true;
        }
    } else {
        isRun = false;
        statsNumber.forEach(el => {
            el.innerHTML = 0;
        })
    }

    // Serveces section
    if (window.scrollY >= servecesContainer.offsetTop - 200) {
        textBox.forEach(text => {
            text.style.cssText = `transform: translateX(0);`
        })
    } else {
        textBox.forEach(text => {
            text.style.cssText = `transform: translateX(120%);`
        })
    }
    // ======================== design section ========================
    if (window.scrollY >= designContainer.offsetTop - 400) {
        designText.style.cssText = `transform: translateX(0);`
        aboutUs.forEach((li, ind) => {
            setTimeout(() => {
                li.style.cssText = `opacity : 1 `;
            }, 350 * ind)
        })
    } else {
        designText.style.cssText = `transform: translateX(100%);`
        aboutUs.forEach(li => {
            li.style.cssText = `opacity : 0 `;
        })
    }

    // ============================== image Tag ====================== //
    if (window.scrollY >= mainVidoContainer.offsetTop - 300) {
        vidoTextContainer.style.cssText = `transform: translateY(-50%) translateX(0)`;
    } else {
        vidoTextContainer.style.cssText = `transform: translateY(-50%) translateX(-100%)`;
    }
    // ============================== About us ======================= // 
    if (window.scrollY >= aboutContainer.offsetTop - 200) {
        aboutImage.style.cssText = `transform: translateY(0)`;
    } else {
        aboutImage.style.cssText = `transform: translateY(100%)`;
    }
}

// ======================== protofolio ============================

// Select Elements From Html page

let shuffle = document.querySelectorAll('.container .shuffle li'),
    allBox = Array.from(document.querySelectorAll('.portfolio .imgs-container .box'));

shuffle.forEach(li => {
    li.onclick = () => {
        addAndRemoveActive(li);
        fileter(li);
    }
})

function addAndRemoveActive(link) {
    shuffle.forEach(el => {
        el.classList.remove('active')
    })
    link.classList.add('active')
}

function fileter(link) {
    allBox.forEach(el => {
        el.style.display = 'none';
    })
    document.querySelectorAll(`.portfolio .imgs-container ${link.dataset.type}`).
    forEach(box => {
        box.style.display = 'block';
    })
}

// ========================== subscribe ========================== // 

let nameInput = document.querySelector('#inputName'),
    message = document.querySelector('#error');

nameInput.onkeyup = () => {
    message.style.cssText = `transform : translateX(-100%)`
}

document.forms[0].onsubmit = (e) => {

    let email = nameInput.value;
    let pattern = /\w@gamil\.com/ig,
        empty = false,
        valid = false;

    if (email != '') {
        empty = true;
    }
    if (email.match(pattern)) {
        valid = true;
    }
    console.log(email.match(pattern))
    if (!valid || empty) {
        e.preventDefault();
        message.innerHTML = 'Wrong Entry';
        message.style.cssText = ` transform : translateX(0)`;
    }

}
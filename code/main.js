let topNavBtn = document.querySelectorAll('.top-nav-btn');
let topNavLink = document.querySelectorAll('.top-nav-link');
let goDown = document.querySelectorAll('#go-down');
let habilitiesCont = document.querySelector('#habilities');
let previewCont = document.querySelector('.preview-container');
let leftNavBtn = document.querySelector('#left-nav-btn');
let leftNavClose = document.querySelector('#left-nav-close');
let leftNav = document.querySelector('.left-nav');

for (i = 0; i < topNavLink.length; i++) {
    topNavLink[i].addEventListener('mouseover', function() {
        document.querySelector(`#link-dispay-${this.value}`).style.opacity = 1;
    });
    topNavLink[i].addEventListener('mouseleave', function() {
        document.querySelector(`#link-dispay-${this.value}`).style.opacity = 0;
    });
};

for (i = 0; i < topNavBtn.length; i++) {

    topNavBtn[i].addEventListener('click', function() {

        console.log('hola')

        switch (this.value) {
            case 'home':
                break;
            case 'preview':
                break;
            case 'shop':
                window.open('https://m12-store.tebex.io','_blank')
                break;
            default:
                console.error('Bronken link in top-nav')
                break;
        }

    });

}

leftNavBtn.addEventListener('click', () => {
    leftNav.style.left = 0;
    leftNavBtn.style.display = 'none'
});

leftNavClose.addEventListener('click', () => {
    leftNav.style.left = '-80vw';
    leftNavBtn.style.display = 'block'
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Set habilities from config
for (let i = 0; i < Config['habilities'].length; i++) {
    let act = Config['habilities'][i]
    habilitiesCont.innerHTML +=
    `
    <div class="habilities-item">
        <img src="${act.img}"/>
        <span>${act.name}</span>
    </div>
    `
}

// Set preview from config
for (let i = 0; i < Config['preview'].length; i++) {
    let act = Config['preview'][i]
    previewCont.innerHTML +=
    `
    <article class="preview-item">
        <iframe class="preview-video" src="${act.link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </article>
    `
}

// If you see this I want to tell you "Hello! I dont want to use backend :)"
document.querySelector('#send-wh').addEventListener('click', () => {

    let name = document.querySelector('#contact-name');
    let email = document.querySelector('#contact-email');
    let message = document.querySelector('#contact-message');

    let wbhook = {
        "content": null,
        "embeds": [
          {
            "title": name.value,
            "description": message.value,
            "color": null,
            "author": {
              "name": email.value
            }
          }
        ]
      }

    if (ValidateEmail(email.value)) {

        let xhr = new XMLHttpRequest()   
        xhr.open('POST', 'https://discord.com/api/webhooks/930882200382107649/FmGtJs2RkJofZqDydbywwaq5Hde_bO8r8uqwo5HhVqL08SM3CYhWoNlBBPWlIoojYPYs', true)
        xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
        xhr.send(JSON.stringify( wbhook ));

        name.value = '';email.value = '';message.value = '';

    } else {
        email.value = 'Wrong Email!!';
    }

});

function ValidateEmail(mail) 
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    } else
        return (false)
}
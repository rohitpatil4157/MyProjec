console.log("Hello");

let Html = document.querySelector('html');
let Body = document.querySelector('body');
let mainSignContent = document.querySelector('.content');
let signUp = document.querySelector('#signUp');
let circle = document.querySelector('#circle');
let darkButton = document.querySelector('#dark')
let LoaderScreen = document.querySelector('.LoaderScreen');



// Loading Page :
window.addEventListener('load', function () {
    // localStorage.setItem('LoaderScreen', "Seen");
    // let LS2 = localStorage.getItem('LoaderScreen')
    // if (LS2 !== null) {
    //     LoaderScreen.style.display = 'none';
    // }

    LoaderScreen.style.display = 'none';
    let ls = localStorage.getItem('Dark');
    if (ls == 'enabled') {
        Html.classList.toggle('DarkClass');
        darkButton.style.transform = 'rotate(90deg)';
    }

})


//Logic Sign Up Page Animations :
signUp.addEventListener('click', () => {

    // Body.style.visibility = 'hidden'
    mainSignContent.style.display = 'block'; // Makes it Visible !!!
    mainSignContent.style.transition = '0.5s';
    setInterval(() => {
        circle.style.width = '75px'
        circle.style.height = "75px";
    }, 0);
});


// Makes it Invisible !!!
circle.addEventListener('click', () => {
    mainSignContent.style.display = 'none';

});
// ANother Implementation of The Same
document.addEventListener('keydown', (event) => {
    let keyName = event.key;
    // console.log(keyName);
    if (keyName === 'Escape') {

        mainSignContent.style.display = 'none';
    }
    if (keyName == 'Delete') {
        Body.style.display = 'none'
    }
});


// Dark Mode


darkButton.addEventListener('click', (e) => {
    // console.log(ls);
    e.preventDefault();

    if (darkButton.style.transform !== '') {
        Html.classList.remove('DarkClass')
        darkButton.style.transform = '';
        localStorage.setItem('Dark', 'disabled');
        // audio.pause();
    }
    else {
        Html.classList.add('DarkClass')
        darkButton.style.transform = 'rotate(90deg)';
        localStorage.setItem('Dark', 'enabled');
        audio.play()
    }

});


let anchors = document.querySelectorAll('a');

// Array.from(anchors).forEach(element => {

//     element.addEventListener('click', (e) => {
//         e.preventDefault()
//         let tar = e.target.href;
//         console.log(tar);

//     })

// });


// Tooltips

tippy('#SignIn', {
    content: "Sign In",
});

tippy('#Contac', {
    content: "Contact Us",
});

tippy('#More', {
    content: "More",
});

tippy('#dark', {
    content: "Toogle dark Mode",
});



let txtSpan = document.querySelector('#TextSpan');
function change() {
    setTimeout(() => {
        txtSpan.textContent = "   minutes";
        txtSpan.style.setProperty("--visible", "visible")

    }, 0)
    setTimeout(() => {
        txtSpan.textContent = "seconds"

    }, 3000)
    setTimeout(() => {
        txtSpan.style.setProperty("--visible", "hidden")
    }, 4500)



}

setInterval(change, 12000)
change()


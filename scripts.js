var ambientTime = 1500;
var current = 'home';
var timeout;
var lastX = 0, lastY = 0;
var moving;
let x, y;
const root = document.documentElement;
document.addEventListener('mousemove', evt => {
    x = evt.clientX / innerWidth;
    y = evt.clientY / innerHeight; 
    if(current == 'home') {
        root.style.setProperty('--mouse-x', x);
        root.style.setProperty('--mouse-y', y);
    }
    ambientTime = 5000;
});

//setInterval(function(){ambientMovement()}, ambientTime);
setInterval(function(){checkMouseMoving()}, 100);

function checkMouseMoving() {
    if(lastX != x || lastY != y) {
        moving = true;
    } else {
        moving = false;
    }
    lastX = x; lastY = y;
}

function aboutme() {
    if(current == 'home') {
        current = 'about';
        window.location.hash = "#about";
        document.getElementsByClassName('aboutview')[0].style.visibility = "visible";
        document.getElementById('aboutback').style.visibility = "visible";
        root.style.setProperty('--main-offset-y', '-50vh');
        root.style.setProperty('--main-background', 'rgb(241, 170, 87)');
    } else {
        home();
    }
}
function goodcauses() {
    if(current == 'home') {
        document.getElementsByClassName('goodcausesview')[0].style.visibility = "visible";
        document.getElementById('goodcausesback').style.visibility = "visible";
        current = 'goodcauses';
        window.location.hash = "#goodcauses";
        root.style.setProperty('--main-offset-y', '150vh');
        root.style.setProperty('--main-background', 'rgb(136, 129, 202)');
    } else {
        home();
    }
}
function contact() {
    if(current == 'home') {
        current = 'contact';
        window.location.hash = "#contact";
        document.getElementsByClassName('contactview')[0].style.visibility = "visible";
        document.getElementById('contactback').style.visibility = "visible";
        root.style.setProperty('--main-offset-y', '130vh');
        root.style.setProperty('--main-offset-x', '150vw');
        root.style.setProperty('--main-background', 'rgb(214, 72, 72)');
    } else {
        home();
    }
}
function resume() {
    if(current == 'home') {
        current = 'resume';
        window.location.hash = "#resume";
        document.getElementsByClassName('resumeview')[0].style.visibility = "visible";
        document.getElementById('resumeback').style.visibility = "visible";
        root.style.setProperty('--main-offset-y', '-40vh');
        root.style.setProperty('--main-offset-x', '150vw');
        root.style.setProperty('--main-background', 'rgb(43, 204, 150)');
    } else {
        home();
    }
}
function projects() {
    if(current == 'home') {
        current = 'projects';
        window.location.hash = "#projects";
        document.getElementsByClassName('projectsview')[0].style.visibility = "visible";
        document.getElementById('projectsback').style.visibility = "visible";
        root.style.setProperty('--main-offset-y', '130vh');
        root.style.setProperty('--main-offset-x', '-86vw');
        root.style.setProperty('--main-background', 'rgb(75, 114, 172)');
    } else {
        home();
    }
}

function ambientMovement() {
    console.log("ambient")
    if(current == 'home') {
        root.style.setProperty('--random-x', (Math.random()*1)-0.5);
        root.style.setProperty('--random-y', (Math.random()*1)-0.5);
        root.style.setProperty('--mouse-y', "calc(var(--mouse-y) + var(--random))");
        // root.style.setProperty('--mouse-x', 50 + (Math.random()*3) + "vw");
    }
    ambientTime = Math.random()*5000;
}

function home() {
    root.style.setProperty('--main-offset-y', '50vh');
    root.style.setProperty('--main-offset-x', '50vw');
    root.style.setProperty('--main-background', '#d6e1e5');
    setTimeout(() => {
        current = 'home'; 
        window.location.hash = "";
        document.getElementsByClassName(current + 'view')[0].style.visibility = "hidden"; 
        document.getElementById(current + 'back').style.visibility = "hidden";
    }, 500);
}

function linkedin() {
    root.style.setProperty('--main-background', 'rgb(99, 182, 113)');
    window.open('https://www.linkedin.com/in/ryan-taylor-00b6b8191/','_self');
}

function github() {
    root.style.setProperty('--main-background', 'rgb(52, 141, 141)');
    window.open('https://www.github.com/ryant74/','_self');
}

function navigate() {
    switch (window.location.hash) {
        case "#about" : 
            aboutme();
            break;
        case "#projects" :
            projects();
            break;
        case "#contact" : 
            contact();
            break;
        case "#goodcauses" :
            goodcauses();
            break;
        case "#resume" :
            resume();
            break;
        case "#linkedin" :
            linkedin();
            break;
        case "#github" :
            github();
            break;
        default :
            console.log("Couldn't find that page!");
    }
}
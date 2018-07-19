console.log("Hello world!");
checkGA();

function checkGA() {
    var analytics = getCookie('analytics')
    if (analytics == 'enabled') {
        enableGA()
     } else if (analytics == 'disabled') {
        disableGA();
    }
}

function engageGA() {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'UA-121801387-2');
}

function enableGA() {
    let script = document.createElement('script');
    script.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=UA-121801387-2');
    script.setAttribute('type', 'text/javascript');
    document.getElementsByTagName('head')[0].appendChild(script);
    engageGA();
    console.log("Google Analytics has been enabled");
    document.getElementById("pop").style.display = "none";
    var analytics = getCookie('analytics')
    if (analytics == null) {
        setCookie('analytics', 'enabled', 30);     
    }
}

function disableGA() {
    console.log("Google Analytics was NOT enabled");
    document.getElementById("pop").style.display = "none";
    var analytics = getCookie('analytics')
    if (analytics == null) {
        setCookie('analytics', 'disabled', 30);     
    }
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
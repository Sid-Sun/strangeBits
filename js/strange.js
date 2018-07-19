console.log("Hello world!");
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
}
function disableGA() {
    console.log("Google Analytics was NOT enabled");
    document.getElementById("pop").style.display = "none";
}
if(navigator.doNotTrack == 1) {
    disableGA();
}
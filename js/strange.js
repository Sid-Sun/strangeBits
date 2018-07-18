console.log("Hello world!");
function enableGA() {
    let script = document.createElement('script');
    script.setAttribute('src', 'js/analytics.js');
    script.setAttribute('type', 'text/javascript');
    document.getElementsByTagName('head')[0].appendChild(script);
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

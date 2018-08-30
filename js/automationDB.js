someTest = [
    {
        "title": "32894u",
        "subject": "Some klndkv text",
        "location": "article.html",
        "img": "0.jpg"
    },
    {
        "title": "lnwkf",
        "subject": "Some kjsnvs text",
        "location": "article.html",
        "img": "0.jpg"
    },
    {
        "title": "kjbejkr",
        "subject": "Some l;qmw text",
        "location": "article.html",
        "img": "0.jpg"
    },
];
for(i=0;i<someTest.length;i++) {
    createCards(someTest[i].title,someTest[i].subject,someTest[i].img);
   clickOn(someTest[i].title,someTest[i].location);
}

function createCards(cardTitle,cardText,cardImg) {
    $("#cards-div").append( "" +
        "<div class='card col-md-4' id='"+cardTitle+"'style='cursor: pointer;'>" + "<img class='card-img-top' src='img/" + cardImg + "' alt='Card image'>" + "<div class='card-body'>" + "<h5 class='card-title'>" + cardTitle + "</h5>" + "<p class='card-text'>" + cardText + "</p>" + "</div>" + "</div>")
}
function clickOn(cardID,position) {
    console.log("Adding");
    let funnyScript = document.createElement('script');
    let funnyText = document.createTextNode("document.getElementById('" + cardID + "').onclick = function () { location.href = '"+position+"'}");
    funnyScript.appendChild(funnyText);
    document.getElementsByTagName('head')[0].appendChild(funnyScript);
}
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
    createCards(someTest[i].title,someTest[i].subject,someTest[i].img,someTest[i].location);
  /* clickOn(someTest[i].title,);
*/}

function createCards(cardTitle,cardText,cardImg,redLocation) {
    $("#cards-div").append( "" +
        "<div onclick=location.href='" + redLocation +"' class='card col-md-4' id='"+cardTitle+"'style='cursor: pointer;'>" + "<img class='card-img-top' src='img/" + cardImg + "' alt='Card image'>" + "<div class='card-body'>" + "<h5 class='card-title'>" + cardTitle + "</h5>" + "<p class='card-text'>" + cardText + "</p>" + "</div>" + "</div></a>")
}
function clickOn(cardID,position) {
    console.log("Adding");
    let funnyScript = document.getElementById('custom-internal-script');
    let funnyText = document.createTextNode("document.getElementById('" + cardID + "').onclick = function () { location.href = '"+position+"'};");
    funnyScript.appendChild(funnyText);
}
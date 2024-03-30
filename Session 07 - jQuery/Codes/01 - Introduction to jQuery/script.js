/*
    jQuery v3.7.1
    Website: https://jquery.com
    CDN: https://releases.jquery.com
*/


// jQuery Selectors
// $("CSS Selector") => $("p"), $(".element-class"), $("#element-id"), $(".parent > .child")

var myDiv = $(".myDiv");
console.log(myDiv);

var myButton = $("#myButton");
console.log(myButton);

var paragraphs = $("p");
console.log(paragraphs);
console.log(paragraphs[0]);

// jQuery Event Listeners
// $("CSS Selector").on("eventname", handler) => $("p").on("click", () => console.log("Hi"));

myButton.on("click", () => console.log("myButton clicked!"));

paragraphs.on("mouseover", function (e) {
    console.log(e);
    console.log("hovered a paragraph!");
});


$(document).on('click', '.myDiv', () => console.log("All elements with .myDiv class were clicked!"));
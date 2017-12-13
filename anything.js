var input = document.querySelector("Words");
var result = document.querSelector("Paragraphs");

//New Functions n stuff
function userText() {
    var inputText = document.getElementById("Words").value;
    document.getElementById("Paragraphs").innerHTML = inputText;
}

//Highlight Element  and how many numbers of words and when the colours should be used
text.oninput= function() {
    var box = document.createElement("input");
    varsentence = text.value.match(/([^])\.!\?]+[\.!\?]+)|([^\.!?]+$)/g)
    console.log(sentence);
    paragraph.innterHTML = "";
    
    for (var i = 0; < sentence.length; i++);
    var sentence = sentence[i];
    var length = sentence.split("").length;
    var highlight = document.createElement("span");
    highlight.textContent = setence.trim();
    
    //Highlights
    if (length > 10) {
    highlight.style.background = "gold" {
    } else if (length > 8 {
    highlight.style.background
    })
    }

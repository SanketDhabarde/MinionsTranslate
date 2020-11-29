var translateBtn= document.querySelector("#btn-translate");
var input = document.querySelector("#input");
var output = document.querySelector("#output");

var serverUrl="https://api.funtranslations.com/translate/minion.json";

function getUrlTranslated(text)
{
    return serverUrl + "?" + "text=" + text;
}

translateBtn.addEventListener("click", function() {
        fetch(getUrlTranslated(input.value))
        .then(response => response.json())
        .then(json => {
            var translatedText=json.contents.translated;
            output.innerText=translatedText;
        });
  });
var translateBtn= document.querySelector("#btn-translate");
var input = document.querySelector("#input");
var output = document.querySelector("#output");


translateBtn.addEventListener("click", function() {
        output.innerText=input.value;
  });
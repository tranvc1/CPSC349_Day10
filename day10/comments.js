(function(window) {
  "use strict";

  const BUTTON_SELECTOR = '[data-posts="id"]';

  let buttons = document.querySelectorAll(BUTTON_SELECTOR);

  buttons.forEach(function(button) {
    "use strict";

    let sectionSelector = `#comments-${button.value}`;
    let commentSection = document.querySelector(sectionSelector);

    button.addEventListener("click", function(event) {
      if (commentSection.hidden) {
        commentSection.hidden = false;
        button.textContent = "Hide comments";
      } else {
        commentSection.hidden = true;
        button.textContent = "Show comments";
      }

      event.preventDefault();
    });
  });
})(window);

fetch("http://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(json => {
    let articleArray = json;
    articleArray.forEach(function(element) {
      let articleX = document.createElement("article");
      articleX.innerHTML = "text";
      document.body.appendChild(articleX);
      console.log(element);
    });
    //console.log(json);
  });

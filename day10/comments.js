(function (window) {
  'use strict';
  
  $.ajax({url: "http://jsonplaceholder.typicode.com/posts",
				success: function(result) {
					console.log(result);
					result.forEach(function(post) {
						post.body = post.body.replace(/\n/g, "<br />");
						var htmlText = `<article><h2 data-posts="title">${post.title}</h2><p data-posts="body">${post.body}</p><button data-posts="id" value="${post.id}" type="button">Show comments</button><section class="comments" id="comments-${post.id}" hidden><h3>Comments</h3></section></article>`;
						document.getElementsByTagName("body")[0].innerHTML += htmlText;
					});
					const BUTTON_SELECTOR = '[data-posts="id"]';

					let buttons = document.querySelectorAll(BUTTON_SELECTOR);

					buttons.forEach(function (button) {
						'use strict';

						let sectionSelector = `#comments-${button.value}`;
						let commentSection = document.querySelector(sectionSelector);


						button.addEventListener('click', function (event) {
						  if (commentSection.hidden) {
							commentSection.hidden = false;
							button.textContent = 'Hide comments';
						  } else {
							commentSection.hidden = true;
							button.textContent = 'Show comments';
						  }
						  
						  $.ajax({url: "http://jsonplaceholder.typicode.com/comments?postId=" + button.value,
									success: function(result) {
										console.log(result);
										result.forEach(function(comment) {
											comment.body = comment.body.replace(/\n/g, "<br />");
											var commentHtml = `<p data-comments="body">${comment.body}</p><address data-comments="name"><a data-comments="email" href="mailto:${comment.email}">${comment.name}</a></address>`;
											commentSection.innerHTML += commentHtml;
										});
						  }});

						  event.preventDefault();
						});
					});
		}});
})(window);

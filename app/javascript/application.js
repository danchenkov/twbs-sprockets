// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

import "popper"
import "bootstrap"

// Note that this does not work with turbo reloading

document.addEventListener("turbo:load", function () {
	const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
	const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
	popoverList
	// let frame = document.getElementById("messagesFrame");
	// if (frame.complete) {
	//  frame.scrollTo(0, frame.scrollHeight)
	// } else {
	//   frame.loaded.then(() => frame.scrollTo(0, frame.scrollHeight))
	// }
})

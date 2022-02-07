// this is the code which will be injected into a given page...

(function () {




	// $("#term").val("mamad");

	// alert('inserted self... giggity');

	var s = document.createElement('script');
	s.src = chrome.runtime.getURL('script.js');
	// s.onload = function () {
	// 	this.remove();
	// };
	(document.head || document.documentElement).appendChild(s);


})();



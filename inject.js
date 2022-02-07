// this is the code which will be injected into a given page...

(function () {
	var s = document.createElement('script');
	s.src = chrome.runtime.getURL('script.js');
	(document.head || document.documentElement).appendChild(s);
})();



console.log(this)
var window = this.window

window.addEventListener('locationchange', console.log)
window.addEventListener('popstate', console.log)

console.log("HELLO SHOPEE", window.location.href)

console.log('---injectscript')
injectScript(chrome.runtime.getURL('./shopee/inject.js'), 'body');
injectCSS(chrome.runtime.getURL('./shopee/styles.css'), 'body')
console.log('---injectscript-end')

function injectScript(file, node) {
    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'module');
    s.setAttribute('src', file);
    th.appendChild(s);
}

function injectCSS(file, node) {
    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('link');
    s.rel = 'stylesheet'
    s.setAttribute('href', file);
    th.appendChild(s);
}


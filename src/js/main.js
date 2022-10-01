import Screen from "./Screen.js";
  
customElements.define('x-screen', Screen)
init()

async function init() {
    const select = document.getElementById('vw_select')
    const input = document.getElementById('vw_input')
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    let width = 360
    input.value = width
    refresh(width, tab.url, tab.title)

    select.addEventListener('change', function() {
        if(this.value) width = this.value
        input.value = width
        refresh(width, tab.url, tab.title)
    })

    input.addEventListener('change', function() {
        if(this.value < 320) {
            console.error("Width can't be les than 320px.");
        } else {
            width = this.value
        }
        refresh(width, tab.url, tab.title)
    })
}

function refresh(width, url, title) {
    const notPage = url.startsWith("chrome://")
    const container = document.getElementById('container')
    const screen = document.createElement('x-screen')
    screen.setAttribute('width', width)
    screen.setAttribute('url', url)
    screen.setAttribute('title', title)
    screen.setAttribute('not-page', notPage)
    container.innerHTML = screen.outerHTML
}
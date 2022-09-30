import Screen from "./Screen.js";
  
customElements.define('x-screen', Screen)

const select = document.getElementById('vw_select')
const input = document.getElementById('vw_input')
const initScreen = document.createElement('x-screen')
let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

console.log(tab.url);
class Screen extends HTMLElement {
    constructor() {
      super()
    }
  
    connectedCallback() {
      this.innerHTML = "Hello world"
    }
  }
  
  customElements.define('x-screen', Screen)
class Screen extends HTMLElement {
    width = 0
    url = ''
    notPage = false
    constructor() {
      super()
      this.width = this.getAttribute('width')
      this.url = this.getAttribute('url')
      this.notPage = new Boolean(this.getAttribute('not-page'))
    }
  
    connectedCallback() {
      this.innerHTML = `

      `
    }
  }
  
export default Screen
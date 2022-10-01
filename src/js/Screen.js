class Screen extends HTMLElement {
    id = null
    width = 0
    url = ''
    title = ''
    notPage = false
    constructor() {
      super()
      this.id = new Date().getTime()
      this.width = this.getAttribute('width')
      this.url = this.getAttribute('url')
      this.notPage = Boolean(this.getAttribute('not-page'))
      console.log(this.notPage);
    }
  
    connectedCallback() {
      this.innerHTML = `
        <div>  
          ${this.notPage ? this.notPageHTML() : this.pageHTML()}
        </div>
      `
    }

    pageHTML() {
      return `
        <iframe title="" id="${this.id}" width="${this.width}" height="500" src="${this.url}"></iframe>
      `
    }

    notPageHTML() {
      return `

      `
    }
  }
  
export default Screen
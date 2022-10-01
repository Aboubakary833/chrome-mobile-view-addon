class Screen extends HTMLElement {
    title = ''
    width = 0
    url = ''
    notPage = false
    constructor() {
      super()
      this.title = this.getAttribute('title')
      this.width = this.getAttribute('width')
      this.url = this.getAttribute('url')
      this.notPage = this.getAttribute('not-page') === "true"
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
          #cmv_iframe {
            border: 1px solid #ddd;
            border-radius: 3px;
          }

          #nf_c {
            width: 320px;
            height: 500px;
            border: 1px solid #ddd;
            border-radius: 3px;
          }

          #nf_img {
            width: 100%;
          }

          #nf_m {
            width: 300px;
            margin: auto;
            margin-top: 10px;
            padding: 1px 5px;
            display: flex;
            align-items: center;
            background: #ffd2d2;
            color: #ff4e4e;
            font-size: 14px;
            border-radius: 3px;
          }

          #nf_e_i {
            width: 30px;
            height: 30px;
            margin-right: 10px;
          }
        </style>
        <div>  
          ${this.notPage ? this.notPageHTML() : this.pageHTML()}
        </div>
      `
    }

    pageHTML() {
      return `
        <iframe
         title="${this.title}" 
         id="cmv_iframe" 
         width="${this.width}" 
         height="500" 
         src="${this.url}"
         loading="eager"
         referrerpolicy="origin"
         frameborder="0"></iframe>
      `
    }

    notPageHTML() {
      return `
        <div id="nf_c">
          <div>
            <img src="src/images/page_not_found.png" id="nf_img">
          </div>
          <div id="nf_m">
            <img src="src/images/error.svg" id="nf_e_i" />
            <p>You should open a web page before running the extension.</p>
          </div>
        </div>
      `
    }
  }
  
export default Screen
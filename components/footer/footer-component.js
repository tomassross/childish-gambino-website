class FooterComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
      `<footer>
            <div class="container">
                <div>
                        <P>Cel:</P>
                        <p>11 1234-1234</p>
                </div>
                <div>
                        <P>E-mail:</P>
                        <p>ChildishGambino@gamail.com</p>
                </div>
            </div>
        </footer>`;
    }
  }

customElements.define('footer-component', FooterComponent);
class HeaderDesktopComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
      `    <nav id="nav">
              <h1><img src="assets/Donald-Glover/header_logo.png" alt="logo" width="300px"></h1>
              <ul class="nav-list">
                  <li><a href="">Home</a></li>
                  <li><a href="">About</a></li>
                  <li><a href="">Albums</a></li>
                  <li><a href="">Gallery</a></li>
                  <li><a href="">Blog</a></li>
                  <li><a href="">Contact</a></li>
              </ul>
          </nav>`;
    }
  }

  customElements.define('header-desktop', HeaderDesktopComponent);
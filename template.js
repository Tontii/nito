class Sidebar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div id="backPage">
    <i class="fa-solid fa-arrow-left">
      <a href="./cv.html" class="backButton">Гарах</a></i
    >
  </div>
  <nav id="sidebarItems">
    <ul>
      <li>
        <div class="sidebarItem">
          <p>
            <span class="sidebarNumber activeSidebar">1</span> Үндсэн мэдээлэл
          </p>
        </div>
      </li>
      <li>
        <div class="sidebarItem">
          <p><span class="sidebarNumber">2</span> Мэрэгжил</p>
        </div>
      </li>
      <li>
        <div class="sidebarItem">
          <p><span class="sidebarNumber">3</span> Ажлын түүх</p>
        </div>
      </li>
      <li>
        <div class="sidebarItem">
          <p><span class="sidebarNumber">4</span> Чадвар</p>
        </div>
      </li>
      <li>
        <div class="sidebarItem">
          <p><span class="sidebarNumber">5</span> Болвсрол</p>
        </div>
      </li>
      <li>
        <div class="sidebarItem">
          <p><span class="sidebarNumber">6</span> Сертификатууд</p>
        </div>
      </li>
      <li>
        <div class="sidebarItem">
          <p><span class="sidebarNumber">7</span> Сошиал холбоос</p>
        </div>
      </li>
    </ul>
  </nav>
    `;
  }
}

customElements.define("my-aside", Sidebar);

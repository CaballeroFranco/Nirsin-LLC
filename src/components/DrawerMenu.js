function DrawerMenu() {
  const navigation = document.querySelector(".navigation");

  document.querySelector(".toggle").onclick = function () {
    this.classList.toggle("active");
    navigation.classList.toggle("active");
  };
  return (
    <div class="container-drawer">
      <div class="navigation">
        <ul>
          <li>
            <a href="/">
              <span class="title">Hom</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span class="title">About us</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span class="title">Service</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span class="title">Contact</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="toggle">
        <i class="fas fa-grip-lines"></i>
      </div>
    </div>
  );
}

export default DrawerMenu;

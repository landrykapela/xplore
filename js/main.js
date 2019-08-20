const menu_but = document.getElementById("menu");
const slide_menu = document.getElementById("slide_menu");
const menu_close = document.getElementById("menu_close");
const menu_items = document.getElementsByClassName("menu_item");
const button_rep = document.getElementById("contact_rep");

//add click event to menu button
if (menu_but) {
  menu_but.addEventListener("click", () => {
    showSlideMenu();
  });
}

//add click event to close button
if (menu_close) {
  menu_close.addEventListener("click", () => {
    hideSlideMenu();
  });
}

const showSlideMenu = () => {
  slide_menu.classList.remove("collapse");
  slide_menu.classList.remove("hidden");
  slide_menu.classList.add("expand");
};

const hideSlideMenu = () => {
  slide_menu.classList.remove("expand");
  slide_menu.classList.add("collapse");
  setTimeout(() => {
    slide_menu.classList.add("hidden");
  }, 300);
};

//add click listener to big button
if (button_rep) {
  button_rep.addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView();
  });
}
//add menu click events
if (menu_items) {
  console.log("menues: ", menu_items[0].id);
  for (let i = 0; i < menu_items.length; i++) {
    let item = menu_items[i];
    item.addEventListener("click", () => {
      console.log("clicked: ");
      switch (item.id) {
        case "menu_about":
          document.getElementById("about").scrollIntoView();
          break;
        case "menu_service":
          document.getElementById("services").scrollIntoView();
          break;
        case "menu_home":
          document.getElementById("header").scrollIntoView();
          break;
        case "menu_partners":
          document.getElementById("partners").scrollIntoView();
          break;
        case "menu_gallery":
          document.getElementById("gallery").scrollIntoView();
          break;
        case "menu_contact":
          document.getElementById("contact").scrollIntoView();
          break;
      }
      setTimeout(() => {
        hideSlideMenu();
      }, 300);
    });
  }
}

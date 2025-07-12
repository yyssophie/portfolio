function toggleMenu() {
    /* target the classes of menu-links and icon once the icon is clicked */
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    /* toggle is a built in method of the property classList,
    which adds a class to the list if it's not there, and remove
    it otherwise */
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
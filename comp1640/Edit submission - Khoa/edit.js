function deletell() {
    const show = document.querySelector(".show-modal");
    show.classList.toggle("none");
}

function closemodal() {
    const show = document.querySelector(".show-modal");
    show.classList.toggle("none");
}
function showmenu () {
    const show = document.querySelector(".show-menu");
    const home = document.getElementById("home");
    const login = document.getElementById("login");
    login.classList.toggle("an");
    home.classList.toggle("an");
    show.classList.toggle("none");
}
function deletel() {
    const show = document.querySelector(".show-modal-delete");
    show.classList.toggle("none");
}

function closemodal_() {
    const show = document.querySelector(".show-modal-delete");
    show.classList.toggle("none");
}

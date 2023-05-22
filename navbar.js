const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropMenu = document.querySelector(".dropmenu");

toggleBtn.onclick = function () {
  dropMenu.classList.toggle("open");
  const isOpen = dropMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "ri-close-line" : "ri-menu-line";
};

const stickyBtn = document.querySelector(".sticky-btn");
const stickBtnIcon = document.querySelector(".sticky-btn .top");
//when the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    stickyBtn.style.display = "block";
  } else if (window.matchMedia("(max-width: 789px)")) {
    stickyBtn.style.display = "none";
  }
}

//when the user clicks on the button, scroll to the top ot the document
stickyBtn.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

document.addEventListener("scroll", function () {
  const listItems = document.querySelectorAll(".tablet-home-clients-list li");
  const windowHeight = window.innerHeight;

  listItems.forEach((li) => {
    const liRect = li.getBoundingClientRect();
    const isVisible = liRect.top <= windowHeight / 2 && liRect.bottom >= 0;

    li.classList.toggle("scrolled-right", isVisible);
  });

  const arrow = document.querySelector(".home-clits-arrow");
  const container = document.querySelector(".tablet-list-wraper");
  const containerRect = container.getBoundingClientRect();

  const isArrowSticky =
    containerRect.top <= windowHeight / 2 &&
    containerRect.bottom >= windowHeight / 2;
  const isContainerScrolledBottom = containerRect.bottom <= windowHeight * 0.5;

  arrow.classList.toggle("sticky", isArrowSticky);
  arrow.classList.toggle("bottom", isContainerScrolledBottom);
});

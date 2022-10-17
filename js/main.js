window.onload = function () {

  const dropdown = document.querySelector('.dropdown');
  const mobile_nav = document.querySelector('.mobile-nav')

  dropdown.addEventListener('click', function () {
    dropdown.classList.toggle('is-active')
    mobile_nav.classList.toggle('is-active')
  });
}
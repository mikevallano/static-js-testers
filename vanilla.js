document.addEventListener('DOMContentLoaded', function () {
  console.log('dom is ready from vanilla js');

  let btn = document.querySelector('.btn-sm')

  btn.addEventListener('click', function() {
    console.log('message from vanilla.js: button was clicked')
  })
});

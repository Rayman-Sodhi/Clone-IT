function placed(){
	document.getElementById("success-message").style.display = "block";
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

$('.card-header').on('click', function() {
  if($(this).hasClass('footer-accordion-open')) {
    $(this).removeClass('footer-accordion-open');
    $('.fa-chevron-down', this).removeClass('rotate-icon');
  }
  else {
    $(this).addClass('footer-accordion-open');
    $('.fa-chevron-down', this).addClass('rotate-icon');
  }
})

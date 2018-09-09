(function() {
  $(document).ready(function() {


    $('input#input_text, textarea#textarea2').characterCounter();
    let submit_message = document.getElementById('submit_message');
    submit_message.addEventListener('click', function() {
      console.log('what')

      Materialize.toast('submit')
      setTimeout(function() {
        let toasts = document.getElementsByClassName('toast')
        // set timeout to remove  toast
        setTimeout(function() {
          for (x in Materialize.Toast._toasts) {
            Materialize.Toast._toasts[x].remove()
          }
        }, 4000)
      })
    })
    submit_message.addEventListener('mouseover', function() {
      console.log('mouseover')
      this.classList.remove('pulse')
    })
    submit_message.addEventListener('mouseout', function() {
      this.classList.add('pulse')
    })
  })
})()

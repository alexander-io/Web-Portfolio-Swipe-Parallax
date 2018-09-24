(function() {
  $(document).ready(function() {

    // define function to post  data
    function postData(url = ``, data = {}) {
      // call fetch
      return fetch(url, {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
              "Content-Type": "application/json; charset=utf-8"
          },
          redirect: "follow",
          referrer: "no-referrer",
          body: JSON.stringify(data)
      })
      .then(response => {
        console.log('got response')
      });
    }
    setTimeout(function() {
      // ||||||||

      $('input#input_text, textarea#textarea2').characterCounter();
      let submit_message = document.getElementById('submit_message');
      let name_input = document.getElementById('name_field')
      let message_input = document.getElementById('message_field')

      submit_message.addEventListener('click', function() {
        try { // try to submit the message to the server for twilio sms shipping
          // if the name  field is  empty
          if (name_field.value == '') {
            Materialize.toast('error : required name field')
            throw "name empty"
          }
          // if the  message field is empty
          if (message_input.value == '') {
            Materialize.toast('error : required message field')
            throw "message empty"
          }
          // send post request
          postData('/message', {
             'name' : name_input.value,
             'message' : message_input.value
          })
          // toast message sent
          let toast = Materialize.toast('<span style="color:rgb(61, 143, 209);">message</span>.<span style="color:green;">submit()</span>')
          message_input.value = ''
          name_input.value = ''

        } catch (e) {
          console.log(e)
        }

        // remove toast TODO
        setTimeout(function() {
          let toasts = document.getElementsByClassName('toast')
          // set timeout to remove  toast
          setTimeout(function() {
            // for (x in Materialize.Toast._toasts) {
            //   Materialize.Toast._toasts[x].remove()
            // }
            toast.remove()
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


      // ||||||||
    }, 1500)



  })
})()

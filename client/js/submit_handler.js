(function() {
  $(document).ready(function() {

    function postData(url = ``, data = {}) {
      // Default options are marked with *
      return fetch(url, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, cors, *same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, same-origin, *omit
          headers: {
              "Content-Type": "application/json; charset=utf-8",
              // "Content-Type": "application/x-www-form-urlencoded",
          },
          redirect: "follow", // manual, *follow, error
          referrer: "no-referrer", // no-referrer, *client
          body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
      .then(response => {
        console.log('got response')
        // console.log(response.json())
      }); // parses response to JSON
    }


    $('input#input_text, textarea#textarea2').characterCounter();
    let submit_message = document.getElementById('submit_message');
    let name_input = document.getElementById('name_field')
    let message_input = document.getElementById('message_field')

    submit_message.addEventListener('click', function() {
      // console.log(name_input.value)

      try {
        if (name_field.value == '') {
          Materialize.toast('error : required name field')
          throw "name empty"
        }
        if (message_input.value == '') {
          Materialize.toast('error : required message field')
          throw "message empty"
        }
        Materialize.toast('<span style="color:rgb(61, 143, 209);">message</span>.<span style="color:green;">submit()</span>')

        postData('/message', {
           'name' : name_input.value,
           'message' : message_input.value
        })
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

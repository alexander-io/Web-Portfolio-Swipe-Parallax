(function() {
  const settings = {
    core : {
      dracula : {
        display:'block',
        overflowX:'auto',
        padding:'0.5em',
        backgroundColor:'#282a36'
      },
      purp : {
        display:"block",
        overflowX:"auto",
        backgroundColor:"#2f1e2e",
        color:"#a39e9b",
        padding:"0.5em"
      },
      lakeside_light : {
        display:"block",
        overflowX:"auto",
        backgroundColor:"#ebf8ff",
        color:"#516d7b",
        padding:"0.5em"
      },
      atelier_sulphurpool_dark : {
        display:"block",
        overflowX:"auto",
        backgroundColor:"#202746",
        color:"#979db4",
        padding:"0.5em"
      }
    },
    color : {
      dracula : [
        '#f1fa8c',
        '#f8f8f2',
        '#ff79c6',
        '#6272a4',
        '#8be9fd'
      ],
      purp : [
        '#48b685',
        '#ef6155',
        '#815ba4',
        '#8d8687',
        '#f99b15'
      ],
      lakeside_light : [
        '#568c3b',
        '#d22d72',
        '#6b6bb8',
        '#5a7b8c',
        '#257fad'
      ],
      atelier_sulphurpool_dark : [
        '#ac9739',
        '#c94922',
        '#6679cc',
        '#898ea4',
        '#3d8fd1'
      ]
    }
  }

  const net_of_classes = [ [
      ".hljs-string",
      ".hljs-title",
      ".hljs-name",
      ".hljs-type",
      ".hljs-attribute",
      ".hljs-symbol",
      ".hljs-bullet",
      ".hljs-addition",
      ".hljs-variable",
      ".hljs-template-tag",
      ".hljs-template-variable"
    ], [
      ".hljs",
      ".hljs-subst"
    ], [
      ".hljs-function",
      ".hljs-keyword",
      ".hljs-selector-tag",
      ".hljs-literal",
      ".hljs-section",
      ".hljs-link"
    ], [
      ".hljs-comment",
      ".hljs-quote",
      ".hljs-deletion",
      ".hljs-meta"
    ], [
      ".hljs-keyword",
      ".hljs-selector-tag",
      ".hljs-literal",
      ".hljs-title",
      ".hljs-section",
      ".hljs-doctag",
      ".hljs-type",
      ".hljs-name",
      ".hljs-strong"
    ]
  ]

  $(document).ready(function() {

    let white_hex = '#ffffff', black_hex = '#000000'

    var set_to_color = (lst ,color) => {
      lst.map((x) => {
        let list_of_elems = document.querySelectorAll(x)
        if (list_of_elems.length > 0) {
          for (let i = 0; i < list_of_elems.length;i++) {
            list_of_elems[i].style.color = color
          }
        }
      })

    } // end set_to_color()

    var set_hljs_core = (settings) => {
      let hljs = document.querySelector('.hljs')
      for (x in settings) {
        hljs.style[x] = settings[x]
      }
    } // end set_hljs_core()



    // set highlight js style
    var set_style = {
      dracula : () => {
        set_hljs_core(settings.core.dracula)
        for (let i = 0;  i < settings.color.dracula.length; i++) set_to_color(net_of_classes[i], settings.color.dracula[i])
      },
      purp : () => {
        set_hljs_core(settings.core.purp)
        for (let i = 0;  i < settings.color.purp.length; i++) set_to_color(net_of_classes[i], settings.color.purp[i])
      },
      // lakeside_light : () => {
      //   set_hljs_core(settings.core.lakeside_light)
      //   for (let i = 0;  i < settings.color.lakeside_light.length; i++) set_to_color(net_of_classes[i], settings.color.lakeside_light[i])
      // },
      atelier_sulphurpool_dark : () => {
        set_hljs_core(settings.core.atelier_sulphurpool_dark)
        for (let i = 0;  i < settings.color.lakeside_light.length; i++) set_to_color(net_of_classes[i], settings.color.atelier_sulphurpool_dark[i])
      }
    }

    class funx_node {
      constructor (funx) {
        this.funx = funx
        this.next = null
        this.prev = null
      }
    }

    class funx_chain_v2 {
      constructor (funx_obj) {
        this.head = null
        for (var funx in funx_obj) {
          if (this.head === null) {
            this.head = new funx_node(funx_obj[funx])
            this.tail = this.head
          } else {
            let curr = null
            if (this.head !== null) curr = this.head
            if (this.head.next !== null && this.head.next != this.head) curr = this.head.next
            while (curr.next && curr.next != this.head) {
              curr = curr.next
            }
            curr.next = new funx_node(funx_obj[funx])
            curr.next.prev = curr
            this.tail = curr.next
            this.tail.next = this.head
          }
        }
      }
    }

    var cycle_styles_v2 = function(interval) {
      let fc = new funx_chain_v2(set_style)
      let curr_funx = fc.head

      setInterval(function() {
        curr_funx.funx()
        curr_funx = curr_funx.next
      }, interval)
    }

    cycle_styles_v2(10000)


    document.getElementById("style00").addEventListener('click', function() {
      set_style.dracula()
    })

    document.getElementById("style01").addEventListener('click', function() {
      set_style.purp()
    })

    document.getElementById("style02").addEventListener('click', function() {
      set_style.lakeside_light()
    })

    document.getElementById("style03").addEventListener('click', function() {
      set_style.atelier_sulphurpool_dark()
    })
  })
})()

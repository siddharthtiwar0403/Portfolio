
        var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(tabname) {
            for(tablink of tablinks) {
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents) {
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }

      var sidemenu = document.getElementById("sidemenu")

      function openmenu(){
        sidemenu.style.width = "200px"
      }
      function closemenu(){
        sidemenu.style.width = "0px"
      }



      const scriptURL = 'https://script.google.com/macros/s/AKfycbxJ4Q8zCDxM2r2YHIH7zOKThCkbR5oM4nuxjImvFVekSocZtEaeMbvJQ6b55U9MZQ1H/exec'
      const form = document.forms['submit-to-google-sheet']
      const msg = document.getElementById('msg')

      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response =>{
            msg.innerHTML = "Imformation sent to Siddharth Tiwari"
            setTimeout(function(){
              msg.innerHTML = " "
            },1000)
            form.reset()
          })
          .catch(error => console.error('Error!', error.message))
      })

      
    var typed = new Typed('#element', {
      strings: ['Web Designer !!' , 'UI/UX Designer !!' , ' Full Stack Developer !!' , 'Graphic Designer !!'],
      typeSpeed: 50,
    });

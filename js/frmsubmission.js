//https://script.google.com/macros/s/AKfycbypHOF70Y4uqCnHPPzUHbd86JpDrg42tgNuYVM1-MR664UJUNLcICW-4iL_7mj00_PBjw/exec

const scriptURL = 'https://script.google.com/macros/s/AKfycbypHOF70Y4uqCnHPPzUHbd86JpDrg42tgNuYVM1-MR664UJUNLcICW-4iL_7mj00_PBjw/exec'
    const form = document.forms['contactfrm']
  
    form.addEventListener('submit', e => {
      e.preventDefault()

      getDateTime();

      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))

        //sendEmail();
        completedSub(); 
        document.getElementById("contactfrm").reset();  
    })

function clearForm(){
    document.getElementById("contactfrm").reset();

}

function completedSub(){
    $("#subnotification").fadeIn(3000);
    $("#subnotification").fadeOut(4000);          
}

function getDateTime(){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;

    document.getElementById("Timestamp").value = dateTime;
}

/*function sendEmail(){
    var custName = document.getElementById("name").value;
    var custSubject = document.getElementById("subject").value;
    var custEmail = document.getElementById("email").value;
    var custMsg = document.getElementById("messg").value;

    Email.send({
        Host : "smtp.gmail.com",
        Username : "convee.za@gmail.com",
        Password : "mila2002",
        To : 'convee.za@gmail.com',
        From : custEmail,
        Subject : custSubject,
        Body : "Message: " + custMsg
    }).then(
      message => alert(message)
    );
}*/

/*=====================================
 Subscription form
======================================*/

//subscription form
//https://script.google.com/macros/s/AKfycby8gKt6wO_DLchwZpm8ojAcjOQIbCtlvLmA9tjPCpyziNY3YCptPjhcaO4nwbh-UjSO/exec

const subscriberscriptURL = 'https://script.google.com/macros/s/AKfycby8gKt6wO_DLchwZpm8ojAcjOQIbCtlvLmA9tjPCpyziNY3YCptPjhcaO4nwbh-UjSO/exec'
const subform = document.forms['suscriberfrm']
  
    subform.addEventListener('submit', e => {
      e.preventDefault()

      getDateTimesub();

      fetch(subscriberscriptURL, { method: 'POST', body: new FormData(subform)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))

         
        completedSubnews(); 
        document.getElementById("suscriberfrm").reset();  
    })

    function getDateTimesub(){
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
    
        document.getElementById("Timestampsub").value = dateTime;
    }

    function completedSubnews(){
        $("#subnotification2").fadeIn(3000);
        $("#subnotification2").fadeOut(4000);          
    }


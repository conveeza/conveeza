function clearForm(){
    document.getElementById("contactfrm").reset();

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


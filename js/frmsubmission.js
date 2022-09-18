//https://script.google.com/macros/s/AKfycbypHOF70Y4uqCnHPPzUHbd86JpDrg42tgNuYVM1-MR664UJUNLcICW-4iL_7mj00_PBjw/exec

const scriptURL = 'https://script.google.com/macros/s/AKfycbypHOF70Y4uqCnHPPzUHbd86JpDrg42tgNuYVM1-MR664UJUNLcICW-4iL_7mj00_PBjw/exec'
    const form = document.forms['contactfrm']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))

        document.getElementById("orderForm").reset();   
        cicr(); 
    })

function clearForm(){
    document.getElementById("orderForm").reset();
    document.getElementsByClassName("itm-lable").value = "0";
}
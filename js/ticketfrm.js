/*=====================================
ticket register from form
======================================*/
   function subfrmRegister() {
    getDateTimetk();

     var name = document.getElementById("uname").value;
     var acctype = document.getElementById("acctype").value;
     var phone = document.getElementById("uphone").value;
     var pass = document.getElementById("logPassword").value;
     var timestamp = document.getElementById("tkTimestampsub").value;
     var email = document.getElementById("logEmail").value;
     var uID = name.substring(3)+"MVTK";

     document.getElementById("newuserfrmSub").disabled = true;
       
        fetch("https://api.apispreadsheets.com/data/xghqCJm5xZ7gvVAw/", {
            method: "POST",
            body: JSON.stringify({"data": 
            {"Name": name,
            "Email":email,
            "Phone":phone,
            "User_Id":uID,
            "Password":pass,
            "Timestamp": timestamp,
            "Account type":acctype}}),

        }).then(res =>{
            if (res.status === 201){
                document.getElementById("newuserFrm").reset();
                registrationsucc();
            }
            else{
                // ERROR
            }
        })
    }

    function getDateTimetk(){
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
    
        document.getElementById("tkTimestampsub").value = dateTime;
    }

    function registrationsucc(){
        var modTitle = document.getElementById("register&loginmodTitle");
        var modbody= document.getElementById("register&loginmodbody");
        var modfoot = document.getElementById("register&loginmodfoot");

        modTitle.innerHTML = "submitting registration";
        modbody.innerHTML = `<br><br>
        <center><img src="imgc/loader.gif" alt="loading..." width="50%"></center><br><br>`;
        modfoot.innerHTML = "<h4>You are being registered on our system</h4";

        const myTimeout = setTimeout(loadedfn, 3000);

        function loadedfn() {
            modTitle.innerHTML = "Registration Success";
            modbody.innerHTML = `<br>
            <center><img src="img/newuser.png" alt="newuser" width="20%"</center>
            <br><br>
            <h4>You have been successfully registered!</h4>`;
            modfoot.innerHTML = `<button class="btn btn-success tk-medium" data-dismiss="modal">Close</button>`;
          }
        
    }
    

   
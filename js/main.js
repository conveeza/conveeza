jQuery(document).ready(function ($) {

  $(window).scroll(function () {
    var height = $(window).height();
    var scroll = $(window).scrollTop();
    if (scroll) {
      $(".header-hide").addClass("scroll-header");
    } else {
      $(".header-hide").removeClass("scroll-header");
    }

  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  //This function shows alerts after talking to server
  var windowResponseUrl = window.location.href;

  if (windowResponseUrl.includes("?message=200%20OK%20success%20Customer%20Registered")) {
    var mymessage = window.location.href.toString().replace("https://convee.co.za/?message=200%20OK%20success%20", "").replace("%20", " ");

    document.getElementById("alertsDiv").innerHTML = `
    <div class="alert alert-success alert-dismissible fade show" role="alert">
          <strong>Success!</strong> ${mymessage}. Thank you, your registration was successful. You can login to buy our products or request a service.
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
    </div>
    `;

    setTimeout(() => {
      $(".alert").alert('close')
    }, 5000)
  }
  else if (windowResponseUrl.includes("?message=200%20OK%20success%20%20Message%20Sent")) {
    var mymessage = window.location.href.toString().replace("https://convee.co.za/?message=200%20OK%20success%20%20", "").replace("%20", " ");

    document.getElementById("alertsDiv").innerHTML = `
    <div class="alert alert-success alert-dismissible fade show" role="alert">
          <strong>Success!</strong> ${mymessage}. Our team will get back to you soon.
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
    </div>
    `;

    setTimeout(() => {
      $(".alert").alert('close')
    }, 5000)
  }
  else if (windowResponseUrl.includes("?message=200%20OK%20Successful%20Log%20in")) {
    var mymessage = window.location.href.toString().replace("https://convee.co.za?message=200%20OK%20Successful%20Log%20in&", "");

    document.getElementById("alertsDiv").innerHTML = `
    <div class="alert alert-success alert-dismissible fade show" role="alert">
          <strong>Success!</strong> Successful Log in.
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
    </div>
    `;

    // Regular expression to match the value after "user="
    var userregex = /user=([^&]+)/;
    var emailRegex = /email=([^&]+)/;
    var nameRegex = /name=([^&]+)/
    // Use exec() to get the matched value directly
    var emailMatch = emailRegex.exec(mymessage);
    var userMatch = userregex.exec(mymessage);
    var nameRegex = nameRegex.exec(mymessage);

    console.log(emailRegex[1]);
    console.log(nameRegex[1]);

    var Uemail = emailMatch[1];
    var userId = userMatch[1];
    var Uname = nameMatch[1];

    // localStorage.setItem("Useremail",Uemail);
    // localStorage.setItem("Username",Uname);
    // localStorage.setItem("User",userId);

    setTimeout(() => {
      $(".alert").alert('close')
    }, 5000)
  }

  // Mobile Navigation
  if ($('#nav-menu-container, #tk-nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container, #tk-nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function (e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function (e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smooth scroll for the menu and links with .scrollto classes
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (!$('#header').hasClass('header-fixed')) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });


  // Init Owl Carousel
  $('.owl-carousel').owlCarousel({
    items: 4,
    autoplay: true,
    loop: true,
    margin: 30,
    dots: true,
    responsiveClass: true,
    responsive: {

      320: { items: 1 },
      480: { items: 2 },
      600: { items: 2 },
      767: { items: 3 },
      768: { items: 3 },
      992: { items: 4 }
    }
  });

  // custom code

});

var displayUser = document.getElementsByClassName("dispalyOnLogin");
var LoggedInUser = localStorage.getItem("userName");
var LoggedInUserDisplay = document.getElementById("userName");

if (LoggedInUser != null || LoggedInUser != "") {
  for (let i = 0; i > displayUser.length; i++) {
    displayUser[i].style.display = "block";
  }
  LoggedInUserDisplay.innerHTML = LoggedInUser;
}
else {
  LoggedInUserDisplay.innerHTML = "Not logged in!";
}

function popPackDet(n) {
  var btnId = n;
  var modTitle = document.getElementById("buyModalLongTitle");
  var modBody = document.getElementById("buyModalbody");
  var serverApi = "https://riversideholdings.co.za/Convee"

  if (btnId == "basicpack") {
    modTitle.innerHTML = "Buy Package: Basic"

    modBody.innerHTML = ``;

  }
  else if (btnId == "geneccompack") {
    modTitle.innerHTML = "Buy Package: Business"

    modBody.innerHTML = ``;
  }
  else if (btnId == "entpropack") {
    modTitle.innerHTML = "Buy Package: Pro Enterprise"

    modBody.innerHTML = ``;

  }
}

// function popuRegLoginModal(a){
//   var btnlinkID = a;
//   var modTitle = document.getElementById("register&loginmodTitle");
//   var modbody= document.getElementById("register&loginmodbody");
//   var modfoot = document.getElementById("register&loginmodfoot");

//   if(btnlinkID == "registerbtn" || btnlinkID == "registerLink"){
//     modTitle.innerHTML = "Register";

//     modbody.innerHTML = `
//     <br>
//     <center><img src="img/newuser.png" alt="newuser" width="20%"</center>
//     <br>
//     <br>
//     <form id="newuserFrm" class="form">

//     <div class="form-group">
//     <input type="text" name="Timestamp" id="tkTimestampsub" hidden>
//     <label>Select an sccount type</label>
//     <select type="text" name="Account type" class="form-control" id="acctype" required/>
//       <option>Individual</option>
//       <option>Organisation/Company</option>
//     </select>
//     <div class="validation"></div>
//     </div>

//     <div class="form-group">
//     <label>Account Details</label>
//     <input type="text" name="Name" class="form-control" id="uname" placeholder="Name & Surname" required/>
//     <div class="validation"></div>
//     </div>

//     <div class="form-group">
//     <input type="text" name="Phone" class="form-control" id="uphone" placeholder="Phonenumber" required/>
//     <div class="validation"></div>
//     </div>

//     <div class="form-group">
//     <input type="email" name="Email" class="form-control" id="logEmail" placeholder="Email" required/>
//     <div class="validation"></div>
//     </div>

//     <div class="form-group">
//     <input type="password" name="Password" class="form-control" id="logPassword" placeholder="Password" required/>
//     <div class="validation"></div>
//     </div>

//     <button type="button" id="newuserfrmSub" class="form-control btn btn-success tk-medium" onclick="subfrmRegister()"><i class="fa fa-user-plus"></i>&nbsp;&nbsp; Register</button>
//     </form>`;

//     modfoot.innerHTML = `<p>By clicking on Register you agree to the <a href="#">terms of service</a> and <a href="#">privacy</a> on
//     this site and wish to submit your registration.</p>`;
//   }
//   else if(btnlinkID == "loginlink" || btnlinkID == "loginlink2"){
//     modTitle.innerHTML = "Login";

//     modbody.innerHTML = `
//     <br>
//     <center><img src="img/lock.png" alt="lock" width="20%"</center>
//     <br>
//     <br>
//     <form id="loginFrm" class="form">
//     <div class="form-group">
//     <input type="email" name="Email" class="form-control" id="logEmail" placeholder="Email" required/>
//     <div class="validation"></div>
//     </div>
//     <div class="form-group">
//     <input type="password" name="Password" class="form-control" id="logPassword" placeholder="Password" required/>
//     <div class="validation"></div>
//     </div>

//     <button type="button" id="loginfrmSub" class="form-control btn btn-success tk-medium"><i class="fa fa-sign-in"></i>&nbsp;&nbsp; Log In</button>
//     </form>
//     <center><a href="#!">Forgot Password</a></center>`;

//     modfoot.innerHTML = `<p>By clicking on Log in, you agree to the <a href="#">terms of service</a> on this website.</p>`;
//   }
// }


var btnRegister = document.getElementById("btnReg");
var contactMsg = document.getElementById("cntcMsgBtn");

btnRegister.addEventListener('click', () => {
  btnRegister.innerHTML = `Please wait <img src="img/loader-1.gif" height="30px" class="mb-0">`;
});

contactMsg.addEventListener('click', () => {
  contactMsg.innerHTML = `Please wait <img src="img/loader-1.gif" height="30px" class="mb-0">`;
});

var loginBtn = document.getElementById("btnLogin");

loginBtn.addEventListener('click', () => {
  loginBtn.innerHTML = `Please wait <img src="img/loader-1.gif" height="30px" class="mb-0">`;
});

//===========Login
function Login() {

}
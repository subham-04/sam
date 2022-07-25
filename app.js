
document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
          "body").style.visibility = "hidden";
        document.querySelector(
          ".loader-content").style.visibility = "visible";
    } else {
        // Here jquery will add a fading animation
        $(".loader-content").fadeOut("slow");
        // document.querySelector(
        //   ".loader-content").style.display = "none";
        document.querySelector(
          "body").style.visibility = "visible";
    }
};

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const yr = document.getElementById('year');

let date = new Date();
let year = date.getFullYear();



const fname =document.getElementById('fullname');
const email = document.getElementById('email');
const msg = document.getElementById('message');



navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');

});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

const serviceID = 'default_service';
const templateID = 'template_0vfp3nl';

function SendMail(){
    var params ={
        from_name : fname.value,
        email_id : email.value,
        message : msg.value
    }



    if(params.from_name==="" || params.email_id==="" || params.message===""){
        alert("Empty field, Message couldn't be sent");
    }else{

         emailjs.send(serviceID, templateID, params).then(
        function(res){
            alert("Message Sent Successfully");
        }
    )
        fname.value="";
        email.value="";
        msg.value="";
    }
    

    
}


yr.textContent=year;
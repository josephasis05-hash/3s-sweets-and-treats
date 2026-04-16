emailjs.init("EFHxysK6d2MYYm82E");

document.getElementById("contactForm").addEventListener("submit", function(event){
  event.preventDefault();

  console.log("Form submitted");

  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value
  };

  emailjs.send("service_shl6spl", "template_k4fwj6c", params)
  .then(function(response){s
    console.log("SUCCESS", response);

    alert("Message Sent Successfully!");

    document.getElementById("contactForm").reset();
  })
  .catch(function(error){
    console.log("FAILED", error);
    alert("Failed to send message. Check console.");
  });
});

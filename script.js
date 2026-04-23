function submitForm(event) {

  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  if (name.trim() === "" || email.trim() === "" || subject.trim() === "" || message.trim() === "") {
    alert("Please fill in all fields before submitting.");
    return;
  }

  document.getElementById("successMessage").style.display = "block";

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
}

window.addEventListener("scroll", function () {

  var sections = ["home", "blog", "contact"];
  var navLinks = document.querySelectorAll(".nav-links a");

  for (var i = 0; i < sections.length; i++) {
    var section = document.getElementById(sections[i]);
    var top = section.offsetTop - 80;
    var bottom = top + section.offsetHeight;

    if (window.scrollY >= top && window.scrollY < bottom) {

      navLinks.forEach(function (link) {
        link.style.color = "#cccccc";
      });

      navLinks[i].style.color = "#f0a500";
    }
  }
});

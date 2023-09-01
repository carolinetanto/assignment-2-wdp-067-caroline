// Get form and output elements
var form = document.getElementById("myForm");
var output = document.getElementById("output");
//var output2 = document.getElementById("output2");

// Handle form submission
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get input value
  var name = document.getElementById("nameInput").value;
  var kerja = document.getElementById("job").value;

  // Update output element
  output.textContent = "Hello, " + name + "! The " + kerja + ".";
});
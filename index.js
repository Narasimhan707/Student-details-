function submitForm() {
  var firstName = document.getElementById("firstName").value;
  var middleName = document.getElementById("middleName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;
  var mobileNumber = document.getElementById("mobileNumber").value;

  console.log("First Name: " + firstName);
  console.log("Middle Name: " + middleName);
  console.log("Last Name: " + lastName);
  console.log("Email: " + email);
  console.log("Address: " + address);
  console.log("Mobile Number: " + mobileNumber);
}

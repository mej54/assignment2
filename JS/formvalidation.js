// Make sure quantities and name are entered correctly
function checksubmission () {
  var qSamoa = document.getElementById("samoa").value;
  var qTagalong = document.getElementById("tagalong").value;
  var qThinmint = document.getElementById("thinmint").value;
  var name = document.getElementById("name").value;
  var nameFormat = name.search(/^[A-Z][a-z]+ [A-Z][a-z]+$/);

  if (qSamoa == "" & qTagalong == "" & qThinmint == "") {
    alert("You did not enter a quantity for any of the cookies!");
	  return false;
  }

  if (name == "") {
	  alert("You did not enter a name!");
	  return false;
  }

  if (qSamoa != "" & !(qSamoa >= 1 & qSamoa <= 100)) {
    alert("You did not enter a valid quantity of Samoas. \n" + "Please enter a number in digits between 1-100. \n" + "Ex: 20");
	  return false;
  }

  if (qTagalong != "" & !(qTagalong >= 1 & qTagalong <= 100)) {
	  alert("You did not enter a valid quantity of Tagalongs. \n" + "Please enter a number in digits between 1-100. \n" + "Ex: 20");
	  return false;
  }

  if (qThinmint != "" & !(qThinmint >= 1 & qThinmint <= 100)) {
	  alert("You did not enter a valid quantity of Thinmints. \n" + "Please enter a number in digits between 1-100. \n" + "Ex: 20");
	  return false;
  }

  if (nameFormat != 0) {
	  alert("You did not enter name correctly. \n" + "Please enter first and last name. \n" + "Ex: John Smith");
	  return false;
  }

  else {
	  document.getElementById("towrite").innerHTML = "Success! You ordered Girl Scout cookies.";
	  return false;
  }
}

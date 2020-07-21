
  function validateForm(reportAdd) {
    if(groupnameValid()){

    if(firstnameValid()) {
  
    if(lastnameValid()) {
  
    if( dateValid()) { 
    
    if(roleValid()){
    
    if(reportValid()){

  }
  }
  }
  } 
  } 
  
  }
  return false;
  }
  
  
  function dateValid()
  {
  var regName = /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/;
  var date = document.getElementById('Dates').value;
  errors = [];
  if (date == "") {
  alert("Date cannot be blank: Please enter a date");
  document.getElementById('Dates').focus();
  return false;
  }
  if (date.length < 10) {
  errors.push("Invalid length: Please enter full date, ex. 07/05/2020"); 
  document.getElementById('Dates').focus();
  }
  if (date.length > 10) {
  errors.push("Invalid length: Please do not enter more than 8 digits, ex. 07/05/2020"); 
  document.getElementById('Dates').focus();
  }
  if(!regName.test(date)){
    alert('Invalid format: Date must be written in mm/dd/yyyy format, try again');
    document.getElementById('Dates').focus();
    return false;
    }
  if (errors.length > 0) {
  alert(errors.join("\n"));
  return false;
  }else{
    console.log('Valid date given.'); 
  }
  return true;
  }
  
  
  function firstnameValid(){
  var regName = /^[a-zA-Z]+$/;
  var name = document.getElementById('FirstName').value;
  if(!regName.test(name)){
  alert('First Name cannot be blank or contain any numbers or symbols, try again');
  document.getElementById('FirstName').focus();
  return false;
  }
  if (name.length <= 1) {
    alert('First Name must be at least two or more letters, try again');
    document.getElementById('FirstName').focus();
  }
  else{
    console.log('Valid first name given.');
    return true;
  }
  }
  function lastnameValid(){
  var regName = /^[a-zA-Z]+$/;
  var lname = document.getElementById('LastName').value;
  if(!regName.test(lname)){
    alert('Last Name cannot be blank or contain any numbers or symbols, try again');
    document.getElementById('LastName').focus();
    return false;
    }
    if (lname.length <= 1) {
      alert('Last Name must be at least two or more letters, try again');
      document.getElementById('LastName').focus();
    }
    else{
    console.log('Valid last name given.');
    return true;
  }
  }

  function groupnameValid(){
    var groupName = /^[^\s]+$/;
    var name = document.getElementById('name').value;
    if(!groupName.test(name)){
      alert('Group Name cannot be blank or contain any spaces, try again');
      document.getElementById('name').focus();
      return false;
      }
      
    if (name.length <= 1) {
      alert('Group Name must be at least two or more letters, try again');
      document.getElementById('name').focus();
    }
    else{
      console.log('Valid Group name given.');
      return true;
    }
  
  }

  function roleValid(){
    var regName = /^[a-zA-Z]+$/;
    var role = document.getElementById('Role').value;
    if(!regName.test(role)){
    alert('Role cannot be blank or contain any numbers or symbols, try again');
    document.getElementById('Role').focus();
    return false;
    }
    if (role.length <= 1) {
      alert('Role must be at least two or more letters, try again');
      document.getElementById('Role').focus();
    }
    else{
      console.log('Valid Role given.');
      return true;
    }
  }

    function reportValid(){
      var report = document.getElementById('Report').value;
      if (report.length <= 15) {
        alert('Report must be at least 15 characters, try again');
        document.getElementById('FirstName').focus();
      }
      else{
        console.log('Valid Report given.');
        addReport();
        clearText();
        return true;
      }
    }
    
  
  

function myFunction1() {
    var x = document.getElementById("myDIV1");
    if (x.style.display === "none") {
      x.style.display = "block";
      x2.style.display = "block";
    } else {
      x.style.display = "none";
      x2.style.display = "none";
    }
  }
  function myFunction2() {
    var x = document.getElementById("myDIV2");
    var x2 = document.getElementById("myDIV4-check2");
    if (x.style.display === "none") {
      x.style.display = "block";
      x2.style.display = "block";
    } else {
      x.style.display = "none";
      x2.style.display = "none";
    }
  }

  function myFunction3() {
    var x = document.getElementById("myDIV3");
    var x2 = document.getElementById("myDIV4-check3");
    if (x.style.display === "none") {
      x.style.display = "block";
      x2.style.display = "block";

    } else {
      x.style.display = "none";
      x2.style.display = "none";
    }
  }

  function myFunction4() {
    var x = document.getElementById("myDIV4");
    var x2 = document.getElementById("myDIV4-check4");
    if (x.style.display === "none") {
      x.style.display = "block";
      x2.style.display = "block";
    } else {
      x.style.display = "none";
      x2.style.display = "none";
    }
  }


  // Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});


var table = document.getElementById('table-data').style.height;
var table_bg = document.getElementById('view-table').style.height;
if(table>table_bg)
{
table_bg = document.getElementById('view-table').style.height;
}

function myFunction(){
var totalRowCount = $("#table-data tr").length - 1;
var rowCount = $("#tblCustomers td").closest("tr").length;
var message = "Total Row Count: " + (totalRowCount);
var new_height = (totalRowCount * 100) + 150;
new_height.toString();
new_height += "px";
console.log("Number of rows equals " + totalRowCount + " and new div height equals " + new_height);


if(totalRowCount >= 6){
  document.getElementById('view-table').style.height = new_height;
}

}

function create(){
// Find a <table> element with id="myTable":
var table = document.getElementById("table-data");

// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(0);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);


// Add some text to the new cells:
cell1.innerHTML = "033";
cell2.innerHTML = "Wesbert";
cell3.innerHTML = "Edouard";
cell4.innerHTML = "Front-End";
cell5.innerHTML = "07/12/2020";
cell6.innerHTML = "I worked on the front-end interface and design";
}

  
// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'us-east-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:1182074a-b64e-4f77-9669-0699f419e8c7',
});

var lambda = new AWS.Lambda();

function returnGroup() {
  var name = document.getElementById('name').value;
  var Tablename;
  if (name == null || name == '') {
    Tablename = {};
  } else {
    Tablename = {
      name: name
    };
  }
  lambda.invoke({
    FunctionName: 'MemoBoat_CreateTable',
    Payload: JSON.stringify(Tablename)
  }, function(err, data) {
    var result = document.getElementById('result');
    if (err) {
      console.log(err, err.stack);
      result.innerHTML =
        '<div class="alert alert-danger">' + err + '</div>';
    } else {
      var output = JSON.parse(data.Payload);
      result.innerHTML =
        '<div class="alert alert-success">' + output + '</div>';
    }

  });
}

function showReports() {
  var name = document.getElementById('name').value;
  var Input;

  if (name == null || name == '') {
      Input = {};

  } else {
      Input = {name: name};
  }
  lambda.invoke({
    FunctionName: 'MemoBoat_AllReports',
    Payload: JSON.stringify(Input)
  }, function(err, data) {
    var result = document.getElementById('result');
    if (err) {
      console.log(err, err.stack);
      result.innerHTML =
        '<div class="alert alert-danger">' + err + '</div>';
    } else {
      var output = JSON.parse(data.Payload);
      result.innerHTML =
        '<div class="alert alert-success">' + output + '</div>';
    }
    
  });
}

function addReport() {
    var name = document.getElementById('name').value;
    var MemoBoatId = document.getElementById('MemoBoatId').value;
    var FirstName = document.getElementById('FirstName').value;
    var LastName = document.getElementById('LastName').value;
    var Role = document.getElementById('Role').value;
    var Dates = document.getElementById('Dates').value;
    var Report = document.getElementById('Report').value;
    var Input;

    function randomInt(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    var id = "0";
    id += (randomInt(1,99)).toString();
    MemoBoatId = id;
    if (name == null || name == '') {
        Input = {};

    } else {
        Input = {name: name, MemoBoatId: MemoBoatId, FirstName: FirstName, LastName: LastName, Role: Role, Dates: Dates, Report: Report};
    }
    lambda.invoke({
      FunctionName: 'MemoBoat_AddItem',
      Payload: JSON.stringify(Input)
    }, function(err, data) {
      var result = document.getElementById('result');
      if (err) {
        console.log(err, err.stack);
        result.innerHTML =
          '<div class="alert alert-danger">' + err + '</div>';
      } else {
        var output = JSON.parse(data.Payload);
        result.innerHTML =
          '<div class="alert alert-success">' + output + '</div>';
      }
      
    });
  }

function verify() {
    var name = document.getElementById('name').value;
    var Tablename;
    if (name == null || name == '') {
      Tablename = {};
    } else {
      Tablename = {
        name: name
      };
    }
    lambda.invoke({
      FunctionName: 'MemoBoat_VerifyTable',
      Payload: JSON.stringify(Tablename)
    }, function(err, data) {
      var result = document.getElementById('result');
      if (err) {
        console.log(err, err.stack);
        result.innerHTML =
          '<div class="alert alert-danger">' + err + '</div>';
      } else {
        var output = JSON.parse(data.Payload);
        result.innerHTML =
          '<div class="alert alert-success">' + output + '</div>';
      }
      
    });
  }

function deleteTb() {
    var name = document.getElementById('name').value;
    var Tablename;
    if (name == null || name == '') {
      Tablename = {};
    } else {
      Tablename = {
        name: name
      };
    }
    lambda.invoke({
      FunctionName: 'MemoBoat_DeleteGroup',
      Payload: JSON.stringify(Tablename)
    }, function(err, data) {
      var result = document.getElementById('result');
      if (err) {
        console.log(err, err.stack);
        result.innerHTML =
          '<div class="alert alert-danger">' + err + '</div>';
      } else {
        var output = JSON.parse(data.Payload);
        result.innerHTML =
          '<div class="alert alert-success">' + output + '</div>';
      }
      
    });
  }

function listTables() {
    var name = document.getElementById('name').value;
    var Tablename;
    if (name == null || name == '') {
      Tablename = {};
    } else {
      Tablename = {
        name: name
      };
    }
    lambda.invoke({
      FunctionName: 'MemoBoat_AllGroups',
      Payload: JSON.stringify(Tablename)
    }, function(err, data) {
      var result = document.getElementById('tableresult');
      if (err) {
        console.log(err, err.stack);
        result.innerHTML =
          '<div class="alert alert-danger">' + err + '</div>';
      } else {
        var output = JSON.parse(data.Payload);
        result.innerHTML =
          '<div class="alert alert-success">' + output + '</div>';
      }
      
    });
  }


  
var create = document.getElementById('createButton');
var viewReports = document.getElementById('viewReportsButton');
var reportAdd = document.getElementById('addReportButton');
var check = document.getElementById('checkButton');
var deleteTable = document.getElementById('deleteTableButton');
var list = document.getElementById('listTablesButton');


create.addEventListener("click", function(evt) {
    evt.preventDefault();
    returnGroup();
});

viewReports.addEventListener("click", function(evt) {
  evt.preventDefault();
  showReports();
});

reportAdd.addEventListener("click", function(evt) {
    evt.preventDefault();
    addReport();
    setTimeout("window.location.reload()",2000);
});

check.addEventListener("click", function(evt) {
    evt.preventDefault();
    verify();
});

deleteTable.addEventListener("click", function(evt) {
    evt.preventDefault();
    deleteTb();
});

list.addEventListener("click", function(evt) {
    evt.preventDefault();
    listTables();
});
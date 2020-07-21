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
        '<div>' + output + '</div>';
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
        '<div>' + output + '</div>';
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
          '<div>' + output + '</div>';
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
      var output = JSON.parse(data.Payload);
      new_ouput = output.toString();
      if (err) {
        console.log(err, err.stack);
        result.innerHTML =
          '<div class="alert alert-danger">' + err + '</div>';
      } 
      if (new_ouput == '[object Object]') {
        result.innerHTML =
          '<div>' + 'Group: ' + name + ' does not exist, try a different group.' + '</div>';
      }
      else {
        result.innerHTML =
          '<div>' + output + '</div>';
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
          '<div>' + output + '</div>';
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
      var result = document.getElementById('result');
      if (err) {
        console.log(err, err.stack);
        result.innerHTML =
          '<div class="alert alert-danger">' + err + '</div>';
      } else {
        var output = JSON.parse(data.Payload);
        result.innerHTML =
          '<tr>' + output + '</tr>';
      }
      
    });
  }

  function getReport() {
    var name = document.getElementById('name').value;
    var MemoBoatId = document.getElementById('MemoBoatId').value;
    console.log(name);
    console.log(MemoBoatId);
    var Tablename;
    if (name == null || name == '') {
      Tablename = {};
    } else {
      Tablename = {
        name: name, MemoBoatId: MemoBoatId
      };
    }
    lambda.invoke({
      FunctionName: 'MemoBoat_LambdaGetReport',
      Payload: JSON.stringify(Tablename)
    }, function(err, data) {
      var group = document.getElementById('tb-col-1');
      var memoId = document.getElementById('tb-col-2');
      var firstn = document.getElementById('tb-col-3');
      var lastn = document.getElementById('tb-col-4');
      var role = document.getElementById('tb-col-5');
      var date = document.getElementById('tb-col-6');
      var report = document.getElementById('tb-col-7');
      if (err) {
        console.log(err, err.stack);
        result.innerHTML =
          '<div class="alert alert-danger">' + err + '</div>';
      } else {
        var output = JSON.parse(data.Payload);
        group.innerHTML  = output[0];
        memoId.innerHTML = output[1];        
        date.innerHTML   = output[2];
        firstn.innerHTML = output[3];
        lastn.innerHTML  = output[4];
        role.innerHTML   = output[5];
        report.innerHTML = output[6];
      }
      
    });
  }

  function removeReport() {
    var name = document.getElementById('name').value;
    var MemoBoatId = document.getElementById('MemoBoatId').value;
    console.log(name);
    console.log(MemoBoatId);
    var Tablename;
    if (name == null || name == '') {
      Tablename = {};
    } else {
      Tablename = {
        name: name,
        MemoBoatId: MemoBoatId
      };
    }
    lambda.invoke({
      FunctionName: 'MemoBoat_Lambda_DeleteReport',
      Payload: JSON.stringify(Tablename)
    }, function(err, data) {
      var result = document.getElementById('tableresult');
      if (err) {
        console.log(err, err.stack);
        result.innerHTML =
          '<div class="alert alert-danger">' + err + '</div>';
      } else {
      var output = JSON.parse(data.Payload);
      var new_output = output.toString();
        result.innerHTML =
          '<div class="alert alert-success">' + new_output + '</div>';
      }
      
    });
  }

  function allReports() {
    var name = document.getElementById('name').value;
    console.log(name);
    var Tablename;
    if (name == null || name == '') {
      Tablename = {};
    } else {
      Tablename = {
        name: name
      };
    }
    lambda.invoke({
      FunctionName: 'MemoBoat_AllReports',
      Payload: JSON.stringify(Tablename)
    }, function(err, data) {
        var result = document.getElementById('tableresult');
      if (err) {
        console.log(err, err.stack);
        result.innerHTML =
          '<div class="alert alert-danger">' + err + '</div>';
      } else {
        var output = JSON.parse(data.Payload);
        result.innerHTML = output;

      }
      
    });
  }

  
var create = document.getElementById('createButton');
var viewReport = document.getElementById('getReportButton');
var reportAdd = document.getElementById('addReportButton');
var check = document.getElementById('checkButton');
var deleteTable = document.getElementById('deleteTableButton');
var list = document.getElementById('listTablesButton');
var viewAllReports = document.getElementById('allReportsButton');
var remove = document.getElementById('removeReportButton');


create.addEventListener("click", function(evt) {
    evt.preventDefault();
    returnGroup();
});

viewReport.addEventListener("click", function(evt) {
  evt.preventDefault();
  getReport();
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

singleReport.addEventListener("click", function(evt) {
  evt.preventDefault();
  getReport();
});

viewAllReports.addEventListener("click", function(evt) {
  evt.preventDefault();
  allReports();
});

function confirmReportDelete() {
  var confirm = prompt("You are about to preform an irreverisbile process, do you wish to continue?" + "\n Type Yes or No:");
  var input = confirm.toLowerCase();
  if(input == 'yes'){
    removeReport();
  }
  else
    alert('User action aborted');
}

function confirmTableDelete() {
  var confirm = prompt("You are about to preform an irreverisbile process, do you wish to continue?" + "\n Type Yes or No:");
  var input = confirm.toLowerCase();
  if(input == 'yes'){
    deleteTb();
  }
  else
    alert('User action aborted');
}






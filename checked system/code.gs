function doGet(e) {
  var template = HtmlService.createTemplateFromFile('index')
  return  template.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME)
  .setTitle("ระบบตรวจสอบสิทธิ BN-Esport")
  .addMetaTag('viewport', 'width=device-width , initial-scale=1')
}


function getCode(code) {

var ss = SpreadsheetApp.getActiveSpreadsheet();
var allss =ss.getSheets();  
for (var i in allss){
  var ws =ss.getSheets()[i];
  var data=ws.getDataRange().getDisplayValues().filter(row=>{
    return row[0]==code
    })
    Logger.log(data)
  if(data.length>0) break;
}

var stdCodesList = data.map (function(r) { return r[0]; }); 
var stdList = data.map(function(r) { 
return [`  
        <table class="table table-bordered">
        <thead class="thead-light">
         <tr>
          <th scope="col"><center>เลขประจำตัวนักเรียน</center></th>
          <th scope="col"><center>ชื่อ-สกุล</center></th>
          <th scope="col"><center>ระดับชั้น</center></th>
          <th scope="col"><center>สถานะ</center></th>
              
         </tr>
        </thead>
        <tbody>
         <tr>
          <td>${r[1]}</td> <td>${r[2]}</td> <td>${r[3]}</td> <td>${r[4]}</td>  
        </td>
         </td>
         </tr>
        </tbody>
        </table>
        `];
});

var position = stdCodesList.indexOf(code); 
if(position > -1){
return stdList[position];
} else {
return '**ไม่พบข้อมูล**';

  }
    
}

function getURL(){
return ScriptApp.getService().getUrl()
}
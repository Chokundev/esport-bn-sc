function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate()
    .setTitle("ระบบลงทะเบียน")
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
}


var ss = SpreadsheetApp.getActive().getSheets()[0]
var data = ss.getDataRange().getValues()
var id = data.map(r => r[18])  //เช็คอีเมล์ซ้ำ 


//**เพิ่มข้อมูล */
function addRecord(obj){
 var index = id.indexOf(obj.input19) 
 var output = {}
   if(index > -1){
     output.result = false
   }else{
     output.result = true
     ss.appendRow(["'"+obj.input1, "'"+obj.input2, "'"+obj.input3, "'"+obj.input4, "'"+obj.input5, "'"+obj.input6, "'"+obj.input7, "'"+obj.input8, "'"+obj.input9, "'"+obj.input10, "'"+obj.input11, "'"+obj.input12, "'"+obj.input13, "'"+obj.input14, "'"+obj.input15, "'"+obj.input16, "'"+obj.input17, "'"+obj.input18, "'"+obj.input19, "'"+obj.input20, "'"+obj.input21, "'"+obj.input22, "'"+obj.input23, "'"+obj.input24, "'"+obj.input25, "'"+obj.input26, "'"+obj.input27, "'"+obj.input28, "'"+obj.input29, "'"+obj.input30])
     data = ss.getRange(ss.getLastRow(),1,1,ss.getLastColumn()).getValues()[0]
     output.data = data

   var token = 'R6nuUnF3BEuw4U3T2HUXF9dlUmTY6j8hfPAIqcJyVin'//Token   
   var message = '\n มีคนลงทะเบียน' + '\nชื่อทีม: ' + data[15]  +  '\nอีเมล: ' + data[18]
       NotifyApp.sendNotify(token, message)
  }
  return output
}
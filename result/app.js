var a = [{ name: 'Ali', age: 21, contact: 001, institute: 'SAIMS', result: 0 },
{ name:'abd', age:22, contact:002, institute:'SAIMS', result:1 },
{ name:'anas', age:21, contact:003, institute:'SAIMS', result:0 },
{ name:'asad', age:18, contact:004, institute:'SAIMS', result:1 },
{ name:'samad', age:23, contact:005, institute:'SAIMS', result:1 },
{ name:'Abdullah', age:22, contact:006, institute:'SAIMS', result:0 },
{ name:'Aman', age:24, contact:007, institute:'SAIMS', result:0 },
{ name:'aalam', age:25, contact:8, institute:'SAIMS', result:1 },
{ name:'asif', age:31, contact:9, institute:'SAIMS', result:1 },
{ name:'amir', age:21, contact:010, institute:'SAIMS', result:0 }]

for(var i = 0; i < a.length; i++){
    a[i].RollNumber = i+1;
    if(a[i].result == 0){
        a[i].status = 'fail'
    }
    else{
        a[i].status = 'pass'
    }
}
console.log(a)
var inp = document.getElementById('rollnumber')
var dName = document.getElementById('displayname')
var dRes = document.getElementById('displayresult')
function show(){
    for(var j = 0; j < a.length; j++){
        if(a[j].RollNumber == inp.value){
            if(a[j].result){
               dName.innerHTML = a[j].name
                dRes.innerHTML = 'pass'
                
            }
            else{
                dName.innerHTML = a[j].name
                dRes.innerHTML = 'Fail'
            }
        }
    }
}
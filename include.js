var includeHtml = document.querySelectorAll("[include]");
var element,file;

for(var i=0; i < includeHtml.length;i++){
element=includeHtml[i];
fileName=includeHtml[i].getAttribute("include");
include(fileName,element)
}

function include(file,el){
var xml = new XMLHttpRequest();
xml.open("GET",file,true);
xml.onreadystatechange = function(){
if(xml.readyState == 4 && xml.status == 200){
el.innerHTML = xml.responseText;
}else {
}}
xml.send()
}
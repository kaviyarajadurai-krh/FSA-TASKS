function showTable(data){
let html="<table border=1><tr><th>ID</th><th>Name</th><th>Email</th><th>DOB</th><th>Dept</th><th>Phone</th></tr>";
data.forEach(s=>{
html+=`<tr>
<td>${s.id}</td>
<td>${s.name}</td>
<td>${s.email}</td>
<td>${s.dob}</td>
<td>${s.department}</td>
<td>${s.phone}</td>
</tr>`;
});
html+="</table>";
output.innerHTML=html;
}

function loadStudents(){
fetch("/students").then(r=>r.json()).then(showTable);
}

function sortBy(t){
fetch("/students/sort/"+t).then(r=>r.json()).then(showTable);
}

function filterDept(){
fetch("/students/department/"+dept.value).then(r=>r.json()).then(showTable);
}

function countDept(){
fetch("/students/count")
.then(r=>r.json())
.then(d=>{
let h="";
d.forEach(x=>h+=`${x.department} : ${x.total}<br>`);
output.innerHTML=h;
});
}

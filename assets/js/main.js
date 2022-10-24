let submit=document.getElementById("submit")
let info=document.getElementById("correction")
let namearr=[];
let surarr=[]
let count=2
let surname=submit.previousElementSibling;  
let name=surname.previousElementSibling
submit.addEventListener('click',function() {
  if ((surname.value.trim()>0 && name.value.trim()>0) || (name.value.length>2 && surname.value.length>4 )) {
    count++
    let tableBody=document.getElementById("table-body")
    tableBody.innerHTML+=
    `<tr>
      <th scope="row">${count}</th>
      <td>${name.value}</td>
      <td>${surname.value}</td> 
      <td class="text-center">
        <button onclick="redacte(this)" class="btn btn-success done-btn col-md-5">Redacte</button>
        <button onclick="this.parentElement.parentElement.remove()" class="btn btn-danger col-md-5">Delete</button>
      </td>
    </tr>
    `
    surname.value=""
    name.value=""
    info.style="display: none !important"
    surname.style.borderColor="#ced4da"
    name.style.borderColor="#ced4da"

  }
  else{
    surname.style.borderColor="red"
    name.style.borderColor="red"
    info.style="display: block !important"
  }
})

function redacte(x) {
  let inputsurname=x.parentElement.previousElementSibling.innerText
  let inputname=x.parentElement.previousElementSibling.previousElementSibling.innerText
  name.value=inputname
  surname.value=inputsurname
}

let submit=document.getElementById("submit")
let count=2
submit.addEventListener('click',function() {
  let surname=this.previousElementSibling;
  let name=surname.previousElementSibling
  if ((surname.value.trim()==0 && name.value.trim()==0)) {
    surname.style.borderColor="red"
    name.style.borderColor="red"
    alert("AD ve Soyad bos olabilmez!!!")
  }
  else{
    let number=document.getElementsByClassName("list-number")
    count++
    let tableBody=document.getElementById("table-body")
    tableBody.innerHTML+=
    `<tr>
      <th scope="row">${count}</th>
      <td>${name.value}</td>
      <td>${surname.value}</td> 
      <td class="text-center">
        <button onclick="this.parentElement.parentElement.parentElement.classList.toggle('active-ls')" class="btn btn-success done-btn col-md-5">Redacte</button>
        <button onclick="this.parentElement.parentElement.remove()" class="btn btn-danger col-md-5">Delete</button>
      </td>
    </tr>
    `
  }
})
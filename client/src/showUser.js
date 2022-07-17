const url = new URL(location.href);
const params = parseInt(url.searchParams.get('id'));
const baseUrl='http://localhost:8000/users/';
let users=[];
let currentUser=0;
const show=document.querySelector('#show table');
let tbl="";

try{

}
catch(err){
    
}
const xhr = new XMLHttpRequest();
    xhr.open('GET',baseUrl+ params);
    xhr.send();
    xhr.onload = function () {
        if (xhr.status === 200)
         {
            let user=JSON.parse(xhr.responseText);
            user=user.user;
             tbl+=
             `
            <tr>
             <th>${user.firstName + ' ' + user.lastName}</th>
             <th>${user.address.city +' '+ user.address.street + ' ' + user.address.number}</th>
             <th>${user.phone}</th>
             <th>${user.email}</th>
             <th>${user.hight}</th>
             <th><a href="../src/Meetings.html?id=${user.id}"><input type="button" value="Meetings"" onclick="meetingsFunc()" /></a></th>
             <th><a href="../src/userDairy.html?id=${user.id}"><input type="button" value="User Dairy"" /></a></th>
            </tr>
            `
             show.innerHTML+=tbl;
            }
            else
                 alert("Error: " + xhr.responseText);
        }
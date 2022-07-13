meetingsTable=document.getElementById('meetingsTable table');
const url = new URL(location.href);
const params = parseInt(url.searchParams.get('id'));
const baseUrl='http://localhost:8000/meetings/';
currentUser=0;
const show=document.querySelector('#meetingsTable table');
let tbl="";

const xhr = new XMLHttpRequest();
    xhr.open('GET',baseUrl+params);
    xhr.send();
    xhr.onload = function () {
        if (xhr.status === 200)
         {
             let meetings=JSON.parse(xhr.responseText);
             meetings=meetings.meetingsArr;
             meetings.forEach(u=>{
             tbl+=
             `
            <tr>
             <th>${u.weight + '  ' + u.date}</th>
            </tr>
            `})
             show.innerHTML+=tbl;
            }
            else
                 alert("Error: " + xhr.responseText);
        }


   
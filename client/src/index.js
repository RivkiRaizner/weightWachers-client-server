
const allUsers =document.querySelector('#allUsers ');
const content = document.querySelector('#content table ');
const searchSizeWeight=document.querySelector('#searchSizeWeight');
const sizeBigWeight=document.querySelector('#sizeBigWeight');
const sizeSmallWeight=document.querySelector('#sizeSmallWeight');
const t = document.querySelector('#t table ');
const bigWeek=document.querySelector('#bigWeek');
const tblBigWeights=document.querySelector('#tblBigWeights table ');
const baseUrl='http://localhost:8000/users';

 

  async function alUsers()
 {
    content.style.display = 'block';
    try{
        let users= await fetch(baseUrl);
        users= await users.json();
            let table="";
            users.users.forEach( user=>{
                let bmi=user.meeting[user.meeting.length-1].weight/Math.pow(user.hight,2);
                table+=
                `
               <tr>
                <th>${user.firstName + ' ' + user.lastName}</th>
                <th class="${bmi>25?'red':'green'}">${bmi}</th>
                <th><a href="./src/showUser.html?id=${user.id}"><input type="button" value="link to"" /></a></th>
               </tr>
               `
            })
            content.innerHTML+=table;
        }
        catch (e) { console.error(e) }        
    }
  

const sBigLess=()=>
{
    t.style.display="inLine";
    const xhr = new XMLHttpRequest();
    xhr.open('GET', baseUrl);
    xhr.send();
    xhr.onload = function () {
        if (xhr.status === 200) {
         const users=JSON.parse(xhr.responseText);
            users.users.forEach(user=>{
                const a= user['meeting'];
                 const y= a.filter((k)=>
                 { return k.weight>sizeBigWeight.value && k.weight<sizeSmallWeight.value})
                y.forEach((k)=>{    
                     t.innerHTML+=`<tr><td>${k.date}</td><td>${k.weight}</td></tr>`;
                });
             })
}  
}   
}
var bigCurrentWeight=[];
const weekBig=()=>
{
    tblBigWeights.style.display = 'block';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', baseUrl);
    xhr.send();
    xhr.onload = function () {
        if (xhr.status === 200) {
         const users=JSON.parse(xhr.responseText);
          bigCurrentWeight=users.users.filter(user=>{
            return user.meeting[user.meeting.length-1].weight>user.meeting[user.meeting.length-2].weight

         });
         tblBigWeights.innerHTML=
         `
         <tr>
         <th>userName</th>
         <th>lastWeight</th>
         <th>currentWeight</th>
         </tr>
         `;


         bigCurrentWeight.forEach(user=>{

                    tblBigWeights.innerHTML +=
                    `
                    <tr>
                    <th>${user.firstName} ${user.lastName}</th>
                    <th>${user.meeting[user.meeting.length -2].weight}</th>
                    <th>${user.meeting[user.meeting.length -1].weight}</th>
                    </tr>
                    `;
                });
}  
}   
}
 


const loginName=document.getElementById('loginName');
const loginTz= document.querySelector('#loginTz');
let users=[];
const xhr = new XMLHttpRequest();
    xhr.open('GET', '../users.json');
    xhr.send();
    xhr.onload = function () {
        if (xhr.status === 200)
         {
             users=JSON.parse(xhr.responseText);

        }
    }
    const checkLogin=()=>{
       if((loginName&&loginTz))
        {
            if(parseInt(users["manager"][0].id)===parseInt( loginTz.value)&&(users["manager"][0].firstName+' '+users["manager"][0].lastName)===loginName.value)
                location.href="/index.html";
            else
            {
            for (let i = 0; i < users["users"].length; i++)
            {  if (users["users"][i].firstName===loginName.value && users["users"][i].id===loginTz.value) 
                {
                    location.href=`/src/showUser.html?id=${users["users"][i].id}`;  
                    return;
                }
            //
                if(i>users["users"].length-1)
                {
                    alert("Please enter your name and tz to login");
                    loginName.value=loginTz.value="";
                }
               
             }
            }
             
            
             
        }
           
            
    }
    // let productname = document.getElementById("productName").value;
    let result = fetch(
      "https://data.gov.il/api/3/action/datastore_search?resource_id=c3cb0630-0650-46c1-a068-82d575c094b2&limit=4630",
    //   options
    )
      .then((response) => response.json())
      .then((response) => {
        const data = response.result.records;
        console.log(data);
        return data;
      })
    
   

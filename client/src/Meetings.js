meetingsTable = document.getElementById('meetingsTable table');
const url = new URL(location.href);
const params = parseInt(url.searchParams.get('id'));
const baseUrl = 'http://localhost:8000/meetings/';
currentUser = 0;
const show = document.querySelector('#meetingsTable table');
let tbl = "";
window.onload = (event) => {
    
};
    let meetings=[]
    meetingsFunc();
    async function meetingsFunc(){
    try {
        meetings = await fetch(baseurl + params, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json; charset=UTF-8"
            }
        });
        meetings=await meetings.json();
        meetings = meetings.meetingsArr;
        meetings.forEach(u => {
            tbl +=
                `
            <tr>
             <th>${u.weight + '  ' + u.date}</th>
            </tr>
            `})
        show.innerHTML += tbl;
    
    }
    catch (err) {
        alert("Error: " +err);
    }
    
    

}


const url = new URL(location.href);
const id = parseInt(url.searchParams.get('id'));
const breakfast = document.getElementById('breakfast');
const lunch = document.getElementById('lunch');
const supper = document.getElementById('supper');
const br = document.createElement('br');
let userDairy = [];
const allFoodsArr = {
  "breakfast": [],
  "lunch": [],
  "supper": [],
}
let food = "";
let obj;
let inner1;
let x;
const addDay = () => {
  const modal = document.getElementById("myModal");

  // Get the button that opens the modal
  const openDay = document.getElementById("openDay");

  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal 
  modal.style.display = "block";


  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

const addFood = (w) => {
  inner1 = w.innerHTML;
  f = document.createElement('input');
  f.setAttribute('type', 'text');
  f.setAttribute('class', 'food');
  w.append(f);
  w.append(br);
}


const submitFood = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `http://localhost:3000/${id}`);
  xhr.onload = () => {
    if (xhr.status != 200) {
      alert(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
      alert(`Success ${xhr.status}`);
      userDairy = JSON.parse(xhr.response);
      alert(`User ${xhr.responseText}`);
    }
    let objId = userDairy[userDairy.length - 1]?.id;
    if (!objId) {
      objId = 1;
    }
    else {

      objId++;
    }
    let date = document.getElementById('dateDay').value;
    let allFoods = document.querySelectorAll('.food');
    allFoods.forEach((bf) => {
      parent = bf.parentElement.id;
      allFoodsArr[parent].push(bf.value);
      // x===`breakfastFoodsArr`?breakfastFoodsArr.push(bf.value) :x==="lunchFoodsArr"?lunchFoodsArr.push(bf.value) :supperFoodsArr.push(bf.value);  
    })


    obj = { id: objId, date: date, ...allFoodsArr };
    userDairy.push(obj);
    fetch(`http://localhost:3000/${objId}`
      , {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
          'Content-Type': "application/json; charset=UTF-8"
        }
      }).then(() => alert(userDairy)).then(() => alert("tamar"));
  }
  xhr.send();
}

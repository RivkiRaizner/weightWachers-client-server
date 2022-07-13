const foodToSearch=document.querySelector('#foodToSearch');
const tblFoodSearch=document.querySelector('#tblFoodSearch table');
let tableProduct="";
let data;
const options = {
    method: 'GET',
    headers: {
    }
};
//fetch to get all products
let result=fetch("https://data.gov.il/api/3/action/datastore_search?resource_id=c3cb0630-0650-46c1-a068-82d575c094b2&limit=4630",options
)
.then((response)=>response.json())
.then((response)=>
{
    data=response.result.records;
    console.log(data);
    return data; 
});
//search function to get all productsFound
 const searchFood=()=>
{
    tblFoodSearch.innerHTML="";
    tableProduct=
`
<tr>
<th>product name</th>
<th>total fat</th>
<th>carbohydrates</th>
<th>energy</th>
<th>poly unsaturated fat}</th>
</tr>`;
let productsFound=data.filter((food)=>{
return food.shmmitzrach.includes(foodToSearch.value);
});

if(productsFound.length==0)
alert("Not Found Such Products");
else
{

productsFound.forEach((food)=>
{

tableProduct+=
`
<tr>
<th>${food.shmmitzrach}</th>
<th>${food.total_fat}</th>
<th>${food.carbohydrates}</th>
<th>${food.food_energy}</th>
<th>${food.poly_unsaturated_fat}</th>
</tr>

`
})
tblFoodSearch.innerHTML+=tableProduct
;
}
}
const clearSearch=() => {
    foodToSearch.value = '';
    tblFoodSearch.innerHTML = '';
}



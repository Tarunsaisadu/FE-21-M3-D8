

let prodlist = document.querySelector('.product-list');
let output="";

let url ='https://striveschool-api.herokuapp.com/api/product'

// first i should get the products from url 
fetch(url, {
method:'GET',
//  body:JSON.stringify(prodlist),
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjk1NjJkNTI2MjAwMTViNmRjOWMiLCJpYXQiOjE2MjkyODg3OTAsImV4cCI6MTYzMDQ5ODM5MH0.ivWxZ_FCf8TlroN8gvKE10oDHyrNm9tebGPCl5bJ7Jk"
}
})
.then(response => {
    return response.json()})
.then((data)=>data.forEach(pro => {
         output +=`
         <div class="card" mt-4 col-md-2 bg-light>
           <img src="${pro.imageUrl}" class="card-img-top" alt="..." />
           <div class="card-body">
             <h4>${pro.name}</h4>
             <h5>barnd</h5>
             <h6>price</h6>
          </div>
          </div>`;
        }));

        // prodlist.innerHTML+=output;
 







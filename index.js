 const getData = () => {
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
        data.forEach(item =>{
            document.querySelector("main").innerHTML +=
            `
            <div class="card" style="width: 18rem;">
            <img src= ${item.image}>
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">${item.description}
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
            `
        })
    })
    .catch(err => console.log(err))


 }
 getData()
  
 let input = document.querySelector('.search input');
 
 input.onkeyup = function (){
  let val = this.value;
 }

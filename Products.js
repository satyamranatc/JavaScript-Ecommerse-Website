let main = document.getElementsByTagName("main")[0];
let CategoryInpt = document.getElementById("CategoryInpt");
let PriceFilter = document.getElementById("PriceFilter");
let DisplayPrice = document.getElementById("DisplayPrice");
let AllData = [];


PriceFilter.addEventListener("change",(e)=>{
    let FilterPrice = e.target.value;
    DisplayPrice.innerHTML = `<span>Price ${FilterPrice}</span>`
    let FilteredData = AllData.filter((e)=>e.price <= FilterPrice);
    
    Display(FilteredData);
})

CategoryInpt.addEventListener("change",(e)=>{
    let SelectedCategory = e.target.value;

    if (SelectedCategory == "All")
    {
        Display(AllData);
    }
    else if (SelectedCategory == "Mens")
    {
        let FilteredData = AllData.filter((e)=>e.category == "men's clothing");
        Display(FilteredData);
    }
    else if (SelectedCategory == "Women")
    {
        let FilteredData = AllData.filter((e)=>e.category == "women's clothing");
        Display(FilteredData);
    }
    else if (SelectedCategory == "Tech")
    {
        let FilteredData = AllData.filter((e)=>e.category == "electronics");
        Display(FilteredData);
    }
})



function Display(Data)
{
    main.innerHTML = "";
    Data.map((e)=>{
        main.innerHTML += `
            <div class="ProductCard">
            <img src=${e.image} alt="">
            <div class="ProductContent">
                <h2>${e.title}</h2>
                <p>Price: 
                    <del>${e.price*2}</del>
                    <span>${Math.round((e.price*2)*0.8)}$</span>
                    <b>20% Off</b>
                </p>
               <div class="Btns">
                <button>Buy Now</button>
                <button>Add To Cart</button>
               </div>
            </div>
        </div>

        
        `
    })
}



function GetData()
{
    fetch("https://fakestoreapi.com/products")
    .then((Res)=>{
        return Res.json();
    }).then((Data)=>{
        console.log(Data)
        AllData = Data;
        Display(Data)
    })
}

GetData()
let Main = document.getElementsByTagName("main")[0];
let allData;


let DropDown = document.getElementById("DropDown");

DropDown.addEventListener("change",(e)=>
{
    let SelectedCategory = e.target.value;

    if(SelectedCategory == "All")
    {
        console.log("allData",allData)
        let NewProducts = allData;
        display(NewProducts)
        console.log(NewProducts)
    }
    else if(SelectedCategory == "Mens")
    {
        console.log("allData",allData)
        let NewProducts = allData.filter((e)=>e.category == "men's clothing")
        display(NewProducts)
        console.log(NewProducts)
    }
    else if(SelectedCategory == "Women")
    {
        console.log("allData",allData)
        let NewProducts = allData.filter((e)=>e.category == "women's clothing")
        display(NewProducts)
        console.log(NewProducts)
    }
    else if(SelectedCategory == "Tech")
    {
        console.log("allData",allData)
        let NewProducts = allData.filter((e)=>e.category == "electronics")
        display(NewProducts)
        console.log(NewProducts)
    }

})


function display(data)
{
    Main.innerHTML = ""
    data.map((e)=>
    {
        Main.innerHTML += `
          <div class="ProductCard">
            <img src=${e.image} alt="">
            <div class="ProductContent">
                <h2>${e.title}</h2>
                <p>Price: 
                    <del>${e.price}</del>
                    <span>${Math.round(e.price*0.8)}$</span>
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



async function GetData()
{
    let Res = await fetch("https://fakestoreapi.com/products");
    let Data = await Res.json();
    allData = Data;
    console.log(Data)
    display(Data);
}

GetData()
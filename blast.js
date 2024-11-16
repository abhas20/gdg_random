let df= document.querySelector("#first");
let ef=document.querySelector(".quote");
df.addEventListener("click",()=>{
    Quotes();
})

const Quotes = async ()=>{
    let promise = await fetch(" https://dummyjson.com/quotes");
    let need= await promise.json();
    let output =need.quotes;  
    const i= Math.floor(Math.random()*30);  
    ef.innerText=output[i].quote;
    console.log("clicked")

}
let df1=document.querySelector("#sceond");
let ef1=document.querySelector("img");
df1.addEventListener("click",()=>{
    gifs();
})
const gifs=async ()=>{
        let tag = "anime";
        let apikey = "7C534T1aRgYyku3d6Z4FRewNIsXhVsRl";
        let url_link = "https://api.giphy.com/v1/gifs/random?api_key="+apikey+"&tag="+tag
        gif = await fetch(url_link)
        gif = await gif.json()
        ef1.src=gif.data.images.original.url;
        console.log(gif.data.images.original.url)
}


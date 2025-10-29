// added new feature--button
// added new feature --form
let thnx=document.getElementById("thnx");
let btn=document.getElementById("one");
btn.addEventListener("click",()=>{
    alert(`The button was clicked \n${new Date}`);
    setTimeout(() => {
        thnx.innerHTML="Thank You !!";
    }, 1000);
    setTimeout(() => {
        thnx.innerHTML="";
    }, 6000);
});

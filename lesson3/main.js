const onClickHandler=(e)=>{
    console.log(e.currentTarget);
}
const onClickHandler1=()=>{
    console.log("sdfs1");
}
const sm=document.getElementById("small")
const sm1=document.getElementById("big")
const sms=document.getElementsByTagName("div")
sm.onclick=onClickHandler
sm1.onclick=onClickHandler1
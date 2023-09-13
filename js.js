const slider=document.getElementById("range");
const sun=document.getElementById("sun");
const blevel=document.getElementById("inbcircle");
const bulb1=document.getElementById("bulb");
const bulb2=document.getElementById("bulb2");
const light=document.getElementById("visible");
const book=document.getElementById("book");
slider.addEventListener('input',function()
{
    const val=slider.value;
    sun.style.rotate=`${val*1.8}deg`;
    sun.style.filter=`brightness(${val}%)`;
    blevel.style.width=`${val}%`;
    bulb1.style.opacity=`${val/100}`;
    light.style.opacity=`${val/100}`;
    book.style.filter=`brightness(${val}%)`;
    if(val==0)
    {
        bulb2.style.backgroundColor=`rgba(68,66,66,0.192)`;
        bulb2.style.boxShadow="none";
    }
    else
    {
        bulb2.style.backgroundColor=`rgba(255,213,0,${val/100})`;
        bulb2.style.boxShadow=`0 0 min(10vw,10vh) rgba(255,251,0,${val/100})`;
    }
});
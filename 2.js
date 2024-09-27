let ptnopen=document.getElementById('open')
let ptnclose=document.getElementById('close')
let con=document.querySelector('.container')
let m=document.getElementById('m')
ptnopen.onclick=function(){
    con.classList.remove('hide')
    ptnclose.classList.remove('hide')
    this.classList.add('hide')
}
ptnclose.onclick=function(){
    console.log('mmm')
    con.classList.add('hide');
    this.classList.add('hide')
    ptnopen.classList.remove('hide')
}
onload=function(){
m.focus()

}
m.oncontextmenu=function(){
    m.blur();
}
//bom
//location.assign('hgdgg')
console.log(location.href)
let bb=document.getElementById('om')
//bb.onclick=function(){
  //  location.assign(https://www.facebook.com/me/)
//}
let nm=setTimeout(function(){console.log('jhgkjhf')},1000)
//clearTimeout(nm)
let i=1
let mmom=setInterval(function(){
    console.log(i++)
if(i==5){clearInterval(mmom)}
},1000)
onscroll=function(){
if(scrollY >400){
    bb.style.display='block'
}
else{
    bb.style.display='none'   
}
}
bb.onclick=function(){
    scroll({
        left:0,
        top:0,
        behavior:"smooth"
    });   
}

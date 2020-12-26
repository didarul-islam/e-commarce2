var nav=document.querySelector('.myNav')
var toggle=document.querySelector('.toggle')
var btn=document.getElementsByClassName('dd-btn')
var menu=document.getElementsByClassName('dd-menu')


var navStatus=true;
toggle.addEventListener('click',function(){
  if(navStatus==true){
    nav.style.left='0rem';
    toggle.style.left='25rem';
    navStatus=false;
  }else if(navStatus==false){
    nav.style.left='-25rem'
    toggle.style.left='1.5rem'
    navStatus=true
  }
}) 

function reset(){
  for(var a=0; a<menu.length; a++){
    menu[a].classList.add('hide');
  }
}
reset();

for(let i=0;i<btn.length;i++){
  btn[i].addEventListener('click',function(){
    menu[i].classList.toggle('hide')
  })
}
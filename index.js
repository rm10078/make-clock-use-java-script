
let ho;
let mi;
let se;
let day;
let mun;
let yer;
// let b;
setInterval(() => {
a=new Date();
b=a.toLocaleDateString()
mun=b.slice(0,1);
day=b.slice(2,4);
yer=b.slice(5,9);
ho=a.getHours();
mi=a.getMinutes();
se=a.getSeconds();
document.getElementById('h').innerHTML='H:'+ho;
document.getElementById('m').innerHTML='M:'+mi;
document.getElementById('s').innerHTML='S:'+se;
document.getElementById('da').innerHTML=day+':D';
document.getElementById('ma').innerHTML=mun+':M';
document.getElementById('sa').innerHTML=yer+':Y';
}, 1000);
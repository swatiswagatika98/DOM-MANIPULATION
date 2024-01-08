let parent=document.getElementById('header');
let h2=document.createElement('h3');
let text=document.createTextNode('Buy high quality organic fruits online');
h2.appendChild(text);
h2.style.fontStyle="italic";
parent.appendChild(h2)
let fruit=document.getElementById('basket-heading');
let para=document.createElement('p');
para.setAttribute('id','fruits-total')
let txt=document.createTextNode('Total fruits:4')
para.appendChild(txt)
fruit.appendChild(para);
console.log(fruit)
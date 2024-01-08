const ul =document.getElementsByClassName("fruits")[0];
const thirdEle  = ul.children[2];
thirdEle.style.backgroundColor="yellow";
// ul.style.fontWeight = "bold";
// ul.children.forEach(ele=>{
    //ele.style.fontWeight = "bold"
// })
const lis =document.getElementsByClassName("fruit");
console.log(lis)
for (const ele of lis){
  console.log(ele)
     ele.style.fontWeight = "bold"  
}
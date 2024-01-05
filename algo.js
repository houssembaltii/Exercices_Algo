//Exercice 1:
// const algo =(chaine,n)=>{
//   // while (n>0){
//   //   console.log(chaine)
//   //   n--;
//   // }
//  for (let i=0;i<n;i++)
//    console.log(chaine)
// }
// algo("Je suis dans la boucle !",2)
//Exercice 2
// const algo =(n)=>{
//   for(let i=1;i<n+1;i++)
//     console.log(i)
// }
// algo(50)
//Exercie 3:
// const algo =(n)=>{
//   for(let i=0;i<=10;i++){
//     console.log(`${i}*${n}=${n*i}`)
//   }
// }
// algo (4)

//Exercice 4:
// const algo =(n)=>{
//   let somme=0;
//   let chaine ="";
//   for(let i=1;i<n+1;i++)
//    {
//      somme+=i
//      if(i!==n)
//      chaine+=`${i}+`
//    }
//   chaine+=`${n}=${somme}`
//  console.log(chaine)

// }
// algo(4)
//Exercice 5:
// const algo =(n)=> {
//   for(let i=n+1;i<n+11;i++)
//     console.log(i)
// }
// algo(5)
//Exercice 6:
//do {
// n= parseInt(prompt("positive number")); 
//}
 // while (!(n%2===0) || (n<0) || (n===undefined))
// console.log(n)
//Exercice 7:
// Rq:j'ai vu le docs sur developer mozilla pour faire synchroniser le msg boom avec la fin de décomptage 
// const algo = async()=>{
//   // for (let i=60;i>=0;i--)
//   //   {console.log(i)}
//   for (let i=2;i>=0;i--)
//     {
//     for (let j=60;j>=0;j--)
//      { 
//        console.log(`min:${i}---sec=${j}`)
//      }
//     }
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       // Other things to do before completion of the promise
//       //console.log("Did something");
//       // The fulfillment value of the promise
//       resolve('Boom');
//     }, 100);
//   });
   
//   }
// algo().then((msg)=>console.log(msg))
//Exercice 8 : 
// const algo = (min,max)=>{
//    let mystery=Math.floor(Math.random() * ((max+1) - min)) + min;
//   console.log(mystery)
//   	let guess=-1;
//   let number=0;
//   do{
//   guess=parseInt(prompt("guess"))
//   number++;
//   }
//   while(guess!==mystery)
//     console.log("u needed ",number ,"tries to get it right" )
// }

// algo(1,10)
//Exercice 9:


// const algo =()=>{
// var n =parseInt(prompt("type a number"))
// for (let i=1;i<n+1;i++)
//   console.log("*".repeat(i))
// for (let i=n-1;i>0;i--)
//   console.log("*".repeat(i))
// }
// algo()
//Exercice 1:
// const algo=(tab)=>{
// tab.forEach((element)=>{
//   console.log(element)
// })
// }
// algo(["houssem","tom","bearstudio"])
// //Exercice 2:
// const algo=(tab)=>{
// //sur 2
//   tab.forEach((element) => {
//   console.log(element.slice(0,element.length/2))
//    console.log(element.slice(element.length/2,element.length))
//   });
// console.log("***********************")
//   //reverse
// tab.reverse().forEach((element) => console.log(element));


// }
            
// algo(["beja","tunis","london","bearstudio"])
//Exercice 3:
// const algo =(tab)=>{
//   let moyenne=0;
//   tab.forEach( (note)=>{
//     moyenne+=note
//   } )
//   console.log("moyenne de classe",moyenne/tab.length)
// }

// algo([20,10,15,15,5,5])

//Exercice 4:
// const algo=(tab1,tab2)=>{
//  let somme_1=0;
//  let somme_2=0;
//  tab1.forEach( (el,index)=>{
//    somme_1+=index
//  })
//  // tab2.forEach( (el,index) =>{ 
//  // 	somme_2+=index
//  // })

//  for(let i=tab2.length-1;i>=0;i--){
  
//   somme_2+=tab2.indexOf(tab2[i])
//   }
//   console.log("somme total",somme_1+somme_2)
// }
// algo([1,2,3,4,5],[6,7,8,9,10])
//Exercice 5:
// const algo =(tab1,tab2)=>{
//   let p=1;let d=(tab1.length)-1
//   console.log(d)
// for (let i=0;i<tab1.length;i++){
// 	if(i==0)
//     tab2[i]=tab1[i]
//   	else if (i%2==0)
//     {
//       tab2.push(tab1[p])
//   p++;
//     }
//   else
//     {
//      tab2.push(tab1[d])
//   	d--;
// }
  
// }
//  console.log(tab2)
  
// }

// algo([1,2,3,4,5],[])
// //Exercice 6:
// const algo =(tab1,tab2)=>{
  
// tab1.sort( (a,b)=>a-b).forEach( (el)=>{
// tab2.push(el)
// })
//   console.log(tab2)
// }
                               
// algo([5,4,3,2,1],[])
// //Exercice 7:
// const algo =(tab1)=>{

//   tab1.sort( (a,b)=> a-b)
//   console.log(tab1[tab1.length-1])
// }

// algo([5,4,3,2,444,1,66])
// //Exercice 8:
// const algo = (tab1)=>{
//   for ( let i =0;i<tab1.length;i++ ){
//     let ligne=" ";
//     let col = "";
//    for (j =0;j<tab1[i].length;j++ ){
//     ligne+=tab1[i][j]
//     col+=tab1[j][i]
//   }
  
//   console.log(`${ligne}/${col}`)
    
// }

//   }
 
// algo([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//      [1, 3, 2, 4]
// ])
//Exercice 9:
// const algo = (tab1)=>{
 
//   for ( let i =0;i<tab1.length;i++ ){
//      let ligne="";
// 	for (let j=0;j<tab1[i].length;j++){
//     	 if(i%2===0){
//        ligne+=tab1[i][j]
//         }
//      else
//      {
//        if(j!=tab1[i].length-1)
//        ligne=ligne+tab1[i][j]+ "\xa0".repeat(tab1[i].length-1)
//       else
//       {

//           ligne=ligne+tab1[i][j]
//       }

//      }
//     }   
//      console.log(ligne);
//   		}
 
// }
// algo([
//     ["+---","+---+","---+"],
//     ["|" ,"|" ,"|" ,"|"],
//     ["+---","+---+","---+"],
//     ["|" ,"|" ,"|" ,"|"],
//     ["+---","+---+","---+"],
//     ["|" ,"|" ,"|" ,"|"],
//   	["+---","+---+","---+"],
// ])
// // //Exercice 10:
// const algo = (tab1)=>{
//   for ( let i =0;i<tab1.length;i++ ){
//     let s=0;
//    for (j =0;j<tab1[i].length;j++ ){
//     s+=tab1[i][j]     
//   }
//   console.log(`somme ligne ${i+1}: ${s}`)
  
    
// }

//   }
 
// algo([
//      [9, 3, 1],
//      [3, 6, 8, 3],
//     [5, 10],
//      [1]
// ])
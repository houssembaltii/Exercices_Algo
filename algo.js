//Exercice 8 :
// const algo=(jour,heure)=>{
//   if (jour==="Dimanche" || heure<8 || heure>19)
//     console.log("les magasins sont fermés")
//   else
//     console.log("les magasins sont ouverts")

// }
// algo("Lundi",12)
//Exercice 9:
// const algo = (a,b,c)=>{
//   a=b+c;  //a=13
//   if (a>b) //vrai
//     a=8 //a=8
//   if (a<c) //faux
//     b=4
//  if ( c>b && a>b){ //vrai
//     a=7
//     b=-2
//   }
//   else{
//     c=1
//     a=3
//   }
//   if (!(a>b)) //faux
//     b=2*a
//   console.log(a,b,c) //a=7,b=-2,c=8
// }
// algo(2,5,8)
// //resultat : 7,-2,8 ,(d : n'est pas traité )
//Exercice 10:
// const algo = (a,b,c)=> {
//   if (a>b) //faux
//     c=3
//   else // vrai
//     a=4
//   if (c>=a || b>=a) // c>=a vrai
//     {
//       a+=3
//       b-=2
//       c*=2
      
//     }
//   else
//     {
//       a=4
//       b=3
//     }
//   console.log(a,b,c) //7,1,10
// }
// algo(3,3,5)
//Exercice 11:
// const algo = (heure,minute,seconde)=> {
//  if(!seconde)
//     console.log(`${heure}h${minute+1}`)
//   else{
//     if (heure===7 && minute===8 && seconde==6)
//        console.log(`0${heure}:0${minute}:0${seconde} secondes`)
//     else
//       console.log(`${heure}h${minute} et ${seconde+1}`)
//   }
    
// }
// algo(7,8,6)
//Exercice 12: 
// const algo =(sexe,age)=>{
//   if(sexe==="homme" && age>20)
//     console.log("les hommes paient l'impot")
//   else if (sexe==="femme" && age>18 && age<35)
//     console.log("les femmes paient l'impot ")
//   else
//     console.log("les autres ne paient pas l'impot")
// }
// algo("femme",34)
//Exercice 13:
// const algo=(n)=>{
//   if(n<=10)
//     console.log("facture :",n*0.1)
//   else{
//     if(n-10<=20) 
//       console.log("facture : ",0.1*10+(n-10)*0.09)
//     else
//       console.log("facture",0.1*10+20*0.09+(n-30)*0.08)
//   }
    
// }
// algo(31)
//Exercice 14:
// const algo=(jour,mois,annee)=>{
//   if(jour<=0 || mois<=0 || jour>31 ||mois>12)
//     console.log("date non valide")
//   else{
//     if (mois===2){
//       if ((annee%4===0 && !(annee%100==0))||(annee%400===0 && annee%4===0) )//année bisextile
//         {
//          if(jour<=29)
//            console.log("date valide")   
//           else
//             console.log("data non valide")
//         }
//       else if (jour<=28)
//         console.log("date valide")
//       else
//         console.log("date non valide")
//     }
//    else if ([4,6,9,11].includes(mois)){    
//       if (jour<=30)
//         console.log("date valide")
//      else 
//        console.log("date non valide")
//    }
//     else
//       console.log("date valide")
  
      
//        }
    
// }
// algo(29,2,2024)
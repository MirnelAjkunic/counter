let result = (document.getElementById('result'))
let num = 0

function button1() {
    num++
    result.innerHTML = num
}
function button2(){
    num--
    result.innerHTML = num
}
function button3(){
    num+= 10
    result.innerHTML = num
}
function button4(){
    num-=10
    result.innerHTML = num
}
function button5() {
    num+= 100
    result.innerHTML = num
}
function button6() {
    num-= 100
    result.innerHTML = num
}
function button7() {
    num *= 0
    result.innerHTML = num
}
function button8() {
    num *= 2
    result.innerHTML = num
}

// // let x = 5 

// // x > 3 ? console.log('ja'):console.log('nein');

// // if ( x > 3) {
// //     console.log('ja');
// // } else {
// //     console.log('nein');
// // }

// // let punkte = 85
// // document.getElementById('resultone').innerHTML='Du' + ' '+ (punkte > 50 ? 'hast bestanden' : 'bist durchgefallen')

// // if (punkte > 50) {
// //     console.log('Bestanden');
// // } else {
// //     console.log('Durchgefallen');
// // }

// //  punkte = 40
// //  document.getElementById('resultstwo').innerHTML ='Dein Ergebnis ist :' + (punkte >50 ? punkte >= 90 ? 'Excellent':'Durschnitt':'Du muss dich verbessern')

// // if (punkte > 50) {
// //     if (punkte >= 90) {
// //         console.log('Excellent');
// //     } else {
// //         console.log('Durchschnitt');
// //     } 
// // } else {
// //     console.log('Du muss dich verbessern');
// // }

// // let obst ;

// // obst = 'apfel'

// // switch (obst) {
// //     case 'Bananen':
// //         document.write('Der Preis ist 2 Euro')
// //         break;
// //         case 'Orangen':
// //             document.write('der Preis ist 1 Euro')
// //             break


// //     default:
// //         document.write('Habe ich nicht')
        
// // }

// // if(obst == 'bananen' || obst == 'apfel'){
// //     document.write('der preis ist 200 euro')
// // } else if (obst == 'orangen') {
// //     document.write('der Preis ist 100 euro')
// // } else {
// //     document.write('habe ich nicht')
// // }

// let day ;

// switch(new Date().getDay()) {
//     case 0 :
//         day:'Sonntag'
//         break
//         case 1:
//             day = 'Montag'
//             break
//             case 2 :
//                 day = 'Dienstag'
//                 break
//                 case 3:
//                     day ='Mittwoch'
//                     break
//                     case 4:
//                         day = 'Donnerstag'
//                         break
//                         case 5:
//                             day = 'Freitag'
//                             break
//                             case 6 :
//                                 day = 'Samstag'
//                                 break
// }

// document.getElementById('day').innerHTML = day 

// function fruitSelect(){
//     let obst
//     let listeObst =document.getElementById('liste').value

//     switch(listeObst){
//         case 'Orangel' :
//             obst = '1€/Kg'
//             break
//             case 'Äpfel':
//                 obst='1,50€/Kg'
//                 break
//                 case 'Bananen':
//                     obst='2€/KG'
//                     break
//                     case 'Kirschen':
//                         obst = '3€/Kg'
//                         break
//     }
// document.getElementById('result').innerHTML = obst 

// }





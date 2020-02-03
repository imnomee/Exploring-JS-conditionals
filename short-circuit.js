//console.log(3 === 3 && 'a' === 'a');
//console.log(3 === 3 && 'cow');
//console.log(3 === 3 && 'cow' && 'chicken');
//console.log(3 === 3 && false && 'chicken');
//3 === 3 && false && console.log('chicken');//not shown in console. it cancels aftter false
//3 === 3 && 'cow' && console.log('chicken');

//console.log(3 === 3 || 'a' === 'a');
//console.log(3 === 3 || 'cow');
//console.log(3 === 3 || 'cow' || 'chicken');
//console.log(3 === 3 || false || 'chicken');
//3 === 3 || false || console.log('chicken');//not shown in console. it cancels aftter false
//3 === 3 ||
//  'cow' || console.log('chicken');

//function isAdult(age){
//
//  if(age && age>=18){
//    return true;
//  } else {
//    return false;
//  }
//}
//
//function isAdult(age){
//
//  return age && age>=18;
//
//}
//
//console.log(isAdult(34));

function count(start) {
    start = start || 1;
    for (let i = start; i <= 5; i++) {
        console.log(i);
    }
}

count();

function greet(name = "lolz") {
    name && console.log("hello " + name);
}

greet("noman");
greet();

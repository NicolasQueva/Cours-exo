// Boucle for 
for (let index = 0; index < 10; index++) {
    console.log(index);

}

//break
console.log("--------------------");
for (let j = 1; j <= 10; j++) {
    console.log(j);
    if (j == 5) {
        break;
    }
}

//continue
console.log("--------------------");
for (let k = 0; k <= 10; k++) {
    if (k ==5){
        continue
    }
    console.log(k);
}

// Boucle Tant que ...(While)
console.log("--------------------");
let i = 1 

while(i <= 10) {
    console.log(i);
    i++
}
//Faire .... Tant que (do ... while)
let j = 1

do {
    j++
    console.log(j)
} while( j<= 10)
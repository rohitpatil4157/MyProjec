// NodeJs User Input, Step 0 or not needed


const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

//Step 1 : Its like if else : "do this or not"
let promice = new Promise((resolve, reject) => {

    readline.question(`What's the String : `, string => {
        let ReveseStr = string.split('').reverse().join('')
        if (string.toLocaleLowerCase() === ReveseStr.toLocaleLowerCase()) {
            resolve(`${string} === ${ReveseStr}`)
        }
        else {
            reject(`${string} !== ${ReveseStr}`)
        }
        readline.close();
    });
})
function palindrome() {

    //Step 2 : Test it
    promice.then((Success_msg) => {
        console.log("Promise Says: ", Success_msg)

    }).catch((Erorr_msg) => {
        console.log("Promise Says: ", Erorr_msg)

    })

}

for (let i = 0; i <= 10; i++) {

    palindrome()
}
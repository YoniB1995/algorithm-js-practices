
// const handlePassword = (password) => {
//     if(password.length >8) {
//         const error = new Error('too long password');
//         throw error;
//     }

//     this.password = password;
//     console.log(this.password)
// }

// try {
//     handlePassword("1212121212")
// } catch(error){
//     console.log(error)
// }


// const handleNum = (a,b) => {
//     if(typeof(a) !== "number" || typeof(b) !== "number" ) {
//         const error = new Error("This argument is not a number");
//         throw error;
//     }
//     console.log(a+b)
// }

// try {
//     handleNum("8",9)
// } catch (error) {
//     console.log(error)
// }


const nonNegativeNum = (num) => {
    if(num<0){
        const error = new Error("number is negative");
        num = 0;
        throw error;
    }

    return num;
}

try {
    console.log(nonNegativeNum(-4))
} catch (error) {
    
    console.log(error);
}
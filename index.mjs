

const countdownInput = process.argv[2]; 

if(!countdownInput) {
    console.log('You need to enter a time.');
    process.exit(1);
}


console.log(countdownInput);

let countdown = parseInt(countdownInput, 10);

const timer = setInterval(() =>{
    console.log(countdown);
    countdown --
    if (countdown === 20) {    
        console.log("Beep! Beep! Beep! Your Done!" )
        process.exit(0);
    }
}, 1000);
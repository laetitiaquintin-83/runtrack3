function fizzbuzz() {
    const div = document.getElementById('result');

    for (let i = 1; i <= 151; i++) {
        let output;

        if (i % 3 === 0 && i % 5 === 0) {
            output = "FizzBuzz";
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            output = "Fizz";
            console.log("Fizz");
        } else if (i % 5 === 0) {
            output = "Buzz";
            console.log("Buzz");
        } else {
            output = i;
            console.log(i);
        }

        if (div) {
            div.innerHTML += `<span style="display:inline-block; margin:5px; padding:5px; background:#f0f0f0;">${output}</span>`;
        }
    }
}

fizzbuzz();

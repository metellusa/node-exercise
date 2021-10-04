#!/usr/bin/env node

const program = require('commander');

    program
      .version('0.0.1')
      .description('Script to print fibonacci and prime numbers in parallel given number n')
	  .requiredOption('-i, --input <required>', 'An integer input must be entered', parseInt);

	program.parse();

    let printFibonacciAndPrimeNumbersInParallel = (n) => {
		
        if (n < 1 || n == undefined) {
            console.log(`Please enter an integer that is greater than 1`);
			return;
		}
		else {
			let f1 = f2 = counter = fibonacciCounter = primeCounter = 1;

			while (primeCounter != n+1) {
				let prime = 0;

				if(fibonacciCounter <= n) {
					console.log(`FIB ${fibonacciCounter}: ${f2}`);
					let next = f1 + f2;
					f1 = f2;
					f2 = next;
					fibonacciCounter++;
				}

				for (let i = 2; i < counter; i++) {
					if (counter % i == 0) {
						prime = 1;
						break;
					}
				}

				if (counter > 1 && prime == 0) {
					console.log(`PRIME ${primeCounter}: ${counter}`);
					primeCounter++;
				}

				counter++;
			}
		}
    }

console.log(printFibonacciAndPrimeNumbersInParallel(program.opts().input));
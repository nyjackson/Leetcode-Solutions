// Fibonacci Seq
var fib = n => n < 2 ? n : fib(n-2) + fib(n-1);

// Nth Tribonacci Number
var tribonacci = n => {
    let arr = [];
        arr[0] = 0,
        arr[1] = 1;
        arr[2] = 1;
        for(var i = 0; i< n; i++){
            arr[i+3] = arr[i] + arr[i+1] + arr[i+2]
        }
        return arr[n]
    };
    
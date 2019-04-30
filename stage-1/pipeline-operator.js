function add(num, num2) {
    return num + num2;
}

function double(num) {
    return num * 2;
}

function toString(num) {
    return num.toString();
}

let result = toString(double(add(5, 1)));
console.log('result: ', result);

let resultPipeline = 5
    |> (_ => add(_, 1))
    |> double
    |> toString;

console.log('resultPipeline: ', resultPipeline);

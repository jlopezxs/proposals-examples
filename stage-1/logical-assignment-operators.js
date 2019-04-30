let a = 2;
let b = 1;

// "Or Or Equals"
a ||= b;
a = a || b;
console.log('Or Or Equals', a);

// "And And Equals"
a &&= b;
a = a && b;
console.log('And And Equals', a);
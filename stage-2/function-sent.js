function* generator() {
    while (true) {
        console.log("Sent", function.sent);
        console.log("Sent", function.sent);
        console.log("Yield", yield);
    }
}

const iterator = generator();
iterator.next(1);
iterator.next(2);
iterator.next(5);
iterator.next(6);
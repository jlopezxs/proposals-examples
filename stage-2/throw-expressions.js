function sum(num = throw new Error('first parameter required!'), plus = throw new Error('second parameter required!')) {
    const result = num + plus;
    console.log(`${[num, plus].join(' + ')} = ${result}`)
    return num + plus;
}

sum(1, 2) // 3

try {
    sum(undefined, 3) // throw Error
} catch (e) {
    console.error(e)
}

try {
    sum(3) // throw Error
} catch (e) {
    console.error(e)
}


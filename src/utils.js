const getAverage = (...args) => {
    let sum = 0;
    for (const num of args) {
        sum +=  num
    }
    const average = (sum/args.length).toFixed(2)
    return average
}

export { getAverage }
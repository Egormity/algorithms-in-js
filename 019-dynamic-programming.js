const fibonachiBad = (n) => (n <= 2 ? 1 : fibonachiBad(n - 1) + fibonachiBad(n - 2));
// console.log(fibonachiBad(40));

fibonachiGood = (n, values = { 1: 1, 2: 1 }) => {
    if (values[n + ""]) return values[n + ""];
    9;
    const res = values[n - 1] || fibonachiGood(n - 1, values) + values[n - 2] || fibonachiGood(n - 2, values);
    values[n + ""] = res;

    return res;
};
// console.log(fibonachiGood(1090));

const fibonachiTable = (n) => {
    if (n <= 2) return 1;

    const arr = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }

    return arr[n];
};
console.log(fibonachiTable(1212));

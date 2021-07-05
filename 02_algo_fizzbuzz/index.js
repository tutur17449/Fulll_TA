((n) => {
  for (let i = 1; i <= n; i++) {
    let result = "";
    const m3 = i % 3 === 0, m5 = i % 5 === 0;

    if (m3) result += "Fizz";
    if (m5) result += "Buzz";

    console.log(result || i);
  }
})(15);

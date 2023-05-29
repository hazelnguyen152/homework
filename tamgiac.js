function tamgiac() {
    let a = +prompt("Nhập cạnh a");
    let b = +prompt("Nhập cạnh b");
    if ( a <= 0 || b <= 0 || c <= 0 || isNaN(a) || isNaN(b) || isNaN(c)) {
    let c = +prompt("Nhập cạnh c");
        result = "Đây không phải một tam giác";
    }
        if (a + b > c && b + c > a && a + c > b) {
        result = "Đây là một tam giác";

        } else {
        result = "Đây không phải tam giác";
        }
    alert(result);
    document.write(result);
    console.log(result)
}

function check() {
    let month = parseInt(document.getElementById("month").value);
    if (month > 12 || month <= 0) {
        alert("Nhập Giá Lại Giá Trị")
    } else {
        switch (month) {
            case 2:
                document.getElementById("resule").innerHTML = "Tháng " + month + " Có 28 Hoặc 29 Ngày";
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                document.getElementById("resule").innerHTML = "Tháng " + month + " Có 30 Ngày";
                break;
            default:
                document.getElementById("resule").innerHTML = "Tháng " + month + " Có  31 Ngày";
                break;
        }
    }
}
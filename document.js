document.getElementById("percentageForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var price = parseFloat(document.getElementById("price").value);
    var sentMoney = parseFloat(document.getElementById("sentMoney").value);
    var percentage = (sentMoney / price) * 100;
    var message = "เปอร์เซ็นต์ที่ได้คือ: " + percentage.toFixed(2) + " %";
    document.getElementById("result").innerText = message;

    // สร้าง popup
    alert(message);
});

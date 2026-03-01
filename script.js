let qrData = "";

function generateQR() {
    const upiInput = document.getElementById("upi").value.trim();
    const nameInput = document.getElementById("name").value.trim();
    
    if (!upiInput || !nameInput) {
        alert("Please fill in UPI ID and Recipient Name");
        return;
    }

    // Clear previous QR code
    document.getElementById("qrcode").innerHTML = "";
    
    let upi = upiInput;
    let name = nameInput;
    let amount = document.getElementById("amount").value || "";
    
    // Build UPI string
    qrData = `upi://pay?pa=${upi}&pn=${encodeURIComponent(name)}${amount ? `&am=${amount}` : ""}&cu=INR`;
    
    console.log("Generating QR for:", qrData);
    
    try {
        new QRCode(document.getElementById("qrcode"), {
            text: qrData,
            width: 256,
            height: 256,
            colorDark: "#1f2937",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
        console.log("QR Code generated successfully");
        document.getElementById("downloadBtn").style.display = "block";
    } catch (error) {
        console.error("QR Code generation error:", error);
        alert("Error generating QR code. Please try again.");
    }
}

function downloadQR() {
    let canvas = document.querySelector("#qrcode canvas");
    if (!canvas) {
        alert("Please generate a QR code first");
        return;
    }
    let link = document.createElement("a");
    link.download = "upi-qr.png";
    link.href = canvas.toDataURL();
    link.click();
}

// Allow Enter key to generate QR
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        generateQR();
    }
});

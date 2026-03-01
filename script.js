let qrData = "";
let currentDisplayUpi = "";

function generateQR() {
    const displayUpi = document.getElementById("upi").value.trim();
    const encodedUpi = document.getElementById("encoded-upi").value.trim();
    const nameInput = document.getElementById("name").value.trim();
    
    if (!displayUpi || !encodedUpi || !nameInput) {
        alert("Please fill in Display UPI ID, Encoded UPI ID, and Recipient Name");
        return;
    }

    // Store display UPI for download
    currentDisplayUpi = displayUpi;

    // Clear previous QR code
    document.getElementById("qrcode").innerHTML = "";
    
    // Display UPI: the one user sees
    // Encoded UPI: the one in the QR code (for fraud detection research)
    let upi = encodedUpi;
    let name = nameInput;
    let amount = document.getElementById("amount").value || "";
    
    // Build UPI string with ENCODED UPI ID
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
        
        // Display user's UPI ID below QR code
        document.getElementById("display-upi-text").textContent = displayUpi;
        document.getElementById("upi-display-section").style.display = "block";
        
        console.log("QR Code generated successfully");
        console.log("Display UPI:", displayUpi);
        console.log("Encoded UPI:", encodedUpi);
        document.getElementById("downloadBtn").style.display = "block";
        
        // Auto-save QR code if amount is entered
        if (amount) {
            setTimeout(function() {
                downloadQR();
                console.log("QR Code auto-saved with amount: " + amount);
            }, 500);
        }
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
    
    // Create a new canvas with space for the QR code and text
    let newCanvas = document.createElement("canvas");
    let ctx = newCanvas.getContext("2d");
    
    let qrSize = 256;
    let padding = 20;
    let textHeight = 50;
    
    // Set new canvas dimensions (QR code + padding + text space)
    newCanvas.width = qrSize + (padding * 2);
    newCanvas.height = qrSize + textHeight + (padding * 2);
    
    // Fill background with white
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, newCanvas.width, newCanvas.height);
    
    // Draw the QR code
    ctx.drawImage(canvas, padding, padding);
    
    // Draw the UPI ID text below
    ctx.fillStyle = "#1f2937";
    ctx.font = "bold 14px Arial";
    ctx.textAlign = "center";
    ctx.fillText("UPI ID: " + currentDisplayUpi, newCanvas.width / 2, qrSize + padding + 35);
    
    // Download the combined image
    let link = document.createElement("a");
    link.download = `${currentDisplayUpi}-qr.png`;
    link.href = newCanvas.toDataURL();
    link.click();
}

// Allow Enter key to generate QR
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        generateQR();
    }
});

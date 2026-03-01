# 📱 UPI QR Code Generator

A powerful web application to generate UPI payment QR codes with **dual UPI ID support** for fraud detection research and security testing. Perfect for fintech security researchers, machine learning engineers, and fraud detection specialists.

**Purpose:** Educational tool for UPI fraud detection, QR code security research, and fintech threat awareness.

**Live Link:** `http://localhost:3000` (when server is running)

---

## ✨ Features

- ✅ **Dual UPI ID Support** - Display one UPI ID while encoding another in the QR code (for fraud detection research)
- ✅ **Instant QR Generation** - Generate UPI QR codes in seconds
- ✅ **No Registration Required** - Start using immediately
- ✅ **Free Forever** - Completely free, no hidden charges
- ✅ **Download QR Codes** - Save generated QR codes as PNG images with UPI ID displayed
- ✅ **Custom Amounts** - Optionally set fixed payment amounts (auto-saves QR when amount entered)
- ✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- ✅ **Beautiful UI** - Modern gradient design with smooth animations
- ✅ **Fast & Secure** - No data is stored or uploaded anywhere

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No software installation required

### How to Use

1. **Open the website** in your browser at `http://localhost:3000`

2. **Fill in the form:**
   - **Display UPI ID** - The UPI ID shown to the user/on screen (e.g., `legitimate@upi`)
   - **Encoded UPI ID** - The UPI ID encoded in the QR code (e.g., `attacker@upi`) - for fraud detection research
   - **Recipient Name** - Enter your name or business name
   - **Amount (Optional)** - Set a fixed amount or leave blank for user-defined amount

3. **Click "Generate QR Code"** - The QR code will appear instantly with the Display UPI ID shown below it

4. **Auto-Save or Manual Download:**
   - If you enter an amount: QR code automatically saves when generated
   - If no amount: Click "Download QR Code" to manually save the PNG file

5. **QR Code File:** The downloaded PNG includes both the QR code and the Display UPI ID text below it

6. **Use Cases:**
   - Fraud detection research and training
   - QR code security testing
   - Educational demonstrations of phishing QR codes
   - Machine learning model training for fraud detection

---

## 💻 Installation & Setup

### Option 1: Direct Browser Usage (Recommended for Quick Testing)

Simply open the `index.html` file in your browser:
```bash
open index.html
# or navigate to: http://localhost:3000 (if server is running)
```

### Option 2: Local Server Setup

1. **Navigate to project folder:**
   ```bash
   cd "/Users/shashankshekhar/Desktop/fake qr website"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   npm start
   ```

4. **Open in browser:**
   ```
   http://localhost:3000
   ```

---

## 📁 Project Structure

```
fake qr website/
├── index.html          # Main HTML file
├── style.css           # Styling & animations
├── script.js           # JavaScript functionality
├── README.md           # This file
└── package.json        # Project configuration (if using npm)
```

### File Descriptions

| File | Purpose |
|------|---------|
| **index.html** | Main webpage structure with form and QR display area |
| **style.css** | Beautiful modern styling with gradients, animations, and responsive layout |
| **script.js** | JavaScript logic for QR generation and download functionality |

---

## 🛠️ Technologies Used

- **Frontend:**
  - HTML5 - Semantic markup
  - CSS3 - Modern styling with gradients and animations
  - Vanilla JavaScript - No frameworks needed
  - QRCode.js - QR code generation library (from CDN)

- **Tools:**
  - NPM - Package management (optional)
  - Modern Web Standards - Works in all modern browsers
  - Canvas API - For image generation with embedded text

---

## 🔧 How It Works

### QR Generation Process

1. **User Input** - Form collects Display UPI ID, Encoded UPI ID, recipient name, and optional amount
2. **Validation** - Basic checks to ensure required fields are filled
3. **UPI String Creation** - Builds standard UPI format using the **Encoded UPI ID**: `upi://pay?pa=ENCODED_ID&pn=NAME&am=AMOUNT&cu=INR`
4. **QR Encoding** - QRCode.js library converts the string to a 256x256 QR code
5. **Display** - Canvas element renders the QR code in the output section with Display UPI ID shown below
6. **Download** - User can save as PNG file with the Display UPI ID text embedded in the image

### Dual UPI ID System (Fraud Detection Feature)

This tool simulates QR code manipulation for fraud detection research:

- **Display UPI ID:** The UPI ID visible to the user and embedded in the downloaded PNG image
- **Encoded UPI ID:** The UPI ID actually encoded in the QR code payload

When scanned, the QR code will initiate a payment to the **Encoded UPI ID**, not the Display UPI ID. This mismatch is useful for:
- Training fraud detection models
- Testing QR code vulnerability scanners
- Educational demonstrations of phishing attacks
- Security research and awareness

### UPI Format

The generated UPI string follows this format:
```
upi://pay?pa=<UPI_ID>&pn=<NAME>&am=<AMOUNT>&cu=INR
```

Example:
```
upi://pay?pa=john@upi&pn=John%20Doe&am=100&cu=INR
```

---

## � Fraud Detection & Research

This tool is specifically designed for **UPI fraud detection research and educational purposes**.

### Use Cases:

1. **Machine Learning Models** - Create training datasets for fraud detection systems
2. **Security Testing** - Test QR code vulnerability detection algorithms
3. **Educational Demonstrations** - Show how QR code phishing attacks work
4. **Fraud Awareness** - Educate users about the dangers of QR code manipulation
5. **Fintech Research** - Study UPI payment security and attack vectors

### How It Simulates Fraud:

- User sees one UPI ID on the screen and in the downloaded PNG
- But the QR code encodes a completely different UPI ID
- When the QR is scanned and payment is initiated, money goes to the attacker's account
- This demonstrates how fraudsters can trick users with fake QR codes

### Research Application:

You can use the generated fraudulent QR codes to:
- Feed into your fraud detection models
- Test scanner applications for vulnerabilities
- Create awareness campaigns showing QR code risks
- Train users to verify UPI IDs before payment

**⚠️ Important:** This tool is for research, education, and awareness only. Unauthorized use of fraudulent QR codes is illegal.

---

## �📱 Supported UPI Apps

These QR codes work with all major UPI apps:
- Google Pay
- PhonePe
- BHIM
- Paytm
- WhatsApp Pay
- Amazon Pay
- iMobile
- And many more...

---

## 🎨 Design Features

- **Modern Gradient** - Blue to purple to pink gradient theme
- **Smooth Animations** - Slide-in animations for header and cards
- **Responsive Layout** - Two-column layout on desktop, single column on mobile
- **Professional Styling** - Clean cards with shadows and rounded corners
- **User-Friendly** - Clear labels, helpful hints, and intuitive interface

---

## ⌨️ Keyboard Shortcuts

- **Enter Key** - Generate QR code (while in any input field)
- **Tab** - Navigate between form fields

---

## 🔒 Privacy & Security

- ✅ **No Data Upload** - Everything happens in your browser
- ✅ **No Tracking** - No analytics or tracking scripts
- ✅ **No Cookies** - No cookies stored
- ✅ **No Registration** - Complete anonymity
- ✅ **Offline Ready** - Works even without internet (once loaded)

---

## 📸 Screenshots

### Desktop View
- Modern two-column layout
- Form on left, QR display on right
- Beautiful gradient background
- Smooth animations

### Mobile View
- Single column stacked layout
- Full-width inputs and buttons
- Touch-friendly button sizes
- Responsive and optimized

---

## 🐛 Troubleshooting

### QR Code Not Appearing?
1. Refresh the page
2. Clear browser cache (Ctrl+Shift+Delete)
3. Check browser console for errors (F12)
4. Ensure all fields are filled correctly

### Download Not Working?
1. Check browser's download settings
2. Ensure pop-ups are not blocked
3. Try a different browser

### Server Not Running?
```bash
# Make sure you're in the correct directory
cd "/Users/shashankshekhar/Desktop/fake qr website"

# Start the server
npm start
# Server should run on http://localhost:3000
```

---

## 📝 License

This project is free to use, distribute, and modify for personal and commercial purposes.

---

## 🤝 Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Open browser developer tools (F12) to check for errors
3. Ensure JavaScript is enabled in your browser

---

## 🚀 Future Improvements

Possible features for future versions:
- [ ] Batch QR generation for multiple UPI pairs
- [ ] Custom colors for QR codes
- [ ] QR code size customization
- [ ] CSV/JSON export for fraud datasets
- [ ] QR code scanning verification module
- [ ] Fraud detection model integration
- [ ] Mobile app version
- [ ] Multiple language support
- [ ] OCR text extraction from QR images

---

## 📊 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Full support |
| Firefox | ✅ Full support |
| Safari | ✅ Full support |
| Edge | ✅ Full support |
| IE 11 | ❌ Not supported |

---

## 💡 Tips & Tricks

### For Fraud Detection Research
- Generate multiple QR pairs to build diverse datasets
- Vary the UPI differences (slight vs. major changes)
- Test with different merchant names and amounts
- Use different character types in UPI IDs for testing
- Document scanning behavior across different UPI apps

### For Machine Learning Engineers
- Create labeled datasets with matched and mismatched UPI QR codes
- Train models to detect UPI ID mismatches
- Test edge cases with similar-looking UPI IDs
- Export generated QR codes for your training pipeline

### For Security Researchers
- Test scanner applications' vulnerability detection
- Study how different apps handle fraudulent QR codes
- Analyze payment initiation flows for security gaps
- Create awareness materials using real fraud simulations

### Best Practices
- Always verify the actual QR payload before using in research
- Keep records of all generated QR pairs for reproducibility
- Test generated QR codes with multiple UPI applications
- Document findings for fraud pattern analysis
- Use in controlled research environments only

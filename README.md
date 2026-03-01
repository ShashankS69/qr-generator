# 📱 UPI QR Code Generator

A simple, fast, and elegant web application to generate UPI payment QR codes instantly. Perfect for businesses, freelancers, and individuals who need to accept payments via UPI.

**Live Link:** `http://localhost:3000` (when server is running)

---

## ✨ Features

- ✅ **Instant QR Generation** - Generate UPI QR codes in seconds
- ✅ **No Registration Required** - Start using immediately
- ✅ **Free Forever** - Completely free, no hidden charges
- ✅ **Download QR Codes** - Save generated QR codes as PNG images
- ✅ **Custom Amounts** - Optionally set fixed payment amounts
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
   - **UPI ID** - Enter your UPI ID (e.g., `yourname@upi`, `name@bank`)
   - **Recipient Name** - Enter your name or business name
   - **Amount (Optional)** - Set a fixed amount or leave blank for user-defined amount

3. **Click "Generate QR Code"** - The QR code will appear instantly

4. **Download** - Click "Download QR Code" to save it as a PNG file

5. **Share** - Use the downloaded QR code in your:
   - Shop/Store
   - Invoices
   - Website
   - Social Media
   - Posters
   - Business Cards

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

---

## 🔧 How It Works

### QR Generation Process

1. **User Input** - Form collects UPI ID, recipient name, and optional amount
2. **Validation** - Basic checks to ensure required fields are filled
3. **UPI String Creation** - Builds standard UPI format: `upi://pay?pa=ID&pn=NAME&am=AMOUNT&cu=INR`
4. **QR Encoding** - QRCode.js library converts the string to a 256x256 QR code
5. **Display** - Canvas element renders the QR code in the output section
6. **Download** - User can save as PNG file with single click

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

## 📱 Supported UPI Apps

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
- [ ] Batch QR generation
- [ ] Custom colors for QR codes
- [ ] QR code size customization
- [ ] Support for other payment methods
- [ ] Analytics dashboard
- [ ] Multiple language support

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

### For Business Owners
- Print the QR code and place in your shop/store
- Add to invoices and receipts
- Share on social media
- Use in email signatures
- Print on business cards

### For Freelancers
- Add to portfolios and project proposals
- Include in email communications
- Post on freelance platforms
- Use in digital signatures

### Best Practices
- Test the QR code with multiple UPI apps
- Ensure the UPI ID is correct before sharing
- Keep QR code size reasonable for scanning
- Use good contrast background for printing
- Test scannability after printing

---

## 📞 Contact

For questions or feedback, feel free to reach out!

---

**Made with ❤️ for easy UPI payments**

Last Updated: March 1, 2026

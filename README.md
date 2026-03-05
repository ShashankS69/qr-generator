# 📱 UPI QR Code Generator

A simple web application that generates **UPI payment QR codes** from user input.
The application allows users to quickly create QR codes for payments by entering a UPI ID, recipient name, and optional payment amount.

This project is useful for **learning about UPI payment links, QR encoding, and basic fintech application development.**

---

# ✨ Features

* Generate UPI payment QR codes instantly
* Enter **UPI ID, recipient name, and optional amount**
* Download generated QR codes as **PNG images**
* Clean and responsive user interface
* Works on **desktop and mobile browsers**
* No login or registration required
* Fast browser-based QR generation

---

# 🚀 Getting Started

## Option 1 — Open Directly

You can simply open the project in your browser:

```
index.html
```

or if running locally with a server:

```
http://localhost:3000
```

---

## Option 2 — Run with Node.js

Install dependencies:

```
npm install
```

Start the local server:

```
npm start
```

Then open:

```
http://localhost:3000
```

---

# 📁 Project Structure

```
project-folder/
│
├── index.html
├── style.css
├── script.js
├── package.json
└── README.md
```

| File             | Description                |
| ---------------- | -------------------------- |
| **index.html**   | Main webpage structure     |
| **style.css**    | Styling and layout         |
| **script.js**    | QR code generation logic   |
| **package.json** | Node project configuration |
| **README.md**    | Project documentation      |

---

# 🛠 Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Libraries

* **QRCode.js** for generating QR codes
* **Canvas API** for image export

### Tools

* Node.js
* NPM

---

# ⚙️ How It Works

1. The user enters:

   * UPI ID
   * Recipient name
   * Optional payment amount

2. The application constructs a UPI payment link in the standard format:

```
upi://pay?pa=<UPI_ID>&pn=<NAME>&am=<AMOUNT>&cu=INR
```

Example:

```
upi://pay?pa=john@upi&pn=John%20Doe&am=100&cu=INR
```

3. The QR code library encodes this payment string.

4. The generated QR code is displayed on the page and can be downloaded as an image.

---

# 📱 Supported UPI Apps

The generated QR codes can be scanned by most UPI applications including:

* Google Pay
* PhonePe
* Paytm
* BHIM
* Amazon Pay
* WhatsApp Pay
* Banking apps supporting UPI

---

# 🎨 UI Features

* Modern gradient design
* Responsive layout
* Clean form interface
* Smooth animations
* Mobile-friendly design

---

# 🔒 Privacy

* No user data is stored
* No external servers used for QR generation
* All processing happens in the browser

---

# 🐛 Troubleshooting

### QR Code Not Showing

* Refresh the page
* Ensure all required fields are filled
* Check browser console for errors

### Server Not Starting

Make sure you are inside the project directory:

```
npm start
```

---

# 🚀 Future Improvements

Possible enhancements for the project:

* QR color customization
* Batch QR code generation
* QR scanner and decoder
* Payment link sharing
* Mobile app version
* Export multiple QR codes

---

# 📊 Browser Compatibility

| Browser | Support |
| ------- | ------- |
| Chrome  | ✅       |
| Firefox | ✅       |
| Safari  | ✅       |
| Edge    | ✅       |

---

# 📄 License

This project is open for educational and development purposes.

---

# 👨‍💻 Author

**Shashank Shekhar**
MBA-Tech Student | Fintech & Web Development

**Rishabh Mishra**
MBA-Tech Student | Fintech & Web Development


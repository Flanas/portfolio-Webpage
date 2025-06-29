# Hacker Themed Personal Webpage Template

![Preview](./assets/preview.gif)

> A dark-themed, hacker-aesthetic personal webpage built with simplicity and customization in mind. All content is anonymized with placeholder text so you can freely fork, modify, and make it your own.

---

## 🔧 Features

- ✅ **Multi-language support** (`en` / `es`) via `JavaScript` JSON-based translations
- ✅ **Responsive Design** – Fully functional on **mobile**, **tablet**, and **desktop**
- ✅ **Dark hacker aesthetic** – Styled with green terminal-like fonts and accents
- ✅ **Modular & Customizable** – Easily replace text/images to suit your needs
- ✅ **CV Download Button** – Option to attach and style a downloadable résumé
- ✅ **No frameworks or backend needed** – Just HTML, CSS, and JS

---

## 🌐 Live Preview

To test locally:

```bash
# Run this in the project directory
python3 -m http.server 8080
Then open your browser and go to:

arduino
Copy
Edit
http://localhost:8080
💬 Language Support
This template includes built-in language switching between:

🇬🇧 English (en)

🇪🇸 Español (es)

You’ll find all language content inside:

bash
Copy
Edit
/lang/en.json
/lang/es.json
🔁 The language toggle button automatically switches between them.
🌍 Want to add more? Just fork the repo, add your new .json file, and update the JS logic in language-switcher.js.

📁 Project Structure
graphql
Copy
Edit
.
├── index.html               # Homepage
├── aboutme.html             # About me section
├── manifesto.html           # Manifesto or philosophy
├── certifications.html      # Certifications or education
├── experience.html          # Work experience
├── projects.html            # Personal or professional projects
├── contact.html             # Contact form or links
├── lang/
│   ├── en.json              # English translations
│   └── es.json              # Spanish translations
├── style.css                # Main CSS file (dark hacker theme)
├── js/
│   └── language-switcher.js # Logic for switching translations
├── assets/
│   ├── Gifs/                # Hacker-style gif decorations
│   └── images/              # Portraits, logos, etc.
└── README.md
📱 Mobile Ready
This site is built with responsive layouts:

✅ Scrollable nav

✅ Reflows correctly on all screen sizes

✅ GIF banners and buttons adapt to mobile widths

Tested on:

Chrome (Android)

Firefox (Mobile/Desktop)

Safari (iOS)

Edge

🖌️ Customization Tips
Replace /lang/*.json files with your own text

Swap GIFs and images inside /assets

Update CV filename in the button if you want it downloadable:

html
Copy
Edit
<a href="CV_FernandoLanas.docx.pdf" download class="download-btn">Download CV</a>
Use your own fonts or colors by editing style.css

🚀 Tech Stack
Tech	Description
HTML5	Markup for content
CSS3	Styling (custom hacker aesthetic)
JavaScript	Language switching & interactivity
JSON	Content translation storage
Python	Local testing server

🛠️ Requirements
A modern browser (Chrome, Firefox, Edge, Safari)

Python 3 (for local testing)

Optional: VS Code or any HTML editor for editing content

🙌 Contributing & Forking
Feel free to fork this repository and replace the placeholder content (Lorem Ipsum, etc.) with your real info.

This project was created to help others launch cool-looking portfolios easily and quickly. No attribution needed — make it yours!

📄 License
MIT License. Free to use, modify, and distribute.
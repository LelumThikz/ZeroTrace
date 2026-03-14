# Zero Trace

This project allows users to send anonymous messages through a simple web page. The submitted message and reason are forwarded directly to a specified Telegram channel using a Telegram bot.

---

## 📖 Description
The Message Page is a lightweight HTML/CSS/JavaScript application that:
- Provides a simple form for users to submit a **reason** and a **message**.
- Sends the submitted data to a Telegram channel via a bot.
- Ensures anonymity by not collecting any personal information. (No caches

---

## 🎯 Uses
- Anonymous feedback collection
- Suggestion boxes for communities or teams
- Fun anonymous message boards
- Lightweight alternative to complex feedback systems

---

## ⚙️ Setup
1. **Fork or clone this repository** to your GitHub account.
2. Enable **GitHub Pages** in your repository settings to host the files.
   - Go to **Settings → Pages → Source → Deploy from branch**.
   - Select the branch (usually `main`) and save.
3. Open the hosted GitHub Pages link to access your anonymous message page.

---

## 🔑 Configuration
You need to update two key components in the JavaScript file:

- Replace `BOT TOKEN HERE` with your **Telegram Bot Token**.
- Replace `CHAT ID HERE` with your **Telegram Chat ID** (the channel or group ID where messages should be sent).

Example:
```javascript
const botToken = "YOUR_TELEGRAM_BOT_TOKEN";
const chatId = "YOUR_TELEGRAM_CHAT_ID";

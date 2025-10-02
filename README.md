# 🔥 React Firebase Chat App

A real-time chat application built with **React** and **Firebase**.  
This project lets users sign in and chat instantly using Firebase Authentication and Firestore.

---

## 🚀 Features
- User authentication
- Real-time chat messages 
- Responsive UI
- Easy deployment 

---

## 📦 Getting Started

Follow these steps to run the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
2. Install dependencies
bash
Copy code
npm install
3. Create your own Firebase project
Go to Firebase Console.

Click Add project → create a new project.

In Project Settings → General → Your apps → Web app, register a new app.

Copy the Firebase config that looks like this:

js
Copy code
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app-id",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdefg"
};
4. Add Firebase config to .env.local
Create a file called .env.local in the project root:

env
Copy code
REACT_APP_FIREBASE_API_KEY=your_api_key_here
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_bucket.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
⚠️ Important:

Everyone who wants to run this app must create their own Firebase project and put their keys here.

.env.local is ignored by Git so your keys are never uploaded.

5. Start development server
bash
Copy code
npm start
Now open http://localhost:3000 in your browser.

🚀 Deployment
Firebase Hosting
Install Firebase CLI:

bash
Copy code
npm install -g firebase-tools
Login to Firebase:

bash
Copy code
firebase login
Build and deploy:

bash
Copy code
npm run build
firebase deploy
Vercel / Netlify
Connect your GitHub repo to Vercel/Netlify.

Add the same .env.local values in their Environment Variables settings.

Deploy directly.

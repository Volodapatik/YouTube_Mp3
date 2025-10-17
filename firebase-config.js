// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBmPour4ShHdlil6gQ5EKtGKaG8AEfQq94",
    authDomain: "music-player-14a7a.firebaseapp.com",
    projectId: "music-player-14a7a",
    storageBucket: "music-player-14a7a.firebasestorage.app",
    messagingSenderId: "710185552245",
    appId: "1:710185552245:web:42113e37e9339957022b3c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize services
const db = firebase.firestore();
const auth = firebase.auth();

// Anonymous auth
auth.signInAnonymously()
    .then(() => console.log('✅ Firebase connected'))
    .catch(error => console.log('❌ Firebase error:', error));

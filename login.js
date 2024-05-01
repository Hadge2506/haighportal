<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDP3de785T-pEx9ImOoXrcLF_kNTTr2bd0",
    authDomain: "haigh-portal.firebaseapp.com",
    projectId: "haigh-portal",
    storageBucket: "haigh-portal.appspot.com",
    messagingSenderId: "136260602861",
    appId: "1:136260602861:web:c3af6750a7705257fd75e4",
    measurementId: "G-B1GWR4BCBK"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
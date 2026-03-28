<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDDXJw3Bd_uI_MnCIGE8lrUEoqphL23wjM",
    authDomain: "loginform-e8cca.firebaseapp.com",
    databaseURL: "https://loginform-e8cca-default-rtdb.firebaseio.com",
    projectId: "loginform-e8cca",
    storageBucket: "loginform-e8cca.firebasestorage.app",
    messagingSenderId: "450514580060",
    appId: "1:450514580060:web:bce8a143826195c3dcec99",
    measurementId: "G-LL3L3ZTCD5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>

importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCu_mdr8yTU-nZaOWZw3GVwiVlwaqvMdZc",
  projectId: "adimensionalshop",
  messagingSenderId: "719117032303",
  appId: "1:719117032303:web:df4a6876bfd5001b3ca69a"
});

const messaging = firebase.messaging();
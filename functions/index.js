const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database. 
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.helloworld = functions.https.onRequest((req, res) => {
    // Grab the text parameter.
    
    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    res.status(200).send("Hello World");
  });
  
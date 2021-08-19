const firebaseAdmin = require('firebase-admin');


/* var firebaseConfig = {
    apiKey: "AIzaSyCnwvZhnMO3NH7ZYwJ1GhoqblLf4NqHzik",
    authDomain: "nite-scout.firebaseapp.com",
    databaseURL: "https://nite-scout-default-rtdb.firebaseio.com",
    projectId: "nite-scout",
    storageBucket: "nite-scout.appspot.com",
    messagingSenderId: "933034745105",
    appId: "1:933034745105:web:af2a2da02034ca84fb40b0"
  }; */


const googleServiceAccountCreds = process.env.GOOGLE_SERVICE_ACCOUNT_CREDS;
if (!googleServiceAccountCreds) throw new Error('The $GOOGLE_SERVICE_ACCOUNT_CREDS environment variable was not found!');

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(JSON.parse(Buffer.from(googleServiceAccountCreds, 'base64').toString('ascii'))),
    databaseURL: "https://nite-scout-default-rtdb.firebaseio.com",
})

const db = firebaseAdmin.firestore();
//const auth = firebaseAdmin.auth();

module.exports = {
    db
};
/* module.exports = {
    db,
    auth
}; */
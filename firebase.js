const firebaseAdmin = require("firebase-admin");

const serviceAccount = process.env.GOOGLE_APPLICATION_CREDENTIALS;

if (!serviceAccount) {
    console.error('Missing GOOGLE_APPLICATION_CREDENTIALS environment variable');
    process.exit(1);
}

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(require(serviceAccount))
});

const db = firebaseAdmin.firestore();
const auth = firebaseAdmin.auth();

module.exports = {
    db,
    auth,
};

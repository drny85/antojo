const functions = require('firebase-functions');
const admin = require('firebase-admin');
const emailJs = require('emailjs');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.sendEmail = functions.database.ref('users').onWrite(
    event => {
        const userId = event.params.userId;
        const db = admin.firestore()
        return db.collection('users').get()
        .then(doc => {
            const user = doc.data()

            const msg = {
                to: user.email,
                from: 'test@test.com',
                subject:	"testing emailjs",
                text: 'testing email'
            }

            let server = emailJs.server.connect({
                user:	"drny85@gmail.com",
                password:"Armani19$5",
                host:	"smtp.gmail.com",
                ssl:		true
            });
            server.send(msg, (err));
        }).catch(err => console.log(err));

        
    }


)


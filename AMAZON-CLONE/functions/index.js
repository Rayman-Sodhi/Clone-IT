const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// set env vars: gcloud functions deploy FUNCTION_NAME --set-env-vars FOO=bar , get env vars : process.env.FOO

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  process.env.STRIPE_KEY
);

// - App Config
const app = express();

// - Middlrwares
app.use(cors());
app.use(express.json());

// - API Routes
app.get("/", (req, res) => res.status(200).send("welcome"));

app.post("/payments/create/:total", async (req, res) => {
    
    if (req.params.total > 0) {
        // only accept  integer
    const total = parseFloat(req.params.total).toFixed(0);
    console.log("Payment request received. Amount ->>>", total);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    res.status(201).send({
        clientSecret: 'no session id',
      })
  }
});

// - Listen Command
exports.amazonStripeApi = functions.https.onRequest(app);

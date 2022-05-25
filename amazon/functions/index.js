const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
// require("dotenv").config();
const stripe = require("stripe")('sk_test_51Ky1AESDAZrvSbkl16twWj9kn8zlhSIyPJ1NPG6JvdNiVgO2NCBZYg8o2XFtqzCxQMobgbxWp8hIkbWk31rH4BKN00tTjvC4tk');

const app = express();
// const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("Hello world"));

app.post("/payment/create", async (request, response) => {
  const total = request.query.total;
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "inr",
    });

    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  }
);
// app.listen(port);

exports.api = functions.https.onRequest(app)

//example end point
// http://localhost:5001/clone-16e61/us-central1/api
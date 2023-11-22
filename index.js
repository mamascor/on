
// Replace this endpoint secret with your endpoint's unique secret
// If you are testing with the CLI, find the secret by running 'stripe listen'
// If you are using an endpoint defined with the API or dashboard, look in your webhook settings
// at https://dashboard.stripe.com/webhooks
import express from "express";
const app = express();

let isOn = false

app.get("/", (req, res) => {
const response = {
    isOn
}

    res.json(response);
})

app.get("/on", (req, res) => {
    isOn = true
    const response = {
        isOn
    }
    
        res.json(response);
    
})

app.get("/off", (req, res) => {
    isOn = false
    const response = {
        isOn
    }
    
        res.json(response);
    
})

app.listen(3000, () => console.log("Running on port http://localhost:3000"));
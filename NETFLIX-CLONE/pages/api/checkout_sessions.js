const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    try {
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price_data: {
                        currency: 'INR',
                        product_data:{
                            name: req.body.name,
                        },
                        unit_amount: req.body.price * 100
                    },
                    description: `${req.body.name} ${req.body.quality}`,
                    quantity: 1,
                }
            ],
            mode: 'payment',
            success_url: `${req.headers.origin}/profile?success=true`,
            cancel_url: `${req.headers.origin}/profile?canceled=true`,
        })
        res.status(200).json({id: session.id})
    } catch (error) {
        console.log(error);
        res.status(400).json({data: "false"});
    }
}
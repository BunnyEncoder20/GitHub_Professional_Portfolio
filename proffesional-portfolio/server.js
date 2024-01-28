const express = require("express");
const cors = require("cors");               // used to allow cross site requests 
const nodemailer = require("nodemailer");   // for sending the mails
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config()


// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(process.env.SERVER_PORT, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

router.post("/contact", (req, res) => {
    console.log("request from "+req.body.email+" received")
    const name = req.body.firstName +" "+ req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
        from: name,
        to: process.env.EMAIL_USER,
        subject: "Portfolio Website Email",
        html:  `<p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Says: <br /> ${message}</p>`,
    };

    

    //   finally, Sending the email 
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json(error);
        } else {
            console.log("mail sent successfully")
            res.json({ code: 200, status: "Message Sent" });
        }
    });
});
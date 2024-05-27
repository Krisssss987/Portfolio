import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const { name, email, subject, message } = req.body; // No need to parse JSON again

        // Create a transporter object
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || ''),
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USERNAME,
                pass: process.env.SMTP_PASSWORD,
            },
			debug: true
        });

        const mailOptions = {
            from: process.env.MAIL_FROM as string,
            to: process.env.MAIL_TO as string,
            subject: `${subject}`,
            text: "-",
            html: `
            <div>
                <h1>From: ${name}</h1>
                <a href="mailto: ${email}">${email}</a>
				<p>${message}</p>
            </div>
            `,
        };

        try {
            await transporter.sendMail(mailOptions);
            return res.status(200).send({ message: "Sent successfully" });
        } catch (error) {
            console.error('Error sending email:', error);
            return res.status(500).send({ message: "Failed to send email", error });
        }
    } else {
        // If User visits this route on the browser (i.e via GET request), just redirect them back home
        res.redirect("/");
    }
}

export default handler;

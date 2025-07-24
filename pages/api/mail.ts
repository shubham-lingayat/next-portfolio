import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer';

type Data = {
    message: string;
};

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MAIL_FROM, 
        pass: process.env.GMAIL_APP_PASSWORD 
    }
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === "POST") {
        const {
            name,
            email,
            message,
        }: { name: string; email: string; message: string } = req.body;

        const mailOptions = {
            from: process.env.MAIL_FROM,
            to: process.env.MAIL_TO,
            subject: `${name.toUpperCase()} sent you a message from Portfolio`,
            text: `Email => ${email}\n\nMessage:\n${message}`,
            html: `<p>Email => ${email}</p><p>Message:<br>${message.replace(/\r\n/g, "<br>")}</p>`,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: "Your message was sent successfully." });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: `There was an error sending your message. ${err}` });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}

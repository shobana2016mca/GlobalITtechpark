 // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";


type Data = {
  name: string;
};


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: `mfarooq.bese18seecs@seecs.edu.pk`,
      pass: `veayvczddpktroxf`,
    },
    secure: true,
  });
  transporter
    .verify()
    .then(() => console.log("Connected to email server"))
    .catch(() =>
      console.log(
        "Unable to connect to email server. Make sure you have configured the SMTP options in .env"
      )
    );
  const mailData = {
    from: "Website Contact form",
    to: req?.body?.email,
    subject: `GLOBAL TECH PARK`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>
    Name: ${req?.body?.name} <br/>
    Phone: ${req?.body?.phone} <br/>
    Email: ${req?.body?.email} <br/>
    Message:${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, function (err: Error | null, info: any) {
    if (err) console.log(err)
    else return res.status(200)
  });
  return res.status(200);
}
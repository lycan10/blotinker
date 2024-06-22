const express = require('express');
const bodyParser = require('body-parser');
const postmark = require('postmark');

const app = express();
const port = 3000;

// Initialize Postmark client
const client = new postmark.ServerClient("b26d9bbc-9bdb-48b5-811d-3743c8163f20");

app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { to, name } = req.body;

  client.sendEmail({
    From: "support@theunburden.com",
    To: to,
    Subject: `Hello ${name}`,
    HtmlBody: `<strong>Hello ${name}</strong> dear Postmark user.`,
    TextBody: `Hello ${name} from Postmark!`,
    MessageStream: "outbound"
  }, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error sending email', error: err });
    }
    res.status(200).json({ message: 'Email sent successfully', result });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

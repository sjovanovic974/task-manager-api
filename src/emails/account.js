const sgMail = require('@sendgrid/mail');

const officialEmail = process.env.COMPANY_EMAIL;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: officialEmail,
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. We hope your going to enjoy in our product.`
  });
}

const sendFarewellEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: officialEmail,
    subject: `Goodbye ${name}`,
    text: `We are so sad to hear that you are leaving, ${name}. WWould you please be so kind and tell us what was your reason to leave?.`
  });
}

module.exports = {
  sendWelcomeEmail,
  sendFarewellEmail
}
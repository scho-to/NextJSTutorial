import getDB from '../../database/db';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const email = req.body.email;

    if(!email || !email.includes('@')) {
      res.status(422).json({message: 'Invalid email address.'});
    } else {
      getDB().get('newsletter').push(email).save();
      res.status(201).send({message: "success", newsletterEmail: email});
    }
  } else {
    res.status(200).json({message: 'empty'});
  }
}
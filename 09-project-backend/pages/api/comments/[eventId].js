import getDB from '../../../database/db';

const COMMENTS = [
  {
    id: 'c1',
    email: "maximilian@fur.bar",
    name: "Maximilian",
    text: "My comment is amazing!!",
  },
  {
    id: 'c2',
    email: "maximilian@fur.bar",
    name: "Maximilian",
    text: "My comment is amazing!",
  }
];

export default function handler(req, res) {
  const eventId = req.query.eventId;
  if (req.method === 'POST') {

    const { email, name, text } = req.body;

    if (!email.includes('@') ||
        !name ||
        name.trim() === '' ||
        !text ||
        text.trim() === '') {
      res.status(422).json({ mesage: "Invalid Input." });
      return;
    }

    const newComment = {
      id: new Date().getTime(),
      email: email,
      name: name,
      text: text
    }
  
    getDB().get('comments').push({event: eventId, comment: newComment}).save();

    res.status(201).send({ message: "success", comment: newComment });
  } else if (req.method === 'GET') {
    const comments = getDB().get('comments').filter(comment => comment.event === "" + eventId).value();
    res.status(200).json({ message: 'success', comments: comments });
  }
}
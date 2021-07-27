import fs from 'fs';
import path from 'path';

export function readFeedbackJson(){
  const filepath = path.join(process.cwd(), 'data', 'feedback.json');
  const fileContent = fs.readFileSync(filepath);
  let data = JSON.parse(fileContent);
  return data;
}

export default function handler(req, res) {
  if (req.method === 'POST') {
    const email = req.body.email;
    const feedbackText = req.body.text;

    const feedbackItem = {
      id: new Date().toISOString(),
      email: email,
      text: feedbackText
    };

    let data = readFeedbackJson();
    data.push(feedbackItem);
    fs.writeFileSync(filepath, JSON.stringify(data));
    res.status(201).json({ message: "Success!", feedback: feedbackItem });
  } else {
    let data = readFeedbackJson();
    res.status(200).json({ message: "done", feedbacks: data});
  }
};
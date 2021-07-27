import { readFeedbackJson } from './index';

export default function handler(req, res) {
  const feedbackId = req.query.feedbackId;

  const data = readFeedbackJson();
  const feedbackItem = data.find(feedback => feedback.id === feedbackId);

  res.status(200).json({message: "done", feedback: feedbackItem});
}
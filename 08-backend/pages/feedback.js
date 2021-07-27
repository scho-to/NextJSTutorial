import { Fragment, useState } from 'react';

import { readFeedbackJson } from './api/feedback/index';

export default function FeedbackPage(props) {
  const [feedbackData, setFeedbackData] = useState();

  function loadFeedbackHandler(id) {
    fetch('/api/feedback/' + id)
      .then(res => res.json())
      .then(data => {
        setFeedbackData(data.feedback);
      })
  }

  return (
    <Fragment>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {props.feedbackItems.map(item => (
          <li key={item.id}>{item.text} <button onClick={loadFeedbackHandler.bind(null, item.id)}>Show Details</button></li>
        ))}
      </ul>
    </Fragment>
  )
}

export async function getStaticProps() {
  const data = readFeedbackJson();
  return {
    props: {
      feedbackItems: data
    }
  }
}
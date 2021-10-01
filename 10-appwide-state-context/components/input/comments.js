import { useState, useEffect, useContext } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import NotificationContext from '../../store/notification-context';

import classes from './comments.module.css';

function Comments(props) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  const notificationCtx = useContext(NotificationContext);

  function fetchComments() {
    setLoading(true);
    fetch('/api/comments/' + eventId)
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        setComments(data.comments);
      });
  }

  useEffect(() => {
    if (showComments) {
      fetchComments();
    }
  }, [showComments])

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    notificationCtx.showNotification({
      title: 'Posting comment...',
      message: 'Posting your comment.',
      status: 'pending'
    });

    fetch('/api/comments/' + eventId, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if (res.ok) {
        return res.json();
      }

      return res.json().then(data => {
        throw new Error(data.message || 'Something went wrong!');
      })
    }).then(res => {
      notificationCtx.showNotification({
        title: 'Success',
        message: 'Your comment has been added!',
        status: 'success'
      });
      fetchComments();
    }).catch(error => {
      notificationCtx.showNotification({
        title: 'Error',
        message: error.message || 'Something went wrong',
        status: 'error'
      });
    })
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && !loading && <CommentList items={comments} />}
      {showComments && loading && <p>Loading...</p>}
    </section>
  );
}

export default Comments;

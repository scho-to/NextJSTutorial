import { useRef, useContext } from 'react';

import classes from './newsletter-registration.module.css';
import NotificationContext from '../../store/notification-context';

export function isEmail(val) {
  return val.includes("@");
}

function NewsletterRegistration() {
  const newsletterInput = useRef();
  const notificationCtx = useContext(NotificationContext);

  function registrationHandler(event) {
    event.preventDefault();
    const newsletterEmail = newsletterInput.current.value;

    notificationCtx.showNotification({
      title: 'Signing up...',
      message: 'Registering for newsletter.',
      status: 'pending'
    })

    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
    if (isEmail(newsletterEmail)) {
      fetch('/api/newsletter', {
          method: 'POST',
          body: JSON.stringify({ email: newsletterEmail }),
          headers: {
            'Content-Type': "application/json"
          }
        })
        .then(res => {
          if (res.ok) {
            return res.json();
          }

          return res.json().then(data => {
            throw new Error(data.message || 'Something went wrong!');
          })
        })
        .then(res => {
          notificationCtx.showNotification({
            title: 'Success',
            message: 'Sucessfully registered for newsletter!',
            status: 'success'
          })
          newsletterInput.current.value = "";
        })
        .catch(error => {
          notificationCtx.showNotification({
            title: 'Error',
            message: error.message || 'Smoething went wrong!',
            status: 'error'
          })
        });
    }

  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={newsletterInput}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;

import { useRef } from 'react';

import classes from './newsletter-registration.module.css';

export function isEmail(val){
  return val.includes("@");
}

function NewsletterRegistration() {
  const newsletterInput = useRef();

  function registrationHandler(event) {
    event.preventDefault();
    const newsletterEmail = newsletterInput.current.value;

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
        .then(res => res.json())
        .then(res => {
          console.log(res);
          newsletterInput.current.value = "";
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

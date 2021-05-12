import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getEventById } from '../../dummy-data';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';

export default function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.id;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <p>No Event found!</p>
      </ErrorAlert>
    )
  }

  return (
    <Fragment>
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};
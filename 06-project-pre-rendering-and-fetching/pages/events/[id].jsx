import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getEventById, getEvents } from '../../api/events';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';

export default function EventDetailPage(props) {
  const router = useRouter();
  const eventId = props.id;
  const event = props.event;

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

export async function getStaticProps(context) {
  const { params } = context
  const id = params.id;

  const event = await getEventById(id);

  return {
    props: { id: id, event: event },
    revalidate: 5
  }
}

export async function getStaticPaths() {
  let events = await getEvents();

  events = events.filter(event => event.isFeatured === true);
  events = events.map(event => event.id);

  const pathsWithParams = events.map(id => ({ params: { id: id } }));

  return {
    paths: pathsWithParams,
    fallback: true
  }

}

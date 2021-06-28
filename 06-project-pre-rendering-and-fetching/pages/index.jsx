import getEvents from '../api/events';

import EventList from '../components/events/event-list';

export default function HomePage(props) {
  const featuredEvents = props.featuredEvents;

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};

export async function getStaticProps(props) {
  const events = await getEvents();

  const transformedEvents = events.filter(event => {
    return event.isFeatured === true;
  });

  return {
    props: { featuredEvents: transformedEvents },
    revalidate: 10
  }
}

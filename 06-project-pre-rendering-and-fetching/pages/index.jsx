import { getFeaturedEvents } from '../api/events';

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
  const events = await getFeaturedEvents();

  return {
    props: { featuredEvents: events },
    revalidate: 10
  }
}

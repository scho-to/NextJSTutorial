import Head from 'next/head';

import { getFeaturedEvents } from '../api/events';
import EventList from '../components/events/event-list';

export default function HomePage(props) {
  const featuredEvents = props.featuredEvents;

  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="Find a lot of great events that allow you to evolve..." />
      </Head>
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

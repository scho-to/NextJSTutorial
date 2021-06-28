import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { getEvents } from '../../api/events';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';

export default function AllEventsPage(props) {
  const events = props.events;
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <Head>
        <title>NextJS All Events</title>
        <meta name="description" content="Show all of current events." />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  const events = await getEvents();

  return {
    props: {
      events: events
    }
  }
}

import { Fragment } from 'react';
import { useRouter } from 'next/router';

import getEvents from '../../api/events';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import ResultsTitle from '../../components/events/results-title';
import ErrorAlert from '../../components/ui/error-alert';
import Button from '../../components/ui/button';

export default function FilteredEventPage(props) {
  const router = useRouter();
  const filterData = router.query.slug;
  let date = null;
  let filteredYear = null;
  let filteredMonth = null;
  let events = [];

  if (!filterData) {
    return <p className='center'>Loading...</p>
  }
  filteredYear = +filterData[0];
  filteredMonth = +filterData[1];

  events = props.events;

  if (events.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className='center'>Nothing Found</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  date = new Date(filteredYear, filteredMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={events} />
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  const { params, res, req } = context;
  const events = await getEvents();
  let filteredEvents = [];

  let filteredYear = +params.slug[0];
  let filteredMonth = +params.slug[1];

  filteredEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === filteredYear && eventDate.getMonth() === filteredMonth - 1;
  });

  return {
    props: {
      events: filteredEvents
    }
  }
}

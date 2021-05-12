import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import ResultsTitle from '../../components/events/results-title';
import ErrorAlert from '../../components/ui/error-alert';
import Button from '../../components/ui/button';

export default function filteredEventPage(props) {
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
  
  events = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth
  });
  
  if (events.length === 0){
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
  
  date = new Date(filteredYear, filteredMonth-1);
  
  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={events} />
    </Fragment>
  );
};
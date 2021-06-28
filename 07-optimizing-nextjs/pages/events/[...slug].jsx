import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Head from 'next/head';

import { getEvents, getFilteredEvents, API_DOMAIN } from '../../api/events';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import ResultsTitle from '../../components/events/results-title';
import ErrorAlert from '../../components/ui/error-alert';
import Button from '../../components/ui/button';

export default function FilteredEventPage(props) {
  const [loadedEvents, setLoadedEvents] = useState();
  const router = useRouter();
  const filterData = router.query.slug;
  let date = null;
  let filteredYear = null;
  let filteredMonth = null;

  const { data, error } = useSWR(API_DOMAIN);

  useEffect(() => {
    if (data) {
      const events = [];

      for (const key in data) {
        events.push({
          id: key,
          ...data[key]
        });
      }

      setLoadedEvents(events);
    }
  }, [data]);

  let pageHeadData = <Head>
    <title>Filtered Events</title>
    <meta name="description" content={`List of filtered events`} />
  </Head>

  if (!loadedEvents) {
    return (
      <Fragment>
        {pageHeadData}
        <p className='center'>Loading...</p>
      </Fragment>
    );
  }

  filteredYear = +filterData[0];
  filteredMonth = +filterData[1];

  pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta name="description" content={`All events for ${filteredMonth}/${filteredYear}`} />
    </Head>
  );

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth < 1 ||
    filteredMonth > 12 ||
    error
  ) {
    return (
      <Fragment>
        { pageHeadData }
        <ErrorAlert>
          <p className='center'>Invalid Filter. Please check the filter values.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = loadedEvents.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === filteredYear && eventDate.getMonth() === filteredMonth - 1;
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        {pageHeadData}
        <ErrorAlert>
          <p className='center'>No Events found for your filter</p>
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
      {pageHeadData}
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
};

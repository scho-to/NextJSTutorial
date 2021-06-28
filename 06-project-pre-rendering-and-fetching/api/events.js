export async function getEvents() {

  const response = await fetch('https://nextjs-course-udemy-default-rtdb.europe-west1.firebasedatabase.app/events.json');
  const data = await response.json();

  const transformedEvents = [];

  for (const key in data) {
    transformedEvents.push({
      id: key,
      ...data[key]
    });
  }

  return transformedEvents;
}

export async function getFeaturedEvents() {
  const events = await getEvents();
  return events.filter(event => event.isFeatured);
}

export async function getEventById(id) {
  const events = await getEvents();
  return events.find(event => event.id === id);
}

export async function getFilteredEvents(year, month) {
  /*
  const { params, res, req } = context;
  const events = await getEvents();
  let filteredEvents = [];

  let filteredYear = +params.slug[0];
  let filteredMonth = +params.slug[1];

  filteredEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === filteredYear && eventDate.getMonth() === filteredMonth - 1;
  });
  */
  const events = await getEvents();
  return events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });
}

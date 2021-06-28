export const API_DOMAIN = 'https://nextjs-course-udemy-default-rtdb.europe-west1.firebasedatabase.app/events.json';

export async function getEvents() {

  const response = await fetch(API_DOMAIN);
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
  const events = await getEvents();
  return events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });
}

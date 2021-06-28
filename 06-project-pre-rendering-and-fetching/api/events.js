export default async function getEvents() {

  const response = await fetch('https://nextjs-course-udemy-default-rtdb.europe-west1.firebasedatabase.app/events.json');
  const data = await response.json();

  const transformedEvents = [];

  for (const key in data) {
    transformedEvents.push({
      id: key,
      title: data[key].title,
      description: data[key].description,
      location: data[key].location,
      date: data[key].date,
      image: data[key].image,
      isFeatured: data[key].isFeatured
    });
  }

  return transformedEvents;
}

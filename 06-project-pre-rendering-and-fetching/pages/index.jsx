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
  const response = await fetch('https://nextjs-course-udemy-default-rtdb.europe-west1.firebasedatabase.app/events.json');
  const data = await response.json();

  const transformedEvents = [];

  for (const key in data) {
    if (data[key].isFeatured === true){
      transformedEvents.push(
        {
          id: key, 
          title: data[key].title, 
          description: data[key].description,
          location: data[key].location,
          date: data[key].date,
          image: data[key].image,
          isFeatured: data[key].isFeatured
        }
      );
    }
  }

  return {
    props: {featuredEvents: transformedEvents},
    revalidate: 10
  }
}
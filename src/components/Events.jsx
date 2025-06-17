import char from '../assets/1.jpg';
import blood from '../assets/3.jpg'
import edu from '../assets/4.jpg'
export default function Events() {
  const events = [
    {
      title: "Annual Charity Gala",
      date: "October 21, 2023",
      description: "Join us for an evening of celebration and fundraising for our upcoming projects.",
      image: char
    },
    {
      title: "Education Drive",
      date: "Mar 1st, 2023",
      description: "Help us distribute educational materials to underprivileged children.",
      image:edu
    },
    {
      title: "Blood Camp",
      date: "Dec 28, 2024",
      description: "Free health check-ups and consultations for the local community.",
      image:blood
    }
  ];

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2"
            >
              <img
                src={event.image} 
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-primary font-semibold mb-3">{event.date}</p>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

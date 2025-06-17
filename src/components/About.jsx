import CountUp from 'react-countup';
export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3"
              alt="Community service"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At Spreading Smiles, we believe in the power of compassion and community service.
              Founded in 2023, our organization has been dedicated to making a positive impact
              in the lives of those who need it most.
            </p>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600 mb-6">
              We envision a world where every individual has access to basic necessities,
              quality education, and opportunities for growth. Through our various initiatives
              and programs, we work tirelessly to turn this vision into reality.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-primary mb-2"><CountUp end={1000} />+</h4>
                <p className="text-gray-600">Lives Impacted</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-bold text-secondary mb-2"><CountUp end={50} />+</h4>
                <p className="text-gray-600">Active Volunteers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import Hero from './Hero';
import AboutSummary from './AboutSummary';
import TeamAndProjects from './TeamAndProjects'
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <main className="bg-brand-black">
      <Hero />
      <AboutSummary />
      <TeamAndProjects />
      <Testimonials />
    </main>
  );
};

export default Home;
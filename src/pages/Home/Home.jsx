import Hero from './Hero';
import AboutSummary from './AboutSummary';
import TeamAndProjects from './TeamAndProjects'

const Home = () => {
  return (
    <main className="bg-brand-black">
      <Hero />
      <AboutSummary />
      <TeamAndProjects />
    </main>
  );
};

export default Home;
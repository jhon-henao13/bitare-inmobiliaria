import HeroDesarrollos from './HeroDesarrollos';
import DevelopmentsGrid from './DevelopmentsGrid';
import DeliveredProjects from './DeliveredProjects';

const Desarrollos = () => {
  return (
    <main className="bg-brand-black min-h-screen">
      <HeroDesarrollos />
      <DevelopmentsGrid />
      <DeliveredProjects />
    </main>
  );
};

export default Desarrollos;
import HeroNosotros from './HeroNosotros';
import TeamLeadership from './TeamLeadership';
import MissionVisionValues from './MissionVisionValues';

const Nosotros = () => {
  return (
    <main className="bg-brand-black min-h-screen">
      <HeroNosotros />
      <TeamLeadership />
      <MissionVisionValues />
    </main>
  );
};

export default Nosotros;
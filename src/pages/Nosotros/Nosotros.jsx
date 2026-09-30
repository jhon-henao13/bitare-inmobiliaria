import HeroNosotros from './HeroNosotros';
import TeamLeadership from './TeamLeadership';
import MissionVisionValues from './MissionVisionValues';
import StrategicAlliances from './StrategicAlliances';

const Nosotros = () => {
  return (
    <main className="bg-brand-black min-h-screen">
      <HeroNosotros />
      <TeamLeadership />
      <MissionVisionValues />
      <StrategicAlliances />
    </main>
  );
};

export default Nosotros;
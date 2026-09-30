import HeroNosotros from './HeroNosotros';
import TeamLeadership from './TeamLeadership';
import MissionVisionValues from './MissionVisionValues';
import StrategicAlliances from './StrategicAlliances';
import HowWeWork from './HowWeWork';

const Nosotros = () => {
  return (
    <main className="bg-brand-black min-h-screen">
      <HeroNosotros />
      <TeamLeadership />
      <MissionVisionValues />
      <StrategicAlliances />
      <HowWeWork />
    </main>
  );
};

export default Nosotros;
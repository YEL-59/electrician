import Archive from "@/components/globalelectricianday/sections/archive";
import GlobalElectricianDayHero from "@/components/globalelectricianday/sections/GlobalElectricianDayHero";
import Matter from "@/components/globalelectricianday/sections/matters";
import Mission from "@/components/globalelectricianday/sections/mission";
import Movement from "@/components/globalelectricianday/sections/movement";
import TimelineSection from "@/components/globalelectricianday/sections/TimelineSection";

const GlobalElectricianDay = () => {
  return (
    <div>
      <GlobalElectricianDayHero />
      <Mission />
      <TimelineSection />
      <Matter />
      <Movement />
      <Archive />
    </div>
  );
};

export default GlobalElectricianDay;

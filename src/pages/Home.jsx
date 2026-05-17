import { Hero } from '../components/Hero.jsx';
import { Marquee } from '../components/Marquee.jsx';
import { Services } from '../components/Services.jsx';
import { Work } from '../components/Work.jsx';
import { Stats } from '../components/Stats.jsx';
import { Process } from '../components/Process.jsx';
import { CtaBanner } from '../components/CtaBanner.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Work />
      <Stats />
      <Process />
      <CtaBanner />
    </>
  );
}

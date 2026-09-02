import { Hero } from '../components/Hero.jsx';
import { Work } from '../components/Work.jsx';
import { Services } from '../components/Services.jsx';
import { Process } from '../components/Process.jsx';
import { CtaBanner } from '../components/CtaBanner.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Services />
      <Process />
      <CtaBanner />
    </>
  );
}

import HomeClient from './HomeClient';
import ServiceClient from './ServiceClient';
import WorkClient from './WorkClient';

export default function HomePage() {
  return (
    <>
      <HomeClient />
      <ServiceClient />
      <WorkClient />
    </>
  );
}
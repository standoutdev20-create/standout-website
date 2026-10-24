import HomeClient from './HomeClient';
import ServiceClient from './ServiceClient';

export default function HomePage() {
  return (
    <>
      <HomeClient />
      <ServiceClient />
      <WorkClient />
    </>
  );
}
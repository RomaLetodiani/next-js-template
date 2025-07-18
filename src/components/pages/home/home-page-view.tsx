import { paths } from '$/config/paths';
import Link from 'next/link';

export const HomePageView = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href={paths.profile.getHref()}>Profile</Link>
    </div>
  );
};

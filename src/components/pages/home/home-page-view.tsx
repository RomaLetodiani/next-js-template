import { HomeFeed } from './components/feed/home-feed';

export const HomePageView = () => {
  return (
    <div className="grid h-screen grid-cols-[1fr_3fr_1fr]">
      <div>sidebar</div>
      <HomeFeed />
      <div>side panel</div>
    </div>
  );
};

import { HomeLayoutView } from '$/components/layout/home-layout-view';
import { PropsWithChildren } from 'react';

const HomeLayout = ({ children }: PropsWithChildren) => <HomeLayoutView>{children}</HomeLayoutView>;

export default HomeLayout;

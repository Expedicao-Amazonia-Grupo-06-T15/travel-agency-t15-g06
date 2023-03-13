import { ActivitiesSection } from '../../components/ActivitiesSection';
import { Filter } from '../../components/Filter';
import { HotelsSection } from '../../components/HotelsSection';
import { BannerContainer } from './style';

export const ExplorePage = () => {
  return (
    <>
      <BannerContainer />
      <Filter />
      <HotelsSection />
      <ActivitiesSection />
    </>
  );
};

import React from 'react';
import { CommunityCard } from '@/components/common/CommunityCard';
import { SectionTitle } from '@/components/common/SectionTitle';
import { Slider } from '@/components/common/Slider';
import communityData from '@/data/communities.json';
import data from '@/data/common.json';

export const CommunitySection = () => {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle className="mb-10 xl:mb-16">
          {data.communities.title}
        </SectionTitle>
        <div className="md:hidden">
          <Slider
            component={CommunityCard}
            section={'community'}
            data={communityData}
          />
        </div>
        <ul className="hidden grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-x-5 md:gap-y-8 xl:grid-cols-4 xl:gap-x-5">
          {communityData.map((community, index) => (
            <li key={index}>
              <CommunityCard data={community} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

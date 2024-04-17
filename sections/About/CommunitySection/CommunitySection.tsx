import React from 'react';
import { CommunityCard } from '@/components/ui/CommunityCard';
import communityData from '@/data/communities.json';

export const CommunitySection = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {communityData.map((community, index) => (
            <CommunityCard key={index} data={community} />
          ))}
        </div>
      </div>
    </section>
  );
};

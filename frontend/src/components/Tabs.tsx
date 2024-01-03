import React from 'react';

interface TabsProps {
  selectedTab: string;
  onTabChange: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ selectedTab, onTabChange }) => {
  return (
    <div className="tabs">
      <button className={selectedTab === 'nowPlaying' ? 'active-tab' : ''} onClick={() => onTabChange('nowPlaying')}>
        Now Playing
      </button>
      <button className={selectedTab === 'upcoming' ? 'active-tab' : ''} onClick={() => onTabChange('upcoming')}>
        Upcoming
      </button>
    </div>
  );
};

export default Tabs;

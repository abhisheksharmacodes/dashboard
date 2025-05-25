import {
  UserIcon,
  AcademicCapIcon,
  SparklesIcon,
  StarIcon,
  FolderIcon,
  CheckBadgeIcon,
} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

const iconMap = {
  Profile: UserIcon,
  Academics: AcademicCapIcon,
  Skills: SparklesIcon,
  Projects: FolderIcon,
  Certifications: CheckBadgeIcon,
  More: StarIcon,
};

export default function Sidebar({ tabs, activeTab, setActiveTab, isSidebarOpen, toggleSidebar }) {
  const [focusedIndex, setFocusedIndex] = useState(0);

  useEffect(() => {
    // Set initial focused index to match active tab
    const activeIndex = tabs.findIndex(tab => tab.name === activeTab);
    setFocusedIndex(activeIndex >= 0 ? activeIndex : 0);
  }, [activeTab, tabs]);

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowDown':
      case 'Tab':
        if (!e.shiftKey) {
          e.preventDefault();
          setFocusedIndex((prev) => (prev + 1) % tabs.length);
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex((prev) => (prev - 1 + tabs.length) % tabs.length);
        break;
      case 'Enter':
        e.preventDefault();
        setActiveTab(tabs[focusedIndex].name);
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [focusedIndex, tabs]);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (window.innerWidth < 660 && isSidebarOpen) {
        const sidebar = document.getElementById('sidebar');
        const header = document.querySelector('header');
        if (sidebar && !sidebar.contains(e.target) && !header?.contains(e.target)) {
          toggleSidebar();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSidebarOpen, toggleSidebar]);

  return (
    <>
      {/* Backdrop for mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={toggleSidebar} />
      )}
      <aside
        id="sidebar"
        role="navigation"
        aria-label="Main navigation"
        className={`fixed md:static w-64 min-h-screen bg-gradient-to-b from-blue-800 to-blue-600 text-white flex flex-col py-8 px-4 shadow-2xl rounded-r-3xl transition-transform duration-300 ease-in-out z-50
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
      >
        <div className="flex justify-center items-center mb-10 px-2 gap-3">
          {/* <Image src={logo} alt='logo' className="object-cover h-12 w-12" priority /> */}
          <span
            className="font-cursive text-[27px]"
            style={{ fontFamily: "Kaushan Script" }}
          >
            Abhishek Sharma
          </span>
        </div>
        <nav className="flex-1 flex flex-col gap-2" aria-label="Navigation menu">
          {tabs.map((tab, index) => {
            const Icon = iconMap[tab.name];
            const isActive = activeTab === tab.name;
            const isFocused = index === focusedIndex;
            return (
              <button
                key={tab.name}
                onClick={() => {
                  setActiveTab(tab.name);
                  if (window.innerWidth < 660) {
                    toggleSidebar();
                  }
                }}
                onFocus={() => setFocusedIndex(index)}
                aria-current={isActive ? 'page' : undefined}
                aria-label={`Navigate to ${tab.name} section`}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-base font-medium focus:outline-none ${
                  isActive
                    ? 'bg-white text-blue-800 shadow-lg'
                    : isFocused
                      ? 'bg-[#ffffff20] text-white'
                      : 'hover:bg-[#ffffff10] text-white'
                }`}
              >
                <Icon className={`h-6 w-6 ${isActive ? 'text-blue-600' : 'text-blue-200'}`} aria-hidden="true" />
                {tab.name}
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
} 
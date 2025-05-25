"use client";
import { useState, useEffect, useCallback } from 'react';
import profileData from './assets/data/profile.json';
import Sidebar from './assets/components/Sidebar';
import Header from './assets/components/Header';
import ProfileSection from './assets/components/ProfileSection';
import AcademicsSection from './assets/components/AcademicsSection';
import SkillsSection from './assets/components/SkillsSection';
import MoreSection from './assets/components/MoreSection';
import ProjectsSection from './assets/components/ProjectsSection';
import CertificationsSection from './assets/components/CertificationsSection';

const tabs = [
  { name: 'Profile' },
  { name: 'Academics' },
  { name: 'Skills' },
  { name: 'Projects' },
  { name: 'Certifications' },
  { name: 'More' },
];

const MOBILE_BREAKPOINT = 660;

export default function Home() {
  const [activeTab, setActiveTab] = useState('Profile');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { profile, academics, experience, skills, more, projects, certifications } = profileData;

  const handleResize = useCallback(() => {
    if (window.innerWidth >= MOBILE_BREAKPOINT) {
      setIsSidebarOpen(false);
    }
  }, []);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const renderContent = () => {
    switch (activeTab) {
      case 'Profile':
        return <ProfileSection profile={profile} />;
      case 'Academics':
        return <AcademicsSection academics={academics} experience={experience} />;
      case 'Skills':
        return <SkillsSection skills={skills} />;
      case 'Projects':
        return <ProjectsSection projects={projects} />;
      case 'Certifications':
        return <CertificationsSection certifications={certifications} />;
      case 'More':
        return <MoreSection more={more} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Sidebar
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <main className="flex-1 md:p-8 flex flex-col gap-8 mt-16 md:mt-0">
        {renderContent()}
      </main>
    </div>
  );
}

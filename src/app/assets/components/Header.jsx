import { Bars3Icon } from '@heroicons/react/24/outline';

export default function Header({ isSidebarOpen, toggleSidebar }) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-gradient-to-r from-blue-800 to-blue-600 text-white shadow-lg z-50 md:hidden">
      <div className="h-full px-4 flex items-center justify-between">
        <span className="font-cursive text-2xl" style={{ fontFamily: "Kaushan Script" }}>
          Abhishek Sharma
        </span>
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Open menu"
        >
          <Bars3Icon className="h-8 w-8" />
        </button>
      </div>
    </header>
  );
} 
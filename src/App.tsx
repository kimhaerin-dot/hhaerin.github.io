import { useState } from "react";
import { motion } from "motion/react";
import MagazineGrid from "./components/MagazineGrid";
import FeedModal from "./components/FeedModal";
import ConnectButton from "./components/ConnectButton";
import { FeedItem } from "./types";
import { Instagram, Grid, Bookmark, User } from "lucide-react";

export default function App() {
  const [selectedItem, setSelectedItem] = useState<FeedItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleItemClick = (item: FeedItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Magazine Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100 px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black tracking-tighter uppercase italic"
          >
            Portfolio Magazine.
          </motion.h1>
          
          <nav className="flex items-center gap-6">
            <Instagram className="w-5 h-5 cursor-pointer hover:text-gray-600 transition-colors" />
            <div className="hidden sm:flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
              <span className="cursor-pointer border-b-2 border-black pb-1">Feed</span>
              <span className="cursor-pointer text-gray-400 hover:text-black transition-colors pb-1">About</span>
              <span className="cursor-pointer text-gray-400 hover:text-black transition-colors pb-1">Archive</span>
            </div>
          </nav>
        </div>
      </header>

      <main className="pb-24">
        {/* Profile Section */}
        <section className="max-w-4xl mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-1"
          >
            <div className="w-full h-full rounded-full bg-white p-1">
              <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-white" />
              </div>
            </div>
          </motion.div>

          <div className="text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
              <h2 className="text-xl font-bold">Kim Hae Rin</h2>
              <div className="flex gap-2">
                <button className="px-4 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-bold transition-colors">
                  Edit Profile
                </button>
                <button className="px-4 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-bold transition-colors">
                  View Archive
                </button>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-start gap-8 mb-4 text-sm">
              <span><strong>5</strong> posts</span>
              <span><strong>1.2k</strong> followers</span>
              <span><strong>850</strong> following</span>
            </div>
            
            <div>
              <h3 className="font-bold mb-1">김해린</h3>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <div className="max-w-4xl mx-auto border-t border-gray-100 flex justify-center gap-12 text-[10px] font-bold uppercase tracking-widest py-4">
          <div className="flex items-center gap-2 border-t border-black -mt-4 pt-4 cursor-pointer">
            <Grid className="w-3 h-3" />
            <span>Posts</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 cursor-pointer hover:text-black transition-colors">
            <Bookmark className="w-3 h-3" />
            <span>Saved</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 cursor-pointer hover:text-black transition-colors">
            <User className="w-3 h-3" />
            <span>Tagged</span>
          </div>
        </div>

        {/* Grid */}
        <MagazineGrid onItemClick={handleItemClick} />
      </main>

      <FeedModal 
        item={selectedItem} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      <ConnectButton />

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-4 py-12 border-t border-gray-100 text-center">
        <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em]">
          © 2024 Magazine Edition • Crafted with Passion
        </p>
      </footer>
    </div>
  );
}

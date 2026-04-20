import { FeedItem } from "../types";
import { motion } from "motion/react";

interface FeedCardProps {
  item: FeedItem;
  onClick: () => void;
}

export default function FeedCard({ item, onClick }: FeedCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 0.98 }}
      whileTap={{ scale: 0.95 }}
      className="relative aspect-square overflow-hidden cursor-pointer group bg-white border border-gray-100"
      onClick={onClick}
    >
      {/* Title Overlay */}
      <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
        <h3 className="text-black text-xl md:text-2xl font-black tracking-tighter leading-tight break-keep group-hover:scale-105 transition-transform duration-300">
          {item.title}
        </h3>
      </div>
      
      {/* Hover Indicator */}
      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
      </div>
    </motion.div>
  );
}

import { motion } from "motion/react";
import { FeedItem } from "../types";
import { FEED_ITEMS } from "../constants";
import FeedCard from "./FeedCard";

interface MagazineGridProps {
  onItemClick: (item: FeedItem) => void;
}

export default function MagazineGrid({ onItemClick }: MagazineGridProps) {
  return (
    <div className="magazine-grid max-w-4xl mx-auto px-1 py-1">
      {FEED_ITEMS.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <FeedCard item={item} onClick={() => onItemClick(item)} />
        </motion.div>
      ))}
    </div>
  );
}

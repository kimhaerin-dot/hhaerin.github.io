import { MessageCircle, Mail, Instagram, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export default function ConnectButton() {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    {
      name: "Email",
      value: "haerin768@naver.com",
      icon: <Mail className="w-4 h-4" />,
      action: () => window.open('mailto:haerin768@naver.com')
    },
    {
      name: "Instagram",
      value: "@h.llinnnn_",
      icon: <Instagram className="w-4 h-4" />,
      action: () => window.open('https://www.instagram.com/h.llinnnn_/')
    }
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="bg-white border border-gray-100 shadow-2xl rounded-2xl p-2 w-64 overflow-hidden"
          >
            <div className="px-3 py-2 mb-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Connect</p>
            </div>
            {contacts.map((contact) => (
              <button
                key={contact.name}
                onClick={contact.action}
                className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors group text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold">{contact.name}</p>
                    <p className="text-[10px] text-gray-500">{contact.value}</p>
                  </div>
                </div>
                <ExternalLink className="w-3 h-3 text-gray-300 group-hover:text-black transition-colors" />
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 bg-black text-white px-6 py-4 rounded-full shadow-2xl hover:bg-gray-900 transition-colors group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-sm tracking-tight">Connect with Me</span>
        <div className="relative">
          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-black animate-ping" />
        </div>
      </motion.button>
    </div>
  );
}

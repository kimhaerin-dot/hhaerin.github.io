import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { FeedItem } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, X, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

interface FeedModalProps {
  item: FeedItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function FeedModal({ item, isOpen, onClose }: FeedModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!item) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % item.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + item.images.length) % item.images.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[500px] w-[95vw] aspect-square p-0 overflow-hidden bg-white border-none sm:rounded-none md:rounded-lg">
        <div className="flex flex-col h-full w-full">
          {/* Image/Title Section (Top Half) */}
          <div className="relative w-full h-1/2 bg-black flex items-center justify-center overflow-hidden shrink-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full relative"
              >
                {item.id === "intro" && currentImageIndex === 1 ? (
                  <div className="w-full h-full bg-white flex flex-col items-center justify-center p-6 text-black font-sans overflow-y-auto">
                    <div className="space-y-4 text-center py-2">
                      <div className="space-y-1">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">Name</p>
                        <h3 className="text-2xl font-black tracking-tighter">김해린</h3>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">Birthday</p>
                        <h3 className="text-xl font-bold tracking-tighter">2005.10.31</h3>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">Gender</p>
                        <h3 className="text-xl font-bold tracking-tighter">여</h3>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">Major</p>
                        <h3 className="text-lg font-bold tracking-tighter leading-tight">한성대학교<br/>문학문화콘텐츠학과</h3>
                      </div>
                    </div>
                  </div>
                ) : item.id === "synopsis" && currentImageIndex === 1 ? (
                  <div className="w-full h-full bg-black flex flex-col items-center justify-center p-8 text-white font-sans overflow-y-auto">
                    <div className="w-full max-w-sm space-y-8">
                      <div className="text-center">
                        <h4 className="text-[10px] uppercase tracking-[0.4em] text-red-600 font-bold mb-2">Structure</h4>
                        <div className="grid grid-cols-4 gap-2">
                          {['기', '승', '전', '결'].map((text, i) => (
                            <div key={i} className="border border-white/20 p-2 text-center">
                              <span className="text-xl font-black">{text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-4 text-xs">
                        <div className="flex items-start gap-4 border-b border-white/10 pb-4">
                          <span className="text-red-600 font-bold shrink-0">기</span>
                          <p className="opacity-70 leading-relaxed">1989년, 강압 수사로 거짓 자백을 한 윤성호. 30년 후 진범의 도발적인 전화를 받다.</p>
                        </div>
                        <div className="flex items-start gap-4 border-b border-white/10 pb-4">
                          <span className="text-red-600 font-bold shrink-0">승</span>
                          <p className="opacity-70 leading-relaxed">형사 오재호와 함께 재심을 준비. 과거 수사에서 누락된 진실을 파헤치다.</p>
                        </div>
                        <div className="flex items-start gap-4 border-b border-white/10 pb-4">
                          <span className="text-red-600 font-bold shrink-0">전</span>
                          <p className="opacity-70 leading-relaxed">권력기관의 방해로 재심 청구 기각. 좌절하지만 진범의 결정적 자백을 이끌어내다.</p>
                        </div>
                        <div className="flex items-start gap-4 border-b border-white/10 pb-4">
                          <span className="text-red-600 font-bold shrink-0">결</span>
                          <p className="opacity-70 leading-relaxed">재심 승리. 30년 만의 무죄 판결과 뒤바뀐 가해자와 피해자의 운명.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={`w-full h-full ${item.id === "synopsis" ? "bg-black" : "bg-white"} flex items-center justify-center p-6`}>
                    <h3 className={`text-2xl font-black tracking-tighter ${item.id === "synopsis" ? "text-white" : "text-black"} text-center break-keep`}>
                      {item.id === "synopsis" && currentImageIndex === 0 ? (
                        <>
                          <span className="block text-sm uppercase tracking-[0.5em] mb-4 text-red-600">Screenplay</span>
                          조작된 <span className="text-red-600">시간</span>
                        </>
                      ) : (
                        item.title
                      )}
                    </h3>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {item.images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 text-black hover:bg-black/10 rounded-full z-10"
                  onClick={prevImage}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-black hover:bg-black/10 rounded-full z-10"
                  onClick={nextImage}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
                
                {/* Dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                  {item.images.map((_, i) => (
                    <div
                      key={i}
                      className={`w-1 h-1 rounded-full transition-colors ${
                        i === currentImageIndex ? "bg-black" : "bg-black/20"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Content Section (Bottom Half) */}
          <div className="flex-1 flex flex-col bg-white overflow-y-auto custom-scrollbar border-t border-gray-50">
            <div className="p-5 flex flex-col min-h-full">
              <div className="flex items-center justify-between mb-3 shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white text-[8px] font-bold">
                    ME
                  </div>
                  <div>
                    <h4 className="font-bold text-xs">Portfolio Feed</h4>
                    <p className="text-[8px] text-gray-500 uppercase tracking-widest">{item.subtitle}</p>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <h2 className="text-lg font-black mb-2 tracking-tighter leading-tight">
                  {item.title}
                </h2>

                {item.id === "synopsis" && (
                  <a
                    href="https://bow-stallion-0c6.notion.site/_-3483d444cfea8082842fd8112e8dd36d?source=copy_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 rounded-xl font-bold text-xs mb-6 hover:bg-gray-900 transition-colors no-underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    시놉시스 읽기
                  </a>
                )}

                <p className="text-xs text-gray-700 leading-relaxed whitespace-pre-wrap mb-4">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-[8px] font-bold px-2 py-0.5 bg-gray-100 rounded-full uppercase tracking-tighter">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-gray-100 mt-auto shrink-0">
                <p className="text-[8px] text-gray-400 uppercase tracking-widest">
                  Just now • Magazine Edition
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

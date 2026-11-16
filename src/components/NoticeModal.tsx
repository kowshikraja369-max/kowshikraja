import { useEffect } from 'react';
import { X } from 'lucide-react';
import { InstitutionalNotice } from '../data/collegeData';

interface NoticeModalProps {
  notice: InstitutionalNotice | null;
  onClose: () => void;
}

export function NoticeModal({ notice, onClose }: NoticeModalProps) {
  useEffect(() => {
    if (!notice) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [notice, onClose]);

  if (!notice) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1C1917]/50 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="notice-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-[#FBF9F5] border border-[#E5E0D8] rounded-lg shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 px-6 py-5 bg-white border-b border-[#E5E0D8]">
          <div>
            <p className="font-mono text-xs text-[#57534E] tabular-nums">
              {notice.refCode} · {notice.category} · {notice.date}
            </p>
            <h2
              id="notice-modal-title"
              className="font-serif text-xl sm:text-2xl font-semibold text-[#1C1917] mt-1.5 text-balance"
            >
              {notice.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close circular"
            className="p-2 text-[#57534E] hover:text-[#1C1917] hover:bg-[#F2EFE9] rounded-md transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {notice.fullText.map((paragraph, idx) => (
            <p key={idx} className="text-[15px] leading-relaxed text-[#1C1917]">
              {paragraph}
            </p>
          ))}

          {notice.deadline && (
            <div className="pt-4 mt-4 border-t border-[#E5E0D8]">
              <p className="text-xs text-[#57534E]">Schedule &amp; Key Dates</p>
              <p className="text-sm font-medium text-[#0F294A] mt-1">{notice.deadline}</p>
            </div>
          )}
        </div>

        <div className="flex justify-end px-6 py-4 bg-white border-t border-[#E5E0D8]">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-white bg-[#0F294A] hover:bg-[#183B69] rounded-md transition-colors cursor-pointer"
          >
            Close Circular
          </button>
        </div>
      </div>
    </div>
  );
}

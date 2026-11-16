import { useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { AcademicProgram } from '../data/collegeData';

interface ProgramModalProps {
  program: AcademicProgram | null;
  onClose: () => void;
  onApplyForProgram: (programId: string) => void;
}

export function ProgramModal({ program, onClose, onApplyForProgram }: ProgramModalProps) {
  useEffect(() => {
    if (!program) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [program, onClose]);

  if (!program) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1C1917]/50 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="program-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#FBF9F5] border border-[#E5E0D8] rounded-lg shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-start justify-between gap-4 px-6 py-5 border-b border-[#E5E0D8] bg-white">
          <div>
            <p className="font-mono text-xs text-[#57534E] tabular-nums">
              {program.code} · {program.department} · {program.accreditation}
            </p>
            <h2
              id="program-modal-title"
              className="font-serif text-2xl sm:text-3xl font-semibold text-[#1C1917] mt-1.5 text-balance"
            >
              {program.degree} {program.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close programme prospectus"
            className="p-2 text-[#57534E] hover:text-[#1C1917] hover:bg-[#F2EFE9] rounded-md transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Structured Metadata Definition List */}
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-[#E5E0D8]">
            <div>
              <dt className="text-xs text-[#57534E]">Programme Duration</dt>
              <dd className="font-mono text-sm font-medium text-[#1C1917] mt-1 tabular-nums">
                {program.duration}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-[#57534E]">Sanctioned Intake</dt>
              <dd className="font-mono text-sm font-medium text-[#1C1917] mt-1 tabular-nums">
                {program.intake} Seats / Year
              </dd>
            </div>
            <div>
              <dt className="text-xs text-[#57534E]">Admission Pathway</dt>
              <dd className="text-sm font-medium text-[#1C1917] mt-1">{program.pathway}</dd>
            </div>
          </dl>

          <div>
            <h3 className="text-sm font-semibold text-[#1C1917] mb-2">Programme Overview</h3>
            <p className="text-[15px] leading-relaxed text-[#57534E]">{program.summary}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h3 className="text-sm font-semibold text-[#1C1917] mb-3 pb-2 border-b border-[#E5E0D8]">
                Core Curriculum Modules
              </h3>
              <ul className="space-y-2 text-sm text-[#57534E]">
                {program.coreModules.map((mod) => (
                  <li key={mod} className="leading-snug">
                    {mod}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#1C1917] mb-3 pb-2 border-b border-[#E5E0D8]">
                Dedicated Laboratories &amp; Career Tracks
              </h3>
              <ul className="space-y-2 text-sm text-[#57534E] mb-4">
                {program.laboratories.map((lab) => (
                  <li key={lab} className="leading-snug">
                    {lab}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#57534E] pt-2 border-t border-[#E5E0D8]/70">
                Typical Roles: {program.careerPaths.join(' · ')}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-t border-[#E5E0D8] bg-white">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-[#57534E] hover:text-[#1C1917] transition-colors cursor-pointer"
          >
            Back to Catalogue
          </button>
          <button
            type="button"
            onClick={() => onApplyForProgram(program.id)}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#0F294A] hover:bg-[#183B69] rounded-md transition-colors cursor-pointer"
          >
            <span>Apply for {program.degree} Programme</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

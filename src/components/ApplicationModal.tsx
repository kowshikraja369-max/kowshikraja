import { useEffect, useState, FormEvent } from 'react';
import { X, CheckCircle2, Printer } from 'lucide-react';
import { ACADEMIC_PROGRAMS } from '../data/collegeData';

interface ApplicationModalProps {
  isOpen: boolean;
  preselectedProgramId?: string;
  onClose: () => void;
}

interface ApplicationReceipt {
  referenceId: string;
  applicantName: string;
  email: string;
  phone: string;
  programLabel: string;
  score: string;
  counsellingMode: string;
  submittedAt: string;
}

export function ApplicationModal({
  isOpen,
  preselectedProgramId,
  onClose,
}: ApplicationModalProps) {
  const [applicantName, setApplicantName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [programId, setProgramId] = useState(preselectedProgramId || ACADEMIC_PROGRAMS[0].id);
  const [qualifyingScore, setQualifyingScore] = useState('');
  const [counsellingMode, setCounsellingMode] = useState<'On-Campus Visit (Kuniamuthur)' | 'Online Faculty Counselling'>(
    'On-Campus Visit (Kuniamuthur)'
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [receipt, setReceipt] = useState<ApplicationReceipt | null>(null);

  useEffect(() => {
    if (preselectedProgramId) {
      setProgramId(preselectedProgramId);
    }
  }, [preselectedProgramId]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!applicantName.trim() || applicantName.trim().length < 2) {
      nextErrors.applicantName = 'Enter the applicant’s full name.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = 'Enter a valid email address.';
    }
    const cleanPhone = phone.replace(/[\s\-+()]/g, '');
    if (!/^(91)?[6-9]\d{9}$/.test(cleanPhone)) {
      nextErrors.phone = 'Enter a valid 10-digit Indian mobile number.';
    }
    if (!qualifyingScore.trim()) {
      nextErrors.qualifyingScore = 'Provide your Class XII percentage, TNEA cutoff, or UG CGPA.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const selected = ACADEMIC_PROGRAMS.find((p) => p.id === programId) ?? ACADEMIC_PROGRAMS[0];
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    setReceipt({
      referenceId: `SKC-2026-${randomCode}`,
      applicantName: applicantName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      programLabel: `${selected.degree} ${selected.title}`,
      score: qualifyingScore.trim(),
      counsellingMode,
      submittedAt: new Date().toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
    });
  };

  const handleReset = () => {
    setApplicantName('');
    setEmail('');
    setPhone('');
    setQualifyingScore('');
    setErrors({});
    setReceipt(null);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1C1917]/50 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="application-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl max-h-[92vh] overflow-y-auto bg-[#FBF9F5] border border-[#E5E0D8] rounded-lg shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 px-6 py-5 bg-white border-b border-[#E5E0D8]">
          <div>
            <p className="font-mono text-xs text-[#57534E]">
              Admissions 2026–27 · Kuniamuthur Campus, Coimbatore
            </p>
            <h2
              id="application-modal-title"
              className="font-serif text-2xl font-semibold text-[#1C1917] mt-1"
            >
              {receipt ? 'Application Enquiry Registered' : 'Admissions & Counselling Form'}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close application form"
            className="p-2 text-[#57534E] hover:text-[#1C1917] hover:bg-[#F2EFE9] rounded-md transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {receipt ? (
          <div className="p-6 space-y-6">
            <div className="flex items-start gap-3 p-4 bg-white border border-[#E5E0D8] rounded-md">
              <CheckCircle2 className="w-5 h-5 text-[#14532D] shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-[#1C1917]">
                  Confirmed — Reference {receipt.referenceId}
                </p>
                <p className="text-sm text-[#57534E] mt-1">
                  Our Admissions Office in Kuniamuthur will contact you within one working day to
                  confirm your counselling slot and document verification checklist.
                </p>
              </div>
            </div>

            <dl className="divide-y divide-[#E5E0D8] border-t border-b border-[#E5E0D8] text-sm">
              <div className="py-3 flex justify-between gap-4">
                <dt className="text-[#57534E]">Reference Number</dt>
                <dd className="font-mono font-medium text-[#1C1917] tabular-nums">
                  {receipt.referenceId}
                </dd>
              </div>
              <div className="py-3 flex justify-between gap-4">
                <dt className="text-[#57534E]">Applicant Name</dt>
                <dd className="font-medium text-[#1C1917] text-right">{receipt.applicantName}</dd>
              </div>
              <div className="py-3 flex justify-between gap-4">
                <dt className="text-[#57534E]">Programme Applied</dt>
                <dd className="font-medium text-[#1C1917] text-right">{receipt.programLabel}</dd>
              </div>
              <div className="py-3 flex justify-between gap-4">
                <dt className="text-[#57534E]">Qualifying Score</dt>
                <dd className="font-mono text-[#1C1917] tabular-nums text-right">
                  {receipt.score}
                </dd>
              </div>
              <div className="py-3 flex justify-between gap-4">
                <dt className="text-[#57534E]">Counselling Preference</dt>
                <dd className="text-[#1C1917] text-right">{receipt.counsellingMode}</dd>
              </div>
              <div className="py-3 flex justify-between gap-4">
                <dt className="text-[#57534E]">Date Recorded</dt>
                <dd className="font-mono text-[#1C1917] tabular-nums">{receipt.submittedAt}</dd>
              </div>
            </dl>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2 text-sm font-medium text-[#57534E] hover:text-[#1C1917] transition-colors cursor-pointer"
              >
                Submit Another Application
              </button>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#1C1917] bg-white border border-[#E5E0D8] hover:bg-[#F2EFE9] rounded-md transition-colors cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Slip</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2 text-sm font-medium text-white bg-[#0F294A] hover:bg-[#183B69] rounded-md transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="p-6 space-y-5">
            <div>
              <label htmlFor="app-name" className="block text-sm font-medium text-[#1C1917] mb-1.5">
                Applicant Full Name
              </label>
              <input
                id="app-name"
                type="text"
                value={applicantName}
                onChange={(e) => setApplicantName(e.target.value)}
                placeholder="e.g. Karthikeyan Sundaram"
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E5E0D8] rounded-md text-[#1C1917] placeholder:text-[#57534E]/60 focus:outline-none focus:border-[#0F294A]"
              />
              {errors.applicantName && (
                <p className="text-xs text-[#991B1B] mt-1">{errors.applicantName}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="app-email" className="block text-sm font-medium text-[#1C1917] mb-1.5">
                  Email Address
                </label>
                <input
                  id="app-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="applicant@example.com"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E5E0D8] rounded-md text-[#1C1917] placeholder:text-[#57534E]/60 focus:outline-none focus:border-[#0F294A]"
                />
                {errors.email && <p className="text-xs text-[#991B1B] mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="app-phone" className="block text-sm font-medium text-[#1C1917] mb-1.5">
                  Mobile Number
                </label>
                <input
                  id="app-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98422 00000"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E5E0D8] rounded-md text-[#1C1917] placeholder:text-[#57534E]/60 focus:outline-none focus:border-[#0F294A]"
                />
                {errors.phone && <p className="text-xs text-[#991B1B] mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="app-program" className="block text-sm font-medium text-[#1C1917] mb-1.5">
                Preferred Academic Programme
              </label>
              <select
                id="app-program"
                value={programId}
                onChange={(e) => setProgramId(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E5E0D8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#0F294A]"
              >
                {ACADEMIC_PROGRAMS.map((prog) => (
                  <option key={prog.id} value={prog.id}>
                    {prog.degree} {prog.title} ({prog.department})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="app-score" className="block text-sm font-medium text-[#1C1917] mb-1.5">
                Qualifying Score / Cutoff
              </label>
              <input
                id="app-score"
                type="text"
                value={qualifyingScore}
                onChange={(e) => setQualifyingScore(e.target.value)}
                placeholder="e.g. TNEA Cutoff 188.5 / 200 or 92% Class XII"
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E5E0D8] rounded-md text-[#1C1917] placeholder:text-[#57534E]/60 focus:outline-none focus:border-[#0F294A]"
              />
              {errors.qualifyingScore && (
                <p className="text-xs text-[#991B1B] mt-1">{errors.qualifyingScore}</p>
              )}
            </div>

            <div>
              <span className="block text-sm font-medium text-[#1C1917] mb-2">
                Counselling Mode
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(
                  [
                    'On-Campus Visit (Kuniamuthur)',
                    'Online Faculty Counselling',
                  ] as const
                ).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setCounsellingMode(mode)}
                    className={`px-3.5 py-2.5 text-xs font-medium text-left rounded-md border transition-colors cursor-pointer ${
                      counsellingMode === mode
                        ? 'bg-[#0F294A] text-white border-[#0F294A]'
                        : 'bg-white text-[#1C1917] border-[#E5E0D8] hover:bg-[#F2EFE9]'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E5E0D8]">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-[#57534E] hover:text-[#1C1917] transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 text-sm font-medium text-white bg-[#0F294A] hover:bg-[#183B69] rounded-md transition-colors cursor-pointer"
              >
                Submit Enquiry
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

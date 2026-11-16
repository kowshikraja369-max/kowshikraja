import { useMemo, useState } from 'react';
import {
  ArrowRight,
  Search,
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
} from 'lucide-react';
import {
  ACADEMIC_PROGRAMS,
  ALUMNI_TESTIMONIALS,
  AcademicProgram,
  CAMPUS_FACILITIES,
  CAMPUS_IMAGES,
  CAMPUS_NOTICES,
  InstitutionalNotice,
  KEY_FACTS,
  PLACEMENT_SECTORS,
  ProgramLevel,
  RECRUITER_PARTNERS,
} from './data/collegeData';
import { Header } from './components/Header';
import { ResilientImage } from './components/ResilientImage';
import { ProgramModal } from './components/ProgramModal';
import { NoticeModal } from './components/NoticeModal';
import { ApplicationModal } from './components/ApplicationModal';

type ProgramFilter = 'All' | ProgramLevel;
type PlacementTab = 'sectors' | 'recruiters';
type NoticeFilter = 'All' | 'Admissions' | 'Examinations' | 'Events';

export default function App() {
  const [programFilter, setProgramFilter] = useState<ProgramFilter>('All');
  const [programQuery, setProgramQuery] = useState('');
  const [selectedProgram, setSelectedProgram] = useState<AcademicProgram | null>(null);

  const [placementTab, setPlacementTab] = useState<PlacementTab>('sectors');
  const [activeFacilityId, setActiveFacilityId] = useState<string>(CAMPUS_FACILITIES[0].id);

  const [noticeFilter, setNoticeFilter] = useState<NoticeFilter>('All');
  const [selectedNotice, setSelectedNotice] = useState<InstitutionalNotice | null>(null);

  const [applicationOpen, setApplicationOpen] = useState(false);
  const [preselectedProgramId, setPreselectedProgramId] = useState<string | undefined>(undefined);

  const filteredPrograms = useMemo(() => {
    const q = programQuery.trim().toLowerCase();
    return ACADEMIC_PROGRAMS.filter((prog) => {
      const matchesLevel = programFilter === 'All' || prog.level === programFilter;
      const matchesQuery =
        !q ||
        prog.title.toLowerCase().includes(q) ||
        prog.degree.toLowerCase().includes(q) ||
        prog.department.toLowerCase().includes(q) ||
        prog.summary.toLowerCase().includes(q);
      return matchesLevel && matchesQuery;
    });
  }, [programFilter, programQuery]);

  const filteredNotices = useMemo(() => {
    return CAMPUS_NOTICES.filter(
      (notice) => noticeFilter === 'All' || notice.category === noticeFilter
    );
  }, [noticeFilter]);

  const activeFacility =
    CAMPUS_FACILITIES.find((f) => f.id === activeFacilityId) ?? CAMPUS_FACILITIES[0];

  const handleOpenApplication = (programId?: string) => {
    setPreselectedProgramId(programId);
    setSelectedProgram(null);
    setApplicationOpen(true);
  };

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1C1917]">
      <Header onOpenApply={() => handleOpenApplication()} />

      <main className="flex-1">
        {/* Hero Section: Two-column editorial split + 4-column institutional strip */}
        <section className="border-b border-[#E5E0D8] bg-[#FBF9F5]">
          <div className="max-w-[1200px] mx-auto px-6 py-12 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
              {/* Left Narrative Column */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="mb-6 w-40 sm:w-48 overflow-hidden rounded-md border border-[#E5E0D8] bg-[#1A1A1A]">
                    <ResilientImage
                      src="/assets/aistudio/image_b0de2a89.png"
                      alt="Sri Krishna College winged emblem crest"
                      className="w-full h-auto block object-cover"
                      fallbackTitle="Sri Krishna College Crest"
                      fallbackSubtitle="Coimbatore"
                    />
                  </div>
                  <p className="text-xs font-medium tracking-widest uppercase text-[#57534E]">
                    Kuniamuthur, Coimbatore · Autonomous · Anna University Affiliated
                  </p>
                  <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] font-semibold text-[#1C1917] mt-4 text-balance">
                    Engineering &amp; Management Education Rooted in Rigor
                  </h1>
                  <p className="text-base sm:text-[17px] leading-relaxed text-[#57534E] mt-6 max-w-xl">
                    Established in 1998 beneath the Western Ghats foothills in Coimbatore, Sri
                    Krishna College of Engineering and Technology prepares engineers, researchers,
                    and management scholars through studio-based laboratories and deep industry
                    apprenticeships.
                  </p>
                </div>

                <div className="mt-10 pt-8 border-t border-[#E5E0D8] flex flex-wrap items-center gap-5">
                  <button
                    type="button"
                    onClick={() => handleOpenApplication()}
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#0F294A] hover:bg-[#183B69] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F294A]"
                  >
                    <span>Begin 2026 Application</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href="#academics"
                    className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-medium text-[#1C1917] hover:text-[#0F294A] underline underline-offset-4 decoration-[#E5E0D8] hover:decoration-[#0F294A] transition-colors whitespace-nowrap shrink-0"
                  >
                    <span className="bg-[#e61313]">Explore Academic Programmes</span>
                  </a>
                </div>
              </div>

              {/* Right Focal Photograph Column */}
              <div className="lg:col-span-6 flex flex-col">
                <figure className="flex-1 flex flex-col">
                  <div className="relative flex-1 min-h-[380px] lg:min-h-[480px] overflow-hidden rounded-md border border-[#E5E0D8] bg-[#F2EFE9]">
                    <ResilientImage
                      src={CAMPUS_IMAGES.heroCampus}
                      alt="Sri Krishna College campus buildings with red roofs and the Indian national flag in Coimbatore"
                      className="w-full h-full lg:h-full object-cover object-center"
                      fallbackTitle="Sri Krishna College Campus"
                      fallbackSubtitle="Sugunapuram, Kuniamuthur, Coimbatore"
                    />
                    <div className="absolute top-4 right-4 w-28 sm:w-32 md:w-36 pointer-events-none select-none drop-shadow-md">
                      <ResilientImage
                        src="/assets/aistudio/image_1740d383.png"
                        alt="100% Placement Opportunities badge"
                        className="w-full h-auto block object-contain"
                        fallbackTitle="100% Placement Opportunities"
                        fallbackSubtitle="Sri Krishna College"
                      />
                    </div>
                  </div>
                  <figcaption className="text-xs font-serif italic text-[#57534E] mt-2.5">
                    Main Academic Promenade, Kuniamuthur Campus — Coimbatore, Tamil Nadu
                  </figcaption>
                </figure>
              </div>
            </div>

            {/* 4-Column Full-Width Institutional Key Facts Strip */}
            <div className="mt-12 lg:mt-16 pt-8 border-t border-[#E5E0D8] grid grid-cols-2 lg:grid-cols-4 gap-8">
              {KEY_FACTS.map((fact) => (
                <div key={fact.label}>
                  <p className="font-serif text-2xl sm:text-3xl font-semibold text-[#1C1917] tabular-nums">
                    {fact.value}
                  </p>
                  <p className="text-sm font-medium text-[#1C1917] mt-1">{fact.label}</p>
                  <p className="text-xs text-[#57534E] mt-0.5">{fact.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 01: Academic Programmes Catalogue */}
        <section id="academics" className="py-16 lg:py-24 bg-white border-b border-[#E5E0D8]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E5E0D8]">
              <div>
                <p className="text-xs font-medium tracking-widest uppercase text-[#57534E]">
                  01. Academic Directory
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1917] mt-2 text-balance">
                  Undergraduate, Postgraduate &amp; Doctoral Studies
                </h2>
                <p className="text-[15px] text-[#57534E] mt-2 max-w-2xl">
                  Autonomous credit-based curricula revised biennially with engineering leaders
                  across Coimbatore, Bengaluru, and Chennai. Select any programme to inspect core
                  modules and laboratory infrastructure.
                </p>
              </div>

              {/* Filter & Search Toolbar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                <div
                  role="tablist"
                  aria-label="Filter programmes by degree level"
                  className="inline-flex items-center gap-1 p-1 bg-[#F2EFE9] rounded-md border border-[#E5E0D8]"
                >
                  {(['All', 'Undergraduate', 'Postgraduate', 'Research'] as const).map((level) => (
                    <button
                      key={level}
                      type="button"
                      role="tab"
                      aria-selected={programFilter === level}
                      onClick={() => setProgramFilter(level)}
                      className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        programFilter === level
                          ? 'bg-white text-[#1C1917] shadow-xs'
                          : 'text-[#57534E] hover:text-[#1C1917]'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <Search className="w-4 h-4 text-[#57534E] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="search"
                    value={programQuery}
                    onChange={(e) => setProgramQuery(e.target.value)}
                    placeholder="Filter by discipline..."
                    aria-label="Search academic programmes"
                    className="w-full sm:w-52 pl-9 pr-3 py-2 text-xs bg-[#FBF9F5] border border-[#E5E0D8] rounded-md text-[#1C1917] placeholder:text-[#57534E]/70 focus:outline-none focus:border-[#0F294A]"
                  />
                </div>
              </div>
            </div>

            {/* Catalogue Grid */}
            {filteredPrograms.length === 0 ? (
              <div className="py-14 text-center border-b border-[#E5E0D8]">
                <p className="font-serif text-xl text-[#1C1917]">No matching programmes found</p>
                <p className="text-sm text-[#57534E] mt-1">
                  Adjust the degree level filter or clear your search term to view all offerings.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setProgramFilter('All');
                    setProgramQuery('');
                  }}
                  className="mt-4 px-4 py-2 text-xs font-medium text-[#0F294A] border border-[#E5E0D8] hover:bg-[#F2EFE9] rounded-md transition-colors cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 divide-y divide-[#E5E0D8] md:divide-y-0">
                {filteredPrograms.map((prog) => (
                  <article
                    key={prog.id}
                    className="py-6 border-b border-[#E5E0D8] flex flex-col justify-between gap-4"
                  >
                    <div>
                      <p className="text-xs text-[#57534E] font-mono tabular-nums">
                        {prog.degree} · {prog.duration} · {prog.intake} Seats · {prog.accreditation}
                      </p>
                      <h3 className="font-serif text-xl font-semibold text-[#1C1917] mt-1.5">
                        {prog.title}
                      </h3>
                      <p className="text-sm text-[#57534E] leading-relaxed mt-2">{prog.summary}</p>
                    </div>

                    <div className="flex items-center justify-between gap-4 pt-1">
                      <span className="text-xs text-[#57534E]">{prog.department}</span>
                      <button
                        type="button"
                        onClick={() => setSelectedProgram(prog)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#0F294A] hover:underline underline-offset-4 whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        <span>View Prospectus</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Section 02: Career & Placement Outcomes (Claim-to-Proof Adjacency) */}
        <section id="placements" className="py-16 lg:py-24 bg-[#FBF9F5] border-b border-[#E5E0D8]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left Summary & Quantitative Proof */}
              <div className="lg:col-span-5">
                <p className="text-xs font-medium tracking-widest uppercase text-[#57534E]">
                  02. Placement &amp; Industry Outcomes
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1917] mt-2 text-balance">
                  Verified Graduate Recruitment (Class of 2025–26)
                </h2>
                <p className="text-[15px] leading-relaxed text-[#57534E] mt-4">
                  Our Career Development &amp; Placement Cell pairs mandatory sixth-semester
                  industrial internships with structured technical mentoring, enabling graduating
                  cohorts to step directly into core manufacturing and software engineering roles.
                </p>

                <dl className="grid grid-cols-2 gap-6 mt-8 pt-6 border-t border-[#E5E0D8]">
                  <div>
                    <dt className="text-xs text-[#57534E]">Highest Annual Package</dt>
                    <dd className="font-mono text-2xl font-medium text-[#1C1917] mt-1 tabular-nums">
                      ₹44.0 LPA
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#57534E]">Median Compensation</dt>
                    <dd className="font-mono text-2xl font-medium text-[#1C1917] mt-1 tabular-nums">
                      ₹7.4 LPA
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#57534E]">Total Offers Extended</dt>
                    <dd className="font-mono text-2xl font-medium text-[#1C1917] mt-1 tabular-nums">
                      1,184
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#57534E]">Recruiting Enterprises</dt>
                    <dd className="font-mono text-2xl font-medium text-[#1C1917] mt-1 tabular-nums">
                      240+
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Right Interactive Data Table / Recruiter Grid */}
              <div className="lg:col-span-7 bg-white border border-[#E5E0D8] rounded-md overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-b border-[#E5E0D8] bg-[#F2EFE9]/50">
                  <span className="text-sm font-semibold text-[#1C1917]">
                    2025–26 Recruitment Breakdown
                  </span>
                  <div className="inline-flex items-center gap-1 p-1 bg-[#F2EFE9] rounded-md border border-[#E5E0D8]">
                    <button
                      type="button"
                      onClick={() => setPlacementTab('sectors')}
                      className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        placementTab === 'sectors'
                          ? 'bg-white text-[#1C1917] shadow-xs'
                          : 'text-[#57534E] hover:text-[#1C1917]'
                      }`}
                    >
                      Sector Distribution
                    </button>
                    <button
                      type="button"
                      onClick={() => setPlacementTab('recruiters')}
                      className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        placementTab === 'recruiters'
                          ? 'bg-white text-[#1C1917] shadow-xs'
                          : 'text-[#57534E] hover:text-[#1C1917]'
                      }`}
                    >
                      Recruiting Partners
                    </button>
                  </div>
                </div>

                {placementTab === 'sectors' ? (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-[#E5E0D8] text-xs text-[#57534E]">
                          <th className="py-3.5 px-6 font-medium">Industry Sector</th>
                          <th className="py-3.5 px-4 font-medium text-right">Firms</th>
                          <th className="py-3.5 px-4 font-medium text-right">Offers</th>
                          <th className="py-3.5 px-4 font-medium text-right">Median</th>
                          <th className="py-3.5 px-6 font-medium text-right">Highest</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E5E0D8] text-sm">
                        {PLACEMENT_SECTORS.map((row) => (
                          <tr key={row.sector} className="hover:bg-[#FBF9F5] transition-colors">
                            <td className="py-4 px-6 font-medium text-[#1C1917]">
                              {row.sector}
                              <span className="block text-xs font-normal text-[#57534E] mt-0.5 tabular-nums">
                                {row.sharePercent} of graduating offers
                              </span>
                            </td>
                            <td className="py-4 px-4 font-mono text-right text-[#1C1917] tabular-nums">
                              {row.companiesCount}
                            </td>
                            <td className="py-4 px-4 font-mono text-right text-[#1C1917] tabular-nums">
                              {row.offersCount}
                            </td>
                            <td className="py-4 px-4 font-mono text-right text-[#1C1917] tabular-nums">
                              {row.medianCtc}
                            </td>
                            <td className="py-4 px-6 font-mono text-right font-medium text-[#0F294A] tabular-nums">
                              {row.highestCtc}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:gap-px bg-[#E5E0D8]">
                    {RECRUITER_PARTNERS.map((partner) => (
                      <div key={partner.name} className="bg-white p-4">
                        <p className="text-sm font-semibold text-[#1C1917]">{partner.name}</p>
                        <p className="text-xs text-[#57534E] mt-1">
                          {partner.domain} · <span className="font-mono tabular-nums">{partner.hires}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Adjacent Attributable Alumni Outcomes */}
            <div className="mt-14 pt-10 border-t border-[#E5E0D8]">
              <p className="text-xs font-medium tracking-widest uppercase text-[#57534E] mb-6">
                Alumni Voices &amp; Career Trajectories
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {ALUMNI_TESTIMONIALS.map((item) => (
                  <blockquote key={item.name} className="flex flex-col justify-between gap-4">
                    <p className="text-sm leading-relaxed text-[#1C1917]">“{item.outcome}”</p>
                    <footer className="pt-3 border-t border-[#E5E0D8]">
                      <p className="text-sm font-semibold text-[#1C1917]">{item.name}</p>
                      <p className="text-xs text-[#57534E] mt-0.5">
                        {item.role}, {item.organization}
                      </p>
                      <p className="text-xs text-[#57534E] mt-0.5">
                        {item.degree} · {item.batch}
                      </p>
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 03: Campus Infrastructure, Research & Student Life */}
        <section id="campus-life" className="py-16 lg:py-24 bg-white border-b border-[#E5E0D8]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-2xl pb-8">
              <p className="text-xs font-medium tracking-widest uppercase text-[#57534E]">
                03. Research &amp; Campus Quadrangle
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1917] mt-2 text-balance">
                Studios, Archives &amp; Shared Life in Kuniamuthur
              </h2>
              <p className="text-[15px] text-[#57534E] mt-2">
                Select a campus wing below to inspect laboratory resources, library collections, and
                residential facilities across our 42-acre green campus.
              </p>
            </div>

            {/* Interactive Facility Spotlight */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              {/* Left Selector List */}
              <div className="lg:col-span-5 flex flex-col divide-y divide-[#E5E0D8] border-t border-b border-[#E5E0D8]">
                {CAMPUS_FACILITIES.map((facility) => {
                  const isActive = facility.id === activeFacility.id;
                  return (
                    <button
                      key={facility.id}
                      type="button"
                      onClick={() => setActiveFacilityId(facility.id)}
                      className={`py-5 px-4 text-left transition-colors cursor-pointer flex items-start justify-between gap-4 ${
                        isActive ? 'bg-[#FBF9F5]' : 'bg-white hover:bg-[#FBF9F5]/60'
                      }`}
                    >
                      <div>
                        <p className="font-mono text-xs text-[#57534E]">{facility.figure}</p>
                        <h3
                          className={`font-serif text-lg font-semibold mt-1 ${
                            isActive ? 'text-[#0F294A]' : 'text-[#1C1917]'
                          }`}
                        >
                          {facility.title}
                        </h3>
                        <p className="text-xs text-[#57534E] mt-1">{facility.subtitle}</p>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 shrink-0 mt-1 transition-transform ${
                          isActive ? 'text-[#0F294A] translate-x-0.5' : 'text-[#57534E]'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Right Facility Editorial Showcase */}
              <div className="lg:col-span-7 flex flex-col justify-between bg-[#FBF9F5] border border-[#E5E0D8] rounded-md overflow-hidden">
                <div className="aspect-[16/10] w-full overflow-hidden bg-[#F2EFE9] border-b border-[#E5E0D8]">
                  <ResilientImage
                    src={activeFacility.image}
                    alt={activeFacility.alt}
                    className="w-full h-full object-cover"
                    fallbackTitle={activeFacility.title}
                    fallbackSubtitle={activeFacility.subtitle}
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-serif text-2xl font-semibold text-[#1C1917]">
                      {activeFacility.title}
                    </h3>
                    <span className="font-mono text-xs text-[#57534E]">
                      {activeFacility.figure}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#57534E] mt-3">
                    {activeFacility.description}
                  </p>
                  <p className="font-mono text-xs text-[#0F294A] mt-4 pt-4 border-t border-[#E5E0D8] tabular-nums">
                    {activeFacility.metrics}
                  </p>
                </div>
              </div>
            </div>

            {/* Campus Architecture: Administrative & Library Blocks */}
            <div className="mt-14 pt-12 border-t border-[#E5E0D8] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6">
                <figure>
                  <div className="overflow-hidden rounded-md border border-[#E5E0D8] bg-[#F2EFE9]">
                    <ResilientImage
                      src="/assets/aistudio/image_6ef3d7fb.png"
                      alt="Sri Krishna College Administrative Block, Library Block, and Main Campus Plaza in Coimbatore"
                      className="w-full h-auto block"
                      fallbackTitle="Administrative & Library Block"
                      fallbackSubtitle="Sri Krishna College, Coimbatore"
                    />
                  </div>
                  <figcaption className="text-xs font-serif italic text-[#57534E] mt-2.5">
                    Fig. 5 — Administrative Block, Library Wing, and Main Campus Forecourt, Coimbatore
                  </figcaption>
                </figure>
              </div>

              <div className="lg:col-span-6 space-y-5">
                <p className="text-xs font-medium tracking-widest uppercase text-[#57534E]">
                  Campus Architecture &amp; Academic Wings
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1C1917] text-balance">
                  Administrative Block, Library Wing &amp; Main Forecourt
                </h3>
                <p className="text-[15px] leading-relaxed text-[#57534E]">
                  Anchoring the central academic quadrangle, the granite-clad Administrative Block
                  houses the Office of the Principal, Controller of Examinations, and Admissions
                  Counselling Desk, opening directly onto the Library Wing and shaded student
                  courtyards.
                </p>

                <dl className="divide-y divide-[#E5E0D8] border-t border-b border-[#E5E0D8] text-sm">
                  <div className="py-3 flex items-baseline justify-between gap-4">
                    <dt className="font-medium text-[#1C1917]">Administrative Block</dt>
                    <dd className="text-[#57534E] text-right">
                      Admissions, Registrar &amp; Examination Cell
                    </dd>
                  </div>
                  <div className="py-3 flex items-baseline justify-between gap-4">
                    <dt className="font-medium text-[#1C1917]">Library Block</dt>
                    <dd className="text-[#57534E] text-right">
                      Print Archives, Periodicals &amp; Digital Commons
                    </dd>
                  </div>
                  <div className="py-3 flex items-baseline justify-between gap-4">
                    <dt className="font-medium text-[#1C1917]">Main Plaza</dt>
                    <dd className="text-[#57534E] text-right">
                      Visitor Reception &amp; Campus Bus Bay
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Section 04: Institutional Notices & Academic Calendar */}
        <section id="notices" className="py-16 lg:py-24 bg-[#FBF9F5] border-b border-[#E5E0D8]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-[#E5E0D8]">
              <div>
                <p className="text-xs font-medium tracking-widest uppercase text-[#57534E]">
                  04. Circulars &amp; Calendar
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1917] mt-2">
                  Official Notices &amp; Upcoming Events
                </h2>
              </div>

              <div className="inline-flex items-center gap-1 p-1 bg-[#F2EFE9] rounded-md border border-[#E5E0D8] self-start">
                {(['All', 'Admissions', 'Examinations', 'Events'] as const).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setNoticeFilter(cat)}
                    className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      noticeFilter === cat
                        ? 'bg-white text-[#1C1917] shadow-xs'
                        : 'text-[#57534E] hover:text-[#1C1917]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="divide-y divide-[#E5E0D8]">
              {filteredNotices.map((notice) => (
                <article
                  key={notice.id}
                  className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="max-w-3xl">
                    <p className="font-mono text-xs text-[#57534E] tabular-nums">
                      {notice.date} · {notice.category} · {notice.refCode}
                    </p>
                    <h3 className="font-serif text-xl font-semibold text-[#1C1917] mt-1.5">
                      {notice.title}
                    </h3>
                    <p className="text-sm text-[#57534E] mt-1.5">{notice.summary}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedNotice(notice)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#1C1917] bg-white border border-[#E5E0D8] hover:border-[#0F294A] hover:text-[#0F294A] rounded-md transition-colors whitespace-nowrap shrink-0 self-start md:self-center cursor-pointer"
                  >
                    <span>Read Circular</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 05: Admissions 2026–27 & Kuniamuthur Campus Visit */}
        <section id="admissions" className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-7">
                <p className="text-xs font-medium tracking-widest uppercase text-[#57534E]">
                  05. Admissions &amp; Campus Visit
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1917] mt-2 text-balance">
                  Join the 2026–27 Cohort at Sri Krishna College
                </h2>
                <p className="text-[15px] leading-relaxed text-[#57534E] mt-4 max-w-2xl">
                  Undergraduate admissions are conducted through Tamil Nadu Engineering Admissions
                  (TNEA) single-window counselling and institutional merit pathways. Postgraduate
                  candidates apply via TANCET, GATE, or MAT scores. Merit scholarships and
                  residential hostel facilities are allotted upon admission confirmation.
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#E5E0D8]">
                  <div>
                    <p className="font-mono text-xs text-[#57534E]">Step 01</p>
                    <p className="text-sm font-semibold text-[#1C1917] mt-1">
                      Submit Online Enquiry
                    </p>
                    <p className="text-xs text-[#57534E] mt-1 leading-relaxed">
                      Register your preferred engineering or MBA branch and qualifying marks.
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-[#57534E]">Step 02</p>
                    <p className="text-sm font-semibold text-[#1C1917] mt-1">
                      Faculty Counselling
                    </p>
                    <p className="text-xs text-[#57534E] mt-1 leading-relaxed">
                      Meet department heads in Kuniamuthur or online to review curriculum tracks.
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-[#57534E]">Step 03</p>
                    <p className="text-sm font-semibold text-[#1C1917] mt-1">
                      Enrolment &amp; Hostel
                    </p>
                    <p className="text-xs text-[#57534E] mt-1 leading-relaxed">
                      Verify certificates, claim applicable merit scholarships, and select hostel
                      rooms.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => handleOpenApplication()}
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#0F294A] hover:bg-[#183B69] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>Open Admissions Application</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href="#academics"
                    className="px-4 py-3 text-sm font-medium text-[#57534E] hover:text-[#1C1917] transition-colors whitespace-nowrap shrink-0"
                  >
                    Compare Programmes
                  </a>
                </div>
              </div>

              {/* Right Column: Campus Contact & Logistics Card */}
              <div className="lg:col-span-5 bg-[#FBF9F5] border border-[#E5E0D8] rounded-md p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-[#1C1917]">
                    Admissions &amp; Registrar Office
                  </h3>
                  <p className="text-xs text-[#57534E] mt-1">
                    Located 9 km south-west of Coimbatore Junction along NH-83 (Palakkad Main Road)
                  </p>
                </div>

                <dl className="space-y-4 text-sm border-t border-[#E5E0D8] pt-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#0F294A] shrink-0 mt-1" />
                    <div>
                      <dt className="font-medium text-[#1C1917]">Campus Address</dt>
                      <dd className="text-[#57534E] mt-0.5 leading-relaxed">
                        Sri Krishna College of Engineering and Technology, Sugunapuram, Kuniamuthur
                        (P.O.), Coimbatore – 641 008, Tamil Nadu
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#0F294A] shrink-0 mt-1" />
                    <div>
                      <dt className="font-medium text-[#1C1917]">Admissions Helpline</dt>
                      <dd className="font-mono text-[#57534E] mt-0.5 tabular-nums">
                        +91 422 267 8001 / +91 422 267 8002
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#0F294A] shrink-0 mt-1" />
                    <div>
                      <dt className="font-medium text-[#1C1917]">Official Correspondence</dt>
                      <dd className="text-[#57534E] mt-0.5">admissions@skcet-coimbatore.edu.in</dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#0F294A] shrink-0 mt-1" />
                    <div>
                      <dt className="font-medium text-[#1C1917]">Visiting Hours</dt>
                      <dd className="text-[#57534E] mt-0.5">
                        Monday to Saturday · 9:00 AM – 5:00 PM IST
                      </dd>
                    </div>
                  </div>
                </dl>

                <div className="pt-4 border-t border-[#E5E0D8] text-xs text-[#57534E] leading-relaxed">
                  College transport routes operate daily across Coimbatore city, Pollachi, Tiruppur,
                  Mettupalayam, and Palakkad corridors.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Quiet Institutional Footer */}
      <footer className="bg-[#F2EFE9] border-t border-[#E5E0D8] py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#E5E0D8]">
            <div className="md:col-span-5">
              <p className="font-serif text-lg font-semibold text-[#1C1917]">
                Sri Krishna College, Coimbatore
              </p>
              <p className="text-xs text-[#57534E] mt-2 leading-relaxed max-w-sm">
                An Autonomous Institution affiliated to Anna University, Chennai · Approved by
                AICTE, New Delhi · Accredited by NAAC with ‘A+’ Grade.
              </p>
            </div>

            <div className="md:col-span-3">
              <p className="text-xs font-semibold text-[#1C1917] mb-3">Navigation</p>
              <ul className="space-y-2 text-xs text-[#57534E]">
                <li>
                  <a href="#academics" className="hover:text-[#0F294A]">
                    Academic Programmes
                  </a>
                </li>
                <li>
                  <a href="#placements" className="hover:text-[#0F294A]">
                    Placement Outcomes
                  </a>
                </li>
                <li>
                  <a href="#campus-life" className="hover:text-[#0F294A]">
                    Research &amp; Campus Life
                  </a>
                </li>
                <li>
                  <a href="#notices" className="hover:text-[#0F294A]">
                    Circulars &amp; Calendar
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <p className="text-xs font-semibold text-[#1C1917] mb-3">Campus Location</p>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Sugunapuram, Kuniamuthur (P.O.), Palakkad Main Road, Coimbatore – 641 008, Tamil
                Nadu, India
              </p>
              <button
                type="button"
                onClick={() => handleOpenApplication()}
                className="mt-3 text-xs font-semibold text-[#0F294A] hover:underline underline-offset-4 cursor-pointer"
              >
                Request 2026–27 Admissions Counselling →
              </button>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#57534E]">
            <p>© 2026 Sri Krishna College of Engineering and Technology, Coimbatore.</p>
            <p>TNEA Counselling Code: 2718 · Autonomous Academic Portal</p>
          </div>
        </div>
      </footer>

      {/* Interactive Modals */}
      <ProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onApplyForProgram={(id) => handleOpenApplication(id)}
      />

      <NoticeModal notice={selectedNotice} onClose={() => setSelectedNotice(null)} />

      <ApplicationModal
        isOpen={applicationOpen}
        preselectedProgramId={preselectedProgramId}
        onClose={() => setApplicationOpen(false)}
      />
    </div>
  );
}

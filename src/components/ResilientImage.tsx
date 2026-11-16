import { useState } from 'react';
import { Building2 } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  fallbackSubtitle?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Sri Krishna College',
  fallbackSubtitle = 'Kuniamuthur, Coimbatore',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#F2EFE9] to-[#E5E0D8] text-[#1C1917] p-8 text-center ${className}`}
      >
        <Building2 className="w-8 h-8 text-[#0F294A] mb-3" strokeWidth={1.5} />
        <p className="font-serif text-lg font-semibold text-[#1C1917]">{fallbackTitle}</p>
        <p className="text-xs text-[#57534E] mt-1">{fallbackSubtitle}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}

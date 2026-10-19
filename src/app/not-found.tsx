import { Home } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 py-20">
      <div className="max-w-md w-full text-center space-y-6">
        <span className="text-[11px] font-semibold tracking-widest uppercase text-[#53664B] px-3.5 py-1.5 rounded-full bg-[#EEEDE5] border border-[#E4E2D8]">
          404 — Page Not Found
        </span>

        <h1 className="text-3xl sm:text-4xl font-light text-[#292C25] leading-tight">
          A moment lost between frames.
        </h1>

        <p className="text-sm text-[#575A51] font-light leading-relaxed">
          The page or story journal you are searching for might have been moved, renamed, or is currently being curated.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" variant="primary" size="md">
            <Home className="w-4 h-4 mr-2" />
            Return Home
          </Button>
          <Button href="/stories/" variant="secondary" size="md">
            View Stories
          </Button>
        </div>
      </div>
    </div>
  );
}

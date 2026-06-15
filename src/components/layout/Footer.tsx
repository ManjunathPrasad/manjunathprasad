import { Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="mt-12 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
                <div className="flex flex-col items-center justify-center text-center">
                    
                    {/* Responsive text stack */}
                    <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-1 sm:gap-2 text-xs text-gray-400">
                        <span className="font-medium text-gray-500 text-[11px] sm:text-sm">
                            Manjunath Prasad H. R.
                        </span>
                        <span className="hidden sm:inline text-gray-300">•</span>
                        <span>All rights reserved</span>
                        <span className="hidden xs:inline text-gray-300">•</span>
                        <span>© 2026</span>
                        <span className="text-gray-300">•</span>
                        <span className="flex items-center gap-1">
                            Built with <Heart className="w-3 sm:w-2.5 h-3 sm:h-2.5 text-rose-400 fill-rose-100" />
                        </span>
                    </div>
                    
                    {/* Subtitle on mobile */}
                    <p className="mt-2 text-[10px] text-gray-300 sm:hidden">
                        AI Researcher & Art Connoisseur
                    </p>
                </div>
            </div>
        </footer>
    );
}
import { Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="mt-12 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex flex-col items-center justify-center space-y-3">
                    
                    {/* Name */}
                    {/* <p className="text-sm font-medium text-gray-500">
                        Manjunath Prasad H. R.
                    </p> */}
                    
                    {/* Simple divider */}
                    <div className="w-8 h-px bg-gray-200"></div>
                    
                    {/* Copyright and heart in one line */}
                    <p className="text-xs text-gray-400 flex items-center gap-1.5">
                        <span>Manjunath Prasad H. R.</span>
                        <span>•</span>
                        <span>All rights reserved</span>
                        <span>© 2026</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                            Built with <Heart className="w-2.5 h-2.5 text-rose-400" />
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
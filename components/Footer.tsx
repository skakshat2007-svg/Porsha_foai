export default function Footer() {
    return (
        <footer className="w-full bg-bugatti-black border-t border-white/10 py-12 px-8 z-10 relative">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-display font-bold text-white mb-2">PORSCHE</h2>
                    <p className="text-gray-400 font-body text-sm tracking-wide">
                        DRIVING IN ITS PUREST FORM
                    </p>
                </div>

                <div className="flex gap-8 text-xs font-body tracking-wider text-gray-500">
                    <a href="#" className="hover:text-bugatti-gold transition-colors">PRIVACY POLICY</a>
                    <a href="#" className="hover:text-bugatti-gold transition-colors">COOKIES</a>
                    <a href="#" className="hover:text-bugatti-gold transition-colors">CONTACT</a>
                    <a href="#" className="hover:text-bugatti-gold transition-colors">CAREERS</a>
                </div>

                <div className="text-xs text-gray-600 font-body">
                    © {new Date().getFullYear()} DR. ING. H.C. F. PORSCHE AG
                </div>
            </div>
        </footer>
    );
}

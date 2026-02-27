
import { CheckCircle2, Download } from 'lucide-react';
import logo from './assets/Logo.png';
import screenImg from './assets/kulture_screen.jpeg';

export default function LandingPage() {
    const handleStoreClick = (store: 'ios' | 'android') => {
        alert(`We are still building the ${store === 'ios' ? 'iOS' : 'Android'} version for you! Check back soon.`);
    };

    return (
        <div className="w-full min-h-screen bg-mesh overflow-hidden flex flex-col font-body text-k-text relative">

            {/* Abstract Background Orbs for aesthetic depth */}
            <div className="absolute top-[-15%] left-[-10%] w-[50vh] h-[50vh] rounded-full bg-k-orange/20 blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-[-20%] right-[-5%] w-[60vh] h-[60vh] rounded-full bg-k-purple/20 blur-[120px] pointer-events-none"></div>

            {/* Navigation / Header */}
            <header className="w-full px-6 md:px-8 py-4 lg:py-0 flex justify-between items-center z-10 glass border-b-0 border-white/20">
                <div className="flex items-center">
                    <img src={logo} alt="Kulture Logo" className="h-12 md:h-20 object-contain drop-shadow-md hover:scale-105 transition-transform cursor-pointer" />
                </div>
                <div className="flex items-center gap-6 text-sm font-semibold text-k-text-light hover:text-k-text transition-colors">
                    <a href="mailto:timilehin.olamijulo@meltwater.org">Contact Us</a>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-24 relative z-10 py-8 lg:py-10">

                {/* Left Column: Copy & CTAs */}
                <div className="w-full lg:w-5/12 flex flex-col items-center text-center lg:items-start lg:text-left space-y-6 lg:space-y-8 mt-4 lg:mt-0 z-20">

                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-k-text-light font-medium text-xs md:text-sm shadow-sm border border-white/60">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        Private Beta Now Available
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-[1.1] tracking-tight">
                            Pass Down Your Roots. <br />
                            <span className="text-gradient">Playfully.</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-k-text-light max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed">
                            The gamified African Culture Learning app for kids 3-10. Less screen-time guilt, more cultural connection.
                        </p>
                    </div>

                    {/* Value Props Bullet Points */}
                    <ul className="space-y-3 text-left w-full max-w-sm mx-auto lg:mx-0">
                        {[
                            "Earn stars & explore vibrant maps",
                            "Learn Yoruba, Twi, Igbo & more",
                            "100% Kid-Safe & Ad-Free environment"
                        ].map((benefit, i) => (
                            <li key={i} className="flex items-center gap-3 text-k-text font-medium bg-white/50 px-4 py-2 rounded-lg border border-white/50 shadow-sm backdrop-blur-sm sm:text-base">
                                <CheckCircle2 className="text-k-purple shrink-0 w-5 h-5" />
                                <span>{benefit}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTAs (Hidden on mobile) */}
                    <div className="hidden lg:flex flex-row items-center gap-4 w-full justify-start pt-4">
                        <button
                            onClick={() => handleStoreClick('ios')}
                            className="w-[200px] h-[60px] bg-black text-white rounded-2xl flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-xl hover:shadow-2xl active:scale-95"
                        >
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91 1.61.1 2.89.65 3.65 1.6-3.1 1.95-2.67 6.13.52 7.37-.6 1.48-1.42 2.87-2.38 3.73zM15.54 4.54a5.32 5.32 0 0 0 1.24-3.79c-1.35.05-2.92.89-3.79 2.01-.76.99-1.4 2.58-1.18 4.09 1.48.11 3.01-.8 3.73-2.31z" />
                            </svg>
                            <div className="flex flex-col items-start leading-none">
                                <span className="text-[10px] text-gray-300">Download on the</span>
                                <span className="text-lg font-semibold tracking-wide">App Store</span>
                            </div>
                        </button>

                        <button
                            onClick={() => handleStoreClick('android')}
                            className="w-[200px] h-[60px] bg-white text-black border border-gray-200 rounded-2xl flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-xl hover:shadow-2xl active:scale-95"
                        >
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.243 1.4l14.86 14.86L15.356 19 3.243 6.883v-5.48z" fill="#00C16E" />
                                <path d="M18.102 16.26l4.234-2.4c1.15-.65 1.15-1.71 0-2.36l-4.234-2.4-2.748 2.747 2.748 2.013z" fill="#FFC107" />
                                <path d="M3.243 22.6v-5.48l12.113-12.115 2.747 2.748L3.243 22.6z" fill="#FF3333" />
                                <path d="M3.243 6.882L15.355 19l-7.23 4.1c-1.15.65-2.08.12-2.08-1.18v-5.482L3.243 6.882z" fill="#2196F3" />
                            </svg>
                            <div className="flex flex-col items-start leading-none">
                                <span className="text-[10px] text-gray-500">GET IT ON</span>
                                <span className="text-lg font-semibold tracking-wide">Google Play</span>
                            </div>
                        </button>
                    </div>

                    <a
                        href="https://expo.dev/artifacts/eas/6Pku8vu3SDUdaNXfth1mSx.apk"
                        className="hidden lg:flex group items-center gap-2 text-sm font-semibold text-k-purple hover:text-k-purple-dark transition-colors border-b border-k-purple/30 pb-0.5 mt-4 w-max"
                    >
                        <Download size={14} className="group-hover:-translate-y-0.5 transition-transform" />
                        Beta Tester? Download Android APK here &rarr;
                    </a>
                </div>

                {/* Right Column: Visual Anchor and Mobile CTAs */}
                <div className="w-full lg:w-1/2 flex flex-col items-center mt-10 sm:mt-16 lg:mt-0 z-20">
                    <div className="relative pointer-events-none w-full flex items-center justify-center h-[350px] sm:h-[450px] lg:h-auto">
                        {/* Main App Mockup Frame */}
                        <div className="relative w-[200px] h-[420px] sm:w-[260px] sm:h-[540px] lg:w-[320px] lg:h-[660px] bg-gray-900 rounded-[2.5rem] sm:rounded-[3rem] border-[8px] sm:border-[10px] border-gray-900 shadow-2xl rotate-[-4deg] animate-float z-20 overflow-hidden flex items-center justify-center">
                            <img src={screenImg} alt="Kulture App Screen" className="w-full h-full object-cover rounded-[2rem] sm:rounded-[2.2rem]" />
                        </div>

                        {/* Floating UI Elements */}
                        <div className="absolute top-[5%] right-[5%] sm:right-[15%] lg:right-[-5%] w-14 h-14 sm:w-20 sm:h-20 glass-card rounded-xl sm:rounded-2xl rotate-12 flex items-center justify-center shadow-xl z-30 animate-float-delayed border-white/80">
                            <span className="text-2xl sm:text-3xl text-yellow-500 drop-shadow-md">🪙</span>
                        </div>

                        <div className="absolute bottom-[-10%] left-[5%] sm:left-[10%] lg:left-[-10%] w-20 h-20 sm:w-24 sm:h-24 glass-card rounded-2xl sm:rounded-3xl -rotate-6 flex flex-col items-center justify-center shadow-2xl z-30 animate-float border-white/80">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-100 flex items-center justify-center mb-1"><CheckCircle2 className="text-green-500 w-3 h-3 sm:w-4 sm:h-4" /></div>
                            <span className="font-heading font-bold text-[10px] sm:text-xs text-k-text">Unlocked!</span>
                        </div>

                        <div className="absolute top-[30%] left-[5%] sm:left-[15%] lg:left-[5%] w-12 h-12 sm:w-14 sm:h-14 glass-card rounded-full flex items-center justify-center shadow-lg z-10 animate-pulse-glow">
                            <span className="text-xl sm:text-2xl">🌍</span>
                        </div>
                    </div>

                    {/* Mobile CTAs (only visible on small/medium screens) */}
                    <div className="flex lg:hidden flex-col items-center w-full mt-20 sm:mt-24 gap-4">
                        <div className="flex flex-row items-center gap-3 sm:gap-4 justify-center w-full px-4">
                            <button
                                onClick={() => handleStoreClick('ios')}
                                className="flex-1 max-w-[180px] h-[50px] sm:h-[60px] bg-black text-white rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-xl active:scale-95"
                            >
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91 1.61.1 2.89.65 3.65 1.6-3.1 1.95-2.67 6.13.52 7.37-.6 1.48-1.42 2.87-2.38 3.73zM15.54 4.54a5.32 5.32 0 0 0 1.24-3.79c-1.35.05-2.92.89-3.79 2.01-.76.99-1.4 2.58-1.18 4.09 1.48.11 3.01-.8 3.73-2.31z" />
                                </svg>
                                <div className="flex flex-col items-start leading-none">
                                    <span className="text-[9px] sm:text-[10px] text-gray-300">Download on the</span>
                                    <span className="text-xs sm:text-base font-semibold tracking-wide">App Store</span>
                                </div>
                            </button>

                            <button
                                onClick={() => handleStoreClick('android')}
                                className="flex-1 max-w-[180px] h-[50px] sm:h-[60px] bg-white text-black border border-gray-200 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-xl active:scale-95"
                            >
                                <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.243 1.4l14.86 14.86L15.356 19 3.243 6.883v-5.48z" fill="#00C16E" />
                                    <path d="M18.102 16.26l4.234-2.4c1.15-.65 1.15-1.71 0-2.36l-4.234-2.4-2.748 2.747 2.748 2.013z" fill="#FFC107" />
                                    <path d="M3.243 22.6v-5.48l12.113-12.115 2.747 2.748L3.243 22.6z" fill="#FF3333" />
                                    <path d="M3.243 6.882L15.355 19l-7.23 4.1c-1.15.65-2.08.12-2.08-1.18v-5.482L3.243 6.882z" fill="#2196F3" />
                                </svg>
                                <div className="flex flex-col items-start leading-none">
                                    <span className="text-[9px] sm:text-[10px] text-gray-500">GET IT ON</span>
                                    <span className="text-xs sm:text-base font-semibold tracking-wide">Google Play</span>
                                </div>
                            </button>
                        </div>

                        <a
                            href="https://expo.dev/artifacts/eas/6Pku8vu3SDUdaNXfth1mSx.apk"
                            className="group flex items-center gap-2 text-xs sm:text-sm font-semibold text-k-purple hover:text-k-purple-dark transition-colors border-b border-k-purple/30 pb-0.5 mt-2"
                        >
                            <Download size={14} className="group-hover:-translate-y-0.5 transition-transform" />
                            Beta Tester? Download Android APK here &rarr;
                        </a>
                    </div>
                </div>

            </main>

            {/* Footer */}
            <footer className="w-full py-8 mt-auto text-center z-10 relative bg-white/5 backdrop-blur-md border-t border-white/10 text-k-text-light font-medium text-xs sm:text-sm">
                <p>&copy; {new Date().getFullYear()} Kulture. All rights reserved.</p>
            </footer>
        </div>
    );
}

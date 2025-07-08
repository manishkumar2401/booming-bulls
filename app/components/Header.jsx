import React from 'react'

export default function Header() {
    return (
        <header className="flex items-center justify-center py-16 px-4 font-inter">
            <div className="text-center max-w-4xl mx-auto">
                {/* "Our Process" button/tag */}
                <div className="inline-block px-4 py-2 mb-2 text-xs text-[#caa1ca] rounded-full backdrop-blur-sm bg-transparent heading-button">
                    Our Process
                </div>

                {/* Main Title */}
                <h1 className="text-3xl md:text-4xl lg:text-6xl tracking-tighter font-semibold text-white leading-tight mb-3">
                    Become a <span className="text-[#a35ca2]">Abcd Pro</span> in sec...
                </h1>

                {/* Tagline with emoji */}
                <p className="text-md text-white flex items-center justify-center">
                    <span role="img" aria-label="rocket" className="mr-2 font-sm">🚀</span>
                    Sign up. Fund. Trade.
                </p>
            </div>
        </header>
    )
}

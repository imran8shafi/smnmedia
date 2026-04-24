'use client';
import React, { useState, useRef } from 'react';

/* ══════════════════════════════════════════════════════════════════════════
   TRUSTPILOT REVIEWS – every review is its OWN uniquely-named component
   ══════════════════════════════════════════════════════════════════════════ */
export function TrustpilotSection() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <img
              src="https://cdn.trustpilot.net/brand-assets/4.1.0/logo-white.svg"
              alt="Trustpilot"
              className="h-6"
              style={{ filter: 'invert(1)' }}
            />
            <div className="flex gap-1">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#00b67a"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#00b67a"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#00b67a"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#00b67a"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#00b67a"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
            </div>
            <span className="text-sm text-gray-600" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
              Rated <strong>4.2</strong> / 5 based on <strong>19 reviews</strong>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Review1 />
          <Review2 />
          <Review3 />
        </div>
      </div>
    </section>
  );
}

/* ── Review 1 ───────────────────────────────────────────────────────────── */
function Review1() {
  return (
    <div className="border border-gray-100 rounded-xl p-4 shadow-sm">
      <div className="flex gap-1 mb-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#00b67a"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#00b67a"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#00b67a"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#00b67a"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#00b67a"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
      </div>
      <p className="font-semibold text-sm mb-1" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Highly recommend</p>
      <p className="text-xs text-gray-500 mb-3" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
        Both Joe and Thomas are extremely helpful and brilliant to work with. Their genuine care for their clients is evident in everything they do.
      </p>
      <p className="text-xs text-gray-400" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
        Review by <strong>Jayde Mills</strong>, June 2
      </p>
    </div>
  );
}

/* ── Review 2 ───────────────────────────────────────────────────────────── */
function Review2() {
  return (
    <div className="border border-gray-100 rounded-xl p-4 shadow-sm">
      <div className="flex gap-1 mb-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#00b67a"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#00b67a"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#00b67a"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#00b67a"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#00b67a"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
      </div>
      <p className="font-semibold text-sm mb-1" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Fantastic app</p>
      <p className="text-xs text-gray-500 mb-3" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
        Fantastic app to use to help grow my business! I would recommend to anyone looking to expand their clinic.
      </p>
      <p className="text-xs text-gray-400" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
        Review by <strong>Kavita S</strong>, May 29
      </p>
    </div>
  );
}

/* ── Review 3 ───────────────────────────────────────────────────────────── */
function Review3() {
  return (
    <div className="border border-gray-100 rounded-xl p-4 shadow-sm">
      <div className="flex gap-1 mb-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#00b67a"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#00b67a"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#00b67a"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#00b67a"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#00b67a"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
      </div>
      <p className="font-semibold text-sm mb-1" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Easy and effective</p>
      <p className="text-xs text-gray-500 mb-3" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
        Easy and effective! I would recommend this app to anyone looking to help grow their business.
      </p>
      <p className="text-xs text-gray-400" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
        Review by <strong>PS</strong>, May 29
      </p>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   TESTIMONIALS TICKER – each testimonial is its OWN uniquely-named
   component with fully inlined JSX. Editing one does NOT affect others.
   ══════════════════════════════════════════════════════════════════════════ */
export function TestimonialsTicker() {
  return (
    <section className="bg-white py-8 overflow-hidden">
      <div className="relative">
        <div className="flex gap-6 ticker-track" style={{ width: 'max-content' }}>
          {/* First pass */}
          <Testimonial1 />
          <Testimonial2 />
          <Testimonial3 />
          <Testimonial4 />
          <Testimonial5 />
          {/* Second pass (for infinite scroll) */}
          <Testimonial1 />
          <Testimonial2 />
          <Testimonial3 />
          <Testimonial4 />
          <Testimonial5 />
        </div>
      </div>
    </section>
  );
}

/* ── Testimonial 1 ──────────────────────────────────────────────────────── */
function Testimonial1() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) { videoRef.current.pause(); setPlaying(false); }
    else         { videoRef.current.play();  setPlaying(true); }
  };

  return (
    <div className="flex-shrink-0 flex items-center gap-4 rounded-xl border border-gray-100 overflow-hidden" style={{ width: 380, borderRadius: 12 }}>
      <div className="relative flex-shrink-0 cursor-pointer" style={{ width: 200, height: 220, borderRadius: 12, overflow: 'hidden' }} onClick={togglePlay}>
        <video ref={videoRef}
          src="https://framerusercontent.com/assets/dkv0Iexi8k6I09cbsDzn7Dd5w.mp4"
          poster="https://framerusercontent.com/images/N6MkxnK6KcC1x8Mi6UpuAjTkQ.png?width=611&height=577"
          playsInline className="w-full h-full object-cover" style={{ borderRadius: 12 }} />
        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backdropFilter: 'blur(5px)', backgroundColor: 'rgba(255,255,255,0.12)' }}>
              <svg width="10" height="12" viewBox="0 0 8.4 9.6" fill="white">
                <path d="M 8.4 4.8 C 8.401 5.055 8.263 5.292 8.037 5.424 L 1.161 9.491 C 0.986 9.595 0.776 9.626 0.578 9.578 C 0.379 9.53 0.208 9.408 0.104 9.237 C 0.036 9.125 0 8.998 0 8.868 L 0 0.733 C 0 0.468 0.148 0.224 0.387 0.095 C 0.628 -0.036 0.924 -0.031 1.161 0.109 L 8.037 4.177 C 8.263 4.308 8.401 4.545 8.4 4.8 Z" />
              </svg>
            </div>
          </div>
        )}
      </div>
      <div className="flex-1 flex flex-col justify-between py-6 pr-4" style={{ minHeight: 140 }}>
        <p className="text-sm font-medium leading-snug mb-3" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#000', letterSpacing: '-0.3px', lineHeight: '140%' }}>
          We ran one Automated Offer which made us <mark className="mark-highlight">£9,5K worth of sales in 2 days.</mark>
        </p>
        <div className="flex items-center gap-2">
          <img src="https://framerusercontent.com/images/NmX6Zs7aMOyEnLFbwmDUfMeao.jpg?width=800&height=500" alt="Snowvia Nadir" className="w-6 h-6 rounded object-cover" />
          <div>
            <div className="flex items-center gap-1">
              <span className="text-xs font-semibold" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Snowvia Nadir</span>
              <svg width="8" height="8" viewBox="0 0 7.909 7.909" fill="#4aadf4">
                <path d="M 7.389 3.002 C 7.269 2.877 7.145 2.747 7.105 2.649 C 7.069 2.562 7.066 2.383 7.064 2.224 C 7.059 1.884 7.052 1.459 6.751 1.159 C 6.449 0.857 6.025 0.852 5.685 0.845 C 5.527 0.843 5.347 0.84 5.259 0.804 C 5.162 0.764 5.032 0.64 4.907 0.52 C 4.666 0.288 4.365 0 3.955 0 C 3.544 0 3.243 0.288 3.002 0.52 C 2.877 0.64 2.747 0.764 2.649 0.804 C 2.562 0.84 2.383 0.843 2.224 0.845 C 1.884 0.852 1.459 0.857 1.159 1.159 C 0.859 1.461 0.852 1.884 0.845 2.224 C 0.843 2.383 0.84 2.563 0.804 2.65 C 0.764 2.747 0.64 2.877 0.52 3.002 C 0.288 3.243 0 3.545 0 3.955 C 0 4.364 0.288 4.666 0.52 4.909 C 0.64 5.034 0.764 5.164 0.804 5.261 C 0.84 5.348 0.843 5.528 0.845 5.687 C 0.851 6.027 0.857 6.451 1.158 6.752 C 1.46 7.053 1.884 7.059 2.224 7.065 C 2.383 7.068 2.563 7.071 2.65 7.107 C 2.747 7.147 2.877 7.271 3.002 7.391 C 3.243 7.621 3.545 7.909 3.955 7.909 C 4.364 7.909 4.666 7.621 4.907 7.389 C 5.032 7.269 5.162 7.145 5.26 7.105 C 5.347 7.069 5.527 7.066 5.685 7.064 C 6.025 7.059 6.45 7.052 6.751 6.751 C 7.052 6.449 7.057 6.025 7.064 5.685 C 7.066 5.527 7.069 5.347 7.105 5.259 C 7.145 5.162 7.269 5.032 7.389 4.907 C 7.621 4.666 7.909 4.365 7.909 3.955 C 7.909 3.544 7.621 3.243 7.389 3.002 Z" />
              </svg>
            </div>
            <p className="text-xs opacity-40" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Mi:Skin Clinic</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Testimonial 2 ──────────────────────────────────────────────────────── */
function Testimonial2() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) { videoRef.current.pause(); setPlaying(false); }
    else         { videoRef.current.play();  setPlaying(true); }
  };

  return (
    <div className="flex-shrink-0 flex items-center gap-4 rounded-xl border border-gray-100 overflow-hidden" style={{ width: 380, borderRadius: 12 }}>
      <div className="relative flex-shrink-0 cursor-pointer" style={{ width: 200, height: 220, borderRadius: 12, overflow: 'hidden' }} onClick={togglePlay}>
        <video ref={videoRef}
          src="https://framerusercontent.com/assets/jRqMm99Vq5qu1KkjOCvJJ2fgsXM.mp4"
          poster="https://framerusercontent.com/images/G3UIxaP2SHpuc4YtrV1XrzqoO7E.webp?width=400&height=440"
          playsInline className="w-full h-full object-cover" style={{ borderRadius: 12 }} />
        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backdropFilter: 'blur(5px)', backgroundColor: 'rgba(255,255,255,0.12)' }}>
              <svg width="10" height="12" viewBox="0 0 8.4 9.6" fill="white">
                <path d="M 8.4 4.8 C 8.401 5.055 8.263 5.292 8.037 5.424 L 1.161 9.491 C 0.986 9.595 0.776 9.626 0.578 9.578 C 0.379 9.53 0.208 9.408 0.104 9.237 C 0.036 9.125 0 8.998 0 8.868 L 0 0.733 C 0 0.468 0.148 0.224 0.387 0.095 C 0.628 -0.036 0.924 -0.031 1.161 0.109 L 8.037 4.177 C 8.263 4.308 8.401 4.545 8.4 4.8 Z" />
              </svg>
            </div>
          </div>
        )}
      </div>
      <div className="flex-1 flex flex-col justify-between py-6 pr-4" style={{ minHeight: 140 }}>
        <p className="text-sm font-medium leading-snug mb-3" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#000', letterSpacing: '-0.3px', lineHeight: '140%' }}>
          SMNMEDIA has been a game-changer. <mark className="mark-highlight">Patients love it</mark>
        </p>
        <div className="flex items-center gap-2">
          <img src="https://framerusercontent.com/images/f08jaOrhfDyBVNAmSVbNKY8f94.svg?width=810&height=810" alt="Dr. Zoya" className="w-6 h-6 rounded object-cover" />
          <div>
            <div className="flex items-center gap-1">
              <span className="text-xs font-semibold" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Dr. Zoya</span>
              <svg width="8" height="8" viewBox="0 0 7.909 7.909" fill="#4aadf4">
                <path d="M 7.389 3.002 C 7.269 2.877 7.145 2.747 7.105 2.649 C 7.069 2.562 7.066 2.383 7.064 2.224 C 7.059 1.884 7.052 1.459 6.751 1.159 C 6.449 0.857 6.025 0.852 5.685 0.845 C 5.527 0.843 5.347 0.84 5.259 0.804 C 5.162 0.764 5.032 0.64 4.907 0.52 C 4.666 0.288 4.365 0 3.955 0 C 3.544 0 3.243 0.288 3.002 0.52 C 2.877 0.64 2.747 0.764 2.649 0.804 C 2.562 0.84 2.383 0.843 2.224 0.845 C 1.884 0.852 1.459 0.857 1.159 1.159 C 0.859 1.461 0.852 1.884 0.845 2.224 C 0.843 2.383 0.84 2.563 0.804 2.65 C 0.764 2.747 0.64 2.877 0.52 3.002 C 0.288 3.243 0 3.545 0 3.955 C 0 4.364 0.288 4.666 0.52 4.909 C 0.64 5.034 0.764 5.164 0.804 5.261 C 0.84 5.348 0.843 5.528 0.845 5.687 C 0.851 6.027 0.857 6.451 1.158 6.752 C 1.46 7.053 1.884 7.059 2.224 7.065 C 2.383 7.068 2.563 7.071 2.65 7.107 C 2.747 7.147 2.877 7.271 3.002 7.391 C 3.243 7.621 3.545 7.909 3.955 7.909 C 4.364 7.909 4.666 7.621 4.907 7.389 C 5.032 7.269 5.162 7.145 5.26 7.105 C 5.347 7.069 5.527 7.066 5.685 7.064 C 6.025 7.059 6.45 7.052 6.751 6.751 C 7.052 6.449 7.057 6.025 7.064 5.685 C 7.066 5.527 7.069 5.347 7.105 5.259 C 7.145 5.162 7.269 5.032 7.389 4.907 C 7.621 4.666 7.909 4.365 7.909 3.955 C 7.909 3.544 7.621 3.243 7.389 3.002 Z" />
              </svg>
            </div>
            <p className="text-xs opacity-40" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Secret Aesthetics</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Testimonial 3 ──────────────────────────────────────────────────────── */
function Testimonial3() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) { videoRef.current.pause(); setPlaying(false); }
    else         { videoRef.current.play();  setPlaying(true); }
  };

  return (
    <div className="flex-shrink-0 flex items-center gap-4 rounded-xl border border-gray-100 overflow-hidden" style={{ width: 380, borderRadius: 12 }}>
      <div className="relative flex-shrink-0 cursor-pointer" style={{ width: 200, height: 220, borderRadius: 12, overflow: 'hidden' }} onClick={togglePlay}>
        <video ref={videoRef}
          src="https://framerusercontent.com/assets/a88HktzWtif9JHESy0nEidl3Nsg.mp4"
          poster="https://framerusercontent.com/images/aBRNFcCv4lB3qxuZC7yKpmvibY.webp?width=400&height=440"
          playsInline className="w-full h-full object-cover" style={{ borderRadius: 12 }} />
        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backdropFilter: 'blur(5px)', backgroundColor: 'rgba(255,255,255,0.12)' }}>
              <svg width="10" height="12" viewBox="0 0 8.4 9.6" fill="white">
                <path d="M 8.4 4.8 C 8.401 5.055 8.263 5.292 8.037 5.424 L 1.161 9.491 C 0.986 9.595 0.776 9.626 0.578 9.578 C 0.379 9.53 0.208 9.408 0.104 9.237 C 0.036 9.125 0 8.998 0 8.868 L 0 0.733 C 0 0.468 0.148 0.224 0.387 0.095 C 0.628 -0.036 0.924 -0.031 1.161 0.109 L 8.037 4.177 C 8.263 4.308 8.401 4.545 8.4 4.8 Z" />
              </svg>
            </div>
          </div>
        )}
      </div>
      <div className="flex-1 flex flex-col justify-between py-6 pr-4" style={{ minHeight: 140 }}>
        <p className="text-sm font-medium leading-snug mb-3" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#000', letterSpacing: '-0.3px', lineHeight: '140%' }}>
          SMNMEDIA gave me confidence to expand my team and <mark className="mark-highlight">progress to a 2nd location!</mark>
        </p>
        <div className="flex items-center gap-2">
          <img src="https://framerusercontent.com/images/VyGECDXMr2qUlnuiCVYOXoT2dbM.svg?width=810&height=810" alt="Brogan Watson" className="w-6 h-6 rounded object-cover" />
          <div>
            <div className="flex items-center gap-1">
              <span className="text-xs font-semibold" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Brogan Watson</span>
              <svg width="8" height="8" viewBox="0 0 7.909 7.909" fill="#4aadf4">
                <path d="M 7.389 3.002 C 7.269 2.877 7.145 2.747 7.105 2.649 C 7.069 2.562 7.066 2.383 7.064 2.224 C 7.059 1.884 7.052 1.459 6.751 1.159 C 6.449 0.857 6.025 0.852 5.685 0.845 C 5.527 0.843 5.347 0.84 5.259 0.804 C 5.162 0.764 5.032 0.64 4.907 0.52 C 4.666 0.288 4.365 0 3.955 0 C 3.544 0 3.243 0.288 3.002 0.52 C 2.877 0.64 2.747 0.764 2.649 0.804 C 2.562 0.84 2.383 0.843 2.224 0.845 C 1.884 0.852 1.459 0.857 1.159 1.159 C 0.859 1.461 0.852 1.884 0.845 2.224 C 0.843 2.383 0.84 2.563 0.804 2.65 C 0.764 2.747 0.64 2.877 0.52 3.002 C 0.288 3.243 0 3.545 0 3.955 C 0 4.364 0.288 4.666 0.52 4.909 C 0.64 5.034 0.764 5.164 0.804 5.261 C 0.84 5.348 0.843 5.528 0.845 5.687 C 0.851 6.027 0.857 6.451 1.158 6.752 C 1.46 7.053 1.884 7.059 2.224 7.065 C 2.383 7.068 2.563 7.071 2.65 7.107 C 2.747 7.147 2.877 7.271 3.002 7.391 C 3.243 7.621 3.545 7.909 3.955 7.909 C 4.364 7.909 4.666 7.621 4.907 7.389 C 5.032 7.269 5.162 7.145 5.26 7.105 C 5.347 7.069 5.527 7.066 5.685 7.064 C 6.025 7.059 6.45 7.052 6.751 6.751 C 7.052 6.449 7.057 6.025 7.064 5.685 C 7.066 5.527 7.069 5.347 7.105 5.259 C 7.145 5.162 7.269 5.032 7.389 4.907 C 7.621 4.666 7.909 4.365 7.909 3.955 C 7.909 3.544 7.621 3.243 7.389 3.002 Z" />
              </svg>
            </div>
            <p className="text-xs opacity-40" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Age Eternal</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Testimonial 4 ──────────────────────────────────────────────────────── */
function Testimonial4() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) { videoRef.current.pause(); setPlaying(false); }
    else         { videoRef.current.play();  setPlaying(true); }
  };

  return (
    <div className="flex-shrink-0 flex items-center gap-4 rounded-xl border border-gray-100 overflow-hidden" style={{ width: 380, borderRadius: 12 }}>
      <div className="relative flex-shrink-0 cursor-pointer" style={{ width: 200, height: 220, borderRadius: 12, overflow: 'hidden' }} onClick={togglePlay}>
        <video ref={videoRef}
          src="https://framerusercontent.com/assets/xGSl6gqCF5n65khCQejDMyUgzxU.mp4"
          poster="https://framerusercontent.com/images/GMKTVN7mStC4rtpCC7l3ak4CnFk.webp?width=400&height=440"
          playsInline className="w-full h-full object-cover" style={{ borderRadius: 12 }} />
        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backdropFilter: 'blur(5px)', backgroundColor: 'rgba(255,255,255,0.12)' }}>
              <svg width="10" height="12" viewBox="0 0 8.4 9.6" fill="white">
                <path d="M 8.4 4.8 C 8.401 5.055 8.263 5.292 8.037 5.424 L 1.161 9.491 C 0.986 9.595 0.776 9.626 0.578 9.578 C 0.379 9.53 0.208 9.408 0.104 9.237 C 0.036 9.125 0 8.998 0 8.868 L 0 0.733 C 0 0.468 0.148 0.224 0.387 0.095 C 0.628 -0.036 0.924 -0.031 1.161 0.109 L 8.037 4.177 C 8.263 4.308 8.401 4.545 8.4 4.8 Z" />
              </svg>
            </div>
          </div>
        )}
      </div>
      <div className="flex-1 flex flex-col justify-between py-6 pr-4" style={{ minHeight: 140 }}>
        <p className="text-sm font-medium leading-snug mb-3" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#000', letterSpacing: '-0.3px', lineHeight: '140%' }}>
          We saw a <mark className="mark-highlight">60% increase</mark> in average patient spend
        </p>
        <div className="flex items-center gap-2">
          <img src="https://framerusercontent.com/images/zLTTJ2Anwi7kFRtlQnuwHw2we8.svg?width=810&height=810" alt="Sarah Louise" className="w-6 h-6 rounded object-cover" />
          <div>
            <div className="flex items-center gap-1">
              <span className="text-xs font-semibold" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Sarah Louise</span>
              <svg width="8" height="8" viewBox="0 0 7.909 7.909" fill="#4aadf4">
                <path d="M 7.389 3.002 C 7.269 2.877 7.145 2.747 7.105 2.649 C 7.069 2.562 7.066 2.383 7.064 2.224 C 7.059 1.884 7.052 1.459 6.751 1.159 C 6.449 0.857 6.025 0.852 5.685 0.845 C 5.527 0.843 5.347 0.84 5.259 0.804 C 5.162 0.764 5.032 0.64 4.907 0.52 C 4.666 0.288 4.365 0 3.955 0 C 3.544 0 3.243 0.288 3.002 0.52 C 2.877 0.64 2.747 0.764 2.649 0.804 C 2.562 0.84 2.383 0.843 2.224 0.845 C 1.884 0.852 1.459 0.857 1.159 1.159 C 0.859 1.461 0.852 1.884 0.845 2.224 C 0.843 2.383 0.84 2.563 0.804 2.65 C 0.764 2.747 0.64 2.877 0.52 3.002 C 0.288 3.243 0 3.545 0 3.955 C 0 4.364 0.288 4.666 0.52 4.909 C 0.64 5.034 0.764 5.164 0.804 5.261 C 0.84 5.348 0.843 5.528 0.845 5.687 C 0.851 6.027 0.857 6.451 1.158 6.752 C 1.46 7.053 1.884 7.059 2.224 7.065 C 2.383 7.068 2.563 7.071 2.65 7.107 C 2.747 7.147 2.877 7.271 3.002 7.391 C 3.243 7.621 3.545 7.909 3.955 7.909 C 4.364 7.909 4.666 7.621 4.907 7.389 C 5.032 7.269 5.162 7.145 5.26 7.105 C 5.347 7.069 5.527 7.066 5.685 7.064 C 6.025 7.059 6.45 7.052 6.751 6.751 C 7.052 6.449 7.057 6.025 7.064 5.685 C 7.066 5.527 7.069 5.347 7.105 5.259 C 7.145 5.162 7.269 5.032 7.389 4.907 C 7.621 4.666 7.909 4.365 7.909 3.955 C 7.909 3.544 7.621 3.243 7.389 3.002 Z" />
              </svg>
            </div>
            <p className="text-xs opacity-40" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>SLA Medical</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Testimonial 5 ──────────────────────────────────────────────────────── */
function Testimonial5() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) { videoRef.current.pause(); setPlaying(false); }
    else         { videoRef.current.play();  setPlaying(true); }
  };

  return (
    <div className="flex-shrink-0 flex items-center gap-4 rounded-xl border border-gray-100 overflow-hidden" style={{ width: 380, borderRadius: 12 }}>
      <div className="relative flex-shrink-0 cursor-pointer" style={{ width: 200, height: 220, borderRadius: 12, overflow: 'hidden' }} onClick={togglePlay}>
        <video ref={videoRef}
          src="https://framerusercontent.com/assets/7oLZKvW07b3p9fYIWBWCIldik8g.mp4"
          poster="https://framerusercontent.com/images/7LELJQYqPcQhRe7gtvZaQwr1Qo.png?width=400&height=440"
          playsInline className="w-full h-full object-cover" style={{ borderRadius: 12 }} />
        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backdropFilter: 'blur(5px)', backgroundColor: 'rgba(255,255,255,0.12)' }}>
              <svg width="10" height="12" viewBox="0 0 8.4 9.6" fill="white">
                <path d="M 8.4 4.8 C 8.401 5.055 8.263 5.292 8.037 5.424 L 1.161 9.491 C 0.986 9.595 0.776 9.626 0.578 9.578 C 0.379 9.53 0.208 9.408 0.104 9.237 C 0.036 9.125 0 8.998 0 8.868 L 0 0.733 C 0 0.468 0.148 0.224 0.387 0.095 C 0.628 -0.036 0.924 -0.031 1.161 0.109 L 8.037 4.177 C 8.263 4.308 8.401 4.545 8.4 4.8 Z" />
              </svg>
            </div>
          </div>
        )}
      </div>
      <div className="flex-1 flex flex-col justify-between py-6 pr-4" style={{ minHeight: 140 }}>
        <p className="text-sm font-medium leading-snug mb-3" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#000', letterSpacing: '-0.3px', lineHeight: '140%' }}>
          Having SMNMEDIA makes selling memberships a <mark className="mark-highlight">whole lot easier.</mark>
        </p>
        <div className="flex items-center gap-2">
          <img src="https://framerusercontent.com/images/zA2PLtr62g8oQc7wvsyamsSYm8.svg?width=810&height=810" alt="Dr. Shaan" className="w-6 h-6 rounded object-cover" />
          <div>
            <div className="flex items-center gap-1">
              <span className="text-xs font-semibold" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Dr. Shaan</span>
              <svg width="8" height="8" viewBox="0 0 7.909 7.909" fill="#4aadf4">
                <path d="M 7.389 3.002 C 7.269 2.877 7.145 2.747 7.105 2.649 C 7.069 2.562 7.066 2.383 7.064 2.224 C 7.059 1.884 7.052 1.459 6.751 1.159 C 6.449 0.857 6.025 0.852 5.685 0.845 C 5.527 0.843 5.347 0.84 5.259 0.804 C 5.162 0.764 5.032 0.64 4.907 0.52 C 4.666 0.288 4.365 0 3.955 0 C 3.544 0 3.243 0.288 3.002 0.52 C 2.877 0.64 2.747 0.764 2.649 0.804 C 2.562 0.84 2.383 0.843 2.224 0.845 C 1.884 0.852 1.459 0.857 1.159 1.159 C 0.859 1.461 0.852 1.884 0.845 2.224 C 0.843 2.383 0.84 2.563 0.804 2.65 C 0.764 2.747 0.64 2.877 0.52 3.002 C 0.288 3.243 0 3.545 0 3.955 C 0 4.364 0.288 4.666 0.52 4.909 C 0.64 5.034 0.764 5.164 0.804 5.261 C 0.84 5.348 0.843 5.528 0.845 5.687 C 0.851 6.027 0.857 6.451 1.158 6.752 C 1.46 7.053 1.884 7.059 2.224 7.065 C 2.383 7.068 2.563 7.071 2.65 7.107 C 2.747 7.147 2.877 7.271 3.002 7.391 C 3.243 7.621 3.545 7.909 3.955 7.909 C 4.364 7.909 4.666 7.621 4.907 7.389 C 5.032 7.269 5.162 7.145 5.26 7.105 C 5.347 7.069 5.527 7.066 5.685 7.064 C 6.025 7.059 6.45 7.052 6.751 6.751 C 7.052 6.449 7.057 6.025 7.064 5.685 C 7.066 5.527 7.069 5.347 7.105 5.259 C 7.145 5.162 7.269 5.032 7.389 4.907 C 7.621 4.666 7.909 4.365 7.909 3.955 C 7.909 3.544 7.621 3.243 7.389 3.002 Z" />
              </svg>
            </div>
            <p className="text-xs opacity-40" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Aatma Aesthetics</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   3 STEPS – each is its own uniquely-named component
   ══════════════════════════════════════════════════════════════════════════ */
export function ThreeStepsSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="mb-10">
          <p className="text-sm font-bold mb-2" style={{ color: '#d9347e', fontFamily: 'Hanken Grotesk, sans-serif' }}>No credit card needed</p>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-0.5 h-10 flex-shrink-0" style={{ backgroundColor: '#d9347e' }} />
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#0a2540', letterSpacing: '-0.2px' }}>
              3 Easy steps to build your app right now!
            </h2>
          </div>
          <p className="text-base" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#435266' }}>Free trial. Preview your app today.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Step1 />
          <Step2 />
          <Step3 />
        </div>
      </div>
    </section>
  );
}

/* ── Step 1 ─────────────────────────────────────────────────────────────── */
function Step1() {
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-lg overflow-hidden" style={{ aspectRatio: '1.62' }}>
        <img src="https://framerusercontent.com/images/DO8OKFEwG4S82pSXJ1usIOtxaA.gif?width=708&height=438" alt="SMNMEDIA imports your brand info" className="w-full h-full object-cover" />
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#17151d' }}>
          1. SMNMEDIA imports your brand info
        </h3>
        <p className="text-sm" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#435266' }}>
          By scraping your website for logo, colours, services & pricing to create your app in record time.
        </p>
      </div>
    </div>
  );
}

/* ── Step 2 ─────────────────────────────────────────────────────────────── */
function Step2() {
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-lg overflow-hidden" style={{ aspectRatio: '1.62' }}>
        <img src="https://framerusercontent.com/images/EgOjoZGUs19UqgskPIdrHZAjfkw.jpg?width=649&height=402" alt="Receive your app, 24h later" className="w-full h-full object-cover" />
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#17151d' }}>
          2. Receive your app, 24h later
        </h3>
        <p className="text-sm" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#435266' }}>
          You'll have the ability to immediately download your app from the App & Google Play store on your phone!
        </p>
      </div>
    </div>
  );
}

/* ── Step 3 ─────────────────────────────────────────────────────────────── */
function Step3() {
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-lg overflow-hidden" style={{ aspectRatio: '1.62' }}>
        <img src="https://framerusercontent.com/images/R6ys7b6LKdmTZzUZbGjtRWabtnU.gif?width=708&height=438" alt="Start making passive sales!" className="w-full h-full object-cover" />
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#17151d' }}>
          3. Start making passive sales!
        </h3>
        <p className="text-sm" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#435266' }}>
          Introduce the app to your patients and start capturing treatment sales while you sleep.
        </p>
      </div>
    </div>
  );
}

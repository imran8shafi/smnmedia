'use client';
import React, { useState } from 'react';

// ─── PATIENT REVIEWS SLIDESHOW ─────────────────────────────────────────────────────────────
export function PatientReviewsSection() {
  const reviews = [
  {
    tag: 'Memberships',
    quote: '"The rewards are really cool"',
    reviewer: 'Chelsea D. of M&A Medical',
    type: 'Verified patient review',
    img: 'https://framerusercontent.com/images/t8YiU6p1xTjGlPWb1tUE9CQJR0.svg?width=177&height=109',
    avatar: 'https://framerusercontent.com/images/0xBPXl3oIWesNE63HkjS4ORan3o.jpg?width=240&height=240'
  },
  {
    tag: 'Memberships',
    quote: '"It\'s super easy to pay for anything I want to buy"',
    reviewer: 'Courtney W. of Dr. Lisil Clinic',
    type: 'Verified patient review',
    img: 'https://framerusercontent.com/images/A6s0pBdPifK8CYnIUbRezRX0Hjk.svg?width=177&height=109',
    avatar: 'https://framerusercontent.com/images/0xBPXl3oIWesNE63HkjS4ORan3o.jpg?width=240&height=240'
  },
  {
    tag: 'Memberships',
    quote: '"The points & rewards made me guilty of buying \u00a33,000 packages!"',
    reviewer: 'May J. of Crystalline Clinic',
    type: 'Verified patient review',
    img: 'https://framerusercontent.com/images/xAGfcknHFHPipPvRV0qo4vNce0.svg?width=177&height=109',
    avatar: 'https://framerusercontent.com/images/0xBPXl3oIWesNE63HkjS4ORan3o.jpg?width=240&height=240'
  },
  {
    tag: 'Memberships',
    quote: '"The app is like Uber but for any aesthetic treatment I want"',
    reviewer: 'SLA Medical, Manchester, UK',
    type: 'Verified review',
    img: 'https://framerusercontent.com/images/2eOFVQQHYR1JPyKCtMuD5pt2bA.svg?width=177&height=109',
    avatar: 'https://framerusercontent.com/images/0xBPXl3oIWesNE63HkjS4ORan3o.jpg?width=240&height=240'
  },
  {
    tag: 'Memberships',
    quote: '"Voice notes from my practitioner made me feel like a VIP!"',
    reviewer: 'Aaliyah S. of Bodysculpting UK',
    type: 'Verified patient review',
    img: 'https://framerusercontent.com/images/NyfJywqOjT3Ln9QoRfWLERyaY44.gif?width=236&height=146',
    avatar: 'https://framerusercontent.com/images/0xBPXl3oIWesNE63HkjS4ORan3o.jpg?width=240&height=240'
  },
  {
    tag: 'Memberships',
    quote: '"Super easy interface that makes membership management a breeze!"',
    reviewer: 'SLA Medical, Manchester, UK',
    type: 'Verified review',
    img: 'https://framerusercontent.com/images/It4x6rMF3DjK3hP3LBTpG7SA21k.svg?width=177&height=109',
    avatar: 'https://framerusercontent.com/images/0xBPXl3oIWesNE63HkjS4ORan3o.jpg?width=240&height=240'
  }];


  const [startIdx, setStartIdx] = useState(0);
  const perPage = 3;
  const maxIdx = reviews?.length - perPage;

  const prev = () => setStartIdx((i) => Math.max(0, i - 1));
  const next = () => setStartIdx((i) => Math.min(maxIdx, i + 1));

  const visible = reviews?.slice(startIdx, startIdx + perPage);

  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start gap-3 mb-2">
            <div className="w-0.5 h-10 flex-shrink-0 mt-1" style={{ backgroundColor: '#d9347e' }} />
            <div>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#0a2540', letterSpacing: '-0.2px' }}>
                Addictive to my patients
              </h2>
              <p className="text-sm mt-1" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#435266' }}>
                <em>- Dr. Laurier</em>
              </p>
            </div>
            {/* Quote icon */}
            <div className="ml-2 mt-1">
              <svg width="16" height="13" viewBox="0 0 16 12.5" fill="#d9347e">
                <path d="M 9 7 L 9 0 L 16 0 L 16 7.1 C 16 11.9 11.5 12.5 11.5 12.5 L 10.9 11.1 C 10.9 11.1 12.9 10.8 13.3 9.2 C 13.7 8 12.9 7 12.9 7 Z M 0 7 L 0 0 L 7 0 L 7 7.1 C 7 11.9 2.5 12.5 2.5 12.5 L 1.9 11.1 C 1.9 11.1 3.9 10.8 4.3 9.2 C 4.7 8 3.9 7 3.9 7 Z" />
              </svg>
            </div>
          </div>
          <p className="text-base max-w-xl" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#435266' }}>
            Exceed patient expectations, systematically and automatically. Retain patients. Sell more. Capture high quality referrals. Create a unique experience.
          </p>

          {/* Nav arrows */}
          <div className="flex gap-2 mt-4">
            <button onClick={prev} disabled={startIdx === 0} className="w-8 h-8 rounded-full flex items-center justify-center transition-opacity" style={{ backgroundColor: startIdx === 0 ? '#e0e0e0' : '#8d94a3' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button onClick={next} disabled={startIdx >= maxIdx} className="w-8 h-8 rounded-full flex items-center justify-center transition-opacity" style={{ backgroundColor: startIdx >= maxIdx ? '#e0e0e0' : '#8d94a3' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {visible?.map((r, i) =>
          <div key={i} className="rounded-xl overflow-hidden border flex flex-col" style={{ borderColor: '#dad6d880' }}>
              {/* Image */}
              <div className="h-28 overflow-hidden" style={{ borderBottom: '1px solid #dad6d880' }}>
                <img src={r?.img} alt={r?.reviewer} className="w-full h-full object-cover" />
              </div>
              {/* Content */}
              <div className="p-4 flex flex-col gap-3 flex-1">
                <div>
                  <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: '#ffd9eb', color: '#d9347e', fontFamily: 'Hanken Grotesk, sans-serif', fontWeight: 600 }}>{r?.tag}</span>
                </div>
                <p className="text-sm font-semibold" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#17151d' }}>{r?.quote}</p>
                <div className="flex items-center gap-2 mt-auto">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-100 flex-shrink-0">
                    <img src={r?.avatar} alt={r?.reviewer} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#5d5b5b' }}>{r?.reviewer}</p>
                    <div className="flex items-center gap-1">
                      <svg width="8" height="8" viewBox="0 0 9.886 9.886" fill="#4aadf4">
                        <path d="M 9.236 3.752 C 9.086 3.596 8.932 3.434 8.881 3.312 C 8.836 3.203 8.833 2.978 8.83 2.78 C 8.823 2.355 8.815 1.824 8.439 1.448 C 8.061 1.072 7.532 1.065 7.106 1.057 C 6.908 1.054 6.683 1.05 6.574 1.005 C 6.452 0.955 6.29 0.8 6.134 0.65 C 5.833 0.36 5.457 0 4.943 0 C 4.43 0 4.054 0.36 3.752 0.65 C 3.596 0.8 3.434 0.955 3.312 1.005 C 3.203 1.05 2.978 1.054 2.78 1.057 C 2.355 1.065 1.824 1.071 1.449 1.449 C 1.074 1.826 1.065 2.355 1.057 2.78 C 1.054 2.978 1.05 3.203 1.005 3.312 C 0.955 3.434 0.8 3.596 0.65 3.752 C 0.36 4.054 0 4.432 0 4.943 C 0 5.455 0.36 5.833 0.65 6.136 C 0.8 6.293 0.955 6.455 1.005 6.576 C 1.05 6.685 1.054 6.91 1.057 7.108 C 1.063 7.534 1.071 8.064 1.448 8.44 C 1.825 8.817 2.355 8.824 2.78 8.831 C 2.978 8.835 3.203 8.838 3.312 8.883 C 3.434 8.934 3.596 9.089 3.752 9.239 C 4.054 9.526 4.432 9.886 4.943 9.886 C 5.455 9.886 5.833 9.526 6.134 9.236 C 6.29 9.086 6.452 8.932 6.575 8.881 C 6.684 8.836 6.908 8.833 7.106 8.83 C 7.532 8.823 8.062 8.815 8.438 8.439 C 8.815 8.061 8.822 7.532 8.83 7.106 C 8.833 6.908 8.836 6.683 8.881 6.574 C 8.932 6.452 9.086 6.29 9.236 6.134 C 9.526 5.833 9.886 5.457 9.886 4.943 C 9.886 4.43 9.526 4.054 9.236 3.752 Z" />
                      </svg>
                      <p className="text-xs" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#5d5b5b' }}>{r?.type}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ─── CONFIGURE APP SECTION ─────────────────────────────────────────────────────────────
export function ConfigureSection() {
  const [brandColor, setBrandColor] = useState('#CC0000');
  const [font, setFont] = useState('Gabarito');
  const [fontOpen, setFontOpen] = useState(false);
  const fonts = ['Gabarito', 'HK Grotesk', 'DM Sans', 'Gotham'];

  return (
    <section id="configure" className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-start gap-16">
          {/* Left: form */}
          <div className="flex-1 max-w-md">
            <p className="text-sm font-bold mb-2" style={{ color: '#d9347e', fontFamily: 'Hanken Grotesk, sans-serif' }}>Start now</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#0a2540', letterSpacing: '-0.2px' }}>Configure your app</h2>
            <p className="text-base mb-8" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#435266' }}>
              28h average build time.<br />No credit card required.
            </p>

            {/* Brand color */}
            <div className="mb-5">
              <p className="text-sm font-semibold mb-2" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#000' }}>Brand color</p>
              <div className="flex gap-3">
                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden" style={{ height: 48, width: '48%' }}>
                  <div className="flex-1 h-full relative" style={{ backgroundColor: brandColor }}>
                    <input type="color" value={brandColor} onChange={(e) => setBrandColor(e?.target?.value)} className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" />
                  </div>
                  <div className="w-10 h-full border-l border-gray-200 flex items-center justify-center bg-white relative">
                    <input type="color" value={brandColor} onChange={(e) => setBrandColor(e?.target?.value)} className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" />
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M15.25 9.2422V13.25C15.25 14.355 14.355 15.25 13.25 15.25H4.75C3.645 15.25 2.75 14.355 2.75 13.25V4.75C2.75 3.645 3.645 2.75 4.75 2.75H8.75781" stroke="#252729" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.75 10.25C7.75 10.25 10.0838 10.1662 10.909 9.34097L15.784 4.46598C16.4053 3.84468 16.4053 2.83727 15.784 2.21597C15.1627 1.59468 14.1553 1.59468 13.534 2.21597L8.659 7.09097C7.8809 7.86907 7.75 10.25 7.75 10.25Z" stroke="#252729" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <input
                  type="text"
                  value={brandColor}
                  onChange={(e) => setBrandColor(e?.target?.value)}
                  className="border border-gray-200 rounded-lg px-4 text-sm"
                  style={{ height: 48, width: '48%', fontFamily: 'Hanken Grotesk, sans-serif', color: '#000', outline: 'none' }} />

              </div>
            </div>

            {/* Font */}
            <div className="mb-8">
              <p className="text-sm font-semibold mb-2" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#000' }}>Font</p>
              <div className="relative">
                <button
                  onClick={() => setFontOpen(!fontOpen)}
                  className="w-full flex items-center justify-between px-4 border border-gray-200 rounded-lg bg-white"
                  style={{ height: 48, fontFamily: 'Hanken Grotesk, sans-serif', fontSize: 16 }}>

                  <span>{font}</span>
                  <svg width="10" height="5" viewBox="0 0 10.152 5.077" fill="none">
                    <path d="M 0 0 L 5.076 5.077 L 10.152 0" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {fontOpen &&
                <div className="absolute top-full left-0 right-0 mt-1 border border-gray-200 rounded-lg bg-white shadow-md z-10">
                    {fonts?.map((f) =>
                  <button
                    key={f}
                    onClick={() => {setFont(f);setFontOpen(false);}}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                    style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>

                        {f}
                      </button>
                  )}
                  </div>
                }
              </div>
            </div>

            {/* CTA */}
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white text-sm font-medium transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#1e1e1e', fontFamily: 'Hanken Grotesk, sans-serif' }}>

              Build my app
            </a>
          </div>

          {/* Right: phone mockup */}
          <div className="flex-shrink-0 hidden md:block" style={{ transform: 'rotate(3.2deg)' }}>
            <div className="relative" style={{ width: 280, height: 580 }}>
              <div
                className="w-full h-full rounded-3xl overflow-hidden shadow-2xl"
                style={{ backgroundColor: '#fff', border: '8px solid #e5e7eb' }}>

                {/* Phone status bar */}
                <div className="flex items-center justify-between px-4 py-2 bg-white">
                  <span className="text-xs font-semibold" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-2 bg-gray-800 rounded-sm" />
                    <div className="w-3 h-2 bg-gray-800 rounded-sm" />
                  </div>
                </div>

                {/* App header */}
                <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-100">
                  <span className="text-base font-semibold" style={{ fontFamily: 'Gabarito, sans-serif', color: '#262c40' }}>Rewards</span>
                  <div className="w-5 h-5 rounded-full" style={{ backgroundColor: brandColor, opacity: 0.8 }} />
                </div>

                {/* Rewards card */}
                <div className="mx-3 mt-3 rounded-2xl p-4 text-white" style={{ background: `linear-gradient(135deg, ${brandColor}, ${brandColor}cc)` }}>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="text-xs opacity-70" style={{ fontFamily: 'Gabarito, sans-serif' }}>Skinology Points</p>
                      <p className="text-xs opacity-70" style={{ fontFamily: 'Gabarito, sans-serif' }}>Skin VIP member</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold" style={{ fontFamily: 'Gabarito, sans-serif' }}>$25.00</p>
                      <p className="text-xs opacity-70" style={{ fontFamily: 'Gabarito, sans-serif' }}>Skinology cash</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm font-medium" style={{ fontFamily: 'Gabarito, sans-serif' }}>Katie Smith</p>
                      <p className="text-xs opacity-60" style={{ fontFamily: 'Gabarito, sans-serif' }}>Joined on 14/05/2026</p>
                    </div>
                  </div>
                </div>

                {/* Rewards list */}
                <div className="px-3 mt-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold" style={{ fontFamily: 'Gabarito, sans-serif', color: brandColor }}>Rewards</span>
                    <span className="text-xs" style={{ fontFamily: 'Gabarito, sans-serif', color: brandColor }}>See more &gt;</span>
                  </div>
                  {[
                  { title: 'Free 1-on-1 skin assessment', sub: 'Can convert to $25 Skinology cash', img: 'https://framerusercontent.com/images/3TrYYsQEVMHXcbhFMQ3PCAmP42M.webp?width=429&height=306' },
                  { title: '15% Off Microdermabrasion', sub: 'Can convert to $25 Skinology cash', img: 'https://framerusercontent.com/images/LflDl8RMQtKq1YEKcioxkRxy3u4.webp?width=428&height=306' }]?.
                  map((item, i) =>
                  <div key={i} className="flex items-center gap-2 mb-2 rounded-xl overflow-hidden border border-gray-100" style={{ height: 60 }}>
                      <img src={item?.img} alt={item?.title} className="w-16 h-full object-cover flex-shrink-0" />
                      <div className="flex-1 py-1 pr-2">
                        <p className="text-xs font-semibold" style={{ fontFamily: 'Gabarito, sans-serif' }}>{item?.title}</p>
                        <p className="text-xs text-gray-400" style={{ fontFamily: 'Gabarito, sans-serif' }}>{item?.sub}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom nav */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-around py-2 bg-white border-t border-gray-100">
                  {['Home', 'Shop', 'Scan', 'Rewards', 'Profile']?.map((label) =>
                  <div key={label} className="flex flex-col items-center gap-0.5">
                      <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: label === 'Rewards' ? brandColor : '#8d94a3', opacity: label === 'Rewards' ? 1 : 0.5 }} />
                      <span className="text-xs" style={{ fontFamily: 'Gabarito, sans-serif', color: label === 'Rewards' ? brandColor : '#8d94a3', fontSize: 9 }}>{label}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

// ─── FOOTER ───────────────────────────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="py-20 px-10" style={{ backgroundColor: '#17151d' }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src="/assets/images/Picsart_24-07-15_09-15-34-071-1777043850641.png"
                alt="SMNMEDIA logo"
                style={{ height: 30, objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />

            </a>
          </div>

          {/* Links */}
          <div className="flex gap-20">
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold text-white" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Product</p>
              <a href="/" className="text-sm text-white hover:opacity-80" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Product</a>
              <a href="/affiliates" className="text-sm text-white hover:opacity-80" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Affiliates</a>
              <a href="#" className="text-sm text-white hover:opacity-80" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Help</a>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold text-white" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Legal</p>
              <a href="/privacy-policy" className="text-sm text-white hover:opacity-80" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Privacy Policy</a>
              <a href="/terms-and-conditions" className="text-sm text-white hover:opacity-80" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>);

}

// ─── MOBILE CTA BAR ───────────────────────────────────────────────────────────────────────────
export function MobileCtaBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-3 py-4 px-6 md:hidden"
      style={{
        backgroundColor: '#fff',
        boxShadow: '0 -0.36px 1.8px -1.17px rgba(10,37,64,0.07), 0 -1.37px 6.87px -2.33px rgba(10,37,64,0.06), 0 -6px 30px -3.5px rgba(10,37,64,0.03)'
      }}>

      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
        <img
          src="/assets/images/Picsart_24-07-15_09-15-34-071-1777043850641.png"
          alt="SMNMEDIA"
          className="w-full h-full object-contain" />

      </div>
      <a
        href="#configure"
        className="flex-1 text-center py-3 rounded-lg text-white text-sm font-medium"
        style={{ backgroundColor: '#d9347e', fontFamily: 'Hanken Grotesk, sans-serif' }}>

        Build my app
      </a>
    </div>);

}
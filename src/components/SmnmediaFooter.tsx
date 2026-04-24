'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

/* ══════════════════════════════════════════════════════════════════════════
   NAVBAR (single element – kept as is)
   ══════════════════════════════════════════════════════════════════════════ */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-14 bg-white"
      style={{ borderBottom: '1px solid rgba(150,150,150,0.2)', boxShadow: scrolled ? '0 1px 8px rgba(0,0,0,0.06)' : 'none', transition: 'box-shadow 0.2s' }}>

      {/* Logo */}
      <a href="/" className="flex-shrink-0">
        <Image
          src="/assets/images/Picsart_24-07-15_09-15-34-071-1777043850641.png"
          alt="SMNMEDIA logo"
          width={130}
          height={33}
          style={{ objectFit: 'contain' }}
          priority />
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-1">
        <a href="/" className="px-3 py-1 text-sm text-gray-800 hover:text-black font-normal" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Product</a>
        <a href="/affiliates" className="px-3 py-1 text-sm text-gray-800 hover:text-black font-normal" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Affiliates</a>
        <span className="px-3 py-1 text-sm text-gray-800 hover:text-black font-normal cursor-pointer" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Help</span>
      </nav>

      {/* CTA Buttons */}
      <div className="hidden md:flex items-center gap-2">
        <a
          href="#"
          className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg text-gray-800 hover:bg-gray-50 transition-colors"
          style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
          Log in
        </a>
        <a
          href="#configure"
          className="relative px-4 py-1.5 text-sm rounded-lg text-white font-medium overflow-hidden transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#d9347e', fontFamily: 'Hanken Grotesk, sans-serif' }}>
          <span className="relative z-10">Build my app</span>
          <div className="absolute inset-0 overflow-hidden">
            <div className="float-blob-1 absolute top-[20%] left-[10%] w-24 h-24 rounded-full" style={{ background: 'radial-gradient(circle, rgb(112,1,220), transparent)', filter: 'blur(20px)' }} />
            <div className="float-blob-2 absolute top-[60%] left-[70%] w-32 h-32 rounded-full" style={{ background: 'radial-gradient(circle, rgb(112,1,220), transparent)', filter: 'blur(25px)' }} />
          </div>
        </a>
      </div>

      {/* Mobile hamburger */}
      <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
        <div className="w-6 h-0.5 bg-gray-800 mb-1.5" />
        <div className="w-6 h-0.5 bg-gray-800 mb-1.5" />
        <div className="w-6 h-0.5 bg-gray-800" />
      </button>

      {/* Mobile menu */}
      {mobileOpen &&
      <div className="absolute top-14 left-0 right-0 bg-white border-b border-gray-100 p-4 flex flex-col gap-3 md:hidden shadow-md">
          <a href="/" className="text-sm text-gray-800">Product</a>
          <a href="/affiliates" className="text-sm text-gray-800">Affiliates</a>
          <span className="text-sm text-gray-800 cursor-pointer">Help</span>
          <a href="#configure" className="mt-2 px-4 py-2 text-sm rounded-lg text-white text-center font-medium" style={{ backgroundColor: '#d9347e' }}>Build my app</a>
        </div>
      }
    </header>);
}

/* ══════════════════════════════════════════════════════════════════════════
   HERO SECTION – feature tabs are each their OWN uniquely-named component
   ══════════════════════════════════════════════════════════════════════════ */
export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center pt-32 pb-0 bg-white overflow-hidden">
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl mx-auto">
        <h1
          className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-black mb-3"
          style={{ fontFamily: 'Hanken Grotesk, sans-serif', letterSpacing: '-0.2px' }}>
          Sell more treatments &amp; packages
        </h1>
        <p className="text-base text-gray-500 mb-6" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>See how</p>
        {/* Arrow */}
        <svg width="15" height="55" viewBox="0 0 14.693 55" className="mb-6 opacity-60">
          <path d="M 6.634 54.707 C 7.025 55.097 7.658 55.097 8.048 54.707 L 14.412 48.343 C 14.791 47.951 14.786 47.327 14.4 46.941 C 14.014 46.555 13.39 46.55 12.998 46.929 L 7.341 52.586 L 1.684 46.929 C 1.29 46.56 0.674 46.57 0.293 46.952 C -0.089 47.334 -0.099 47.949 0.271 48.343 L 6.635 54.707 Z M 7.341 0 L 6.341 0 L 6.341 54 L 8.341 54 L 8.341 0 Z" fill="rgb(93,93,93)" />
        </svg>
      </div>

      {/* Phone mockup + tabs */}
      <div className="relative w-full flex flex-col items-center">
        {/* Feature tabs above phone – each is its own component */}
        <div className="hidden md:flex items-start justify-center gap-0 w-full max-w-3xl mb-0 relative z-10">
          <FeatureTab1 />
          <FeatureTab2 />
          <div className="w-[340px]" />{/* phone spacer */}
          <FeatureTab3 />
          <FeatureTab4 />
        </div>

        {/* Dark background section */}
        <div className="w-full" style={{ backgroundColor: '#17151d' }}>
          <div className="flex flex-col md:flex-row items-start justify-center max-w-5xl mx-auto px-6 md:px-10 py-12 gap-8">
            {/* Left stats */}
            <div className="flex-1 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
                Sell more,<br />while you sleep
              </h2>
              <p className="text-sm text-gray-300 max-w-xs" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
                Let SMNMEDIA&apos;s AI algorithm send your patients carefully targeted offers and deals based on their browsing behaviour and personal data.
              </p>
            </div>

            {/* Phone */}
            <div className="flex-shrink-0 flex justify-center">
              <div className="relative" style={{ width: 340, height: 712 }}>
                <iframe
                  src="https://cloud.protopie.io/p/c03b4bd475e6e3ad648e0040?ui=false&mockup=false&scaleToFit=true&cursorType=touch"
                  width="340"
                  height="708"
                  style={{ border: 'none', background: 'transparent', borderRadius: 40 }}
                  title="App demo" />
              </div>
            </div>

            {/* Right stats */}
            <div className="flex-1 flex flex-col gap-6 text-white">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-0.5 h-9 bg-pink-500" style={{ backgroundColor: '#d9347e' }} />
                  <h3 className="text-2xl font-bold" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>+30k</h3>
                </div>
                <p className="text-sm text-gray-300 pl-3" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>In-app offers that converted into sales</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-0.5 h-9" style={{ backgroundColor: '#d9347e' }} />
                  <h3 className="text-2xl font-bold" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>+889%</h3>
                </div>
                <p className="text-sm text-gray-300 pl-3" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Higher conversion rate than email &amp; SMS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);
}

/* ── Feature Tab 1 – Automated Offers (active) ──────────────────────────── */
function FeatureTab1() {
  return (
    <div className="flex flex-col items-center gap-2 px-4 py-6 cursor-pointer w-40 opacity-100 transition-opacity">
      <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#d9347e' }} />
      <p className="text-xs text-center" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#000' }}>Automated Offers</p>
    </div>
  );
}

/* ── Feature Tab 2 – Patient financing ──────────────────────────────────── */
function FeatureTab2() {
  return (
    <div className="flex flex-col items-center gap-2 px-4 py-6 cursor-pointer w-40 opacity-50 hover:opacity-75 transition-opacity">
      <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#6f6f6f' }} />
      <p className="text-xs text-center" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#5d5b5b' }}>Patient financing</p>
    </div>
  );
}

/* ── Feature Tab 3 – Rewards ────────────────────────────────────────────── */
function FeatureTab3() {
  return (
    <div className="flex flex-col items-center gap-2 px-4 py-6 cursor-pointer w-40 opacity-50 hover:opacity-75 transition-opacity">
      <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#6f6f6f' }} />
      <p className="text-xs text-center" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#5d5b5b' }}>Rewards</p>
    </div>
  );
}

/* ── Feature Tab 4 – Memberships ────────────────────────────────────────── */
function FeatureTab4() {
  return (
    <div className="flex flex-col items-center gap-2 px-4 py-6 cursor-pointer w-40 opacity-50 hover:opacity-75 transition-opacity">
      <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#6f6f6f' }} />
      <p className="text-xs text-center" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#5d5b5b' }}>Memberships</p>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   CASE STUDIES SECTION
   – Stats panel is its own component (hardcoded)
   – Each case card is its OWN uniquely-named component (CaseStudy1..4)
   – Each logo button is its OWN uniquely-named component (CaseStudyLogoBtn1..4)
   ══════════════════════════════════════════════════════════════════════════ */
export function CaseStudiesSection() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Stats panel */}
          <div className="w-full md:w-56 flex-shrink-0">
            <CaseStudyStats />
          </div>

          {/* Case study cards */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CaseStudy1 />
              <CaseStudy2 />
              <CaseStudy3 />
              <CaseStudy4 />
            </div>

            {/* Logo bar – each is its own component */}
            <div className="flex items-center justify-around mt-6 gap-4">
              <CaseStudyLogoBtn1 />
              <CaseStudyLogoBtn2 />
              <CaseStudyLogoBtn3 />
              <CaseStudyLogoBtn4 />
            </div>
          </div>
        </div>
      </div>
    </section>);
}

/* ── Case Study Stats Panel (hardcoded – SLA Medical) ───────────────────── */
function CaseStudyStats() {
  return (
    <>
      <div className="border-l-2 pl-4 mb-4" style={{ borderColor: '#d9347e' }}>
        <h4 className="text-xl font-bold" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#0a2540' }}>+60%</h4>
        <p className="text-sm" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#435266' }}>Jump in average patient spend</p>
      </div>
      <div className="border-l-2 pl-4 mb-4" style={{ borderColor: '#d9347e' }}>
        <h4 className="text-xl font-bold" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#0a2540' }}>+£24K</h4>
        <p className="text-sm" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#435266' }}>Additional ARR</p>
      </div>
      <div className="pl-4">
        <p className="text-sm font-semibold mb-2" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#0a2540' }}>Products used</p>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#d9347e' }} />
          <span className="text-sm" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#435266' }}>Memberships</span>
        </div>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#d9347e' }} />
          <span className="text-sm" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#435266' }}>Rewards</span>
        </div>
      </div>
    </>
  );
}

/* ── Case Study 1 – Cultskin ────────────────────────────────────────────── */
function CaseStudy1() {
  return (
    <div className="relative rounded-xl overflow-hidden cursor-pointer group" style={{ height: 200, boxShadow: '0 2px 12px rgba(0,0,0,0.15)' }}>
      <img src="https://framerusercontent.com/images/IePmQxqBwmWzJJGI20KOjB7Uvw4.webp?width=1283&height=711" alt="See how UK's 8-location Cultskin uses SMNMEDIA to keep its dominance over aesthetics market" className="w-full h-full object-cover" />
      <div className="absolute top-3 left-3">
        <img src="https://framerusercontent.com/images/1SMWONWvvsjdpjjZn4f9oBd8xoo.png?width=730&height=244" alt="Cultskin logo" className="h-8 object-contain opacity-90" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-xs" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Read story</span>
          <svg width="8" height="13" viewBox="0 0 4 8" fill="none"><path d="M0.5 0.5L3.5 4L0.5 7.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
      </div>
    </div>
  );
}

/* ── Case Study 2 – SLA Medical ─────────────────────────────────────────── */
function CaseStudy2() {
  return (
    <div className="relative rounded-xl overflow-hidden cursor-pointer group" style={{ height: 200, boxShadow: '0 2px 12px rgba(0,0,0,0.15)' }}>
      <img src="https://framerusercontent.com/images/IePmQxqBwmWzJJGI20KOjB7Uvw4.webp?width=1283&height=711" alt="See how SLA Medical used SMNMEDIA to increase average patient spend by 60%" className="w-full h-full object-cover" />
      <div className="absolute top-3 left-3">
        <img src="https://framerusercontent.com/images/D1KYr6d9JuRnXi9g07U5YqPq4.png?width=414&height=229" alt="SLA Medical logo" className="h-8 object-contain opacity-90" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-xs" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Read story</span>
          <svg width="8" height="13" viewBox="0 0 4 8" fill="none"><path d="M0.5 0.5L3.5 4L0.5 7.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
      </div>
    </div>
  );
}

/* ── Case Study 3 – JM Medispa ──────────────────────────────────────────── */
function CaseStudy3() {
  return (
    <div className="relative rounded-xl overflow-hidden cursor-pointer group" style={{ height: 200, boxShadow: '0 2px 12px rgba(0,0,0,0.15)' }}>
      <img src="https://framerusercontent.com/images/t7a8XEB9Lx726pktH6TT9ZkhSsI.jpg?width=1200&height=675" alt="How JM Medispa added +£40,000, +32 Google Reviews, and +29 Referrals in her first 45 Days using SMNMEDIA" className="w-full h-full object-cover" />
      <div className="absolute top-3 left-3">
        <img src="https://framerusercontent.com/images/BgY9sw1sb9dD1A4C2ftZ7qHYic.webp?width=876&height=379" alt="JM Medispa logo" className="h-8 object-contain opacity-90" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-xs" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Read story</span>
          <svg width="8" height="13" viewBox="0 0 4 8" fill="none"><path d="M0.5 0.5L3.5 4L0.5 7.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
      </div>
    </div>
  );
}

/* ── Case Study 4 – Harvey Nichols / Dr. Zoya ───────────────────────────── */
function CaseStudy4() {
  return (
    <div className="relative rounded-xl overflow-hidden cursor-pointer group" style={{ height: 200, boxShadow: '0 2px 12px rgba(0,0,0,0.15)' }}>
      <img src="https://framerusercontent.com/images/ggqZxW5RaEzS3HzRC5S6O6Lv7sM.webp?width=1282&height=711" alt="Why Harvey Nichols clinic owner Dr. Zoya chose SMNMEDIA to exceed patient expectations" className="w-full h-full object-cover" />
      <div className="absolute top-3 left-3">
        <img src="https://framerusercontent.com/images/nReJkgaUdJPs6auYmyCSBpmxT8I.png?width=2048&height=1106" alt="Dr. Zoya logo" className="h-8 object-contain opacity-90" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-xs" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Read story</span>
          <svg width="8" height="13" viewBox="0 0 4 8" fill="none"><path d="M0.5 0.5L3.5 4L0.5 7.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
      </div>
    </div>
  );
}

/* ── Case Study Logo Button 1 – Cultskin ────────────────────────────────── */
function CaseStudyLogoBtn1() {
  return (
    <button className="transition-opacity" style={{ opacity: 0.35 }}>
      <img src="https://framerusercontent.com/images/1SMWONWvvsjdpjjZn4f9oBd8xoo.png?width=730&height=244" alt="Cultskin logo" className="h-8 object-contain" />
    </button>
  );
}

/* ── Case Study Logo Button 2 – SLA Medical (active) ────────────────────── */
function CaseStudyLogoBtn2() {
  return (
    <button className="transition-opacity" style={{ opacity: 1 }}>
      <img src="https://framerusercontent.com/images/D1KYr6d9JuRnXi9g07U5YqPq4.png?width=414&height=229" alt="SLA Medical logo" className="h-8 object-contain" />
    </button>
  );
}

/* ── Case Study Logo Button 3 – JM Medispa ──────────────────────────────── */
function CaseStudyLogoBtn3() {
  return (
    <button className="transition-opacity" style={{ opacity: 0.35 }}>
      <img src="https://framerusercontent.com/images/BgY9sw1sb9dD1A4C2ftZ7qHYic.webp?width=876&height=379" alt="JM Medispa logo" className="h-8 object-contain" />
    </button>
  );
}

/* ── Case Study Logo Button 4 – Dr. Zoya ────────────────────────────────── */
function CaseStudyLogoBtn4() {
  return (
    <button className="transition-opacity" style={{ opacity: 0.35 }}>
      <img src="https://framerusercontent.com/images/nReJkgaUdJPs6auYmyCSBpmxT8I.png?width=2048&height=1106" alt="Dr. Zoya logo" className="h-8 object-contain" />
    </button>
  );
}
▲▲▲ END SmnmediaComponents.tsx ▲▲▲

📄 FILE 2 — SmnmediaFooter.tsx
▼▼▼ BEGIN SmnmediaFooter.tsx ▼▼▼

'use client';
import React, { useState } from 'react';

/* ══════════════════════════════════════════════════════════════════════════
   PATIENT REVIEWS – every card is its OWN uniquely-named component
   (all 6 rendered in a 2×3 grid – slideshow removed so each is always visible
   and independently editable in the visual editor)
   ══════════════════════════════════════════════════════════════════════════ */
export function PatientReviewsSection() {
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
        </div>

        {/* Cards – each is its own uniquely-named component */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <PatientReview1 />
          <PatientReview2 />
          <PatientReview3 />
          <PatientReview4 />
          <PatientReview5 />
          <PatientReview6 />
        </div>
      </div>
    </section>);
}

/* ── Patient Review 1 – Chelsea D. ──────────────────────────────────────── */
function PatientReview1() {
  return (
    <div className="rounded-xl overflow-hidden border flex flex-col" style={{ borderColor: '#dad6d880' }}>
      <div className="h-28 overflow-hidden" style={{ borderBottom: '1px solid #dad6d880' }}>
        <img src="https://framerusercontent.com/images/t8YiU6p1xTjGlPWb1tUE9CQJR0.svg?width=177&height=109" alt="Chelsea D. of M&A Medical" className="w-full h-full object-cover" />
      </div>
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div>
          <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: '#ffd9eb', color: '#d9347e', fontFamily: 'Hanken Grotesk, sans-serif', fontWeight: 600 }}>Memberships</span>
        </div>
        <p className="text-sm font-semibold" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#17151d' }}>"The rewards are really cool"</p>
        <div className="flex items-center gap-2 mt-auto">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-100 flex-shrink-0">
            <img src="https://framerusercontent.com/images/0xBPXl3oIWesNE63HkjS4ORan3o.jpg?width=240&height=240" alt="Chelsea D." className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-xs" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#5d5b5b' }}>Chelsea D. of M&A Medical</p>
            <div className="flex items-center gap-1">
              <svg width="8" height="8" viewBox="0 0 9.886 9.886" fill="#4aadf4">
                <path d="M 9.236 3.752 C 9.086 3.596 8.932 3.434 8.881 3.312 C 8.836 3.203 8.833 2.978 8.83 2.78 C 8.823 2.355 8.815 1.824 8.439 1.448 C 8.061 1.072 7.532 1.065 7.106 1.057 C 6.908 1.054 6.683 1.05 6.574 1.005 C 6.452 0.955 6.29 0.8 6.134 0.65 C 5.833 0.36 5.457 0 4.943 0 C 4.43 0 4.054 0.36 3.752 0.65 C 3.596 0.8 3.434 0.955 3.312 1.005 C 3.203 1.05 2.978 1.054 2.78 1.057 C 2.355 1.065 1.824 1.071 1.449 1.449 C 1.074 1.826 1.065 2.355 1.057 2.78 C 1.054 2.978 1.05 3.203 1.005 3.312 C 0.955 3.434 0.8 3.596 0.65 3.752 C 0.36 4.054 0 4.432 0 4.943 C 0 5.455 0.36 5.833 0.65 6.136 C 0.8 6.293 0.955 6.455 1.005 6.576 C 1.05 6.685 1.054 6.91 1.057 7.108 C 1.063 7.534 1.071 8.064 1.448 8.44 C 1.825 8.817 2.355 8.824 2.78 8.831 C 2.978 8.835 3.203 8.838 3.312 8.883 C 3.434 8.934 3.596 9.089 3.752 9.239 C 4.054 9.526 4.432 9.886 4.943 9.886 C 5.455 9.886 5.833 9.526 6.134 9.236 C 6.29 9.086 6.452 8.932 6.575 8.881 C 6.684 8.836 6.908 8.833 7.106 8.83 C 7.532 8.823 8.062 8.815 8.438 8.439 C 8.815 8.061 8.822 7.532 8.83 7.106 C 8.833 6.908 8.836 6.683 8.881 6.574 C 8.932 6.452 9.086 6.29 9.236 6.134 C 9.526 5.833 9.886 5.457 9.886 4.943 C 9.886 4.43 9.526 4.054 9.236 3.752 Z" />
              </svg>
              <p className="text-xs" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#5d5b5b' }}>Verified patient review</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Patient Review 2 – Courtney W. ─────────────────────────────────────── */
function PatientReview2() {
  return (
    <div className="rounded-xl overflow-hidden border flex flex-col" style={{ borderColor: '#dad6d880' }}>
      <div className="h-28 overflow-hidden" style={{ borderBottom: '1px solid #dad6d880' }}>
        <img src="https://framerusercontent.com/images/A6s0pBdPifK8CYnIUbRezRX0Hjk.svg?width=177&height=109" alt="Courtney W. of Dr. Lisil Clinic" className="w-full h-full object-cover" />
      </div>
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div>
          <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: '#ffd9eb', color: '#d9347e', fontFamily: 'Hanken Grotesk, sans-serif', fontWeight: 600 }}>Memberships</span>
        </div>
        <p className="text-sm font-semibold" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#17151d' }}>"It's super easy to pay for anything I want to buy"</p>
        <div className="flex items-center gap-2 mt-auto">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-100 flex-shrink-0">
            <img src="https://framerusercontent.com/images/0xBPXl3oIWesNE63HkjS4ORan3o.jpg?width=240&height=240" alt="Courtney W." className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-xs" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#5d5b5b' }}>Courtney W. of Dr. Lisil Clinic</p>
            <div className="flex items-center gap-1">
              <svg width="8" height="8" viewBox="0 0 9.886 9.886" fill="#4aadf4">
                <path d="M 9.236 3.752 C 9.086 3.596 8.932 3.434 8.881 3.312 C 8.836 3.203 8.833 2.978 8.83 2.78 C 8.823 2.355 8.815 1.824 8.439 1.448 C 8.061 1.072 7.532 1.065 7.106 1.057 C 6.908 1.054 6.683 1.05 6.574 1.005 C 6.452 0.955 6.29 0.8 6.134 0.65 C 5.833 0.36 5.457 0 4.943 0 C 4.43 0 4.054 0.36 3.752 0.65 C 3.596 0.8 3.434 0.955 3.312 1.005 C 3.203 1.05 2.978 1.054 2.78 1.057 C 2.355 1.065 1.824 1.071 1.449 1.449 C 1.074 1.826 1.065 2.355 1.057 2.78 C 1.054 2.978 1.05 3.203 1.005 3.312 C 0.955 3.434 0.8 3.596 0.65 3.752 C 0.36 4.054 0 4.432 0 4.943 C 0 5.455 0.36 5.833 0.65 6.136 C 0.8 6.293 0.955 6.455 1.005 6.576 C 1.05 6.685 1.054 6.91 1.057 7.108 C 1.063 7.534 1.071 8.064 1.448 8.44 C 1.825 8.817 2.355 8.824 2.78 8.831 C 2.978 8.835 3.203 8.838 3.312 8.883 C 3.434 8.934 3.596 9.089 3.752 9.239 C 4.054 9.526 4.432 9.886 4.943 9.886 C 5.455 9.886 5.833 9.526 6.134 9.236 C 6.29 9.086 6.452 8.932 6.575 8.881 C 6.684 8.836 6.908 8.833 7.106 8.83 C 7.532 8.823 8.062 8.815 8.438 8.439 C 8.815 8.061 8.822 7.532 8.83 7.106 C 8.833 6.908 8.836 6.683 8.881 6.574 C 8.932 6.452 9.086 6.29 9.236 6.134 C 9.526 5.833 9.886 5.457 9.886 4.943 C 9.886 4.43 9.526 4.054 9.236 3.752 Z" />
              </svg>
              <p className="text-xs" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#5d5b5b' }}>Verified patient review</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Patient Review 3 – May J. ──────────────────────────────────────────── */
function PatientReview3() {
  return (
    <div className="rounded-xl overflow-hidden border flex flex-col" style={{ borderColor: '#dad6d880' }}>
      <div className="h-28 overflow-hidden" style={{ borderBottom: '1px solid #dad6d880' }}>
        <img src="https://framerusercontent.com/images/xAGfcknHFHPipPvRV0qo4vNce0.svg?width=177&height=109" alt="May J. of Crystalline Clinic" className="w-full h-full object-cover" />
      </div>
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div>
          <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: '#ffd9eb', color: '#d9347e', fontFamily: 'Hanken Grotesk, sans-serif', fontWeight: 600 }}>Memberships</span>
        </div>
        <p className="text-sm font-semibold" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#17151d' }}>"The points &amp; rewards made me guilty of buying £3,000 packages!"</p>
        <div className="flex items-center gap-2 mt-auto">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-100 flex-shrink-0">
            <img src="https://framerusercontent.com/images/0xBPXl3oIWesNE63HkjS4ORan3o.jpg?width=240&height=240" alt="May J." className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-xs" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#5d5b5b' }}>May J. of Crystalline Clinic</p>
            <div className="flex items-center gap-1">
              <svg width="8" height="8" viewBox="0 0 9.886 9.886" fill="#4aadf4">
                <path d="M 9.236 3.752 C 9.086 3.596 8.932 3.434 8.881 3.312 C 8.836 3.203 8.833 2.978 8.83 2.78 C 8.823 2.355 8.815 1.824 8.439 1.448 C 8.061 1.072 7.532 1.065 7.106 1.057 C 6.908 1.054 6.683 1.05 6.574 1.005 C 6.452 0.955 6.29 0.8 6.134 0.65 C 5.833 0.36 5.457 0 4.943 0 C 4.43 0 4.054 0.36 3.752 0.65 C 3.596 0.8 3.434 0.955 3.312 1.005 C 3.203 1.05 2.978 1.054 2.78 1.057 C 2.355 1.065 1.824 1.071 1.449 1.449 C 1.074 1.826 1.065 2.355 1.057 2.78 C 1.054 2.978 1.05 3.203 1.005 3.312 C 0.955 3.434 0.8 3.596 0.65 3.752 C 0.36 4.054 0 4.432 0 4.943 C 0 5.455 0.36 5.833 0.65 6.136 C 0.8 6.293 0.955 6.455 1.005 6.576 C 1.05 6.685 1.054 6.91 1.057 7.108 C 1.063 7.534 1.071 8.064 1.448 8.44 C 1.825 8.817 2.355 8.824 2.78 8.831 C 2.978 8.835 3.203 8.838 3.312 8.883 C 3.434 8.934 3.596 9.089 3.752 9.239 C 4.054 9.526 4.432 9.886 4.943 9.886 C 5.455 9.886 5.833 9.526 6.134 9.236 C 6.29 9.086 6.452 8.932 6.575 8.881 C 6.684 8.836 6.908 8.833 7.106 8.83 C 7.532 8.823 8.062 8.815 8.438 8.439 C 8.815 8.061 8.822 7.532 8.83 7.106 C 8.833 6.908 8.836 6.683 8.881 6.574 C 8.932 6.452 9.086 6.29 9.236 6.134 C 9.526 5.833 9.886 5.457 9.886 4.943 C 9.886 4.43 9.526 4.054 9.236 3.752 Z" />
              </svg>
              <p className="text-xs" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#5d5b5b' }}>Verified patient review</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Patient Review 4 – SLA Medical (Uber-quote) ────────────────────────── */
function PatientReview4() {
  return (
    <div className="rounded-xl overflow-hidden border flex flex-col" style={{ borderColor: '#dad6d880' }}>
      <div className="h-28 overflow-hidden" style={{ borderBottom: '1px solid #dad6d880' }}>
        <img src="https://framerusercontent.com/images/2eOFVQQHYR1JPyKCtMuD5pt2bA.svg?width=177&height=109" alt="SLA Medical, Manchester, UK" className="w-full h-full object-cover" />
      </div>
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div>
          <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: '#ffd9eb', color: '#d9347e', fontFamily: 'Hanken Grotesk, sans-serif', fontWeight: 600 }}>Memberships</span>
        </div>
        <p className="text-sm font-semibold" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#17151d' }}>"The app is like Uber but for any aesthetic treatment I want"</p>
        <div className="flex items-center gap-2 mt-auto">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-100 flex-shrink-0">
            <img src="https://framerusercontent.com/images/0xBPXl3oIWesNE63HkjS4ORan3o.jpg?width=240&height=240" alt="SLA Medical" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-xs" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#5d5b5b' }}>SLA Medical, Manchester, UK</p>
            <div className="flex items-center gap-1">
              <svg width="8" height="8" viewBox="0 0 9.886 9.886" fill="#4aadf4">
                <path d="M 9.236 3.752 C 9.086 3.596 8.932 3.434 8.881 3.312 C 8.836 3.203 8.833 2.978 8.83 2.78 C 8.823 2.355 8.815 1.824 8.439 1.448 C 8.061 1.072 7.532 1.065 7.106 1.057 C 6.908 1.054 6.683 1.05 6.574 1.005 C 6.452 0.955 6.29 0.8 6.134 0.65 C 5.833 0.36 5.457 0 4.943 0 C 4.43 0 4.054 0.36 3.752 0.65 C 3.596 0.8 3.434 0.955 3.312 1.005 C 3.203 1.05 2.978 1.054 2.78 1.057 C 2.355 1.065 1.824 1.071 1.449 1.449 C 1.074 1.826 1.065 2.355 1.057 2.78 C 1.054 2.978 1.05 3.203 1.005 3.312 C 0.955 3.434 0.8 3.596 0.65 3.752 C 0.36 4.054 0 4.432 0 4.943 C 0 5.455 0.36 5.833 0.65 6.136 C 0.8 6.293 0.955 6.455 1.005 6.576 C 1.05 6.685 1.054 6.91 1.057 7.108 C 1.063 7.534 1.071 8.064 1.448 8.44 C 1.825 8.817 2.355 8.824 2.78 8.831 C 2.978 8.835 3.203 8.838 3.312 8.883 C 3.434 8.934 3.596 9.089 3.752 9.239 C 4.054 9.526 4.432 9.886 4.943 9.886 C 5.455 9.886 5.833 9.526 6.134 9.236 C 6.29 9.086 6.452 8.932 6.575 8.881 C 6.684 8.836 6.908 8.833 7.106 8.83 C 7.532 8.823 8.062 8.815 8.438 8.439 C 8.815 8.061 8.822 7.532 8.83 7.106 C 8.833 6.908 8.836 6.683 8.881 6.574 C 8.932 6.452 9.086 6.29 9.236 6.134 C 9.526 5.833 9.886 5.457 9.886 4.943 C 9.886 4.43 9.526 4.054 9.236 3.752 Z" />
              </svg>
              <p className="text-xs" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#5d5b5b' }}>Verified review</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Patient Review 5 – Aaliyah S. ──────────────────────────────────────── */
function PatientReview5() {
  return (
    <div className="rounded-xl overflow-hidden border flex flex-col" style={{ borderColor: '#dad6d880' }}>
      <div className="h-28 overflow-hidden" style={{ borderBottom: '1px solid #dad6d880' }}>
        <img src="https://framerusercontent.com/images/NyfJywqOjT3Ln9QoRfWLERyaY44.gif?width=236&height=146" alt="Aaliyah S. of Bodysculpting UK" className="w-full h-full object-cover" />
      </div>
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div>
          <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: '#ffd9eb', color: '#d9347e', fontFamily: 'Hanken Grotesk, sans-serif', fontWeight: 600 }}>Memberships</span>
        </div>
        <p className="text-sm font-semibold" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#17151d' }}>"Voice notes from my practitioner made me feel like a VIP!"</p>
        <div className="flex items-center gap-2 mt-auto">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-100 flex-shrink-0">
            <img src="https://framerusercontent.com/images/0xBPXl3oIWesNE63HkjS4ORan3o.jpg?width=240&height=240" alt="Aaliyah S." className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-xs" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#5d5b5b' }}>Aaliyah S. of Bodysculpting UK</p>
            <div className="flex items-center gap-1">
              <svg width="8" height="8" viewBox="0 0 9.886 9.886" fill="#4aadf4">
                <path d="M 9.236 3.752 C 9.086 3.596 8.932 3.434 8.881 3.312 C 8.836 3.203 8.833 2.978 8.83 2.78 C 8.823 2.355 8.815 1.824 8.439 1.448 C 8.061 1.072 7.532 1.065 7.106 1.057 C 6.908 1.054 6.683 1.05 6.574 1.005 C 6.452 0.955 6.29 0.8 6.134 0.65 C 5.833 0.36 5.457 0 4.943 0 C 4.43 0 4.054 0.36 3.752 0.65 C 3.596 0.8 3.434 0.955 3.312 1.005 C 3.203 1.05 2.978 1.054 2.78 1.057 C 2.355 1.065 1.824 1.071 1.449 1.449 C 1.074 1.826 1.065 2.355 1.057 2.78 C 1.054 2.978 1.05 3.203 1.005 3.312 C 0.955 3.434 0.8 3.596 0.65 3.752 C 0.36 4.054 0 4.432 0 4.943 C 0 5.455 0.36 5.833 0.65 6.136 C 0.8 6.293 0.955 6.455 1.005 6.576 C 1.05 6.685 1.054 6.91 1.057 7.108 C 1.063 7.534 1.071 8.064 1.448 8.44 C 1.825 8.817 2.355 8.824 2.78 8.831 C 2.978 8.835 3.203 8.838 3.312 8.883 C 3.434 8.934 3.596 9.089 3.752 9.239 C 4.054 9.526 4.432 9.886 4.943 9.886 C 5.455 9.886 5.833 9.526 6.134 9.236 C 6.29 9.086 6.452 8.932 6.575 8.881 C 6.684 8.836 6.908 8.833 7.106 8.83 C 7.532 8.823 8.062 8.815 8.438 8.439 C 8.815 8.061 8.822 7.532 8.83 7.106 C 8.833 6.908 8.836 6.683 8.881 6.574 C 8.932 6.452 9.086 6.29 9.236 6.134 C 9.526 5.833 9.886 5.457 9.886 4.943 C 9.886 4.43 9.526 4.054 9.236 3.752 Z" />
              </svg>
              <p className="text-xs" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#5d5b5b' }}>Verified patient review</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Patient Review 6 – SLA Medical (super-easy-interface) ──────────────── */
function PatientReview6() {
  return (
    <div className="rounded-xl overflow-hidden border flex flex-col" style={{ borderColor: '#dad6d880' }}>
      <div className="h-28 overflow-hidden" style={{ borderBottom: '1px solid #dad6d880' }}>
        <img src="https://framerusercontent.com/images/It4x6rMF3DjK3hP3LBTpG7SA21k.svg?width=177&height=109" alt="SLA Medical, Manchester, UK" className="w-full h-full object-cover" />
      </div>
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div>
          <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: '#ffd9eb', color: '#d9347e', fontFamily: 'Hanken Grotesk, sans-serif', fontWeight: 600 }}>Memberships</span>
        </div>
        <p className="text-sm font-semibold" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#17151d' }}>"Super easy interface that makes membership management a breeze!"</p>
        <div className="flex items-center gap-2 mt-auto">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-100 flex-shrink-0">
            <img src="https://framerusercontent.com/images/0xBPXl3oIWesNE63HkjS4ORan3o.jpg?width=240&height=240" alt="SLA Medical" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-xs" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#5d5b5b' }}>SLA Medical, Manchester, UK</p>
            <div className="flex items-center gap-1">
              <svg width="8" height="8" viewBox="0 0 9.886 9.886" fill="#4aadf4">
                <path d="M 9.236 3.752 C 9.086 3.596 8.932 3.434 8.881 3.312 C 8.836 3.203 8.833 2.978 8.83 2.78 C 8.823 2.355 8.815 1.824 8.439 1.448 C 8.061 1.072 7.532 1.065 7.106 1.057 C 6.908 1.054 6.683 1.05 6.574 1.005 C 6.452 0.955 6.29 0.8 6.134 0.65 C 5.833 0.36 5.457 0 4.943 0 C 4.43 0 4.054 0.36 3.752 0.65 C 3.596 0.8 3.434 0.955 3.312 1.005 C 3.203 1.05 2.978 1.054 2.78 1.057 C 2.355 1.065 1.824 1.071 1.449 1.449 C 1.074 1.826 1.065 2.355 1.057 2.78 C 1.054 2.978 1.05 3.203 1.005 3.312 C 0.955 3.434 0.8 3.596 0.65 3.752 C 0.36 4.054 0 4.432 0 4.943 C 0 5.455 0.36 5.833 0.65 6.136 C 0.8 6.293 0.955 6.455 1.005 6.576 C 1.05 6.685 1.054 6.91 1.057 7.108 C 1.063 7.534 1.071 8.064 1.448 8.44 C 1.825 8.817 2.355 8.824 2.78 8.831 C 2.978 8.835 3.203 8.838 3.312 8.883 C 3.434 8.934 3.596 9.089 3.752 9.239 C 4.054 9.526 4.432 9.886 4.943 9.886 C 5.455 9.886 5.833 9.526 6.134 9.236 C 6.29 9.086 6.452 8.932 6.575 8.881 C 6.684 8.836 6.908 8.833 7.106 8.83 C 7.532 8.823 8.062 8.815 8.438 8.439 C 8.815 8.061 8.822 7.532 8.83 7.106 C 8.833 6.908 8.836 6.683 8.881 6.574 C 8.932 6.452 9.086 6.29 9.236 6.134 C 9.526 5.833 9.886 5.457 9.886 4.943 C 9.886 4.43 9.526 4.054 9.236 3.752 Z" />
              </svg>
              <p className="text-xs" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#5d5b5b' }}>Verified review</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   CONFIGURE APP SECTION
   – Interactive inputs (color + font) kept – they need state.
   – The two preview reward items are each their OWN component (PhoneRewardItem1/2)
   – The five bottom nav tabs are each their OWN component (PhoneNavTab1..5)
   ══════════════════════════════════════════════════════════════════════════ */
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

                {/* Rewards list – each item is its own component */}
                <div className="px-3 mt-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold" style={{ fontFamily: 'Gabarito, sans-serif', color: brandColor }}>Rewards</span>
                    <span className="text-xs" style={{ fontFamily: 'Gabarito, sans-serif', color: brandColor }}>See more &gt;</span>
                  </div>
                  <PhoneRewardItem1 />
                  <PhoneRewardItem2 />
                </div>

                {/* Bottom nav – each tab is its own component */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-around py-2 bg-white border-t border-gray-100">
                  <PhoneNavTab1 />
                  <PhoneNavTab2 />
                  <PhoneNavTab3 />
                  <PhoneNavTab4 brandColor={brandColor} />
                  <PhoneNavTab5 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);
}

/* ── Phone Reward Item 1 – Free 1-on-1 skin assessment ──────────────────── */
function PhoneRewardItem1() {
  return (
    <div className="flex items-center gap-2 mb-2 rounded-xl overflow-hidden border border-gray-100" style={{ height: 60 }}>
      <img src="https://framerusercontent.com/images/3TrYYsQEVMHXcbhFMQ3PCAmP42M.webp?width=429&height=306" alt="Free 1-on-1 skin assessment" className="w-16 h-full object-cover flex-shrink-0" />
      <div className="flex-1 py-1 pr-2">
        <p className="text-xs font-semibold" style={{ fontFamily: 'Gabarito, sans-serif' }}>Free 1-on-1 skin assessment</p>
        <p className="text-xs text-gray-400" style={{ fontFamily: 'Gabarito, sans-serif' }}>Can convert to $25 Skinology cash</p>
      </div>
    </div>
  );
}

/* ── Phone Reward Item 2 – 15% Off Microdermabrasion ────────────────────── */
function PhoneRewardItem2() {
  return (
    <div className="flex items-center gap-2 mb-2 rounded-xl overflow-hidden border border-gray-100" style={{ height: 60 }}>
      <img src="https://framerusercontent.com/images/LflDl8RMQtKq1YEKcioxkRxy3u4.webp?width=428&height=306" alt="15% Off Microdermabrasion" className="w-16 h-full object-cover flex-shrink-0" />
      <div className="flex-1 py-1 pr-2">
        <p className="text-xs font-semibold" style={{ fontFamily: 'Gabarito, sans-serif' }}>15% Off Microdermabrasion</p>
        <p className="text-xs text-gray-400" style={{ fontFamily: 'Gabarito, sans-serif' }}>Can convert to $25 Skinology cash</p>
      </div>
    </div>
  );
}

/* ── Phone Nav Tab 1 – Home ─────────────────────────────────────────────── */
function PhoneNavTab1() {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: '#8d94a3', opacity: 0.5 }} />
      <span className="text-xs" style={{ fontFamily: 'Gabarito, sans-serif', color: '#8d94a3', fontSize: 9 }}>Home</span>
    </div>
  );
}

/* ── Phone Nav Tab 2 – Shop ─────────────────────────────────────────────── */
function PhoneNavTab2() {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: '#8d94a3', opacity: 0.5 }} />
      <span className="text-xs" style={{ fontFamily: 'Gabarito, sans-serif', color: '#8d94a3', fontSize: 9 }}>Shop</span>
    </div>
  );
}

/* ── Phone Nav Tab 3 – Scan ─────────────────────────────────────────────── */
function PhoneNavTab3() {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: '#8d94a3', opacity: 0.5 }} />
      <span className="text-xs" style={{ fontFamily: 'Gabarito, sans-serif', color: '#8d94a3', fontSize: 9 }}>Scan</span>
    </div>
  );
}

/* ── Phone Nav Tab 4 – Rewards (ACTIVE – tinted by brand color) ─────────── */
function PhoneNavTab4({ brandColor }: { brandColor: string }) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: brandColor, opacity: 1 }} />
      <span className="text-xs" style={{ fontFamily: 'Gabarito, sans-serif', color: brandColor, fontSize: 9 }}>Rewards</span>
    </div>
  );
}

/* ── Phone Nav Tab 5 – Profile ──────────────────────────────────────────── */
function PhoneNavTab5() {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: '#8d94a3', opacity: 0.5 }} />
      <span className="text-xs" style={{ fontFamily: 'Gabarito, sans-serif', color: '#8d94a3', fontSize: 9 }}>Profile</span>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   FOOTER (single element – kept as is)
   ══════════════════════════════════════════════════════════════════════════ */
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

/* ══════════════════════════════════════════════════════════════════════════
   MOBILE CTA BAR (single element – kept as is)
   ══════════════════════════════════════════════════════════════════════════ */
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
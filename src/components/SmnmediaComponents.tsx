'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
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

// ─── HERO SECTION ─────────────────────────────────────────────────────────────
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
        {/* Feature tabs above phone */}
        <div className="hidden md:flex items-start justify-center gap-0 w-full max-w-3xl mb-0 relative z-10">
          <FeatureTab label="Automated Offers" icon="offers" active />
          <FeatureTab label="Patient financing" icon="financing" />
          <div className="w-[340px]" />{/* phone spacer */}
          <FeatureTab label="Rewards" icon="rewards" />
          <FeatureTab label="Memberships" icon="memberships" />
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

function FeatureTab({ label, active }: {label: string;icon: string;active?: boolean;}) {
  return (
    <div
      className={`flex flex-col items-center gap-2 px-4 py-6 cursor-pointer w-40 ${
      active ? 'opacity-100' : 'opacity-50 hover:opacity-75'} transition-opacity`
      }>

      <div
        className="w-6 h-6 rounded-full"
        style={{ backgroundColor: active ? '#d9347e' : '#6f6f6f' }} />

      <p className="text-xs text-center" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: active ? '#000' : '#5d5b5b' }}>{label}</p>
    </div>);

}

// ─── CASE STUDIES SECTION ─────────────────────────────────────────────────────
export function CaseStudiesSection() {
  const cases = [
  {
    title: "See how UK's 8-location Cultskin uses SMNMEDIA to keep its dominance over aesthetics market",
    img: 'https://framerusercontent.com/images/IePmQxqBwmWzJJGI20KOjB7Uvw4.webp?width=1283&height=711',
    logo: 'https://framerusercontent.com/images/1SMWONWvvsjdpjjZn4f9oBd8xoo.png?width=730&height=244',
    stats: [{ label: 'Locations', value: '+8' }, { label: 'Reduction in patient management software costs', value: '-27%' }],
    products: ['Memberships', 'Automated offers']
  },
  {
    title: 'See how SLA Medical used SMNMEDIA to increase average patient spend by 60%',
    img: 'https://framerusercontent.com/images/IePmQxqBwmWzJJGI20KOjB7Uvw4.webp?width=1283&height=711',
    logo: 'https://framerusercontent.com/images/D1KYr6d9JuRnXi9g07U5YqPq4.png?width=414&height=229',
    stats: [{ label: 'Jump in average patient spend', value: '+60%' }, { label: 'Additional ARR', value: '+£24K' }],
    products: ['Memberships', 'Rewards']
  },
  {
    title: 'How JM Medispa added +£40,000, +32 Google Reviews, and +29 Referrals in her first 45 Days using SMNMEDIA',
    img: 'https://framerusercontent.com/images/t7a8XEB9Lx726pktH6TT9ZkhSsI.jpg?width=1200&height=675',
    logo: 'https://framerusercontent.com/images/BgY9sw1sb9dD1A4C2ftZ7qHYic.webp?width=876&height=379',
    stats: [{ label: 'Added in first 45 days', value: '+£40K' }, { label: 'In-App Referrals in first 45 days', value: '+29' }],
    products: ['Memberships']
  },
  {
    title: 'Why Harvey Nichols clinic owner Dr. Zoya chose SMNMEDIA to exceed patient expectations',
    img: 'https://framerusercontent.com/images/ggqZxW5RaEzS3HzRC5S6O6Lv7sM.webp?width=1282&height=711',
    logo: 'https://framerusercontent.com/images/nReJkgaUdJPs6auYmyCSBpmxT8I.png?width=2048&height=1106',
    stats: [],
    products: []
  }];


  const [activeIdx, setActiveIdx] = useState(1);

  return (
    <section className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Stats panel */}
          <div className="w-full md:w-56 flex-shrink-0">
            <div className="border-l-2 pl-4 mb-4" style={{ borderColor: '#d9347e' }}>
              <h4 className="text-xl font-bold" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#0a2540' }}>{cases[activeIdx]?.stats[0]?.value || '+8'}</h4>
              <p className="text-sm" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#435266' }}>{cases[activeIdx]?.stats[0]?.label || 'Locations'}</p>
            </div>
            <div className="border-l-2 pl-4 mb-4" style={{ borderColor: '#d9347e' }}>
              <h4 className="text-xl font-bold" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#0a2540' }}>{cases[activeIdx]?.stats[1]?.value || '-27%'}</h4>
              <p className="text-sm" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#435266' }}>{cases[activeIdx]?.stats[1]?.label || 'Reduction in patient management software costs'}</p>
            </div>
            {cases[activeIdx]?.products?.length > 0 &&
            <div className="pl-4">
                <p className="text-sm font-semibold mb-2" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#0a2540' }}>Products used</p>
                {cases[activeIdx].products.map((p) =>
              <div key={p} className="flex items-center gap-2 mb-1">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#d9347e' }} />
                    <span className="text-sm" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#435266' }}>{p}</span>
                  </div>
              )}
              </div>
            }
          </div>

          {/* Case study cards */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cases.map((c, i) =>
              <div
                key={i}
                className="relative rounded-xl overflow-hidden cursor-pointer group"
                style={{ height: 200, boxShadow: '0 2px 12px rgba(0,0,0,0.15)' }}
                onClick={() => setActiveIdx(i)}>

                  <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
                  {/* Logo */}
                  <div className="absolute top-3 left-3">
                    <img src={c.logo} alt="clinic logo" className="h-8 object-contain opacity-90" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white text-xs" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Read story</span>
                      <svg width="8" height="13" viewBox="0 0 4 8" fill="none"><path d="M0.5 0.5L3.5 4L0.5 7.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Logo bar */}
            <div className="flex items-center justify-around mt-6 gap-4">
              {cases.map((c, i) =>
              <button key={i} onClick={() => setActiveIdx(i)} className="transition-opacity" style={{ opacity: i === activeIdx ? 1 : 0.35 }}>
                  <img src={c.logo} alt="logo" className="h-8 object-contain" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}
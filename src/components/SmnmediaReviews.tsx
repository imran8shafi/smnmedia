'use client';
import React, { useState, useEffect, useRef } from 'react';

// ─── TRUSTPILOT REVIEWS ─────────────────────────────────────────────────────────────
export function TrustpilotSection() {
  const reviews = [
  { title: 'Highly recommend', text: 'Both Joe and Thomas are extremely helpful and brilliant to work with. Their genuine care for their clients is evident in everything they do.', author: 'Jayde Mills', date: 'June 2', stars: 5 },
  { title: 'Fantastic app', text: 'Fantastic app to use to help grow my business! I would recommend to anyone looking to expand their clinic.', author: 'Kavita S', date: 'May 29', stars: 5 },
  { title: 'Easy and effective', text: 'Easy and effective! I Would recommend this app to anyone looking to help grow their business.', author: 'PS', date: 'May 29', stars: 5 },
  { title: 'Super helpful and easy', text: 'Super easy and quick to understand how to use the app!! Great app definitely recommend.', author: 'Amber Sattar', date: 'May 29', stars: 5 },
  { title: 'Great app', text: 'Great app! Joe and Thomas have been super helpful, always there to support and answer any questions.', author: 'Amna Sattar', date: 'May 8', stars: 5 },
  { title: 'Phenomenal app', text: 'Phenomenal app - has definitely allowed me to streamline a lot of my processes & game-change my business.', author: 'Jay Emmy E.', date: 'April 13', stars: 5 },
  { title: '41 members in 3 weeks', text: 'I own a Medspa in Florida and have worked with many agencies in the past that didn\'t deliver. This is different.', author: 'Charlie Belle', date: 'February 1', stars: 5 }];


  const [current, setCurrent] = useState(0);
  const visibleCount = 3;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(reviews.length - visibleCount, c + 1));

  const visible = reviews.slice(current, current + visibleCount);

  return (
    <section className="bg-white py-10">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <img src="https://cdn.trustpilot.net/brand-assets/4.1.0/logo-white.svg" alt="Trustpilot" className="h-6" style={{ filter: 'invert(1)' }} />
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) =>
              <svg key={s} width="20" height="20" viewBox="0 0 24 24" fill="#00b67a"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              )}
            </div>
            <span className="text-sm text-gray-600" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Rated <strong>4.2</strong> / 5 based on <strong>19 reviews</strong></span>
          </div>
          <div className="flex gap-2">
            <button onClick={prev} disabled={current === 0} className="w-8 h-8 rounded-full flex items-center justify-center transition-opacity" style={{ backgroundColor: current === 0 ? '#e0e0e0' : '#8d94a3' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button onClick={next} disabled={current >= reviews.length - visibleCount} className="w-8 h-8 rounded-full flex items-center justify-center transition-opacity" style={{ backgroundColor: current >= reviews.length - visibleCount ? '#e0e0e0' : '#8d94a3' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {visible.map((r, i) =>
          <div key={i} className="border border-gray-100 rounded-xl p-4 shadow-sm">
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((s) =>
              <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#00b67a"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              )}
              </div>
              <p className="font-semibold text-sm mb-1" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>{r.title}</p>
              <p className="text-xs text-gray-500 mb-3" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>{r.text}</p>
              <p className="text-xs text-gray-400" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Review by <strong>{r.author}</strong>, {r.date}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ─── TESTIMONIALS TICKER ─────────────────────────────────────────────────────────────
export function TestimonialsTicker() {
  const testimonials = [
  {
    text: 'We ran one Automated Offer which made us',
    highlight: '£9,5K worth of sales in 2 days.',
    name: 'Snowvia Nadir',
    clinic: 'Mi:Skin Clinic',
    video: 'https://framerusercontent.com/assets/dkv0Iexi8k6I09cbsDzn7Dd5w.mp4',
    poster: 'https://framerusercontent.com/images/N6MkxnK6KcC1x8Mi6UpuAjTkQ.png?width=611&height=577',
    avatar: 'https://framerusercontent.com/images/NmX6Zs7aMOyEnLFbwmDUfMeao.jpg?width=800&height=500'
  },
  {
    text: 'SMNMEDIA has been a game-changer.',
    highlight: 'Patients love it',
    name: 'Dr. Zoya',
    clinic: 'Secret Aesthetics',
    video: 'https://framerusercontent.com/assets/jRqMm99Vq5qu1KkjOCvJJ2fgsXM.mp4',
    poster: 'https://framerusercontent.com/images/G3UIxaP2SHpuc4YtrV1XrzqoO7E.webp?width=400&height=440',
    avatar: 'https://framerusercontent.com/images/f08jaOrhfDyBVNAmSVbNKY8f94.svg?width=810&height=810'
  },
  {
    text: 'SMNMEDIA gave me confidence to expand my team and',
    highlight: 'progress to a 2nd location!',
    name: 'Brogan Watson',
    clinic: 'Age Eternal',
    video: 'https://framerusercontent.com/assets/a88HktzWtif9JHESy0nEidl3Nsg.mp4',
    poster: 'https://framerusercontent.com/images/aBRNFcCv4lB3qxuZC7yKpmvibY.webp?width=400&height=440',
    avatar: 'https://framerusercontent.com/images/VyGECDXMr2qUlnuiCVYOXoT2dbM.svg?width=810&height=810'
  },
  {
    text: 'We saw a',
    highlight: '60% increase',
    textAfter: 'in average patient spend',
    name: 'Sarah Louise',
    clinic: 'SLA Medical',
    video: 'https://framerusercontent.com/assets/xGSl6gqCF5n65khCQejDMyUgzxU.mp4',
    poster: 'https://framerusercontent.com/images/GMKTVN7mStC4rtpCC7l3ak4CnFk.webp?width=400&height=440',
    avatar: 'https://framerusercontent.com/images/zLTTJ2Anwi7kFRtlQnuwHw2we8.svg?width=810&height=810'
  },
  {
    text: 'Having SMNMEDIA makes selling memberships a',
    highlight: 'whole lot easier.',
    name: 'Dr. Shaan',
    clinic: 'Aatma Aesthetics',
    video: 'https://framerusercontent.com/assets/7oLZKvW07b3p9fYIWBWCIldik8g.mp4',
    poster: 'https://framerusercontent.com/images/7LELJQYqPcQhRe7gtvZaQwr1Qo.png?width=400&height=440',
    avatar: 'https://framerusercontent.com/images/zA2PLtr62g8oQc7wvsyamsSYm8.svg?width=810&height=810'
  }];


  return (
    <section className="bg-white py-8 overflow-hidden">
      <div className="relative">
        <div className="flex gap-6 ticker-track" style={{ width: 'max-content' }}>
          {[...testimonials, ...testimonials].map((t, i) =>
          <TestimonialCard key={i} testimonial={t} />
          )}
        </div>
      </div>
    </section>);

}

interface Testimonial {
  text: string;
  highlight: string;
  textAfter?: string;
  name: string;
  clinic: string;
  video: string;
  poster: string;
  avatar: string;
}

function TestimonialCard({ testimonial }: {testimonial: Testimonial;}) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (




// ─── 3 STEPS SECTION ──────────────────────────────────────────────────────────────────────
export function ThreeStepsSection() {
  const steps = [
  {
    num: '1.',
    title: 'SMNMEDIA imports your brand info',
    desc: 'By scraping your website for logo, colours, services & pricing to create your app in record time.',
    img: 'https://framerusercontent.com/images/DO8OKFEwG4S82pSXJ1usIOtxaA.gif?width=708&height=438'
  },
  {
    num: '2.',
    title: 'Receive your app, 24h later',
    desc: "You'll have the ability to immediately download your app from the App & Google Play store on your phone!",
    img: 'https://framerusercontent.com/images/EgOjoZGUs19UqgskPIdrHZAjfkw.jpg?width=649&height=402'
  },
  {
    num: '3.',
    title: 'Start making passive sales!',
    desc: 'Introduce the app to your patients and start capturing treatment sales while you sleep.',
    img: 'https://framerusercontent.com/images/R6ys7b6LKdmTZzUZbGjtRWabtnU.gif?width=708&height=438'
  }];


  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        {/* Header */}
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

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s) =>
          <div key={s.num} className="flex flex-col gap-4">
              <div className="rounded-lg overflow-hidden" style={{ aspectRatio: '1.62' }}>
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#17151d' }}>{s.num} {s.title}</h3>
                <p className="text-sm" style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#435266' }}>{s.desc}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}
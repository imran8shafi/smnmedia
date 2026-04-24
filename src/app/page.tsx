import React from 'react';
import type { Metadata } from 'next';
import { Navbar, HeroSection, CaseStudiesSection } from '@/components/SmnmediaComponents';
import { TrustpilotSection, TestimonialsTicker, ThreeStepsSection } from '@/components/SmnmediaReviews';
import { PatientReviewsSection, ConfigureSection, Footer, MobileCtaBar } from '@/components/SmnmediaFooter';

export const metadata: Metadata = {
  title: "SMNMEDIA - Your Clinic's 24/7 Sales Engine",
  description: 'Increase Your Skin Clinic Revenue using a 6-in-1 WhiteLabel app with Push Notification Offers, Memberships, Patient Financing, Birthday Offers, Rewards and Cash Balance system.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main content */}
      <main>
        {/* Hero - Sell more treatments */}
        <HeroSection />

        {/* Case Studies with stats */}
        <CaseStudiesSection />

        {/* Trustpilot Reviews */}
        <TrustpilotSection />

        {/* Testimonials Ticker */}
        <TestimonialsTicker />

        {/* 3 Easy Steps */}
        <ThreeStepsSection />

        {/* Patient Reviews Slideshow */}
        <PatientReviewsSection />

        {/* Configure Your App */}
        <ConfigureSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile CTA bar */}
      <MobileCtaBar />
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import NewspaperHeader from "@/components/newspaper/newspaper-header";
import HeritageSkyline from "@/components/preloader/heritage-skyline";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen p-3 sm:p-6 md:p-8 bg-[#efe4cb] text-[#1c1917] font-serif selection:bg-[#b91c1c] selection:text-white relative overflow-x-hidden">
      {/* Full Newspaper Header & Navbar */}
        <NewspaperHeader
          tickerItems={[
            "PRESS WIRE: Open for Full-Time Software Engineering & AI Roles",
            "LOCATION: Mumbai, Maharashtra, India",
            "TELEGRAPH DESK: Direct inbox monitoring active",
          ]}
        />

        {/* Specific Contact Section Banner */}
        <div className="text-center border-y-4 border-[#1c1917] py-6 bg-[#efe4cb] my-4 space-y-1">
          <span className="font-mono text-xs font-bold text-[#b91c1c] uppercase tracking-widest block">
            ★ DIRECT DISPATCH & PRESS DESK ★
          </span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight">
            Press Room & Contact
          </h1>
          <p className="font-mono text-xs text-[#1c1917]/70 font-bold uppercase tracking-widest">
            TELEGRAPH FORM &bull; HIRING INQUIRIES &bull; MUMBAI HEADQUARTERS
          </p>
        </div>

        {/* Form and Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-6 border-b-2 border-[#1c1917] items-start">
          
          {/* Form Side (Col 1-7) */}
          <div className="md:col-span-7 space-y-6">
            <div className="border border-[#1c1917] p-6 bg-[#e4d4b2]/40 space-y-4">
              <h2 className="font-serif text-2xl font-black text-[#1c1917] border-b border-[#1c1917]/20 pb-2">
                Official Telegraph Form
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#efe4cb] border border-[#1c1917] p-6 text-center space-y-3"
                >
                  <div className="text-xl font-black text-[#b91c1c]">DISPATCH TRANSMITTED!</div>
                  <p className="text-xs text-[#1c1917]/80">
                    Your press message has been routed to Abhishek Jaiswar&apos;s direct inbox. You will receive a response shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="border border-[#1c1917] bg-[#1c1917] text-[#efe4cb] px-4 py-2 font-mono text-xs uppercase font-bold hover:bg-[#b91c1c] cursor-pointer transition-colors"
                  >
                    SEND ANOTHER DISPATCH
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-4 font-mono text-xs"
                >
                  <div>
                    <label className="block font-bold text-[#1c1917] uppercase mb-1">
                      SENDER / ORGANIZATION NAME:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme Corp / Jane Doe"
                      className="w-full bg-[#efe4cb] border border-[#1c1917] p-2.5 font-serif text-sm focus:outline-none focus:border-[#b91c1c]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#1c1917] uppercase mb-1">
                      RETURN EMAIL ADDRESS:
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@acme.com"
                      className="w-full bg-[#efe4cb] border border-[#1c1917] p-2.5 font-serif text-sm focus:outline-none focus:border-[#b91c1c]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#1c1917] uppercase mb-1">
                      DISPATCH SUBJECT / INQUIRY TYPE:
                    </label>
                    <select className="w-full bg-[#efe4cb] border border-[#1c1917] p-2.5 font-serif text-sm focus:outline-none focus:border-[#b91c1c]">
                      <option>Software Engineering Opportunity</option>
                      <option>Contract / Project Collaboration</option>
                      <option>Technical Consultation</option>
                      <option>General Press Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-[#1c1917] uppercase mb-1">
                      TELEGRAPH MESSAGE BODY:
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Write your dispatch details..."
                      className="w-full bg-[#efe4cb] border border-[#1c1917] p-2.5 font-serif text-sm focus:outline-none focus:border-[#b91c1c]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#b91c1c] hover:bg-[#991b1b] text-white font-mono text-xs py-3 font-bold uppercase tracking-wider transition-colors shadow cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <span>TRANSMIT PRESS DISPATCH</span>
                    <span>✉</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Details Side (Col 8-12) */}
          <div className="md:col-span-5 space-y-6 font-serif">
            <div className="border border-[#1c1917] p-6 bg-[#efe4cb] space-y-4">
              <h3 className="font-mono text-xs font-bold text-[#b91c1c] uppercase tracking-widest border-b border-[#1c1917]/20 pb-2">
                PRESS DESK & DIRECT CONTACT
              </h3>

              <div className="space-y-3 text-xs font-mono">
                <div>
                  <div className="font-bold text-[#1c1917] uppercase text-[10px] text-[#b91c1c]">FULL NAME</div>
                  <div className="font-bold text-sm text-[#1c1917]">Abhishek Jaiswar</div>
                </div>

                <div>
                  <div className="font-bold text-[#1c1917] uppercase text-[10px] text-[#b91c1c]">PRIMARY LOCATION</div>
                  <div className="font-bold text-sm text-[#1c1917]">Mumbai, Maharashtra, India</div>
                </div>

                <div>
                  <div className="font-bold text-[#1c1917] uppercase text-[10px] text-[#b91c1c]">COMMUNICATION CHANNELS</div>
                  <div className="space-y-1 text-xs pt-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold">EMAIL:</span>
                      <a href="mailto:abhishekjaiswar.dev@gmail.com" className="text-[#b91c1c] hover:underline font-bold">
                        abhishekjaiswar.dev@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold">LINKEDIN:</span>
                      <a href="https://linkedin.com/in/abhishek-jaiswar" target="_blank" rel="noreferrer" className="text-[#b91c1c] hover:underline font-bold">
                        linkedin.com/in/abhishek-jaiswar
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold">GITHUB:</span>
                      <a href="https://github.com/Abhishek-Jaiswar" target="_blank" rel="noreferrer" className="text-[#b91c1c] hover:underline font-bold">
                        github.com/Abhishek-Jaiswar
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-[#1c1917] p-3 text-center bg-[#e4d4b2]/40 space-y-2 pt-4">
                <div className="text-[10px] font-mono font-bold text-[#1c1917] uppercase tracking-widest">
                  MUMBAI SKYLINE GRAPHIC
                </div>
                <HeritageSkyline />
              </div>
            </div>
          </div>

        </div>

        {/* Footer Navigation */}
        <footer className="pt-6 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-[#1c1917]/30 pb-4">
            <Link href="/" className="text-[#b91c1c] font-bold hover:underline">
              ← PAGE ONE [FRONT PAGE]
            </Link>
            <Link href="/case-studies" className="text-[#b91c1c] font-bold hover:underline">
              INVESTIGATIONS & CASE FILES →
            </Link>
          </div>
          <div className="py-4 text-center text-[10px] text-[#1c1917]/60 uppercase tracking-widest">
            THE ABHISHEK TIMES &bull; PRESS ROOM SECTION
          </div>
        </footer>
    </div>
  );
}

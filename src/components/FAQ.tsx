"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is this a credit repair service?",
    a: "No. ScoreVera is software. You run your own dispute process using the right tools, letters, and timing. Not a service — a system.",
  },
  {
    q: "Do I need to install anything?",
    a: "No. ScoreVera runs entirely in your browser. Log in, upload your report, and follow the steps. Nothing to download.",
  },
  {
    q: "Will this guarantee a score increase?",
    a: "No. Nothing legitimate should promise that. ScoreVera gives you structure, correct letters, and tracking. Results depend on what is actually on your report and whether the disputes are valid.",
  },
  {
    q: "Why not just use free templates online?",
    a: "Templates without timing, sequencing, and tracking are exactly how people do this wrong. A letter is only one piece. The process — what you send, when, to whom, in what order — is everything.",
  },
  {
    q: "Is there a contract?",
    a: "No. Monthly billing. Cancel anytime. If you use it, it works. If you don't, cancel it.",
  },
];

const PlusIcon = () => (
  <svg className="faq-ic" viewBox="0 0 20 20" fill="none">
    <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section id="faq" className="section" style={{ background: "var(--surface)" }}>
      <div className="wrap">
        <div className="sh rv">
          <span className="eyebrow">FAQ</span>
          <h2 className="h-xl">Questions people ask before they start.</h2>
        </div>

        <div className="faq-wrap rv">
          {faqs.map((faq, i) => (
            <div className={`faq-item${openIndex === i ? " open" : ""}`} key={i}>
              <button
                className="faq-btn"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span className="faq-qt">{faq.q}</span>
                <PlusIcon />
              </button>
              <div className="faq-body">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

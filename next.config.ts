import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    domains: ["scorevera.com"],
  },
  async redirects() {
    return [
      // Dispute process
      { source: "/learn/how-to-dispute-credit-report", destination: "/blog/how-to-dispute-credit-report-error", permanent: true },
      { source: "/learn/dispute-letter-guide", destination: "/blog/debt-validation-letter-guide", permanent: true },
      { source: "/learn/fcra-611-explained", destination: "/blog/fcra-section-611-dispute-rights", permanent: true },
      { source: "/learn/dispute-medical-collections", destination: "/blog/how-to-dispute-medical-collections", permanent: true },
      { source: "/learn/remove-charge-off", destination: "/blog/how-to-dispute-charge-off-credit-report", permanent: true },
      { source: "/learn/goodwill-letter", destination: "/blog/goodwill-letter-late-payment", permanent: true },
      { source: "/learn/pay-for-delete", destination: "/blog", permanent: true },
      { source: "/learn/debt-validation-letter", destination: "/blog/debt-validation-letter-guide", permanent: true },
      { source: "/learn/dispute-hard-inquiries", destination: "/blog/how-to-dispute-hard-inquiries-credit-report", permanent: true },
      { source: "/learn/dispute-timeline", destination: "/blog/30-day-bureau-investigation-timeline", permanent: true },
      { source: "/learn/escalate-dispute", destination: "/blog/escalate-dispute-to-cfpb", permanent: true },
      { source: "/learn/dispute-all-three-bureaus", destination: "/blog", permanent: true },
      { source: "/learn/cfpb-complaint", destination: "/blog/escalate-dispute-to-cfpb", permanent: true },
      { source: "/learn/after-dispute", destination: "/blog/what-happens-after-credit-dispute-filed", permanent: true },
      { source: "/learn/round-2-disputes", destination: "/blog/method-of-verification-letter", permanent: true },
      { source: "/learn/fcra-609", destination: "/blog/fcra-section-609-letter-guide", permanent: true },
      { source: "/learn/fcra-611", destination: "/blog/fcra-section-611-dispute-rights", permanent: true },
      { source: "/learn/fcra-623", destination: "/blog/dispute-letter-to-furnisher-directly", permanent: true },
      { source: "/learn/method-of-verification", destination: "/blog/method-of-verification-letter", permanent: true },
      { source: "/learn/why-disputes-fail", destination: "/blog/why-credit-disputes-fail", permanent: true },
      { source: "/learn/dispute-bankruptcy", destination: "/blog/how-to-dispute-bankruptcy-credit-report", permanent: true },
      { source: "/learn/dispute-foreclosure", destination: "/blog/how-to-dispute-foreclosure-credit-report", permanent: true },
      { source: "/learn/dispute-repossession", destination: "/blog/how-to-dispute-repossession-credit-report", permanent: true },
      { source: "/learn/dispute-identity-theft", destination: "/blog/how-to-dispute-identity-theft-credit-report", permanent: true },
      { source: "/learn/30-day-rule", destination: "/blog/30-day-bureau-investigation-timeline", permanent: true },
      { source: "/learn/dispute-window", destination: "/blog/how-long-do-bureaus-have-to-respond-to-disputes", permanent: true },
      { source: "/learn/how-long-disputes-take", destination: "/blog/how-long-do-bureaus-have-to-respond-to-disputes", permanent: true },
      // FCRA & rights
      { source: "/learn/fcra-consumer-rights", destination: "/blog/fcra-rights-dispute-process", permanent: true },
      { source: "/learn/free-credit-report", destination: "/blog/how-to-get-free-credit-report", permanent: true },
      { source: "/learn/bureau-limits", destination: "/blog/negative-items-that-cannot-be-disputed", permanent: true },
      { source: "/learn/debt-statute-of-limitations", destination: "/blog/zombie-debt-credit-report", permanent: true },
      { source: "/learn/fdcpa-explained", destination: "/blog/debt-validation-letter-guide", permanent: true },
      { source: "/learn/credit-report-timeline", destination: "/blog/how-long-negative-items-stay-on-credit-report", permanent: true },
      { source: "/learn/inaccurate-information", destination: "/blog/fcra-rights-dispute-process", permanent: true },
      { source: "/learn/bankruptcy-credit-report", destination: "/blog/how-to-dispute-bankruptcy-credit-report", permanent: true },
      { source: "/learn/bureau-contact-info", destination: "/blog/equifax-experian-transunion-differences", permanent: true },
      { source: "/learn/regulatory-complaints", destination: "/blog/escalate-dispute-to-cfpb", permanent: true },
      // Credit score
      { source: "/learn/credit-score-calculation", destination: "/blog/how-credit-scores-are-calculated", permanent: true },
      { source: "/learn/good-credit-score", destination: "/blog/how-credit-scores-are-calculated", permanent: true },
      { source: "/learn/score-dropped", destination: "/blog/why-credit-score-dropped", permanent: true },
      { source: "/learn/build-credit", destination: "/blog/build-credit-from-scratch", permanent: true },
      { source: "/learn/credit-utilization", destination: "/blog/credit-utilization-guide", permanent: true },
      { source: "/learn/payment-history", destination: "/blog/how-credit-scores-are-calculated", permanent: true },
      { source: "/learn/hard-vs-soft-inquiries", destination: "/blog/hard-vs-soft-inquiries", permanent: true },
      { source: "/learn/secured-cards", destination: "/blog/build-credit-from-scratch", permanent: true },
      { source: "/learn/credit-mix", destination: "/blog/how-credit-scores-are-calculated", permanent: true },
      { source: "/learn/bureau-score-differences", destination: "/blog/equifax-experian-transunion-differences", permanent: true },
      { source: "/learn/raise-credit-score-fast", destination: "/blog/how-to-raise-credit-score-fast", permanent: true },
      { source: "/learn/what-lenders-check", destination: "/blog/how-credit-scores-are-calculated", permanent: true },
      // Catch-all: any remaining /learn/:slug → /blog/:slug
      { source: "/learn/:slug", destination: "/blog/:slug", permanent: true },
    ];
  },
};

export default nextConfig;

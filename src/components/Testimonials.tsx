const testimonials = [
  {
    name: "Darnell Washington",
    handle: "@darnell_w",
    role: "First-time homebuyer, Atlanta GA",
    stars: 5,
    before: 582,
    after: 701,
    time: "5 months",
    quote:
      "I was two weeks from closing and my lender told me I needed a 620 to get the rate I wanted. ScoreVera showed me exactly which two things to fix. I hit 701. Closed on my house. This product is incredible.",
    initials: "DW",
    color: "#c9a55a",
  },
  {
    name: "Priya Mehta",
    handle: "@priyamehta_nyc",
    role: "Freelance designer, Brooklyn NY",
    stars: 5,
    before: 634,
    after: 768,
    time: "8 months",
    quote:
      "I had no idea a single collection from 2019 was tanking my score by 80+ points. ScoreVera automated the dispute, it came off in 6 weeks, and my score went from 634 to 768. I qualified for a card with a $15k limit the next month.",
    initials: "PM",
    color: "#3b82f6",
  },
  {
    name: "Robert Kinsella",
    handle: "@rkinsella",
    role: "Small business owner, Chicago IL",
    stars: 5,
    before: 541,
    after: 660,
    time: "4 months",
    quote:
      "Tried Credit Karma, tried a credit repair company ($99/month). Neither gave me a clear plan. ScoreVera laid out 6 specific actions in order of impact. I followed them. 119-point jump in four months. Now I'm getting business loan offers.",
    initials: "RK",
    color: "#c9a55a",
  },
  {
    name: "Latoya Simmons",
    handle: "@latoya_builds",
    role: "Nurse, Houston TX",
    stars: 5,
    before: 498,
    after: 612,
    time: "6 months",
    quote:
      "After a divorce, my credit was a mess — 498. I thought it would take years to recover. ScoreVera identified 4 high-impact actions and my score hit 612 in six months. The weekly progress emails kept me motivated through every step.",
    initials: "LS",
    color: "#3b82f6",
  },
  {
    name: "Kevin Tran",
    handle: "@kevintran_dev",
    role: "Software engineer, San Jose CA",
    stars: 5,
    before: 690,
    after: 790,
    time: "7 months",
    quote:
      "My score was 'good' but I knew it could be better. ScoreVera showed me I was missing out on 30 points just from credit mix, and 20 more from average account age. Seven months later I qualified for a mortgage rate 0.4% lower than before. That's real money.",
    initials: "KT",
    color: "#c9a55a",
  },
  {
    name: "Aaliya Brooks",
    handle: "@aaliyab",
    role: "Graduate student, Philadelphia PA",
    stars: 5,
    before: 555,
    after: 672,
    time: "3 months",
    quote:
      "I'm in grad school living on a stipend. I couldn't afford the credit repair agencies. ScoreVera was actually affordable AND gave me more detail than those services ever could. 117-point increase in 3 months. My landlord was actually impressed.",
    initials: "AB",
    color: "#3b82f6",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="#c9a55a">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section-pad px-6 md:px-8" id="testimonials">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div
            className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#c9a55a" }}
          >
            Real Results
          </div>
          <h2
            className="text-4xl font-bold md:text-5xl"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            12,400 people have
            <br />
            <span style={{ color: "#c9a55a" }}>raised their score with us.</span>
          </h2>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="mb-5 break-inside-avoid rounded-2xl p-6"
              style={{
                backgroundColor: "#0e1117",
                border: "1px solid #1e2738",
              }}
            >
              {/* Stars */}
              <div className="mb-3">
                <StarRating count={t.stars} />
              </div>

              {/* Quote */}
              <p className="mb-5 text-sm leading-relaxed" style={{ color: "#d1d5db" }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Score badge */}
              <div
                className="mb-5 flex items-center gap-3 rounded-xl px-4 py-3"
                style={{
                  backgroundColor: "#151b25",
                  border: "1px solid #1e2738",
                }}
              >
                <div className="text-center">
                  <div
                    className="text-lg font-bold"
                    style={{
                      fontFamily: "var(--font-fraunces), Georgia, serif",
                      color: "#ef4444",
                    }}
                  >
                    {t.before}
                  </div>
                  <div className="text-[10px]" style={{ color: "#6b7280" }}>Before</div>
                </div>
                <svg className="w-4 h-4 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: "#6b7280" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="text-center">
                  <div
                    className="text-lg font-bold"
                    style={{
                      fontFamily: "var(--font-fraunces), Georgia, serif",
                      color: "#22c55e",
                    }}
                  >
                    {t.after}
                  </div>
                  <div className="text-[10px]" style={{ color: "#6b7280" }}>After</div>
                </div>
                <div className="ml-auto text-center">
                  <div
                    className="text-base font-bold"
                    style={{
                      fontFamily: "var(--font-fraunces), Georgia, serif",
                      color: t.color,
                    }}
                  >
                    +{t.after - t.before}
                  </div>
                  <div className="text-[10px]" style={{ color: "#6b7280" }}>{t.time}</div>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: `${t.color}30`, color: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs" style={{ color: "#6b7280" }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Aggregate */}
        <div className="mt-12 flex flex-col items-center gap-2 text-center">
          <div className="flex items-center gap-1 mb-1">
            {[1,2,3,4,5].map((i) => (
              <svg key={i} className="w-5 h-5" viewBox="0 0 20 20" fill="#c9a55a">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-base font-semibold text-white">
            4.9 out of 5 —{" "}
            <span style={{ color: "#9ca3af" }}>from 847 verified reviews</span>
          </p>
        </div>
      </div>
    </section>
  );
}

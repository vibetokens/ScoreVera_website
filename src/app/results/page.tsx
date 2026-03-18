import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Real Results | ScoreVera",
  description:
    "See real credit dispute outcomes from ScoreVera users — collections removed, late payments corrected, charge-offs resolved. Results vary based on your report and bureau response.",
};

const results = [
  {
    initials: "MM",
    name: "Marcus M.",
    location: "Atlanta, GA",
    before: 559,
    after: 621,
    delta: "+62 pts",
    timeframe: "34 days",
    rounds: 1,
    removed: "Collection account — $847 medical debt",
    strategy: "§ 611 accuracy dispute",
    quote:
      "I had a medical collection that wasn't even mine — wrong name variation, wrong date. ScoreVera helped me write the right letter and it came off in one round. Score jumped 62 points.",
  },
  {
    initials: "DW",
    name: "Danielle W.",
    location: "Houston, TX",
    before: 634,
    after: 723,
    delta: "+89 pts",
    timeframe: "45 days",
    rounds: 2,
    removed: "3 late payments — inaccurate reporting dates",
    strategy: "§ 611 dispute + goodwill adjustment",
    quote:
      "Three late payments that were marked wrong — they showed 60 days late but I was never past 30. After the second round of letters, all three were corrected. Went from 634 to 723.",
  },
  {
    initials: "CR",
    name: "Chris R.",
    location: "Chicago, IL",
    before: 581,
    after: 693,
    delta: "+112 pts",
    timeframe: "61 days, 2 rounds",
    rounds: 2,
    removed: "Charge-off — $2,100 credit card",
    strategy: "§ 609 method of verification + furnisher dispute",
    quote:
      "The charge-off was from an account I disputed years ago but never followed through on. ScoreVera walked me through exactly what to send and when. Gone after Round 2.",
  },
  {
    initials: "TN",
    name: "Tanya N.",
    location: "Phoenix, AZ",
    before: 602,
    after: 661,
    delta: "+59 pts",
    timeframe: "30 days",
    rounds: 1,
    removed: "Duplicate collection account — same debt reported twice",
    strategy: "§ 611 dispute — duplicate item",
    quote:
      "Same collection was showing up from two different agencies. That's not legal. One letter and one of them dropped off immediately. ScoreVera flagged it — I never would have noticed on my own.",
  },
  {
    initials: "JB",
    name: "Jordan B.",
    location: "Detroit, MI",
    before: 544,
    after: 617,
    delta: "+73 pts",
    timeframe: "52 days",
    rounds: 2,
    removed: "2 collections — past 7-year reporting window",
    strategy: "§ 605 outdated item dispute",
    quote:
      "I had old debts from 2016 still showing up. They were past the legal reporting window. ScoreVera caught it, generated the right letters, and both came off. Nobody told me this was an option.",
  },
  {
    initials: "LM",
    name: "Leslie M.",
    location: "Miami, FL",
    before: 618,
    after: 694,
    delta: "+76 pts",
    timeframe: "38 days",
    rounds: 1,
    removed: "Incorrect account balance — auto loan",
    strategy: "§ 611 accuracy dispute",
    quote:
      "My auto loan was showing a balance that was $4,000 higher than what I actually owed. One dispute letter and they updated it to the correct balance. My score moved almost 80 points.",
  },
  {
    initials: "RA",
    name: "Roberto A.",
    location: "Dallas, TX",
    before: 571,
    after: 648,
    delta: "+77 pts",
    timeframe: "45 days",
    rounds: 2,
    removed: "Collection removed after debt validation failure",
    strategy: "FDCPA debt validation letter",
    quote:
      "A collector couldn't validate the debt when I sent the letter ScoreVera generated. Once they failed to respond within 30 days, I sent the follow-up and the account was deleted. That's the law working exactly how it's supposed to.",
  },
  {
    initials: "KP",
    name: "Kayla P.",
    location: "Nashville, TN",
    before: 655,
    after: 731,
    delta: "+76 pts",
    timeframe: "41 days",
    rounds: 1,
    removed: "Late payment — goodwill removal after payoff",
    strategy: "Goodwill adjustment letter",
    quote:
      "I had paid off the account a year prior and had a solid payment history otherwise. The goodwill letter ScoreVera helped me write explained my situation clearly and the creditor removed the late payment as a courtesy. I didn't think this would work but it did.",
  },
];

export default function ResultsPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="page-hero" style={{ paddingTop: "100px" }}>
          <div className="wrap">
            <span className="eyebrow">Real Outcomes</span>
            <h1>What happens when people actually use their FCRA rights.</h1>
            <p>
              These are real dispute outcomes from ScoreVera users. Score
              changes, items removed, timeframes, and the strategies that
              worked. Results are not guaranteed — they depend on your credit
              report, the accuracy of disputed items, and how bureaus respond.
            </p>
          </div>
        </section>

        {/* RESULTS GRID */}
        <section className="page-section">
          <div className="wrap">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "14px",
              }}
            >
              {results.map((r) => (
                <div
                  key={r.name}
                  style={{
                    background: "var(--elevated)",
                    border: "1px solid var(--border)",
                    borderRadius: "13px",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0",
                    transition: "border-color .2s, transform .2s",
                  }}
                  className="result-card"
                >
                  <style>{`
                    .result-card:hover{border-color:rgba(201,165,90,.18)!important;transform:translateY(-2px)}
                  `}</style>

                  {/* Score change */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "16px",
                      padding: "12px 14px",
                      background: "rgba(201,165,90,0.06)",
                      border: "1px solid rgba(201,165,90,0.15)",
                      borderRadius: "8px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--f-m)",
                        fontSize: "1.25rem",
                        fontWeight: 500,
                        color: "var(--t4)",
                        letterSpacing: "-.03em",
                        lineHeight: 1,
                      }}
                    >
                      {r.before}
                    </span>
                    <span style={{ color: "var(--green)", fontSize: ".875rem" }}>→</span>
                    <span
                      style={{
                        fontFamily: "var(--f-m)",
                        fontSize: "1.25rem",
                        fontWeight: 500,
                        color: "var(--gold)",
                        letterSpacing: "-.03em",
                        lineHeight: 1,
                      }}
                    >
                      {r.after}
                    </span>
                    <span
                      style={{
                        marginLeft: "auto",
                        fontFamily: "var(--f-m)",
                        fontSize: ".6875rem",
                        color: "var(--green)",
                        background: "rgba(16,185,129,.10)",
                        border: "1px solid rgba(16,185,129,.2)",
                        padding: "2px 8px",
                        borderRadius: "4px",
                      }}
                    >
                      {r.delta}
                    </span>
                  </div>

                  {/* Meta */}
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      flexWrap: "wrap",
                      marginBottom: "14px",
                    }}
                  >
                    {[r.timeframe, `${r.rounds} round${r.rounds > 1 ? "s" : ""}`, r.strategy].map(
                      (tag) => (
                        <span
                          key={tag}
                          style={{
                            fontFamily: "var(--f-m)",
                            fontSize: ".5625rem",
                            letterSpacing: ".08em",
                            textTransform: "uppercase",
                            color: "var(--t4)",
                            background: "var(--raised)",
                            border: "1px solid var(--border)",
                            padding: "2px 7px",
                            borderRadius: "3px",
                          }}
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>

                  {/* What was removed */}
                  <div
                    style={{
                      fontSize: ".8125rem",
                      color: "var(--t3)",
                      marginBottom: "14px",
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: "var(--t4)", marginRight: "4px" }}>Removed:</span>
                    {r.removed}
                  </div>

                  {/* Quote */}
                  <blockquote
                    style={{
                      fontStyle: "italic",
                      fontSize: ".9375rem",
                      color: "var(--t2)",
                      lineHeight: 1.65,
                      marginBottom: "18px",
                      flex: 1,
                    }}
                  >
                    &ldquo;{r.quote}&rdquo;
                  </blockquote>

                  {/* Attribution */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      paddingTop: "14px",
                      borderTop: "1px solid var(--border)",
                    }}
                  >
                    <div className="tc-av">{r.initials}</div>
                    <div>
                      <div className="tc-name">{r.name}</div>
                      <div className="tc-role">{r.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section
          className="page-section"
          style={{ background: "var(--surface)" }}
        >
          <div className="wrap">
            <div
              style={{
                maxWidth: "640px",
                background: "var(--elevated)",
                border: "1px solid var(--border-md)",
                borderRadius: "12px",
                padding: "28px 32px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--f-m)",
                  fontSize: ".5625rem",
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "var(--t4)",
                  marginBottom: "14px",
                }}
              >
                Results Disclaimer
              </div>
              <p
                style={{
                  fontSize: ".875rem",
                  color: "var(--t3)",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                Individual results vary significantly based on the contents of
                your credit report, the accuracy of disputed items, bureau
                investigation outcomes, and your overall credit profile. Score
                changes shown reflect outcomes for specific individuals and are
                not typical or guaranteed. ScoreVera is a software tool — it
                does not submit disputes on your behalf, negotiate with
                creditors, or guarantee any specific outcome. No credit repair
                company or software can legally guarantee a specific credit
                score increase or item removal. The FCRA gives you the right to
                dispute inaccurate information; it does not require bureaus to
                remove accurate negative information.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="page-cta">
          <div className="wrap">
            <h2>Your credit report might have errors you don&apos;t know about.</h2>
            <p>
              One in five Americans has an error on their credit report. Upload
              yours and find out what ScoreVera sees.
            </p>
            <a
              href="https://app.scorevera.com/"
              className="btn btn-p"
              style={{ fontSize: "1rem", padding: "14px 32px" }}
            >
              Analyze My Report Free
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

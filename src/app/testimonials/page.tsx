import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Results & Testimonials | ScoreVera",
  description:
    "Real stories from people who ran their own credit dispute process using ScoreVera. Collections removed, charge-offs deleted, scores improved — in their own words.",
};

const testimonials = [
  {
    q: "I had a medical collection from 2019 I didn't even recognize. Disputed it through ScoreVera and it was gone in 34 days. My score jumped 61 points.",
    name: "Marcus T.",
    role: "Warehouse Supervisor, Atlanta",
    av: "M",
    stars: 5,
  },
  {
    q: "I always thought you needed a lawyer or a credit repair company to do this. You don't. I did it myself in a weekend and had letters out to all three bureaus by Monday.",
    name: "Danielle R.",
    role: "School Nurse, Houston",
    av: "D",
    stars: 5,
  },
  {
    q: "I'd been trying to fix my credit for two years on my own and barely moved the needle. One round with ScoreVera knocked off three accounts. The difference was doing it in the right order.",
    name: "Chris M.",
    role: "Auto Mechanic, Phoenix",
    av: "C",
    stars: 5,
  },
  {
    q: "The thing I kept getting wrong before was timing. I was following up too early, which reset the 30-day clock. ScoreVera told me exactly when to send each follow-up. That changed everything.",
    name: "Latoya W.",
    role: "Registered Nurse, Chicago",
    av: "L",
    stars: 5,
  },
  {
    q: "I was embarrassed to talk to anyone about my credit. This let me handle it privately, at 11pm after the kids went to bed. No judgment. Just the process.",
    name: "Eric B.",
    role: "Long-Haul Driver, Memphis",
    av: "E",
    stars: 5,
  },
  {
    q: "I tried three other apps before this one. They all gave me a score and a generic tip. ScoreVera told me exactly what to write and who to send it to. Night and day.",
    name: "Amanda K.",
    role: "Office Manager, Denver",
    av: "A",
    stars: 5,
  },
  {
    q: "Had a charge-off from a credit card that closed in 2021. Balance was wrong, the date was wrong. ScoreVera's letter hit both points. It came off Equifax in 28 days.",
    name: "Terrence J.",
    role: "HVAC Technician, Dallas",
    av: "T",
    stars: 5,
  },
  {
    q: "Three hard inquiries from a car dealer who pulled my report without permission. Used the unauthorized inquiry letter from ScoreVera. All three removed. Score went up 22 points just from that.",
    name: "Sofia R.",
    role: "Paralegal, Miami",
    av: "S",
    stars: 5,
  },
  {
    q: "My ex-husband had an account in both our names that went to collections. The balance was already paid but still showed as open. Disputed it and it was updated within 30 days. Finally.",
    name: "Brenda H.",
    role: "Dental Assistant, Sacramento",
    av: "B",
    stars: 5,
  },
  {
    q: "I used a credit repair company for six months and nothing happened. One month with ScoreVera and I had two collections removed. The letters are just better — more specific, more legal.",
    name: "Kevin O.",
    role: "Security Supervisor, Baltimore",
    av: "K",
    stars: 5,
  },
  {
    q: "Medical debt is the worst because you didn't choose to incur it. I had four accounts from one ER visit. ScoreVera helped me dispute all four at once with the right sequencing. Two came off, two were updated.",
    name: "Priya M.",
    role: "Teacher, Nashville",
    av: "P",
    stars: 5,
  },
  {
    q: "My score went from 612 to 698 over two rounds of disputes. I'm not going to say it was easy — you have to put in the work. But ScoreVera makes sure you're doing the right work in the right order.",
    name: "Darnell F.",
    role: "Small Business Owner, St. Louis",
    av: "D",
    stars: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero" style={{ paddingTop: "100px" }}>
          <div className="wrap">
            <span className="eyebrow">Real Results</span>
            <h1>People who ran the process.</h1>
            <p className="body-lg">
              These are not paid endorsements. These are people who used
              ScoreVera to run their own FCRA dispute process — correctly, in
              the right order, with the right letters.
            </p>
          </div>
        </section>

        <section
          className="page-section"
          style={{ background: "var(--surface)" }}
        >
          <div className="wrap">
            <div className="tgrid">
              {testimonials.map((t, i) => (
                <div className="tcard" key={i}>
                  <div className="tc-stars">
                    {"★".repeat(t.stars)}
                  </div>
                  <p className="tc-q">&ldquo;{t.q}&rdquo;</p>
                  <div className="tc-foot">
                    <div className="tc-av">{t.av}</div>
                    <div>
                      <div className="tc-name">{t.name}</div>
                      <div className="tc-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "56px",
                padding: "24px",
                background: "var(--elevated)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                maxWidth: "680px",
              }}
            >
              <p
                style={{
                  fontSize: ".8125rem",
                  color: "var(--t3)",
                  lineHeight: 1.7,
                }}
              >
                <strong style={{ color: "var(--t2)", fontWeight: 600 }}>
                  Results disclaimer:
                </strong>{" "}
                Individual results vary significantly. Credit score changes
                depend on the specific items on your report, the accuracy of
                those items, the bureau&apos;s investigation outcome, and other
                factors outside ScoreVera&apos;s control. ScoreVera is software
                — we give you the tools and process, not a guarantee of any
                particular outcome. No legitimate product can guarantee a
                specific score increase. Testimonials reflect individual
                experiences and are not representative of typical results.
              </p>
            </div>
          </div>
        </section>

        <section className="page-cta">
          <div className="wrap">
            <h2>See what is on your report for free.</h2>
            <p>
              Upload your credit report and identify every item that needs
              attention — before you spend a dollar.
            </p>
            <a
              href="https://app.scorevera.com/"
              className="btn btn-p"
              style={{ fontSize: "1rem", padding: "14px 32px" }}
            >
              Get Started Free
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

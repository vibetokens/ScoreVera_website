"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const typedRef = useRef<HTMLSpanElement>(null);
  const termBodyRef = useRef<HTMLDivElement>(null);

  // Canvas dot grid
  useEffect(() => {
    const _cv = canvasRef.current;
    if (!_cv) return;
    const c: HTMLCanvasElement = _cv;
    const _ctx = c.getContext("2d");
    if (!_ctx) return;
    const ctx: CanvasRenderingContext2D = _ctx;

    let W = 0, H = 0;
    interface Dot { x: number; y: number; b: number; s: number; p: number; }
    let dots: Dot[] = [];
    let raf = 0;
    const SP = 36;

    function resize() {
      W = c.width = c.offsetWidth;
      H = c.height = c.offsetHeight;
      dots = [];
      for (let r = 0; r <= Math.ceil(H / SP); r++)
        for (let col = 0; col <= Math.ceil(W / SP); col++)
          dots.push({ x: col * SP, y: r * SP, b: Math.random() * 0.22 + 0.04, s: Math.random() * 0.6 + 0.3, p: Math.random() * Math.PI * 2 });
    }

    let t = 0;
    function frame() {
      ctx.clearRect(0, 0, W, H);
      t += 0.008;
      dots.forEach((d) => {
        const op = d.b * (0.4 + 0.6 * Math.sin(t * d.s + d.p));
        ctx.beginPath();
        ctx.arc(d.x, d.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59,130,246,${op.toFixed(3)})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(frame);
    }

    resize();
    frame();

    let rt: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(rt);
      rt = setTimeout(() => { cancelAnimationFrame(raf); resize(); frame(); }, 120);
    };
    const handleVisibility = () => (document.hidden ? cancelAnimationFrame(raf) : frame());

    window.addEventListener("resize", handleResize, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  // Terminal typewriter
  useEffect(() => {
    const _typed = typedRef.current;
    const _body = termBodyRef.current;
    if (!_typed || !_body) return;
    const typedEl: HTMLElement = _typed;
    const body: HTMLDivElement = _body;

    let cancelled = false;
    const nodes: HTMLElement[] = [];
    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

    async function type(el: HTMLElement, text: string, d = 52) {
      for (let i = 0; i <= text.length; i++) {
        if (cancelled) return;
        el.textContent = text.slice(0, i);
        await sleep(d + (Math.random() * 22 - 11));
      }
    }

    async function addLine(html: string, delay = 260) {
      await sleep(delay);
      if (cancelled) return;
      const s = document.createElement("span");
      s.className = "tl";
      s.innerHTML = html;
      s.style.cssText = "opacity:0;transition:opacity .22s;display:block;";
      const cursor = body.querySelector("#sv-cursor");
      body.insertBefore(s, cursor ? cursor.closest(".tl") : null);
      nodes.push(s);
      requestAnimationFrame(() => { s.style.opacity = "1"; });
      await sleep(250);
    }

    function addScore() {
      const d = document.createElement("div");
      d.className = "score-row";
      d.innerHTML =
        '<span class="sc-n sc-before">559</span><span class="sc-arrow">→</span><span class="sc-n sc-after">716</span><span class="sc-delta">+157 pts · 30 days</span>';
      d.style.cssText = "opacity:0;transition:opacity .4s;";
      body.appendChild(d);
      nodes.push(d);
      requestAnimationFrame(() => { d.style.opacity = "1"; });
    }

    function clear() {
      nodes.forEach((n) => n.parentNode?.removeChild(n));
      nodes.length = 0;
    }

    const SEQ: Array<{ t: string; text?: string; html?: string; ms?: number }> = [
      { t: "cmd", text: "scorevera analyze --report credit.pdf" },
      { t: "out", html: '<span class="to"><span class="ts">✓</span> Report parsed — 23 accounts</span>' },
      { t: "out", html: '<span class="to"><span class="tg">→</span> 7 items flagged</span>' },
      { t: "out", html: '<span class="to"><span class="tc-terminal">⊳</span> Building dispute sequence...</span>' },
      { t: "gap", ms: 500 },
      { t: "cmd", text: "scorevera generate --bureau equifax --type collection" },
      { t: "out", html: '<span class="to"><span class="ts">✓</span> FCRA § 611 letter generated</span>' },
      { t: "out", html: '<span class="to"><span style="color:var(--blue-lo)">→</span> Investigation timer: Day 1</span>' },
      { t: "gap", ms: 400 },
      { t: "score" },
      { t: "gap", ms: 2200 },
      { t: "clear" },
    ];

    async function run(): Promise<void> {
      await sleep(700);
      let tgt: HTMLElement = typedEl;
      for (const s of SEQ) {
        if (cancelled) return;
        if (s.t === "cmd" && s.text) {
          await type(tgt, s.text);
          if (cancelled) return;
          const done = document.createElement("span");
          done.className = "tl";
          done.style.display = "block";
          done.innerHTML = `<span class="tp">$ </span><span class="tc-terminal">${tgt.textContent}</span>`;
          const cursor = body.querySelector("#sv-cursor");
          body.insertBefore(done, cursor ? cursor.closest(".tl") : null);
          nodes.push(done);
          tgt.textContent = "";
          await sleep(200);
        } else if (s.t === "out" && s.html) {
          await addLine(s.html);
        } else if (s.t === "gap" && s.ms) {
          await sleep(s.ms);
        } else if (s.t === "score") {
          addScore();
          await sleep(200);
        } else if (s.t === "clear") {
          await sleep(600);
          clear();
          tgt = typedEl;
          await sleep(300);
        }
      }
      if (!cancelled) run();
    }

    run();
    return () => { cancelled = true; };
  }, []);

  return (
    <section id="hero">
      <canvas id="hero-canvas" ref={canvasRef} aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="wrap">
        <div className="hero-inner">
          <div>
            <div className="hero-badge">
              <span className="badge-dot" />
              FCRA § 611 Automation
            </div>
            <h1 className="h-hero hero-h1 rv">
              Stop guessing<br />what to do with<br />
              <em className="proof-i">your credit.</em>
            </h1>
            <p className="body-lg hero-sub rv d1">
              Know what to send. Know when to send it. Know what happens next.
              ScoreVera turns a confusing credit report into a structured, trackable process.
            </p>
            <div className="hero-acts btn-stack rv d2">
              <a href="https://app.scorevera.com/" className="btn btn-p">
                Upload Your Report{" "}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 1.5L12.5 7L7 12.5M1.5 7h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#how" className="btn btn-g">See How It Works</a>
            </div>
            <div className="hero-trust rv d3">
              <span className="trust-dot" />
              <span>No install</span>
              <span style={{ color: "var(--t4)" }}>·</span>
              <span>No contract</span>
              <span style={{ color: "var(--t4)" }}>·</span>
              <span>Runs in your browser</span>
            </div>
          </div>

          <div className="hero-right rv d2">
            <div className="terminal">
              <div className="term-bar" aria-hidden="true">
                <span className="tdot tdot-r" />
                <span className="tdot tdot-y" />
                <span className="tdot tdot-g" />
                <span className="term-title">scorevera — dispute_engine</span>
              </div>
              <div className="term-body" ref={termBodyRef}>
                <span className="tl">
                  <span className="tp">$ </span>
                  <span ref={typedRef} className="tc-terminal" />
                  <span className="cursor" id="sv-cursor" aria-hidden="true" />
                </span>
              </div>
            </div>

            <div className="stats-strip">
              <div className="stat-cell">
                <span className="stat-n"><span className="g">559→716</span></span>
                <span className="stat-l">Founder Proof</span>
              </div>
              <div className="stat-cell">
                <span className="stat-n">30</span>
                <span className="stat-l">Day Window</span>
              </div>
              <div className="stat-cell">
                <span className="stat-n">+157</span>
                <span className="stat-l">Pts · 1 Round</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const REPO = "/Users/luishenrich-bandis/VSCode/personal/luishenrich-com";
const BRAND = path.join(REPO, "public/blog/bo-relaunch/brand");
const TMP = process.env.HERO_TMP || "/tmp";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const b64 = (p) => fs.readFileSync(p).toString("base64");
const mascot = `data:image/png;base64,${b64(path.join(BRAND, "mascot.png"))}`;
const logo = `data:image/png;base64,${b64(path.join(BRAND, "logo-gold.png"))}`;

// Card chrome copied from the June relaunch thumbnail: cream field, Bo tile,
// gold wordmark, Fraunces regular headline, inline gold marker on the payoff line.
const page = ({ headline, highlight, tail, chips }) => `<!doctype html>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 1920px; height: 1080px; }
  body {
    background: #F7F4E3;
    display: flex; align-items: center; gap: 88px;
    padding: 0 72px 0 272px;
    font-family: "Nunito", system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  .tile {
    flex: 0 0 408px; width: 408px; height: 408px;
    background: #FDF1DB; border-radius: 72px;
    display: flex; align-items: center; justify-content: center;
  }
  .tile img { width: 360px; height: 360px; }
  .col { flex: 1 1 auto; min-width: 0; }
  .wordmark { height: 70px; margin-bottom: 44px; }
  h1 {
    font-family: "Fraunces", Georgia, serif;
    font-weight: 400; font-size: 104px; line-height: 1.16;
    color: #251F1A; letter-spacing: -0.01em;
  }
  .payoff { margin-top: 18px; font-size: 0; }
  .payoff mark {
    display: inline-block;
    font-family: "Fraunces", Georgia, serif;
    font-weight: 400; font-style: italic; font-size: 104px; line-height: 1.24;
    color: #251F1A; background: rgba(255, 188, 20, 0.62);
    border-radius: 12px; padding: 4px 22px 10px;
  }
  .tail {
    font-family: "Fraunces", Georgia, serif;
    font-style: italic; font-size: 44px; line-height: 1.4;
    color: rgba(37, 31, 26, 0.62); margin-top: 32px;
  }
  .chips { display: flex; gap: 24px; margin-top: 40px; }
  .chips span {
    background: rgba(29, 75, 58, 0.14); color: #1D4B3A;
    font-size: 38px; font-weight: 600;
    padding: 22px 34px; border-radius: 999px; line-height: 1;
  }
  .site {
    position: fixed; right: 72px; bottom: 56px;
    font-size: 30px; color: rgba(37, 31, 26, 0.42);
  }
</style>
<div class="tile"><img src="${mascot}" alt=""></div>
<div class="col">
  <img class="wordmark" src="${logo}" alt="StudyPDF">
  <h1>${headline}</h1>
  <div class="payoff"><mark>${highlight}</mark></div>
  ${tail ? `<div class="tail">${tail}</div>` : ""}
  ${chips ? `<div class="chips">${chips.map((c) => `<span>${c}</span>`).join("")}</div>` : ""}
</div>
<div class="site">luishenrich.com</div>
`;

const targets = [
  [
    "did-the-bet-work",
    {
      headline: "Did the bet work?",
      highlight: "Mostly, yes.",
      tail: "The curve doubled. The metric I promised did not move.",
    },
  ],
  [
    "100k-users-and-the-mobile-app",
    {
      headline: "100,000 registered.",
      highlight: "11,799 active.",
      tail: "And the app just launched.",
    },
  ],
];

for (const [slug, spec] of targets) {
  const html = path.join(TMP, `hero-${slug}.html`);
  fs.writeFileSync(html, page(spec));
  const dir = path.join(REPO, "public/blog", slug);
  fs.mkdirSync(dir, { recursive: true });
  const out = path.join(dir, "hero.png");
  execFileSync(CHROME, [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--force-device-scale-factor=1",
    "--window-size=1920,1080",
    `--screenshot=${out}`,
    `file://${html}`,
  ], { stdio: "pipe" });
  console.log("wrote", out);
}

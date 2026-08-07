import fs from "node:fs";
import path from "node:path";

const REPO = "/Users/luishenrich-bandis/VSCode/personal/luishenrich-com";

const CREAM = "#F7F4E3";
const INK = "#251F1A";
const GOLD = "#FFBC14";
const GREEN = "#1D4B3A";
const SERIF = "'Fraunces', Georgia, serif";
const SANS = "'Nunito', system-ui, sans-serif";

const open = (title, sub) => `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" font-family="${SANS}">
  <rect x="0" y="0" width="800" height="500" rx="24" fill="${CREAM}"/>

  <text x="48" y="52" font-family="${SERIF}" font-size="30" fill="${INK}">${title}</text>
  <text x="48" y="76" font-size="15" fill="${INK}" fill-opacity="0.55">${sub}</text>
`;
// Footnotes wrap by hand: at 12.5px roughly 105 characters fit across the card,
// and a single overlong line silently runs off the right edge.
const foot = (note) => {
  const lines = Array.isArray(note) ? note : [note];
  const first = 478 - (lines.length - 1) * 17;
  return `
${lines.map((l, i) => `  <text x="48" y="${first + i * 17}" font-size="12.5" fill="${INK}" fill-opacity="0.5">${l}</text>`).join("\n")}
</svg>
`;
};

/* ---------------------------------------------------------------- Chart 1
   Post A: signup to first artifact, weekly cohorts. The step lands in the
   week of Jun 29, so pre-step bars are held back in opacity and the four
   post-step weeks carry full gold. Every bar is directly labelled, which is
   also the contrast relief gold-on-cream needs. */
function activation() {
  const data = [
    ["Jun 1", 30.72, false], ["8", 30.97, false], ["15", 25.88, false], ["22", 32.01, false],
    ["29", 44.47, true], ["Jul 6", 46.15, true], ["13", 48.84, true], ["20", 44.94, true],
    ["27", 50.0, true],
  ];
  const BASE = 410, MAXV = 55, MAXH = 300, X0 = 74, SLOT = 77;
  let s = open(
    "Signup to first artifact: 31% to 50%",
    "Share of each weekly signup cohort creating an artifact within 7 days · Jun to Jul 2026",
  );
  s += `\n  <line x1="70" y1="${BASE}" x2="770" y2="${BASE}" stroke="${INK}" stroke-opacity="0.15" stroke-width="1"/>\n`;
  // step marker between the Jun 22 and Jun 29 cohorts
  const stepX = X0 + SLOT * 4 - 9;
  s += `  <line x1="${stepX}" y1="104" x2="${stepX}" y2="${BASE}" stroke="${GREEN}" stroke-width="1.5" stroke-dasharray="4 4" stroke-opacity="0.6"/>
  <text x="${stepX + 10}" y="118" font-size="13.5" fill="${GREEN}" font-weight="600">the step, week of Jun 29</text>\n`;
  for (const [label, v, after] of data) {
    const i = data.findIndex((d) => d[0] === label);
    const h = (v / MAXV) * MAXH;
    const x = X0 + SLOT * i;
    const w = 58;
    s += `  <rect x="${x}" y="${(BASE - h).toFixed(1)}" width="${w}" height="${h.toFixed(1)}" rx="7" fill="${GOLD}" fill-opacity="${after ? 1 : 0.45}"/>
  <text x="${x + w / 2}" y="${(BASE - h - 10).toFixed(1)}" text-anchor="middle" font-size="13.5" fill="${INK}" fill-opacity="0.8">${v.toFixed(1)}%</text>
  <text x="${x + w / 2}" y="432" text-anchor="middle" font-size="12.5" fill="${INK}" fill-opacity="0.6">${label}</text>\n`;
  }
  return s + foot(
    "Cohorts of 804 to 1,918 signups. Signup volume falls over the same period, so a mix shift is not ruled out.",
  );
}

/* ---------------------------------------------------------------- Chart 2
   Post A: the creator gap. Two bars, one measure, direct labels. */
function creatorGap() {
  const BASE = 400, MAXV = 40, MAXH = 268;
  let s = open(
    "Week-one return: 32.2% against 7.4%",
    "Signups Jun 15 to Jul 31 2026, split by whether they made one study artifact",
  );
  s += `\n  <line x1="70" y1="${BASE}" x2="770" y2="${BASE}" stroke="${INK}" stroke-opacity="0.15" stroke-width="1"/>\n`;
  const bars = [
    ["Made an artifact", 32.2, "n = 4,101", 1],
    ["Made none", 7.4, "n = 6,077", 0.42],
  ];
  bars.forEach(([label, v, n, op], i) => {
    const h = (v / MAXV) * MAXH;
    const x = 150 + i * 320;
    const w = 200;
    s += `  <rect x="${x}" y="${(BASE - h).toFixed(1)}" width="${w}" height="${h.toFixed(1)}" rx="10" fill="${GOLD}" fill-opacity="${op}"/>
  <text x="${x + w / 2}" y="${(BASE - h - 16).toFixed(1)}" text-anchor="middle" font-family="${SERIF}" font-size="30" fill="${INK}">${v}%</text>
  <text x="${x + w / 2}" y="426" text-anchor="middle" font-size="15" fill="${INK}" fill-opacity="0.75">${label}</text>
  <text x="${x + w / 2}" y="446" text-anchor="middle" font-size="12.5" fill="${INK}" fill-opacity="0.5">${n}</text>\n`;
  });
  return s + foot([
    "A return is a day with client-side app activity, days 2 to 8 after signup. The same definition is applied to both bars.",
    "This is a correlation. The one randomised test that could separate cause from selection was too small to read.",
  ]);
}

/* ---------------------------------------------------------------- Chart 3
   Post B: MAU, the rise from the last post and the three months down. */
function mau() {
  const data = [
    ["Dec '25", 2237, false], ["Jan", 5402, false], ["Feb", 6697, false], ["Mar", 6659, false],
    ["Apr", 11800, false], ["May", 14718, false], ["Jun", 13111, true], ["Jul '26", 12466, true],
  ];
  const BASE = 410, MAXV = 16000, MAXH = 300, X0 = 78, SLOT = 87;
  let s = open(
    "Monthly active users, and three months down",
    "Unique app visitors per month · Dec 2025 to Jul 2026",
  );
  s += `\n  <line x1="70" y1="${BASE}" x2="770" y2="${BASE}" stroke="${INK}" stroke-opacity="0.15" stroke-width="1"/>\n`;
  data.forEach(([label, v, down], i) => {
    const h = (v / MAXV) * MAXH;
    const x = X0 + SLOT * i;
    const w = 64;
    s += `  <rect x="${x}" y="${(BASE - h).toFixed(1)}" width="${w}" height="${h.toFixed(1)}" rx="7" fill="${down ? GREEN : GOLD}" fill-opacity="${down ? 0.55 : 0.85}"/>
  <text x="${x + w / 2}" y="${(BASE - h - 10).toFixed(1)}" text-anchor="middle" font-size="13" fill="${INK}" fill-opacity="0.8">${v.toLocaleString("en-US")}</text>
  <text x="${x + w / 2}" y="432" text-anchor="middle" font-size="12.5" fill="${INK}" fill-opacity="0.6">${label}</text>\n`;
  });
  const peakX = X0 + SLOT * 5 + 32;
  s += `  <text x="${peakX + 46}" y="86" font-size="13.5" fill="${GREEN}" font-weight="600">peak, then down</text>
  <line x1="${peakX}" y1="94" x2="${peakX + 132}" y2="94" stroke="${GREEN}" stroke-width="1" stroke-opacity="0.45"/>\n`;
  return s + foot(
    "July is a complete month. The rolling 30 days to Aug 6 is 11,799, so the decline continues.",
  );
}

/* ---------------------------------------------------------------- Chart 4
   Post A: the retention curve, before and after the rewrite. Size-weighted
   means of whole weekly signup cohorts, same calendar-week definition on both
   lines. The "after" line stops at week 3 because weeks 4 and beyond are not
   observable yet for those cohorts, and drawing them would invent data. */
function retentionCurves() {
  // Before: cohorts May 10 to May 30 2026, all pre-cutover, n = 5,717
  const before = [5.6, 2.1, 1.0, 0.6, 0.5];
  // After: cohorts Jun 28 to Jul 11 2026, n = 3,283, complete through week 3
  const after = [9.1, 3.9, 2.0];

  const X0 = 110, XSTEP = 152, BASE = 400, MAXV = 10, MAXH = 296;
  const px = (i) => X0 + i * XSTEP;
  const py = (v) => BASE - (v / MAXV) * MAXH;

  let s = open(
    "The retention curve, before and after",
    "Share of a signup cohort returning in each following week · same definition on both lines",
  );

  s += `\n  <g stroke="${INK}" stroke-opacity="0.10" stroke-width="1">
    <line x1="86" y1="${py(2.5)}" x2="770" y2="${py(2.5)}"/>
    <line x1="86" y1="${py(5)}" x2="770" y2="${py(5)}"/>
    <line x1="86" y1="${py(7.5)}" x2="770" y2="${py(7.5)}"/>
    <line x1="86" y1="${BASE}" x2="770" y2="${BASE}"/>
  </g>
  <g font-size="12" fill="${INK}" fill-opacity="0.45" text-anchor="end">
    <text x="76" y="${py(2.5) + 4}">2.5%</text>
    <text x="76" y="${py(5) + 4}">5%</text>
    <text x="76" y="${py(7.5) + 4}">7.5%</text>
  </g>\n`;

  const line = (vals, color, width, dash) =>
    `  <path fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"${dash ? ` stroke-dasharray="${dash}"` : ""} d="${vals.map((v, i) => `${i ? "L" : "M"} ${px(i)},${py(v).toFixed(1)}`).join(" ")}"/>\n`;

  s += line(before, GREEN, 2.5, "6 5");
  s += line(after, GOLD, 3.5);

  const dots = (vals, color, labelAbove) =>
    vals.map((v, i) => `  <circle cx="${px(i)}" cy="${py(v).toFixed(1)}" r="6" fill="${color}" stroke="${CREAM}" stroke-width="2"/>
  <text x="${px(i)}" y="${(py(v) + (labelAbove ? -18 : 28)).toFixed(1)}" text-anchor="middle" font-size="14" fill="${INK}" fill-opacity="0.85">${v.toFixed(1)}%</text>\n`).join("");

  s += dots(after, GOLD, true);
  s += dots(before, GREEN, false);

  // Legend sits in the empty top-right quadrant so nothing collides with the
  // plotted points or the axis labels.
  s += `  <g transform="translate(452,110)">
    <line x1="0" y1="-5" x2="26" y2="-5" stroke="${GOLD}" stroke-width="3.5" stroke-linecap="round"/>
    <circle cx="13" cy="-5" r="5.5" fill="${GOLD}" stroke="${CREAM}" stroke-width="2"/>
    <text x="40" y="0" font-size="15" fill="${INK}" font-weight="600">After the rewrite</text>
    <text x="40" y="20" font-size="12.5" fill="${INK}" fill-opacity="0.55">cohorts Jun 28 to Jul 11 \u00b7 n = 3,283</text>
    <line x1="0" y1="47" x2="26" y2="47" stroke="${GREEN}" stroke-width="2.5" stroke-dasharray="6 5" stroke-linecap="round"/>
    <circle cx="13" cy="47" r="5.5" fill="${GREEN}" stroke="${CREAM}" stroke-width="2"/>
    <text x="40" y="52" font-size="15" fill="${GREEN}" font-weight="600">Before the rewrite</text>
    <text x="40" y="72" font-size="12.5" fill="${GREEN}" fill-opacity="0.7">cohorts May 10 to May 30 \u00b7 n = 5,717</text>
  </g>\n`;

  s += `  <g font-size="13" fill="${INK}" fill-opacity="0.6" text-anchor="middle">
${["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"].map((l, i) => `    <text x="${px(i)}" y="428">${l}</text>`).join("\n")}
  </g>\n`;

  return s + foot([
    "Roughly double at every week we can observe. Weeks 4 and 5 have not happened yet for the later cohorts.",
    "Cohort sizes fall over this period, so a shift in who signs up is not ruled out.",
  ]);
}

/* ---------------------------------------------------------------- Chart 5
   Post A: week-one return by weekly cohort, with the June 1 cutover marked.
   Only cohorts with a complete week-one window are plotted. */
function week1Trend() {
  const data = [
    ["May 10", 6.0, false], ["May 17", 5.5, false], ["May 24", 5.3, false],
    ["May 31", 6.3, true], ["Jun 7", 7.8, true], ["Jun 14", 6.5, true],
    ["Jun 21", 7.4, true], ["Jun 28", 9.8, true], ["Jul 5", 8.2, true],
    ["Jul 12", 10.8, true], ["Jul 19", 10.0, true],
  ];
  const X0 = 92, SLOT = 62, BASE = 400, MAXV = 12, MAXH = 292;
  const px = (i) => X0 + i * SLOT;
  const py = (v) => BASE - (v / MAXV) * MAXH;

  let s = open(
    "Week-one return, cohort by cohort",
    "Each weekly signup cohort, share returning the following week · May to Jul 2026",
  );

  s += `\n  <line x1="80" y1="${BASE}" x2="772" y2="${BASE}" stroke="${INK}" stroke-opacity="0.15" stroke-width="1"/>\n`;

  const cut = (px(2) + px(3)) / 2;
  s += `  <line x1="${cut}" y1="104" x2="${cut}" y2="${BASE}" stroke="${GREEN}" stroke-width="1.5" stroke-dasharray="4 4" stroke-opacity="0.6"/>
  <text x="${cut + 10}" y="120" font-size="13.5" fill="${GREEN}" font-weight="600">the rewrite went live, June 1</text>\n`;

  s += `  <path fill="none" stroke="${GOLD}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="${data.map(([, v], i) => `${i ? "L" : "M"} ${px(i)},${py(v).toFixed(1)}`).join(" ")}"/>\n`;

  data.forEach(([label, v, post], i) => {
    s += `  <circle cx="${px(i)}" cy="${py(v).toFixed(1)}" r="5.5" fill="${post ? GOLD : CREAM}" stroke="${post ? CREAM : GOLD}" stroke-width="2.5"/>
  <text x="${px(i)}" y="${(py(v) - 16).toFixed(1)}" text-anchor="middle" font-size="12.5" fill="${INK}" fill-opacity="0.8">${v.toFixed(1)}</text>
  <text x="${px(i)}" y="426" text-anchor="middle" font-size="11.5" fill="${INK}" fill-opacity="0.55">${label}</text>\n`;
  });

  return s + foot([
    "Cohorts of 1,263 to 2,197 signups. Hollow points are cohorts that signed up before the rewrite shipped.",
    "The last complete cohort is the week of July 19. Later weeks exist but their window is not finished.",
  ]);
}

const out = [
  ["did-the-bet-work/chart-activation.svg", activation()],
  ["did-the-bet-work/chart-creator-gap.svg", creatorGap()],
  ["did-the-bet-work/chart-retention-curves.svg", retentionCurves()],
  ["did-the-bet-work/chart-week1-trend.svg", week1Trend()],
  ["100k-users-and-the-mobile-app/chart-mau.svg", mau()],
];

for (const [rel, svg] of out) {
  const p = path.join(REPO, "public/blog", rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, svg);
  console.log("wrote", p);
}

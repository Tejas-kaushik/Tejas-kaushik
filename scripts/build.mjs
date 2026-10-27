// Draws the profile's cards in the portfolio's look: a near-black circuit board, mint signal,
// copper pads. Static art (header, footer, project chips) is always redrawn; the activity scope and
// language mix need GITHUB_TOKEN and are refreshed daily by .github/workflows/cards.yml.
// node scripts/build.mjs
import { mkdir, writeFile } from 'node:fs/promises';

const LOGIN = 'Tejas-kaushik';
const OUT = new URL('../assets/', import.meta.url);

const C = {
  bg: '#050607', panel: '#0b100f', panel2: '#121a18', ink: '#e9f1ec', muted: '#8f9c96',
  mint: '#a1ffcb', copper: '#d9a654', line: 'rgba(161,255,203,0.16)', faint: 'rgba(161,255,203,0.07)',
};
const SANS = "'Space Grotesk','Segoe UI',Helvetica,Arial,sans-serif";
const MONO = "'JetBrains Mono',Consolas,'SFMono-Regular',Menlo,monospace";
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const defs = `<defs>
  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="${C.faint}"/></pattern>
</defs>`;

// a signal pulse that runs along a trace forever
const pulse = (id, dur, begin = 0, color = C.mint) =>
  `<circle r="3.2" fill="${color}" filter="url(#glow)"><animateMotion dur="${dur}s" begin="${begin}s" repeatCount="indefinite" rotate="auto"><mpath href="#${id}"/></animateMotion></circle>`;

// ---------- header: the board, the chip, traces with pulses ----------
function header() {
  const W = 1200, H = 320;
  const traces = [
    'M 0 70 H 520 L 560 110 H 760',
    'M 0 250 H 380 L 420 210 H 760',
    'M 1200 60 H 1080 L 1040 100 H 960',
    'M 1200 270 H 1100 L 1060 230 H 960',
    'M 860 0 V 70',
    'M 860 320 V 250',
  ];
  const pins = [];
  for (let i = 0; i < 8; i++) {
    const y = 104 + i * 15;
    pins.push(`<rect x="752" y="${y}" width="10" height="5" fill="${C.copper}"/><rect x="958" y="${y}" width="10" height="5" fill="${C.copper}"/>`);
  }
  for (let i = 0; i < 9; i++) {
    const x = 788 + i * 17;
    pins.push(`<rect x="${x}" y="62" width="5" height="10" fill="${C.copper}"/><rect x="${x}" y="248" width="5" height="10" fill="${C.copper}"/>`);
  }
  const scope = Array.from({ length: 120 }, (_, i) => {
    const x = 40 + i * 3.2;
    const y = 292 - Math.exp(-((i - 60) ** 2) / 50) * 26 + Math.sin(i / 3) * 2;
    return `${i ? 'L' : 'M'} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(' ');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Tejas Kaushik, electronics and software engineer">
${defs}
<rect width="${W}" height="${H}" rx="18" fill="${C.bg}"/>
<rect width="${W}" height="${H}" rx="18" fill="url(#dots)"/>
<rect x="1" y="1" width="${W - 2}" height="${H - 2}" rx="17" fill="none" stroke="${C.line}"/>
${traces.map((d, i) => `<path id="t${i}" d="${d}" fill="none" stroke="${C.line}" stroke-width="2"/>`).join('\n')}
${traces.map((_, i) => pulse(`t${i}`, 3.2 + (i % 3) * 0.9, i * 0.45, i % 2 ? C.copper : C.mint)).join('\n')}
<g fill="${C.copper}"><circle cx="520" cy="70" r="4"/><circle cx="380" cy="250" r="4"/><circle cx="1080" cy="60" r="4"/><circle cx="1100" cy="270" r="4"/></g>
${pins.join('')}
<rect x="762" y="72" width="196" height="176" rx="10" fill="${C.panel2}" stroke="${C.line}"/>
<circle cx="780" cy="90" r="4" fill="${C.muted}" opacity="0.5"/>
<text x="860" y="150" text-anchor="middle" font-family="${MONO}" font-size="30" font-weight="700" fill="${C.mint}" filter="url(#glow)">TK-26</text>
<text x="860" y="178" text-anchor="middle" font-family="${MONO}" font-size="12" fill="${C.muted}">PCB → FIRMWARE → SERVER</text>
<text x="860" y="200" text-anchor="middle" font-family="${MONO}" font-size="11" fill="${C.copper}">GLASGOW · UK</text>
<text x="56" y="138" font-family="${SANS}" font-size="64" font-weight="700" fill="${C.ink}" letter-spacing="-1.5">Tejas Kaushik</text>
<text x="58" y="176" font-family="${MONO}" font-size="17" fill="${C.mint}">electronics &amp; software engineer<tspan fill="${C.mint}"><animate attributeName="opacity" values="1;0;1" dur="1.1s" repeatCount="indefinite"/>_</tspan></text>
<text x="58" y="206" font-family="${MONO}" font-size="13" fill="${C.muted}">BEng ESE · University of Glasgow · open to Summer 2027 placements</text>
<path d="${scope}" fill="none" stroke="${C.mint}" stroke-width="1.6" opacity="0.8" filter="url(#glow)" stroke-dasharray="420" stroke-dashoffset="420"><animate attributeName="stroke-dashoffset" values="420;0;0;-420" keyTimes="0;0.45;0.6;1" dur="5s" repeatCount="indefinite"/></path>
</svg>`;
}

// ---------- footer ----------
function footer() {
  const W = 1200, H = 120;
  const t = ['M 0 60 H 470', 'M 1200 60 H 730'];
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="End of file">
${defs}
<rect width="${W}" height="${H}" rx="16" fill="${C.bg}"/>
<rect x="1" y="1" width="${W - 2}" height="${H - 2}" rx="15" fill="none" stroke="${C.line}"/>
${t.map((d, i) => `<path id="f${i}" d="${d}" fill="none" stroke="${C.line}" stroke-width="2"/>`).join('')}
${pulse('f0', 2.6)}${pulse('f1', 2.6, 1.3, C.copper)}
<circle cx="470" cy="60" r="4" fill="${C.copper}"/><circle cx="730" cy="60" r="4" fill="${C.copper}"/>
<text x="600" y="56" text-anchor="middle" font-family="${MONO}" font-size="18" font-weight="700" fill="${C.mint}" filter="url(#glow)">EOF</text>
<text x="600" y="80" text-anchor="middle" font-family="${MONO}" font-size="12" fill="${C.muted}">tejas-kaushik.github.io</text>
</svg>`;
}

// ---------- project chips ----------
const PROJECTS = [
  { file: 'zero-hour', ref: 'U1', name: 'Zero Hour', kind: 'Multiplayer cyber-security game', metric: '2nd', unit: 'place · StrathHack26', stack: 'NODE.JS · SSE · 0 DEPS', gold: true },
  { file: 'clinicdrift', ref: 'U2', name: 'ClinicDrift', kind: 'Catches failing medical AI early', metric: '8/8', unit: 'failures caught · OxHack 26', stack: 'PYTHON · PYTORCH · THREE.JS' },
  { file: 'duck-run', ref: 'U3', name: 'Duck Run', kind: 'Two-button 3D party racer', metric: '155', unit: 'tests · GUTS 2026', stack: 'TYPESCRIPT · THREE.JS · SUPABASE' },
  { file: 'mini-redis', ref: 'U4', name: 'mini-redis', kind: 'Redis-compatible server in C', metric: '−40%', unit: 'instructions / request', stack: 'C17 · LINUX · EPOLL' },
  { file: 'esp32', ref: 'U5', name: 'ESP32 line follower', kind: 'Dual-core real-time robot', metric: '200 Hz', unit: 'PID loop under Wi-Fi load', stack: 'C++ · FREERTOS · ESP32' },
  { file: 'friday', ref: 'U6', name: 'F.R.I.D.A.Y.', kind: 'Fully local voice assistant', metric: '< 1 s', unit: 'to the first word back', stack: 'PYTHON · WHISPER · MCP' },
  { file: 'cbt', ref: 'U7', name: 'Content Book by Tee', kind: 'Studio site + enquiry desk', metric: 'LIVE', unit: 'official-cbt.vercel.app', stack: 'NODE 22 · EXPRESS · SQLITE' },
  { file: 'morning-rush', ref: 'U8', name: 'Morning Rush', kind: 'Café site built for a pitch', metric: '7am', unit: 'live open-now sign', stack: 'HTML · CSS · JS' },
];

function chip(p) {
  const W = 440, H = 210;
  const edge = p.gold ? C.copper : C.line;
  const pins = [];
  for (let i = 0; i < 6; i++) {
    const y = 42 + i * 25;
    pins.push(`<rect x="0" y="${y}" width="9" height="6" rx="1" fill="${C.copper}" opacity="0.85"/><rect x="${W - 9}" y="${y}" width="9" height="6" rx="1" fill="${C.copper}" opacity="0.85"/>`);
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${esc(`${p.name}: ${p.kind}. ${p.metric} ${p.unit}`)}">
${defs}
${pins.join('')}
<rect x="9" y="1" width="${W - 18}" height="${H - 2}" rx="12" fill="${C.panel}" stroke="${edge}" stroke-width="${p.gold ? 1.6 : 1}"/>
<rect x="9" y="1" width="${W - 18}" height="${H - 2}" rx="12" fill="url(#dots)"/>
<circle cx="30" cy="22" r="3.5" fill="${C.muted}" opacity="0.5"/>
<text x="42" y="26" font-family="${MONO}" font-size="12" fill="${p.gold ? C.copper : C.mint}">${esc(p.ref)} · ${esc(p.file.toUpperCase())}</text>
<circle cx="${W - 30}" cy="22" r="4" fill="${p.gold ? C.copper : C.mint}" filter="url(#glow)"><animate attributeName="opacity" values="1;0.25;1" dur="${(1.6 + p.ref.charCodeAt(1) % 5 * 0.3).toFixed(1)}s" repeatCount="indefinite"/></circle>
<text x="28" y="70" font-family="${SANS}" font-size="27" font-weight="700" fill="${C.ink}" letter-spacing="-0.5">${esc(p.name)}</text>
<text x="28" y="94" font-family="${SANS}" font-size="14" fill="${C.muted}">${esc(p.kind)}</text>
<text x="28" y="152" font-family="${MONO}" font-size="40" font-weight="700" fill="${p.gold ? C.copper : C.mint}" filter="url(#glow)">${esc(p.metric)}</text>
<text x="28" y="176" font-family="${MONO}" font-size="12" fill="${C.muted}">${esc(p.unit)}</text>
<text x="${W - 28}" y="${H - 18}" text-anchor="end" font-family="${MONO}" font-size="11" fill="${C.copper}">${esc(p.stack)}</text>
</svg>`;
}

// ---------- live data ----------
async function fetchData(token) {
  const query = `query($login:String!){ user(login:$login){
    repositories(ownerAffiliations:OWNER, isFork:false, privacy:PUBLIC, first:100){ totalCount nodes{ stargazerCount
      languages(first:10, orderBy:{field:SIZE, direction:DESC}){ edges{ size node{ name } } } } }
    contributionsCollection{ contributionCalendar{ totalContributions weeks{ contributionDays{ date contributionCount } } } } } }`;
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: { Authorization: `bearer ${token}`, 'Content-Type': 'application/json', 'User-Agent': 'profile-cards' },
    body: JSON.stringify({ query, variables: { login: LOGIN } }),
  });
  const json = await res.json();
  if (!json.data) throw new Error(JSON.stringify(json.errors || json));
  return json.data.user;
}

function streaks(days) {
  const today = new Date().toISOString().slice(0, 10);
  const list = days.filter((d) => d.date <= today);
  let longest = 0, run = 0;
  for (const d of list) { run = d.contributionCount ? run + 1 : 0; longest = Math.max(longest, run); }
  let current = 0;
  for (let i = list.length - 1; i >= 0; i--) {
    if (list[i].contributionCount) current++;
    else if (i === list.length - 1) continue; // today may not have a commit yet
    else break;
  }
  return { current, longest };
}

// contributions per week, drawn as a trace on an oscilloscope screen
function activity(user) {
  const W = 900, H = 300;
  const cal = user.contributionsCollection.contributionCalendar;
  const weeks = cal.weeks.map((w) => w.contributionDays.reduce((s, d) => s + d.contributionCount, 0));
  const days = cal.weeks.flatMap((w) => w.contributionDays);
  const { current, longest } = streaks(days);
  const stars = user.repositories.nodes.reduce((s, r) => s + r.stargazerCount, 0);
  const sx = 36, sy = 54, sw = 600, sh = 210;
  const max = Math.max(4, ...weeks);
  const step = sw / (weeks.length - 1);
  const pts = weeks.map((v, i) => [sx + i * step, sy + sh - 12 - (v / max) * (sh - 34)]);
  const d = pts.map(([x, y], i) => `${i ? 'L' : 'M'} ${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');
  const len = Math.round(sw * 2.4);
  const grid = [];
  for (let i = 1; i < 10; i++) grid.push(`<line x1="${sx + (sw / 10) * i}" y1="${sy}" x2="${sx + (sw / 10) * i}" y2="${sy + sh}" stroke="${C.faint}"/>`);
  for (let i = 1; i < 6; i++) grid.push(`<line x1="${sx}" y1="${sy + (sh / 6) * i}" x2="${sx + sw}" y2="${sy + (sh / 6) * i}" stroke="${C.faint}"/>`);
  const peak = weeks.indexOf(Math.max(...weeks));
  const read = [
    ['TOTAL', cal.totalContributions, 'contributions, last year'],
    ['STREAK', `${current}d`, 'current'],
    ['LONGEST', `${longest}d`, 'streak'],
    ['PEAK', Math.max(...weeks), 'in one week'],
    ['REPOS', user.repositories.totalCount, `public · ★ ${stars}`],
  ];
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${esc(`${cal.totalContributions} contributions in the last year, current streak ${current} days, longest ${longest} days`)}">
${defs}
<rect width="${W}" height="${H}" rx="16" fill="${C.bg}"/>
<rect x="1" y="1" width="${W - 2}" height="${H - 2}" rx="15" fill="none" stroke="${C.line}"/>
<text x="${sx}" y="36" font-family="${MONO}" font-size="12" fill="${C.mint}">CH1 · CONTRIBUTIONS / WEEK · LAST 52 WEEKS</text>
<text x="${sx + sw}" y="36" text-anchor="end" font-family="${MONO}" font-size="12" fill="${C.muted}">AUTO · RUN<tspan fill="${C.mint}"><animate attributeName="opacity" values="1;0.2;1" dur="1s" repeatCount="indefinite"/> ●</tspan></text>
<rect x="${sx}" y="${sy}" width="${sw}" height="${sh}" rx="6" fill="${C.panel}" stroke="${C.line}"/>
${grid.join('')}
<path d="${d}" fill="none" stroke="${C.mint}" stroke-width="2.2" stroke-linejoin="round" filter="url(#glow)" stroke-dasharray="${len}" stroke-dashoffset="${len}"><animate attributeName="stroke-dashoffset" from="${len}" to="0" dur="2.6s" fill="freeze"/></path>
<circle cx="${pts[peak][0]}" cy="${pts[peak][1]}" r="5" fill="none" stroke="${C.copper}" stroke-width="1.5"/>
<line x1="${sx}" y1="${sy + sh + 14}" x2="${sx + sw}" y2="${sy + sh + 14}" stroke="${C.line}"/>
<text x="${sx}" y="${sy + sh + 30}" font-family="${MONO}" font-size="11" fill="${C.muted}">−52 wk</text>
<text x="${sx + sw}" y="${sy + sh + 30}" text-anchor="end" font-family="${MONO}" font-size="11" fill="${C.muted}">now</text>
${read.map(([k, v, note], i) => {
    const y = sy + 6 + i * 42;
    return `<text x="680" y="${y + 12}" font-family="${MONO}" font-size="11" fill="${C.muted}">${k}</text>
<text x="680" y="${y + 34}" font-family="${MONO}" font-size="24" font-weight="700" fill="${i === 0 ? C.mint : C.ink}">${esc(v)}</text>
<text x="${W - 30}" y="${y + 34}" text-anchor="end" font-family="${MONO}" font-size="10" fill="${C.copper}">${esc(note)}</text>`;
  }).join('\n')}
</svg>`;
}

// language mix as a colour-banded bar, in board colours
function languages(user) {
  const W = 900, H = 150;
  const bytes = {};
  for (const r of user.repositories.nodes) for (const e of r.languages.edges) bytes[e.node.name] = (bytes[e.node.name] || 0) + e.size;
  const total = Object.values(bytes).reduce((a, b) => a + b, 0) || 1;
  const top = Object.entries(bytes).sort((a, b) => b[1] - a[1]).slice(0, 6);
  const shades = ['#a1ffcb', '#d9a654', '#6fd3a5', '#b8865a', '#4e9f80', '#8f9c96'];
  let x = 36;
  const barW = W - 72;
  const shown = top.reduce((s, [, v]) => s + v, 0);
  const bars = top.map(([, v], i) => {
    const w = (v / shown) * barW;
    const r = `<rect x="${x.toFixed(1)}" y="54" width="${Math.max(1, w - 3).toFixed(1)}" height="16" rx="3" fill="${shades[i]}"/>`;
    x += w;
    return r;
  }).join('');
  const labels = top.map(([name, v], i) => {
    const lx = 36 + (i % 3) * 280, ly = 102 + Math.floor(i / 3) * 26;
    return `<rect x="${lx}" y="${ly - 10}" width="10" height="10" rx="2" fill="${shades[i]}"/><text x="${lx + 18}" y="${ly}" font-family="${MONO}" font-size="13" fill="${C.ink}">${esc(name)} <tspan fill="${C.muted}">${((v / total) * 100).toFixed(1)}%</tspan></text>`;
  }).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${esc('Languages: ' + top.map(([n]) => n).join(', '))}">
${defs}
<rect width="${W}" height="${H}" rx="16" fill="${C.bg}"/>
<rect x="1" y="1" width="${W - 2}" height="${H - 2}" rx="15" fill="none" stroke="${C.line}"/>
<text x="36" y="36" font-family="${MONO}" font-size="12" fill="${C.mint}">BOM · LANGUAGES BY CODE SIZE · PUBLIC REPOS</text>
${bars}
${labels}
</svg>`;
}

await mkdir(new URL('cards/', OUT), { recursive: true });
await writeFile(new URL('header.svg', OUT), header());
await writeFile(new URL('footer.svg', OUT), footer());
for (const p of PROJECTS) await writeFile(new URL(`cards/${p.file}.svg`, OUT), chip(p));
console.log('drew header, footer and', PROJECTS.length, 'chips');

const token = process.env.GITHUB_TOKEN;
if (token) {
  const user = await fetchData(token);
  await writeFile(new URL('activity.svg', OUT), activity(user));
  await writeFile(new URL('languages.svg', OUT), languages(user));
  console.log('drew activity and languages:', user.contributionsCollection.contributionCalendar.totalContributions, 'contributions');
} else {
  console.log('no GITHUB_TOKEN: kept the existing activity and languages cards');
}

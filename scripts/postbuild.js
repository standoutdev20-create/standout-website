// scripts/postbuild.js
//
// next.config.js sets `output: 'standalone'`, which makes `next build`
// emit a self-contained server at .next/standalone/server.js with only
// the node_modules it actually needs traced in. That trace deliberately
// excludes `public/` and `.next/static/` (and dotfiles like `.env`), so
// they have to be copied over by hand — this script does that, and runs
// automatically after every `next build` via the "postbuild" npm hook.
//
// Run the result with: node .next/standalone/server.js
// (respects PORT / HOSTNAME env vars, defaults to 0.0.0.0:3000)
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const standaloneDir = path.join(root, '.next', 'standalone');

if (!fs.existsSync(standaloneDir)) {
  console.log('[postbuild] No .next/standalone found — is "output: standalone" set in next.config.js? Skipping.');
  process.exit(0);
}

function copy(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.cpSync(src, dest, { recursive: true });
  console.log(`[postbuild] Copied ${path.relative(root, src)} -> ${path.relative(root, dest)}`);
}

copy(path.join(root, 'public'), path.join(standaloneDir, 'public'));
copy(path.join(root, '.next', 'static'), path.join(standaloneDir, '.next', 'static'));

// Convenience for local/staging runs only: carry the local .env into the
// standalone folder so `node .next/standalone/server.js` behaves the same
// as `next dev` / `next start` without extra setup. server.js does
// `process.chdir(__dirname)` before Next loads its env config, so .env
// has to live next to server.js, not at the project root, to be picked up.
// In a real deployment, prefer injecting env vars via the hosting
// platform/secret manager instead of shipping this file.
copy(path.join(root, '.env'), path.join(standaloneDir, '.env'));

console.log('[postbuild] Standalone build ready — run: node .next/standalone/server.js');

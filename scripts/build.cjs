const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const templateHtml = path.join(rootDir, 'index.template.html');
const indexHtml = path.join(rootDir, 'index.html');
const fourOhFourHtml = path.join(rootDir, '404.html');
const distDir = path.join(rootDir, 'dist');
const distIndex = path.join(distDir, 'index.html');
const distAssets = path.join(distDir, 'assets');
const rootAssets = path.join(rootDir, 'assets');

console.log('[1/4] Preparing source index.html from template...');
fs.copyFileSync(templateHtml, indexHtml);

console.log('[2/4] Executing Vite build...');
execSync('npx vite build', { stdio: 'inherit', cwd: rootDir });

console.log('[3/4] Syncing production build artifacts to root for GitHub Pages...');
if (!fs.existsSync(distIndex)) {
  throw new Error('dist/index.html was not generated!');
}

// Copy built index.html to root index.html and 404.html for SPA routing
fs.copyFileSync(distIndex, indexHtml);
fs.copyFileSync(distIndex, fourOhFourHtml);

// Copy dist/assets to root assets
if (fs.existsSync(distAssets)) {
  fs.mkdirSync(rootAssets, { recursive: true });
  fs.cpSync(distAssets, rootAssets, { recursive: true });
}

// Ensure .nojekyll exists
fs.writeFileSync(path.join(rootDir, '.nojekyll'), '', 'utf-8');

console.log('[4/4] Build & deployment sync complete! Ready for GitHub Pages.');

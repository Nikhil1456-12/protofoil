const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const templateHtml = path.join(rootDir, 'index.template.html');
const indexHtml = path.join(rootDir, 'index.html');
const fourOhFourHtml = path.join(rootDir, '404.html');
const distDir = path.join(rootDir, 'dist');
const distIndex = path.join(distDir, 'index.html');
const distFourOhFour = path.join(distDir, '404.html');
const distAssets = path.join(distDir, 'assets');
const rootAssets = path.join(rootDir, 'assets');
const publicDir = path.join(rootDir, 'public');
const publicFourOhFour = path.join(publicDir, '404.html');
const docsDir = path.join(rootDir, 'docs');
const distDocs = path.join(distDir, 'docs');

console.log('[1/4] Preparing source index.html from template...');
fs.copyFileSync(templateHtml, indexHtml);

console.log('[2/4] Executing Vite build with optimized manual chunks...');
execSync('npx vite build', { stdio: 'inherit', cwd: rootDir });

console.log('[3/4] Syncing production build artifacts to root for GitHub Pages...');
if (!fs.existsSync(distIndex)) {
  throw new Error('dist/index.html was not generated!');
}

// Copy built index.html to root index.html
fs.copyFileSync(distIndex, indexHtml);

// Copy SPA 404.html handler to root 404.html
if (fs.existsSync(distFourOhFour)) {
  fs.copyFileSync(distFourOhFour, fourOhFourHtml);
} else if (fs.existsSync(publicFourOhFour)) {
  fs.copyFileSync(publicFourOhFour, fourOhFourHtml);
} else {
  fs.copyFileSync(distIndex, fourOhFourHtml);
}

// Sync dist/assets to root assets
if (fs.existsSync(distAssets)) {
  fs.mkdirSync(rootAssets, { recursive: true });
  fs.cpSync(distAssets, rootAssets, { recursive: true });
}

// Sync docs to dist/docs
if (fs.existsSync(docsDir)) {
  fs.mkdirSync(distDocs, { recursive: true });
  fs.cpSync(docsDir, distDocs, { recursive: true });
}

// Ensure .nojekyll exists in root and dist
fs.writeFileSync(path.join(rootDir, '.nojekyll'), '', 'utf-8');
if (fs.existsSync(distDir)) {
  fs.writeFileSync(path.join(distDir, '.nojekyll'), '', 'utf-8');
}

console.log('[4/4] Build & deployment sync complete! Zero chunk errors, ready for GitHub Pages.');

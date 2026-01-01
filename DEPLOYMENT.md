# GitHub Pages Deployment Guide

## 🚀 Deploy to GitHub Pages

Your portfolio is now configured for GitHub Pages deployment!

### Step 1: Push to GitHub (if not already done)
```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main
```

### Step 2: Deploy
```bash
npm run deploy
```

This will:
1. Build your project (`npm run build`)
2. Create/update `gh-pages` branch
3. Deploy the `dist` folder to GitHub Pages

### Step 3: Enable GitHub Pages
1. Go to your repository: https://github.com/Tayyab765/my-portfolio
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Source", select: **Deploy from a branch**
4. Branch: **gh-pages** / **/ (root)**
5. Click **Save**

### Step 4: Access Your Site
After 1-2 minutes, your site will be live at:
**https://tayyab765.github.io/my-portfolio/**

---

## 🔧 Configuration Details

### What Changed:
1. ✅ Added `gh-pages` package
2. ✅ Set `base: '/my-portfolio/'` in `vite.config.ts`
3. ✅ Added deploy scripts to `package.json`

### Important Notes:
- **Repository name must match**: Your repo is named `my-portfolio`, so base URL is `/my-portfolio/`
- **EmailJS credentials**: Don't forget to add environment variables in GitHub (see below)

---

## 🔐 Setting Up Environment Variables on GitHub

GitHub Pages **doesn't support** runtime environment variables (`.env.local`).

### Option 1: Use GitHub Actions (Recommended)
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        env:
          VITE_EMAILJS_SERVICE_ID: ${{ secrets.VITE_EMAILJS_SERVICE_ID }}
          VITE_EMAILJS_TEMPLATE_ID: ${{ secrets.VITE_EMAILJS_TEMPLATE_ID }}
          VITE_EMAILJS_PUBLIC_KEY: ${{ secrets.VITE_EMAILJS_PUBLIC_KEY }}
        run: npm run build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Then add secrets:
1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add these three secrets:
   - `VITE_EMAILJS_SERVICE_ID` = `service_hl0rfpj`
   - `VITE_EMAILJS_TEMPLATE_ID` = `template_rhnqx4n`
   - `VITE_EMAILJS_PUBLIC_KEY` = `Gn4fHtudCuR7ac6pO`

### Option 2: Hardcode Values (Not Recommended for Production)
Replace environment variables directly in `ContactSection.tsx`:
```typescript
const serviceId = 'service_hl0rfpj';
const templateId = 'template_rhnqx4n';
const publicKey = 'Gn4fHtudCuR7ac6pO';
```

---

## 🔄 Update Deployment

To deploy updates:
```bash
npm run deploy
```

Changes will be live in 1-2 minutes! and then all set.

---

## 🐛 Troubleshooting

### Assets not loading (404 errors)
- Ensure `base: '/my-portfolio/'` matches your repo name in `vite.config.ts`

### Contact form not working
- Set up GitHub Actions with secrets (Option 1 above)
- Or hardcode EmailJS credentials (Option 2 above)

### Site not updating
- Clear browser cache
- Wait 2-3 minutes for GitHub to rebuild
- Check Actions tab for deployment status

---

## 📱 Alternative: Deploy to Vercel (Easier for env variables)

If you prefer simpler environment variable management:

1. Go to https://vercel.com
2. Import your GitHub repository
3. Add environment variables in project settings
4. Auto-deploys on every push!

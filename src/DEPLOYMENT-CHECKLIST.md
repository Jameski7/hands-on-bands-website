# Vercel Deployment Checklist for Hands on Bands

## Pre-Deployment Checklist

✅ All SEO files created:
- ✅ index.html with meta tags and structured data
- ✅ robots.txt (allows search engines)
- ✅ sitemap.xml (guides search crawlers)
- ✅ Semantic HTML with section IDs
- ✅ ARIA labels for accessibility

---

## Step 1: Export Your Code

1. In Figma Make, click **"Export"** or **"Download"** button
2. Save the `.zip` file to your computer
3. Extract/unzip the folder
4. Name it something simple like: `handsonbands-website`

---

## Step 2: Deploy to Vercel

### Option A: Drag & Drop (Easiest - 5 minutes)

1. Go to **https://vercel.com**
2. Click **"Sign Up"** (use GitHub, GitLab, or email)
3. Once logged in, click **"Add New..."** → **"Project"**
4. Look for **"Deploy without Git"** or drag-and-drop option
5. **Drag your entire project folder** onto the page
6. Vercel will detect it's a React app automatically
7. Click **"Deploy"**
8. Wait 2-3 minutes ⏳
9. **Your site is live!** 🎉

### Option B: Via GitHub (Better for updates - 10 minutes)

1. Create GitHub account at **https://github.com**
2. Click **"+"** → **"New repository"**
3. Name it: `handsonbands-website`
4. Make it public or private (your choice)
5. Upload all your project files to the repository
6. Go to **https://vercel.com**
7. Sign up with your GitHub account
8. Click **"Add New..."** → **"Project"**
9. Click **"Import Git Repository"**
10. Select `handsonbands-website`
11. Click **"Deploy"**
12. Wait 2-3 minutes ⏳
13. **Your site is live!** 🎉

---

## Step 3: Configure Your Domain (Optional)

### If You Own a Domain (e.g., handsonbands.com):

1. In Vercel, go to your project
2. Click **"Settings"** → **"Domains"**
3. Enter your domain: `handsonbands.com`
4. Vercel will show DNS settings
5. Go to your domain registrar (GoDaddy, Namecheap, etc.)
6. Update DNS records as shown by Vercel
7. Add these records:
   - **Type**: A Record, **Name**: @, **Value**: 76.76.21.21
   - **Type**: CNAME, **Name**: www, **Value**: cname.vercel-dns.com
8. Wait 24-48 hours for DNS propagation
9. **Your domain is live!** 🌐

### If You Don't Have a Domain Yet:

No problem! Vercel gives you a free subdomain:
- **Format**: `handsonbands.vercel.app` or `your-project-name.vercel.app`
- **Works perfectly** for testing and can be used permanently
- **Free HTTPS** included
- You can add a custom domain later anytime

---

## Step 4: Verify SEO Files Are Accessible

After deployment, check these URLs (replace `yoursite.vercel.app` with your actual URL):

### ✅ Verify Sitemap
Go to: `https://yoursite.vercel.app/sitemap.xml`

**Should see**: XML file with list of pages

**If broken**: Check that `sitemap.xml` is in `/public` folder

### ✅ Verify Robots.txt
Go to: `https://yoursite.vercel.app/robots.txt`

**Should see**: Text file allowing all crawlers

**If broken**: Check that `robots.txt` is in `/public` folder

### ✅ Verify Structured Data
Go to: **https://search.google.com/test/rich-results**

1. Enter your site URL
2. Click "Test URL"
3. **Should see**: "Valid" structured data (MedicalBusiness, Service, FAQPage)

**If issues**: Check `index.html` has JSON-LD scripts

---

## Step 5: Submit to Search Engines (Critical!)

### Google Search Console (Do This First!)

1. Go to: **https://search.google.com/search-console**
2. Click **"Start now"**
3. Click **"Add property"**
4. Choose **"URL prefix"**: Enter `https://yoursite.vercel.app` or your domain
5. **Verify ownership** (Vercel makes this easy):
   - Method 1: Add HTML meta tag to index.html
   - Method 2: Upload HTML verification file
   - Method 3: Vercel DNS verification (if using custom domain)
6. Once verified, go to **"Sitemaps"** in left menu
7. Enter: `sitemap.xml`
8. Click **"Submit"**
9. ✅ **Done!** Google will start crawling within 24 hours

### Bing Webmaster Tools

1. Go to: **https://www.bing.com/webmasters**
2. Sign up/Sign in
3. Click **"Add site"**
4. Enter your URL
5. Option to **import from Google Search Console** (easiest!)
6. Or verify manually (similar to Google)
7. Go to **"Sitemaps"**
8. Submit: `sitemap.xml`
9. ✅ **Done!**

---

## Step 6: Set Up Google Business Profile

**This is critical for local SEO and Google Maps!**

1. Go to: **https://www.google.com/business**
2. Click **"Manage now"**
3. Enter business name: **"Hands on Bands"**
4. Choose business type: **"Service Area Business"** (you serve customers at their location)
5. Select categories:
   - Primary: "Chiropractor"
   - Additional: "Physical Therapist", "Massage Therapist"
6. Add service areas:
   - London
   - Manchester
   - Edinburgh
   - Glasgow
   - Aberdeen
   - Dublin
   - Belfast
   - (Can add more later)
7. Add contact info:
   - Phone: **0800 ROCK 911** (for emergencies)
   - Phone: **0330 123 BAND** (for bookings)
   - Website: Your Vercel URL or custom domain
   - Email: **contact@handsonbands.com**
8. Verify your business:
   - Google will call/text or send postcard
   - Follow verification steps
9. Add photos:
   - Your logo
   - Service photos (grayscale, rock-inspired)
   - Team photos (optional, maintain discretion)
10. Write description (use SEO keywords):
    > "Hands on Bands provides mobile chiropractic care, physical therapy, and massage therapy specifically for touring musicians across the UK and Ireland. Founded by Dr. Laura Nuttall with 20+ years of backstage experience. Serving London, Manchester, Edinburgh, Glasgow, Aberdeen, Dublin, and Belfast. We come to you - venues, festivals, or hotels. 24/7 emergency support available."

11. ✅ **Done!** You'll appear in Google Maps searches

---

## Step 7: Set Up Analytics (Optional but Recommended)

### Google Analytics 4 (Free)

1. Go to: **https://analytics.google.com**
2. Click **"Start measuring"**
3. Create account: "Hands on Bands"
4. Create property: "Hands on Bands Website"
5. Choose industry: "Health & Fitness"
6. Set up data stream:
   - Choose: "Web"
   - Enter your URL
   - Name stream: "Main Website"
7. Copy the **Measurement ID** (looks like: G-XXXXXXXXXX)
8. Add to your site:
   - In Vercel, go to **Settings** → **Environment Variables**
   - Add: `REACT_APP_GA_ID` = Your Measurement ID
   - Or add script to `index.html` `<head>` section:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```
9. ✅ **Done!** Track visitors, page views, conversions

---

## Step 8: Test Everything

### ✅ Mobile Responsiveness
- Open on phone: https://yoursite.vercel.app
- Check all sections work and look good
- Test contact form
- Check images load

### ✅ Desktop Performance
- Open on computer
- Check navigation
- Test buttons
- Verify layout

### ✅ Speed Test
Go to: **https://pagespeed.web.dev**
- Enter your URL
- Test both Mobile and Desktop
- Aim for 90+ score (you should achieve this easily)

### ✅ SEO Test
Go to: **https://search.google.com/test/rich-results**
- Enter your URL
- Should show valid MedicalBusiness, Service, and FAQPage schemas

### ✅ Mobile-Friendly Test
Go to: **https://search.google.com/test/mobile-friendly**
- Enter your URL
- Should say "Page is mobile-friendly"

---

## Post-Deployment Timeline

| Timeframe | What Happens | Your Action |
|-----------|--------------|-------------|
| **Day 1** | Site is live on Vercel | Share link with friends/colleagues |
| **Day 1-2** | Submit sitemaps to Google & Bing | Wait for indexing |
| **Day 2-7** | Search engines crawl your site | Monitor Search Console |
| **Week 1** | Site appears in search for brand name | Set up Google Business Profile |
| **Week 2-4** | Google Business Profile verified | Ask first clients for reviews |
| **Month 1-2** | Start ranking for location keywords | Continue getting reviews |
| **Month 3-6** | Strong organic traffic growth | Monitor and optimize |

---

## Common Issues & Fixes

### Issue: "My robots.txt or sitemap.xml show 404 error"
**Fix**: Make sure they're in the `/public` folder before deploying

### Issue: "Search Console says 'Couldn't fetch'"
**Fix**: 
- Wait 24 hours after deployment
- Check robots.txt allows crawling
- Verify URL is correct with https://

### Issue: "Structured data not detected"
**Fix**: 
- View page source (Right-click → View Page Source)
- Search for "application/ld+json"
- Should see JSON-LD scripts
- Use Google's Rich Results Test to debug

### Issue: "Site loads slowly"
**Fix**: 
- Vercel is fast by default
- Check image sizes (use WebP format if possible)
- Verify no large libraries or files

### Issue: "Google Business says I can't verify"
**Fix**: 
- Make sure business category is correct
- Try different verification method (postcard vs. phone)
- Business name must match exactly: "Hands on Bands"

---

## Environment Variables for Vercel (If Needed)

If you add features later that need API keys:

1. In Vercel dashboard, go to **Settings** → **Environment Variables**
2. Add variables:
   - `REACT_APP_GA_ID` - Google Analytics ID
   - `REACT_APP_EMAIL_SERVICE` - Email service API key (if using)
   - Any other API keys
3. Never commit API keys to GitHub!
4. Redeploy after adding env variables

---

## SSL Certificate (HTTPS)

**Good news**: Vercel automatically provides free SSL!
- ✅ Your site will be `https://` (secure)
- ✅ No configuration needed
- ✅ Renews automatically
- ✅ Required for Google rankings

---

## Final Checklist

Before you launch publicly:

- [ ] Site deployed to Vercel
- [ ] Custom domain configured (optional)
- [ ] sitemap.xml accessible
- [ ] robots.txt accessible
- [ ] Submitted to Google Search Console
- [ ] Submitted to Bing Webmaster Tools
- [ ] Google Business Profile set up
- [ ] Google Analytics configured (optional)
- [ ] Tested on mobile phone
- [ ] Tested on desktop
- [ ] All links work
- [ ] Contact form displays correctly
- [ ] Images load properly
- [ ] Speed test passed (90+ score)
- [ ] Rich results test passed
- [ ] Mobile-friendly test passed

---

## 🎉 You're Live!

Congratulations! Your website is now:
- ✅ Live on the internet
- ✅ Optimized for Google search
- ✅ Ready for AI search engines
- ✅ Mobile-responsive
- ✅ Lightning fast
- ✅ Secure (HTTPS)

**Next Steps:**
1. Share your link with clients
2. Add to social media bios
3. Include on business cards
4. Wait 1-2 weeks for search indexing
5. Monitor Google Search Console
6. Get client reviews on Google Business
7. Watch your organic traffic grow! 📈

Need help? Check the `SEO-GUIDE.md` for detailed SEO strategies and the `SEO-QUICK-START.md` for quick reference.

**Your website is ready to rock! 🎸🎤🥁**

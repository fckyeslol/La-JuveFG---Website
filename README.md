# LaJuveFG-Website

This is a website I built for La JuveFG, a youth project focused on helping young people get involved and actually do stuff in their communities.

👉 https://lajuvefg.vercel.app

What it does
Shows what La JuveFG is about
Displays events and activities
Lets people sign up as volunteers
Saves the data in Google Sheets
Sends confirmation emails automatically
Tech I used

Frontend

Next.js
React
TailwindCSS

Backend (kinda serverless magic)

Google Apps Script
Google Sheets

Other

Vercel (hosting)
GitHub
How it works (simple version)

User fills form → frontend sends data → Google Apps Script handles it →

saves it in Sheets
sends emails
Run it locally
git clone https://github.com/fckyeslol/La-JuveFG---Website.git
cd La-JuveFG---Website
npm install

Create a .env.local:

NEXT_PUBLIC_GOOGLE_SCRIPT_URL=your_script_url

Then:

npm run dev
Notes
The “database” is literally Google Sheets
Emails are handled by Apps Script
Deploy is automatic with Vercel
Future ideas
Admin panel
Volunteer map
Stats dashboard

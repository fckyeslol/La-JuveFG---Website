# LaJuveFG-Website

Official website of La JuveFG, a youth initiative focused on forming, connecting, and mobilizing young people as agents of change in their communities.

The platform allows:

Presenting the organization and its initiatives.

Showcasing community activities and events.

Allowing young people to register as volunteers.

Automatically saving registrations in Google Sheets.

Sending automatic confirmation emails to registered users.

The project is built using Next.js, TailwindCSS, and a serverless backend powered by Google Apps Script.

Live Website

The website is deployed at:

https://lajuvefg.vercel.app

Deployment is managed through Vercel, connected to GitHub.

Technologies Used
Frontend

Next.js

React

TailwindCSS

TypeScript

Backend

Google Apps Script

Google Sheets

Infrastructure

Vercel (hosting)

GitHub (version control)

Project Structure
juvefg-site
│
├── components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── VideoCard.tsx
│   └── VolunteerForm.tsx
│
├── pages
│   ├── index.tsx
│   ├── inscripcion.tsx
│   └── _app.tsx
│
├── public
│   ├── images
│   │   ├── hero.mp4
│   │   ├── interact.mp4
│   │   ├── campeones.mp4
│   │   └── navidad.mp4
│   │
│   └── juve.png
│
├── styles
│   └── globals.css
│
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
Local Installation
Clone the repository
git clone https://github.com/fckyeslol/La-JuveFG---Website.git
cd La-JuveFG---Website
Install dependencies
npm install
Create environment variables

Create a file:

.env.local

Add the following:

NEXT_PUBLIC_GOOGLE_SCRIPT_URL=YOUR_GOOGLE_APPS_SCRIPT_URL
Run the project
npm run dev

Open in your browser:

http://localhost:3000
Volunteer Registration System

The volunteer registration form is located at:

/inscripcion

When a user submits the form:

The frontend sends the data using fetch().

The request is sent to a Google Apps Script Web App.

Apps Script:

Saves the data in Google Sheets.

Sends a confirmation email to the volunteer.

Sends a notification email to the organization team.

System Architecture
User
   │
   ▼
React Form
   │
   ▼
fetch() request
   │
   ▼
Google Apps Script (Web App)
   │
   ├── Saves data in Google Sheets
   │
   └── Sends automatic emails
Database

The database is hosted in Google Sheets.

Columns used:

Name

Email

Phone

Age

City

Neighborhood

Occupation

Education level

Area of interest

Experience

Availability

Motivation

Registration date

Automatic Emails

Apps Script sends two emails.

1. Confirmation email to the volunteer

Includes:

Thank you message

Registration confirmation

Contact information

2. Notification to the organization team

Notifies that a new volunteer registration has been submitted.

Deployment on Vercel

The website is automatically deployed from GitHub.

Each push to main triggers a new deployment.

Manual deployment process

Go to Vercel

Click New Project

Import Git Repository

Select the repository

Add environment variables

Environment Variables

In Vercel, configure:

NEXT_PUBLIC_GOOGLE_SCRIPT_URL

Example:

NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycb.../exec

Location in Vercel:

Project Settings → Environment Variables
Google Apps Script Configuration

The Apps Script must be deployed as a Web App.

Correct configuration:

Execute as:

Me

Who has access:

Anyone

Final script URL format:

https://script.google.com/macros/s/.../exec

This URL is used in the environment variable.

Video System

The website includes vertical reel-style videos.

Location:

/public/images

Displayed using the component:

VideoCard

Features:

Autoplay

Custom controls

Responsive optimization

Design

The design is built with TailwindCSS and a CSS variable system.

Main La JuveFG colors:

Primary

#163d73

Accent

#ff7a59

Background

#ffffff
Responsive Design

The site is optimized for:

Mobile

Tablet

Desktop

The main layout uses:

CSS Grid

Flexbox

Future Improvements

Possible future improvements:

Admin dashboard

Volunteer map

Impact metrics dashboard

Authentication for organizers

Event CMS

Social impact analytics

Team

Project developed for:

La JuveFG

A youth initiative focused on leadership, social service, culture, and community development.

License

This project is intended for institutional use by La JuveFG.

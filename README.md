# Servd - An AI-Powered Recipe Platform (Frontend)

**Discover intelligent cooking with Servd — an AI-powered recipe platform featuring smart pantry scanning, subscription-based rate limiting, Arcjet bot protection, secure Clerk authentication, and advanced generative AI models for personalized recipes.**

---

<p align="center">
  <img src="public/banner.png" alt="Servd Architecture" width="800" height="500" />
</p>

<div style="margin-top:10px" align="center">
  <!-- Keywords with logos -->
  <img src="https://img.shields.io/badge/-AI_Recipes-black?style=for-the-badge&logo=ai&logoColor=white&color=ff6b6b" alt="AI Recipes" />
  <img src="https://img.shields.io/badge/-AI_Cooking_App-black?style=for-the-badge&logo=ai&logoColor=white&color=ff6b6b" alt="AI Cooking App" />
  <img src="https://img.shields.io/badge/-Pantry_Recipe_Generator-black?style=for-the-badge&logo=react&logoColor=white&color=61DAFB" alt="Pantry Recipe Generator" />
  <img src="https://img.shields.io/badge/-Arcjet_Security-black?style=for-the-badge&logo=javascript&logoColor=white&color=f7df1e" alt="Arcjet Security" />
  <img src="https://img.shields.io/badge/-Clerk_Authentication-black?style=for-the-badge&logo=clerk&logoColor=white&color=6C63FF" alt="Clerk Authentication" />
  <img src="https://img.shields.io/badge/-Bot_Protection-black?style=for-the-badge&logo=bot&logoColor=white&color=00c2ff" alt="Bot Protection" />
  <img src="https://img.shields.io/badge/-Next.js_AI_App-black?style=for-the-badge&logo=next.js&logoColor=white&color=000000" alt="Next.js AI App" />
</div>


## 🔗 Related Repository

This project works together with the Servd Backend (Server Actions).

- 🖥 **Backend (Next.js  + Strapi Server Sctions with Neon DB ):**  
 [ https://github.com/KarthickRamAlagar/servd](https://github.com/KarthickRamAlagar/Servd_backend)


---

## 📋 Table of Contents

1. [Introduction](#-introduction)
2. [Technical Description](#-technical-description)
3. [Tech Stack](#-tech-stack)
4. [Features](#-features)
5. [Quick Start](#-quick-start)
6. [Installation](#-installation)
7. [Environment Variables](#-environment-variables)
8. [Development](#-development)
9. [Production Build](#-production-build)
10. [Deployment](#-deployment)
11. [License](#-license)
12. [Acknowledgements](#-acknowledgements)

---

### 🚀 Introduction

**Servd (Frontend)** is the client-side application of the Servd platform, built with React and Next.js.

This frontend interacts with the backend for:

- Subscription-based rate limiting
- Pantry scanning & recipe generation
- Arcjet bot protection
- Clerk authentication
- Generative AI-powered personalized recipes

> **Note:** To use all features, clone and run the backend repository separately.

---

### 🧠 Technical Description

Servd is engineered for intelligent cooking:

- **React 19 + Next.js 16** for a robust frontend.
- **Tailwind CSS 4** for utility-first styling.
- **Clerk** for secure authentication.
- **Arcjet** for bot protection.
- **Strapi** as headless CMS for recipe data.
- **Google Generative AI** for personalized recipe suggestions.

#### **Core Architecture**

- **Frontend**: React 19 + Next.js 16
- **Styling**: Tailwind CSS + Tailwind Merge
- **Animations**: tw-animate-css / Sonner
- **Auth & Security**: Clerk + Arcjet
- **Backend / CMS**: Strapi (Backend Repo)
- **AI Integration**: Google Generative AI
- **Deployment**: Vercel
---

### 🔧 Tech Stack (Summary)

<div align="center">
  <img src="https://img.shields.io/badge/-React_19-black?style=for-the-badge&logo=react&logoColor=white&color=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/-Next.js_16-black?style=for-the-badge&logo=next.js&logoColor=white&color=000000" alt="Next.js" />
  <img src="https://img.shields.io/badge/-Tailwind_CSS_4-black?style=for-the-badge&logo=tailwindcss&logoColor=white&color=38BDF8" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/-Clerk-black?style=for-the-badge&logo=clerk&logoColor=white&color=6C63FF" alt="Clerk" />
  <img src="https://img.shields.io/badge/-Arcjet-black?style=for-the-badge&logo=javascript&logoColor=white&color=f7df1e" alt="Arcjet" />
  <img src="https://img.shields.io/badge/-Strapi-black?style=for-the-badge&logo=strapi&logoColor=white&color=2F84FF" alt="Strapi" />
  <img src="https://img.shields.io/badge/-Google_Generative_AI-black?style=for-the-badge&logo=google&logoColor=white&color=4285F4" alt="Generative AI" />
  <img src="https://img.shields.io/badge/-Tailwind_Merge-black?style=for-the-badge&logo=tailwindcss&logoColor=white&color=38BDF8" alt="Tailwind Merge" />
</div>

---

## ⚙ Features

- 🧠 **Personalized AI Recipe Suggestions**
- 📦 **Smart Pantry Scanning & Recipe Matching**
- 🔐 **Secure Authentication with Clerk**
- 🛡 **Arcjet Bot Protection**
- 💳 **Subscription-based Rate Limiting**
- 🎨 **Responsive UI with Tailwind CSS**
- ⚡ **Animations using tw-animate-css & Sonner**
- 🗂 **CMS Integration via Strapi** (Backend)

---

## ⚡ Quick Start

### 📦 Prerequisites

- Node.js ≥ 18
- npm / yarn / pnpm

---

## 🛠 Installation

### Clone Frontend & Backend Repos

```bash
# Clone Frontend
git clone https://github.com/KarthickRamAlagar/servd.git
cd servd
npm install

# Clone Backend (required for server actions & full functionality)
git clone https://github.com/KarthickRamAlagar/servd-backend.git
cd servd-backend
npm install

```

## 🔑 Environment Variables

<p>Create a .env file in  frontend  directory with the following variables:</p>

```bash
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your api key goes here>
CLERK_SECRET_KEY=<your api key goes here>
NEXT_PUBLIC_CLERK_SIGN_IN_URL=<your sign-in path goes here>
NEXT_PUBLIC_CLERK_SIGN_UP_URL=<your sign-up path goes here>

# Arcjet Bot Protection
NEXT_PUBLIC_ARCJET_KEY=<your api key goes here>

# Strapi CMS
NEXT_PUBLIC_STRAPI_URL=<your strapi url goes here>
STRAPI_API_TOKEN=<your strapi api token goes here>

# Google Generative AI
GEMINI_API_KEY=<your api key goes here>

# Unsplash API
UNSPLASH_ACCESS_KEY=<your api key goes here>

```

## Development

- Frontend
  ```bash
  cd servd_FE
  npm run dev
  ```
 - Backend
    ```bash
   cd servd_BE
   npm run develop
  ```

## Open Frontend in Browser

```bash
http://localhost:3000

```

## Production Build

```bash
# Frontend
cd servd
npm run build
npm run start
```

## 🪪 License

MIT License

## 🙏 Acknowledgements

<p align="center"> <img src="https://img.shields.io/badge/-React-black?style=for-the-badge&logo=react&logoColor=white&color=61DAFB" alt="React" /> <img src="https://img.shields.io/badge/-Next.js-black?style=for-the-badge&logo=next.js&logoColor=white&color=000000" alt="Next.js" /> <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logo=tailwindcss&logoColor=white&color=38BDF8" alt="Tailwind CSS" /> <img src="https://img.shields.io/badge/-Clerk-black?style=for-the-badge&logo=clerk&logoColor=white&color=6C63FF" alt="Clerk" /> <img src="https://img.shields.io/badge/-Arcjet-black?style=for-the-badge&logo=javascript&logoColor=white&color=f7df1e" alt="Arcjet" /> <img src="https://img.shields.io/badge/-Strapi-black?style=for-the-badge&logo=strapi&logoColor=white&color=2F84FF" alt="Strapi" /> <img src="https://img.shields.io/badge/-Google_Generative_AI-black?style=for-the-badge&logo=google&logoColor=white&color=4285F4" alt="Generative AI" /> </p>

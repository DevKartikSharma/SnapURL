🔗 SnapURL — Modern URL Shortener
<!-- prettier-ignore -->
# ✨ SnapURL

> A lightweight URL shortener (Next.js + MongoDB)

---

```text
┌───────────────────────────────────────────────────────────┐
│ SnapURL — convert long URLs into short, memorable aliases │
└───────────────────────────────────────────────────────────┘
```

## Core technologies

- ⚛️ Next.js (app router)
- ⚙️ React
- 🎨 Tailwind CSS
- 🗄️ MongoDB (Mongoose)

## Important files (where to look)

| File | Purpose |
|---|---|
| `src/app/shortner/page.js` | Create short links (UI) |
| `src/app/api/generate/route.js` | Save { url, alias } |
| `src/app/api/fetch/route.js` | Retrieve { url } by alias |
| `src/app/[alias]/page.js` | Resolve alias and redirect |
| `src/app/models/Links.js` | Mongoose schema (url, alias, createdAt) |
| `src/app/lib/mongoose.js` | DB connection helper |

## Why this repo is useful

- ✅ Minimal, focused codebase — fast to read and extend
- ✅ Modern patterns — uses Next.js app-router conventions
- ✅ Easy to integrate — drop into another app or extend with analytics/auth
- ✅ Deployable on serverless platforms or Node servers (MongoDB required)

---

---

<div align="center">

**Built with ❤️ — Next.js & MongoDB**  ·  *Minimal • Extensible • Deployable*

<pre>
┌─────────────────────────────────────────┐
│   SnapURL — shorten smart, share fast   │
└─────────────────────────────────────────┘

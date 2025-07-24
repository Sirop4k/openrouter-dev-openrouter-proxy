# OpenRouter Proxy

Простой прокси для безопасного доступа к OpenRouter API из мобильных или экспортных приложений (например, Next.js с output: export).

## .env переменные (в Vercel):
- OPENROUTER_API_KEY=sk-...
- ACCESS_SECRET=abc123

## Endpoint:
POST /api/generate
Body: { "messages": [...] }
Headers: { Authorization: "Bearer abc123" }

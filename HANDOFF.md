# ROOMIE Landing Page — Handoff

> Estado al 3 de julio de 2026. En producción en [joinroomie.vercel.app](https://joinroomie.vercel.app). El dominio propio www.roomie.com.uy está en migración (ver Pendientes).

---

## Qué es ROOMIE

Startup de matching de roommates para estudiantes que llegan a Montevideo (del interior de Uruguay o de intercambio). Dos líneas:

1. **Matching de roommates** — producto core, app en validación. La landing junta emails en una waitlist.
2. **Servicio Concierge** — genera ingresos hoy: el equipo busca, verifica y reserva vivienda por un fee único. **El precio nunca se publica**; se cotiza en la primera charla. CTA principal: WhatsApp.

---

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 14 (App Router), actualizado a la última 14.x |
| Estilos | Tailwind CSS con tokens custom, dark theme |
| Tipografía | Sora (títulos) + Manrope (cuerpo) vía `next/font/google` |
| Waitlist | Formspree — endpoint `xeebjnvg` |
| Encuesta de validación | Google Forms (link externo) |
| Videollamadas | Google Calendar (`BOOKING_URL`) |
| Concierge | WhatsApp con mensaje pre-armado (`whatsappUrl()`) |
| Deploy | Vercel, proyecto **roomie-landing**, CI/CD desde GitHub |
| Repo | github.com/enlammit-prog/roomie-landing |

**Nota de estilo:** textos en español rioplatense con voseo. Sin guiones largos (—) en ningún texto de la web.

---

## Rutas

| Ruta | Idioma | Contenido |
|---|---|---|
| `/` | ES | Home completa (ver secciones abajo) |
| `/exchange` | EN | Landing para exchange students, CTA: call de 15 min |
| `/concierge` | ES | Servicio concierge, CTA: WhatsApp |
| `/concierge/en` | EN | Ídem en inglés; switch ES↔EN en la nav de ambas |
| `/conserje` | — | Redirect permanente a `/concierge` (en next.config.mjs) |

---

## Secciones de la home (`src/app/page.tsx`)

| # | ID | Componente | Descripción |
|---|---|---|---|
| — | `#top` | `Nav` | Sticky; hamburger en mobile; botón outline violeta "Te conseguimos vivienda" → /concierge |
| 01 | — | `Hero` | Headline + CTA waitlist + línea de acceso al concierge |
| 02 | `#problema` | `Problema` | El problema |
| 03 | — | `Solucion` | Propuesta de valor |
| — | — | `ConciergeBanner` | Card ancha promocionando el concierge → /concierge |
| 03b | `#como` | `ComoFunciona` | 3 pasos |
| 04 | `#para-quien` | `ParaQuienEs` | Para quién es |
| 05 | `#faq` | `Faq` | Accordion, primera abierta |
| 06 | `#hablemos` | `Hablemos` | Contacto + `HorarioCard` (L-V 15:30-22:00, Sáb 10:00-12:00) |
| 07 | `#waitlist` | `Waitlist` | Email → Formspree |
| — | — | `Footer` | Logo + links a /concierge y /exchange + Instagram + email |

**Jerarquía de CTAs:** en la home el primario es la waitlist; el concierge es el segundo elemento más visible. La página /exchange tiene `ConciergeBannerEn` antes del bloque final.

---

## Archivos clave

```
src/
├── app/
│   ├── layout.tsx              ← metadata global (OG, es_UY)
│   ├── page.tsx                ← home
│   ├── opengraph-image.tsx     ← OG image dinámica 1200×630
│   ├── exchange/page.tsx       ← /exchange (metadata EN)
│   └── concierge/
│       ├── page.tsx            ← /concierge (ES)
│       └── en/page.tsx         ← /concierge/en (EN)
│
├── components/
│   ├── Nav.tsx                 ← nav home ("use client", hamburger)
│   ├── ConciergeBanner.tsx     ← banner concierge en home
│   ├── concierge/
│   │   ├── ConciergePage.tsx   ← página completa, recibe lang: "es" | "en" (diccionario, sin markup duplicado)
│   │   └── ConciergeNav.tsx    ← nav con switch ES↔EN; logo → home (ES) o /exchange (EN)
│   ├── exchange/
│   │   ├── ExchangeNav.tsx     ← incluye botón "Need a place to live?" → /concierge/en
│   │   └── ConciergeBannerEn.tsx
│   └── ... (Hero, Problema, Solucion, ComoFunciona, ParaQuienEs, Faq, Hablemos, HorarioCard, Waitlist, MatchCard, Orbit, Footer)
│
└── lib/
    ├── links.ts                ← GOOGLE_FORM_URL, BOOKING_URL, WHATSAPP_NUMBER, whatsappUrl()
    └── forms.ts                ← WAITLIST_FORM_ENDPOINT (Formspree)
```

---

## Variables de entorno (Vercel → Settings → Environment Variables)

| Variable | Para qué | Default en código |
|---|---|---|
| `NEXT_PUBLIC_WAITLIST_FORM_ENDPOINT` | Formspree waitlist | (vacío) |
| `NEXT_PUBLIC_BOOKING_URL` | Google Calendar | `calendar.app.google/rzkTFUEhQp9EWs4N6` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp del concierge | `59894946835` |

---

## Cómo publicar un cambio

```bash
cd "/Users/enrique1234/CLAUDE/Projects/Roomie/Roomie_info/roomie-landing"
# (editar archivos)
npm run build        # verificar que compila
git add .
git commit -m "descripción"
git push             # Vercel redeploya solo en ~2 min
```

Para probar en local: `npm run dev` → http://localhost:3000. Mobile: Chrome DevTools (Cmd+Opt+I → Cmd+Shift+M).

Credenciales de push: usuario `enlammit-prog` + token personal de GitHub como contraseña (guardado en app Contraseñas de la Mac, entrada "GitHub token — roomie landing").

---

## Dominio roomie.com.uy — estado de la migración

- Los dominios `roomie.com.uy` (redirect 307 a www) y `www.roomie.com.uy` ya están agregados al proyecto Vercel correcto (**roomie-landing**; se movieron desde el proyecto viejo roomie-landing-mxrz).
- **Falta**: cargar estos registros en el panel DNS de Antel / nic.com.uy (hoy `www` apunta a una IP vieja de Antel, 190.64.98.104):

| Tipo | Nombre | Valor |
|---|---|---|
| A | `@` | `216.198.79.1` |
| CNAME | `www` | `d6b70eb46633b302.vercel-dns-017.com.` |

- Después: Vercel → Domains → **Refresh** en cada dominio hasta que diga "Valid Configuration".
- Antes de tocar nameservers: verificar que no haya casillas de mail @roomie.com.uy en Antel (cambiar solo registros no las afecta; cambiar nameservers sí).
- Alternativa si no se encuentra el panel: llamar al 0800 de Antel y dictar la tabla.

---

## Contacto y canales

| Canal | Dato |
|---|---|
| WhatsApp negocio | +598 94 946 835 |
| Email | contacto.roomieuy@gmail.com |
| Instagram | @contacto.roomieuy |
| Formspree submissions | formspree.io/forms/xeebjnvg/submissions |
| Link para bio/difusión del concierge | joinroomie.vercel.app/concierge |

## Métricas a mirar

- Mensajes de WhatsApp entrantes desde /concierge (conversión que genera ingresos)
- Emails en la waitlist (Formspree)
- Llamadas agendadas en Google Calendar
- Respuestas del Google Form de validación

---

## Pendientes

- [ ] Cargar los registros DNS en Antel/nic.com.uy y verificar en Vercel (tabla arriba)
- [ ] Difundir joinroomie.vercel.app/concierge en Instagram (bio + historias)
- [ ] Probar el flujo completo de WhatsApp desde un celular real
- [ ] Cuando lance la app: actualizar los textos de "estamos validando"
- [ ] Re-verificar OG en LinkedIn Post Inspector tras los últimos cambios de texto

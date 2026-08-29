# ROOMIE Landing Page — Handoff

> Estado al 29 de agosto de 2026. En producción en **[www.roomieuy.com](https://www.roomieuy.com)** (dominio propio, comprado en Namecheap, ya apuntando a Vercel vía nameservers `ns1/ns2.vercel-dns.com`). También accesible en [joinroomie.vercel.app](https://joinroomie.vercel.app) y roomie-landing-sepia.vercel.app: los tres dominios sirven el mismo proyecto y se actualizan juntos con cada push.

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

## Dominios

**El dominio en uso es `roomieuy.com`** (Namecheap), ya funcionando con HTTPS. Sus nameservers apuntan a Vercel, así que el DNS se administra desde el propio panel de Vercel, no desde Namecheap.

`roomie.com.uy` (registrado en Antel/nic.com.uy) quedó agregado al proyecto pero **sin configurar** y no se usa. Aparece como "Invalid Configuration" en Vercel → Domains. Opciones: quitarlo del proyecto, o cargar en el panel DNS de Antel un registro A `@` → `216.198.79.1` y un CNAME `www` → `d6b70eb46633b302.vercel-dns-017.com.` si se lo quiere usar como redirect.

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

## Diseño v2 (aplicado el 29 ago 2026)

Del handoff `design_handoff_roomie_landing` se aplicó el rediseño del hero:

- Foto `public/hero_night.jpg` en la home y `public/hero_roomie.jpg` en /exchange, ambas con halo navy, overlay azul y chip de perfiles verificados
- Cinco capas de fondo en el hero de la home: degradado atardecer, banda cálida de horizonte, scrim de legibilidad, glow radial violeta y órbita girando
- H1 a 74px con la segunda línea en gradiente de texto (`#6E8BF5 → #A78BFA → #C4B2FB`)
- Fila de tres métricas: 65% / 100% / 15 min
- `MatchCard` reconstruida: borde en gradiente, ring con gradiente de marca, tres barras de compatibilidad, preview de chat y botón "Responder mensaje"
- `SectionEyebrow.tsx`: eyebrow como pill con borde, usado en las seis secciones

**Del handoff se descartó a propósito** (traía datos desactualizados): el modal de videollamada, `contacto@roomie.com.uy`, los horarios 18:00-21:00, "Uruguay 2025" en el footer y la ausencia del Concierge.

---

## Pendientes

- [ ] Decidir qué hacer con roomie.com.uy: quitarlo de Vercel o configurarlo como redirect
- [ ] Difundir www.roomieuy.com/concierge en Instagram (bio + historias)
- [ ] Probar el flujo completo de WhatsApp desde un celular real
- [ ] Configurar identidad de git: `git config --global user.name` y `user.email`
- [ ] Cuando lance la app: actualizar los textos de "estamos validando"
- [ ] Re-verificar OG en LinkedIn Post Inspector; `metadataBase` en layout.tsx todavía dice joinroomie.vercel.app, conviene cambiarlo a https://www.roomieuy.com

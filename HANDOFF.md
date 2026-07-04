# ROOMIE Landing Page — Handoff

> Estado al 2 de julio de 2026. Proyecto en producción en [www.roomie.com.uy](https://www.roomie.com.uy) y en [joinroomie.vercel.app](https://joinroomie.vercel.app).

---

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 14 (App Router) |
| Estilos | Tailwind CSS con tokens personalizados |
| Tipografía | Sora (headings) + Manrope (body) vía `next/font/google` |
| Formulario waitlist | [Formspree](https://formspree.io) — endpoint `xeebjnvg` |
| Encuesta de validación | Google Forms (link externo) |
| Videollamada | Google Calendar (link externo) |
| Deploy | Vercel con CI/CD desde GitHub |
| Repo | github.com/enlammit-prog/roomie-landing |

---

## URLs importantes

| Qué | URL |
|---|---|
| Landing pública | https://www.roomie.com.uy |
| Landing Vercel | https://joinroomie.vercel.app |
| Página /exchange | https://www.roomie.com.uy/exchange |
| Google Forms (validación / waitlist secundaria) | ver `src/lib/links.ts` → `GOOGLE_FORM_URL` |
| Google Calendar (videollamada) | ver `src/lib/links.ts` → `BOOKING_URL` |
| Formspree dashboard | https://formspree.io/forms/xeebjnvg/submissions |
| Vercel dashboard | https://vercel.com |
| Repo GitHub | https://github.com/enlammit-prog/roomie-landing |

---

## Estructura de archivos relevantes

```
src/
├── app/
│   ├── layout.tsx              ← metadata global (OG, título, favicon)
│   ├── page.tsx                ← landing principal (/)
│   ├── opengraph-image.tsx     ← imagen OG dinámica 1200×630 (edge runtime)
│   └── exchange/
│       └── page.tsx            ← landing en inglés para exchange students (/exchange)
│
├── components/
│   ├── Nav.tsx                 ← sticky nav con hamburger menu mobile ("use client")
│   ├── Hero.tsx                ← sección 01 — hero principal
│   ├── Problema.tsx            ← sección 02 — el problema
│   ├── Solucion.tsx            ← sección 03 — la solución / propuesta de valor
│   ├── ComoFunciona.tsx        ← sección 03b — cómo funciona (3 pasos)
│   ├── ParaQuienEs.tsx         ← sección 04 — para quién es ROOMIE
│   ├── Faq.tsx                 ← sección 05 — preguntas frecuentes (accordion, "use client")
│   ├── Hablemos.tsx            ← sección 06 — contacto + horario card
│   ├── HorarioCard.tsx         ← tarjeta de horarios de atención (usada en Hablemos)
│   ├── Waitlist.tsx            ← sección 07 — formulario de waitlist (Formspree, "use client")
│   ├── MatchCard.tsx           ← card visual de match (usada en Hero/Solucion)
│   ├── Orbit.tsx               ← animación orbital (usada en ExchangeHero)
│   ├── Footer.tsx              ← footer con logo, Instagram y email
│   └── exchange/
│       ├── ExchangeNav.tsx     ← nav de /exchange (solo 2 links, sin hamburger)
│       ├── ExchangeHero.tsx    ← hero en inglés con animación orbital
│       ├── TrustRow.tsx        ← fila de logos/trust signals (exchange)
│       └── ConversionBlock.tsx ← CTA final en /exchange
│
└── lib/
    ├── links.ts                ← URLs centralizadas (GOOGLE_FORM_URL, BOOKING_URL)
    └── forms.ts                ← endpoint Formspree (WAITLIST_FORM_ENDPOINT)
```

---

## Variables de entorno (Vercel)

Configuradas en Vercel → Settings → Environment Variables:

| Variable | Para qué | Valor actual |
|---|---|---|
| `NEXT_PUBLIC_WAITLIST_FORM_ENDPOINT` | Endpoint Formspree para el formulario de waitlist | `https://formspree.io/f/xeebjnvg` |
| `NEXT_PUBLIC_BOOKING_URL` | Link del Google Calendar para videollamada | `https://calendar.app.google/rzkTFUEhQp9EWs4N6` |

Para cambiar el link del calendario sin tocar código: editar `NEXT_PUBLIC_BOOKING_URL` en Vercel → el próximo deploy lo toma automáticamente.

---

## Cómo hacer un cambio y publicarlo

1. Editá el archivo en `/Users/enrique1234/Desktop/ROOMIE/roomie-landing/`
2. En Terminal:
   ```bash
   cd "/Users/enrique1234/Desktop/ROOMIE/roomie-landing"
   git add -p                     # revisá qué cambiaste
   git commit -m "descripción del cambio"
   git push
   ```
3. Vercel detecta el push y redeploya automáticamente (~1-2 minutos).
4. Verificá en [vercel.com](https://vercel.com) → proyecto → Deployments que diga **Ready**.

---

## Secciones de la landing principal

| # | ID | Componente | Descripción |
|---|---|---|---|
| — | `#top` | `Nav` | Nav sticky con hamburger menu en mobile/tablet |
| 01 | `#hero` | `Hero` | Headline + CTA → Google Forms |
| 02 | `#problema` | `Problema` | El problema que resuelve ROOMIE |
| 03 | `#solucion` | `Solucion` | Propuesta de valor |
| 03b | `#como` | `ComoFunciona` | 3 pasos de cómo funciona |
| 04 | `#para-quien` | `ParaQuienEs` | Para quién es (estudiantes del interior + intercambio) |
| 05 | `#faq` | `Faq` | 5 preguntas frecuentes con accordion |
| 06 | `#hablemos` | `Hablemos` | Contacto + HorarioCard (lun-vie 15:30-22:00, sáb 10:00-12:00) |
| 07 | `#waitlist` | `Waitlist` | Formulario de email → Formspree |
| — | — | `Footer` | Logo + Instagram + email |

---

## Idioma y tono

- Español rioplatense con **voseo** ("encontrá", "sumate", "coordinamos")
- La página `/exchange` es completamente en **inglés** (para estudiantes de intercambio)
- No usar tuteo ni ustedeo

---

## Contacto del proyecto

| Canal | Dato |
|---|---|
| Email | contacto.roomieuy@gmail.com |
| Instagram | @contacto.roomieuy |
| Formspree (submissions) | https://formspree.io/forms/xeebjnvg/submissions |

---

## Cosas pendientes / próximos pasos sugeridos

- [ ] Revocar y regenerar el Personal Access Token de GitHub (el anterior fue expuesto accidentalmente)
- [ ] Testear el menú hamburguesa en dispositivos móviles reales en www.roomie.com.uy
- [ ] Re-verificar la imagen OG en [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) después de cambios de contenido
- [ ] Opcional: borrar la variable `NEXT_PUBLIC_VIDEOCALL_FORM_ENDPOINT` de Vercel (era del modal de videollamada que se eliminó)
- [ ] Cuando la app esté lista: actualizar los textos de "estamos terminando de validar..." por fechas reales de lanzamiento

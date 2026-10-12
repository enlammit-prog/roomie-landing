# ROOMIE Landing Page — Handoff

> Estado al 12 de octubre de 2026. En producción en **[www.roomieuy.com](https://www.roomieuy.com)** (Namecheap, nameservers apuntando a Vercel). También responde en joinroomie.vercel.app y roomie-landing-sepia.vercel.app: los tres sirven el mismo proyecto Vercel (**roomie-landing**) y se actualizan juntos con cada `git push`.

---

## Qué es ROOMIE

Startup uruguaya en etapa semilla. Conecta estudiantes del interior de Uruguay y de intercambio con roommates verificados en Montevideo. Dos líneas:

1. **Matching de roommates** — el producto todavía **no existe**. La landing lo dice de frente y junta mails.
2. **Servicio Concierge** — genera ingresos hoy: el equipo busca, verifica y reserva vivienda por un fee único. **El precio nunca se publica**; se cotiza en la primera charla. CTA: WhatsApp.

---

## Reglas de contenido (no negociables)

- **Español rioplatense con voseo.** Las páginas en inglés son `/exchange` y `/concierge/en`.
- **Cero guiones largos (—)** en cualquier texto visible. Usar comas, puntos o reescribir.
- **Nunca publicar el precio del concierge.**
- **Nunca usar el "65% usaría ROOMIE" ni el "18 de 20".** El propio `ANALISIS_ENCUESTA_JUL2026.md` los marca como inusables: ~3 respuestas eran pruebas internas y los amigos de Montevideo que contestaron viven con sus padres. El dato honesto es: **15 respuestas orgánicas, 4 con demanda real del interior.**
- **No publicar nombres de encuestados.** En Uruguay "estudiante de Casupá" ya identifica a una persona.
- **No afirmar métricas de producto** (usuarios, perfiles verificados, matches) mientras el producto no exista.

---

## Sistema visual

| Rol | Valor |
|---|---|
| Fondo | `#0F172A` (token `bg`) |
| Fondo alterno | `#0D1426` (token `bg-alt`) |
| Acento de marca | **ámbar** `#F0A868` (`amber`) y `#E8814A` (`amber-deep`) |
| Texto sobre ámbar | `#241509` (`amber-ink`) |
| Verde "verificado" | `#10B981` (`match`), solo para verificación |
| Tipografías | Sora (títulos) + Manrope (cuerpo) |
| Esquinas | **3px botones, 4px tarjetas.** Un solo sistema, duro. Definido en los tokens de Tailwind, se propaga solo. |

**El ámbar es la ventana encendida de noche**, que es literalmente la foto del hero: Montevideo oscuro, el living prendido. Reemplazó al gradiente azul-violeta, que era el default de toda startup tech y vendía "software" cuando ROOMIE vende "casa".

### Qué NO hacer (hace que la página se lea como generada por IA)

- Eyebrows numerados por sección (`01 EL PROBLEMA`). Máximo uno cada tres secciones; hoy hay uno solo, en el hero.
- Puntos de color pulsantes decorativos.
- Gradiente de texto en titulares.
- Titulares de más de 2 líneas o bajadas de más de 20 palabras en el hero.
- Métricas o franjas de confianza dentro del hero (van debajo).
- Tres cards iguales con iconito.
- Glassmorphism y radios blandos de 20 a 26px.
- Capturas falsas del producto hechas con divs.
- Fotos de ciudad generadas con IA. **Las fotos reales de Montevideo sacadas con celular valen más**: es lo que hace que la identidad se sienta verdadera.

---

## Estructura de la home (7 secciones)

| # | Componente | id | Qué hace |
|---|---|---|---|
| — | `Nav` | — | Sticky, una línea, 68px. Links: El problema, Quiénes somos, Qué construimos, Preguntas, English + CTA ámbar |
| 1 | `Hero` | `#top` | Eyebrow, titular de 2 líneas con "Montevideo" en ámbar, bajada corta, 2 CTAs, foto a sangre |
| 2 | `Problema` | `#problema` | Los 4 pedidos que se repitieron en la encuesta, con la muestra declarada tal cual es |
| 3 | `Nosotros` | `#nosotros` | Quién está detrás. Sin foto y sin nombre por decisión del fundador. Firmado "Equipo ROOMIE · Montevideo" |
| 4 | `Solucion` | `#construimos` | Las 5 capacidades, cada una respondiendo a un pedido de la encuesta |
| 5 | `DosPuertas` | — | ¿Cuándo llegás? Concierge por WhatsApp vs lista de espera |
| 6 | `Faq` | `#faq` | Acordeón de 5 preguntas |
| 7 | `Waitlist` | `#waitlist` | Formulario + "qué pasa después" en 3 pasos + link a llamada |
| — | `Footer` | — | Links, Instagram, mail |

**Fusionados o eliminados** (no volver a crearlos sin motivo): `MatchCard`, `PorQue`, `ComoFunciona`, `ParaQuienEs`, `ConciergeBanner`, `Hablemos`, `HorarioCard`, `SectionEyebrow`.

---

## Otras rutas

| Ruta | Idioma | Contenido |
|---|---|---|
| `/exchange` | EN | Landing para exchange students, CTA: call de 15 min |
| `/concierge` | ES | Servicio concierge, CTA: WhatsApp |
| `/concierge/en` | EN | Ídem; componente compartido `ConciergePage` con prop `lang` |
| `/conserje` | — | Redirect permanente a `/concierge` |

---

## Archivos clave

```
src/
├── app/
│   ├── layout.tsx              ← metadata, metadataBase = www.roomieuy.com
│   ├── page.tsx                ← las 7 secciones en orden
│   ├── opengraph-image.tsx     ← OG dinámica 1200×630, paleta ámbar
│   ├── exchange/page.tsx
│   └── concierge/{page.tsx, en/page.tsx}
├── components/
│   ├── Nav, Hero, Problema, Nosotros, Solucion,
│   │   DosPuertas, Faq, Waitlist, Footer, Orbit
│   ├── concierge/{ConciergePage, ConciergeNav}
│   └── exchange/{ExchangeNav, ExchangeHero, TrustRow, ConciergeBannerEn, ConversionBlock}
└── lib/
    ├── links.ts                ← GOOGLE_FORM_URL, BOOKING_URL, WHATSAPP_NUMBER,
    │                             whatsappUrl(), WA_MSG_VIVIENDA_ES, CONTACT_MAILTO
    └── forms.ts                ← WAITLIST_FORM_ENDPOINT (Formspree)

public/  roomie_profile.png · hero_night.jpg · hero_roomie.jpg
```

---

## Variables de entorno (Vercel)

| Variable | Default en código |
|---|---|
| `NEXT_PUBLIC_WAITLIST_FORM_ENDPOINT` | (vacío) — Formspree `xeebjnvg` |
| `NEXT_PUBLIC_BOOKING_URL` | `calendar.app.google/rzkTFUEhQp9EWs4N6` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `59894946835` |

---

## Cómo publicar

```bash
cd "/Users/enrique1234/CLAUDE/Projects/Roomie/Roomie_info/roomie-landing"
npm run build          # verificar que compila
git add -A
git commit -m "descripción"
git push               # SSH, no pide token
```

Vercel redeploya solo en ~2 minutos. Para ver en local: `npm run dev` → http://localhost:3000.

**Autenticación:** el repo usa SSH (`git@github.com:enlammit-prog/roomie-landing.git`) con la clave `~/.ssh/id_ed25519`, cargada en github.com/settings/keys. No hacen falta tokens.

**No correr `npm run build` mientras `npm run dev` está andando**: se pisan la carpeta `.next` y el dev tira "Cannot find module". Se arregla con `rm -rf .next` y reiniciar.

---

## Contacto y canales

| Canal | Dato |
|---|---|
| WhatsApp negocio | +598 94 946 835 |
| Email | contacto.roomieuy@gmail.com |
| Instagram | @contacto.roomieuy |
| Formspree | formspree.io/forms/xeebjnvg/submissions |
| Link de difusión del concierge | www.roomieuy.com/concierge |

---

## Pendientes

- [ ] **Fecha estimada de lanzamiento.** Sin fecha, "avisame cuando lancen" no entra en el calendario mental de nadie. Cuando se defina, va como tercera métrica o en la FAQ.
- [ ] **Fotos reales de Montevideo** sacadas con celular (Rambla, una ventana encendida en el Cordón, la parada del ómnibus). Reemplazan a la foto generada del hero.
- [ ] **Entrevistar a los 3 leads reales del interior** (ver `ANALISIS_ENCUESTA_JUL2026.md`). De ahí salen las citas textuales que hoy faltan en la sección del problema.
- [ ] Decidir qué hacer con `roomie.com.uy` (Antel): quitarlo de Vercel o configurarlo como redirect. Hoy figura como "Invalid Configuration".
- [ ] Meta Ads en pausa hasta que el destino sea el concierge con WhatsApp, no un formulario.

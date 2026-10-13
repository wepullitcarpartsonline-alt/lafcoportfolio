# LAF CO — The Entrance

Standalone copy of the published LAF CO cinematic entrance at
https://laf-co-cinematic-entrance.jamesmcintosh144.chatgpt.site/.
The original published assets preserve the cube puzzle, falling-block sequence,
and glowing doorway. Entering the doorway adds a lightspeed transition before
opening https://orbital-archive-rose.vercel.app/ in the same tab.
Reduced-motion users receive a short black transition without star streaks.

## Development

Requires Node.js. No dependency installation is needed.

```sh
npm run dev -- --host 0.0.0.0 --port 4173
npm run build
```

Deploy `dist/` to a static website host. This repository contains the recovered
published bundles, not the original editable React/Three.js source project.
The additional transition is maintained in `transition.js`.

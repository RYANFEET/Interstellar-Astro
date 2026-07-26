# Interstellar V7

Web proxy with multi-tab browser interface.

## Deployment

```bash
git clone https://github.com/UseInterstellar/Interstellar-Astro
cd Interstellar-Astro
bun install && bun start
```

## Development

```bash
bun install && bun dev
```

## Expose With ngrok (Get a Public URL)

1) Build + start the proxy:

```bash
bun install
bun run build
bun start
```

2) In another terminal, start ngrok on the same port (default `8080`):

```bash
ngrok http 8080
```

ngrok will print a public `https://...` forwarding URL. Use that URL in your browser (and in Wix if you’re embedding/linking).

If you want to embed the proxy inside a Wix page (iframe), start the server with `FRAME_ANCESTORS` allowing Wix:

```bash
FRAME_ANCESTORS="'self' https://m7tdgyjhcr.wixsite.com https://*.wixsite.com" bun start
```

## Tech Stack

- Astro 5 + React 19
- Fastify backend
- Scramjet proxy engine
- Tailwind CSS

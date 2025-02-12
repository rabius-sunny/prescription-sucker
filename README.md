# Welcome to Prescription Sucker That Sucked with F\*\*\*press!

## Features

- 🚀 Server-side rendering & SPA
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 State management with Zustand
- 🔒 TypeScript for type safety
- 🎉 TailwindCSS for styling
- 📖 React Router for routing

## Getting Started

### Installation

Install the dependencies:

```bash
bun install
```

Oh yeah! if you have'nt `bun` installed, go with other package managers or suck in [https://bun.sh/](https://bun.sh/)

### Development

Start the development server with HMR:

```bash
bun run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
bun run build
```

## Serve the production build

```bash
bun run preview
```

This will serve the production-ready project at [http://localhost:4173/](http://localhost:4173/)

## Deployment

### Docker Deployment

I'm using a Dockerfiles optimized for **bun** package manager:

- `Dockerfile`

To build and run using Docker:

```bash
docker build -f Dockerfile -t prescription-generator .

# Run the container
docker run -p 3000:3000 prescription-generator
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying React applications with static build, the build version is production-ready.

Make sure to deploy the output of `bun run build`

```
├── package.json
├── bun.lockb
├── build/
│   ├── assets/    # Static assets
│   └── index.html # Site entrypoint
```

## Styling

I used [Tailwind CSS](https://tailwindcss.com/).

---

Built with 😡 by Sunny using `bun`, `typescript` and `react`

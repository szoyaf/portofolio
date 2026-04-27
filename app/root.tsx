import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { ThemeProvider } from "next-themes";
import { Button } from "~/components/ui/button";
import { Background } from "~/module/LandingModule/component/Background";
import { Toaster } from "~/components/ui/sonner";
import { TooltipProvider } from "~/components/ui/tooltip";

import type { Route } from "./+types/root";
import "./app.css";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Shaney Zoya Fiandi | Information Systems Student & Software Engineer Portfolio",
    },
    {
      name: "Shaney Zoya Fiandi",
      content: "Information Systems student and Software Engineer",
    },
  ];
}

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="vite-ui-theme"
        >
          <TooltipProvider>{children}</TooltipProvider>
          <Toaster />
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;
  const isNotFound = isRouteErrorResponse(error) && error.status === 404;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  if (isNotFound) {
    return (
      <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-bgblue p-6 text-twhite font-minecraft">
        <Background />

        <section className="w-fit relative z-10 flex max-w-5xl flex-col items-center gap-2 text-center">
          <h1 className="text-shadow-layer text-shadow-8 text-9xl md:text-9xl md:leading-none text-kinda-yellow text-stroke-10 text-stroke-lighter-yellow">
            404
          </h1>

          <div className="flex flex-col items-center justify-center gap-3 w-full">
            <Button size="lg" asChild className="w-full">
              <Link to="/">Return Home</Link>
            </Button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-bgblue p-6 text-twhite font-minecraft">
      <Background />

      <section className="w-fit relative z-10 flex max-w-5xl flex-col items-center gap-3 text-center">
        <h1 className="text-shadow-layer text-shadow-8 text-7xl md:text-8xl md:leading-none text-kinda-yellow text-stroke-10 text-stroke-lighter-yellow">
          Error!
        </h1>

        <p className="max-w-2xl font-geologica text-base md:text-lg text-lighter-yellow">
          Something unexpected happened. Please try again in a moment.
        </p>

        <div className="flex flex-col items-center justify-center gap-3 w-full">
          <Button size="lg" asChild className="w-full">
            <Link to="/">Return Home</Link>
          </Button>
        </div>

        {stack && (
          <pre className="mt-2 w-full max-w-3xl overflow-x-auto rounded-md bg-black/35 p-4 text-left text-xs md:text-sm font-geologica">
            <code>{details}</code>
            <code>{"\n" + stack}</code>
          </pre>
        )}
      </section>
    </main>
  );
}

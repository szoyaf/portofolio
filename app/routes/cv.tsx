import { useLoaderData, Link } from "react-router";
import type { LoaderFunctionArgs } from "react-router";

type CvLoaderData = {
  pdfUrl: string;
};

export async function loader({}: LoaderFunctionArgs): Promise<CvLoaderData> {
  return {
    pdfUrl: "/ShaneyZoyaFiandi_CV.pdf",
  };
}

export default function CvRoute() {
  const { pdfUrl } = useLoaderData<typeof loader>();

  return (
    <main className="min-h-screen w-full bg-bgblue p-3 md:p-4 font-minecraft text-twhite">
      <div className="mx-auto flex min-h-[calc(100vh-1.5rem)] w-full max-w-6xl flex-col overflow-hidden rounded-pixel-lg bg-blue box-shadow-pixel-10 box-shadow-dark-blue box-shadow-opacity-50 inner-shadow-pixel inner-shadow-pixel-both-10 inner-shadow-pos-light-blue inner-shadow-pos-opacity-100 inner-shadow-neg-black inner-shadow-neg-opacity-25 md:min-h-[calc(100vh-2rem)]">
        <div className="flex items-center justify-between gap-3 border-b border-light-blue/40 px-4 py-3">
          <div className="text-h6 md:text-h5 underline-dots underline-dots-twhite">
            CV Preview
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="text-p1 underline-dots underline-dots-light-blue"
            >
              Back home
            </Link>
          </div>
        </div>

        <iframe
          title="CV Preview"
          src={pdfUrl}
          className="h-full w-full flex-1 bg-black"
        />
      </div>
    </main>
  );
}

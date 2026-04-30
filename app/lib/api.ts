import type { PortfolioData } from "~/module/LandingModule/const";

export async function getPortfolioData(): Promise<PortfolioData> {
  const res = await fetch(
    import.meta.env.VITE_NPOINT_URL ||
      "https://api.npoint.io/0d75a20c3fe50146214a",
  );
  return res.json();
}

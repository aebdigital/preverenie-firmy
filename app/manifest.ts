import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Preverenie firmy",
    short_name: "Preverenie firmy",
    description:
      "Preverenie firmy, compliance, optimalizácia procesov a korporátne zmeny pod vedením LegisPro, s.r.o.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#050505",
    lang: "sk"
  };
}

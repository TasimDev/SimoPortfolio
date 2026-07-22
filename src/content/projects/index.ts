import type { Project } from "@/types/content";
import { bhbAesthetics } from "./bhb-aesthetics";
import { bulgarianSparkExhibition } from "./bulgarian-spark-exhibition";
import { drinkMeBg } from "./drinkme-bg";
import { lailaSikander } from "./laila-sikander";
import { milenaHarizanova } from "./milena-harizanova";
import { nicheTheSystem } from "./niche-the-system";

export const projects: Project[] = [
  lailaSikander,
  drinkMeBg,
  milenaHarizanova,
  bhbAesthetics,
  nicheTheSystem,
  bulgarianSparkExhibition,
].sort((first, second) => first.order - second.order);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

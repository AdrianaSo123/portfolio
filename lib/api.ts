import { systems, SystemProject } from "@/data/projects";

/**
 * Repository Pattern: Abstracting data fetching away from the UI.
 * This allows seamless future migration to Headless CMS (e.g., Sanity) 
 * without modifying the page components.
 */
export async function getSystems(): Promise<SystemProject[]> {
  // Simulating network delay to prove Suspense boundaries work
  return new Promise((resolve) => setTimeout(() => resolve(systems), 700));
}

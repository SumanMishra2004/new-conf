export const projectId = (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'demoprojectid').trim();
export const dataset = (process.env.NEXT_PUBLIC_SANITY_DATASET || 'production').trim();
export const apiVersion = (process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-01').trim();
export const useCdn = false;

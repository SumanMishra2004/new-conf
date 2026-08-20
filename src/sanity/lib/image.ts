import createImageUrlBuilder from '@sanity/image-url';
import { projectId, dataset } from '../env';

const builder = createImageUrlBuilder({ projectId: projectId || 'demo', dataset: dataset || 'production' });

export function urlFor(source: any) {
  return builder.image(source);
}

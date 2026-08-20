import { urlFor } from '@/sanity/lib/image';

export interface OptimizationResult {
  valid: boolean;
  error?: string;
  file?: File;
}

export function validateImageUpload(file: File): OptimizationResult {
  const MAX_BYTES = 10 * 1024 * 1024; // 10 MB limit
  const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

  if (file.size > MAX_BYTES) {
    return {
      valid: false,
      error: 'Image size must be 10 MB or smaller.',
    };
  }

  if (!ALLOWED_TYPES.includes(file.type.toLowerCase())) {
    return {
      valid: false,
      error: 'Unsupported image format. Allowed formats: JPG, JPEG, PNG, WebP.',
    };
  }

  return { valid: true, file };
}

/**
 * Utility to process client-side image compression and convert suitable images to WebP
 */
export async function optimizeImageClient(file: File, maxWidth = 1920, quality = 0.85): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
      img.src = e.target?.result as string;
    };

    img.onload = () => {
      const canvas = document.createElement('canvas');
      let width = img.width;
      let height = img.height;

      if (width > maxWidth) {
        height = Math.round((height * maxWidth) / width);
        width = maxWidth;
      }

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Canvas context unavailable'));
        return;
      }

      ctx.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error('Image compression failed'));
          }
        },
        'image/webp',
        quality
      );
    };

    img.onerror = () => reject(new Error('Invalid image file content'));
    reader.readAsDataURL(file);
  });
}

/**
 * Generate optimized CDN image URL with width, quality, and format presets
 */
export function getOptimizedImageUrl(source: any, width = 800, quality = 80): string {
  if (!source) return '';
  try {
    return urlFor(source).width(width).quality(quality).auto('format').url();
  } catch {
    return '';
  }
}

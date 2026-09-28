import { revalidatePath } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';

/**
 * On-demand revalidation webhook for Sanity Studio.
 *
 * Configure a Sanity webhook that sends a POST to:
 *   https://<your-domain>/api/revalidate?secret=<SANITY_REVALIDATE_SECRET>
 *
 * Set SANITY_REVALIDATE_SECRET in your .env (and in your hosting provider).
 * Leave it unset (or set to an empty string) to disable secret checking
 * during local development.
 */
export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;

  // Validate the secret token when one is configured
  if (secret) {
    const { searchParams } = new URL(request.url);
    if (searchParams.get('secret') !== secret) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
    }
  }

  try {
    // Revalidate the home page — covers all Sanity-driven content
    revalidatePath('/');
    // Also revalidate other CMS-driven pages
    revalidatePath('/gallery');
    revalidatePath('/publications');

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      message: 'Revalidated / successfully',
    });
  } catch (err) {
    return NextResponse.json(
      { message: 'Error revalidating', error: String(err) },
      { status: 500 }
    );
  }
}

// Allow GET for easy browser testing: /api/revalidate?secret=xxx
export async function GET(request: NextRequest) {
  return POST(request);
}

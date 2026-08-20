import { getSiteSettings, getGalleryAlbums } from '@/lib/sanity/queries';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { getOptimizedImageUrl } from '@/lib/media/optimizer';
import { Image as ImageIcon, Camera } from 'lucide-react';
import { notFound } from 'next/navigation';

export default async function GalleryPage() {
  const [siteSettings, albums] = await Promise.all([getSiteSettings(), getGalleryAlbums()]);

  const isGalleryEnabled = siteSettings?.enableGalleryPage ?? true;

  if (!isGalleryEnabled) {
    notFound();
  }

  const activeAlbums = albums.filter((a) => a.enable !== false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      <Navbar settings={siteSettings} />

      <main className="flex-1 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <Camera className="w-3.5 h-3.5 text-violet-500" />
              <span>Memories</span>
            </div>
            <h1
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Conference Gallery
            </h1>
            <p className="mt-4 text-slate-500 text-base sm:text-lg">
              Explore key highlights, keynote moments, and interactive networking sessions from our
              conferences.
            </p>
          </div>

          {activeAlbums.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center max-w-xl mx-auto shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
                <ImageIcon className="w-7 h-7 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No Gallery Albums Yet</h3>
              <p className="text-slate-500 text-sm">
                Conference photo albums will be published soon by the event committee.
              </p>
            </div>
          ) : (
            <div className="space-y-14">
              {activeAlbums.map((album) => {
                const activeImages = (album.images || []).filter((img) => img.enable !== false);

                return (
                  <div
                    key={album._id}
                    className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm"
                  >
                    <div className="mb-8 pb-5 border-b border-slate-100 flex items-start justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900">{album.albumName}</h2>
                        {album.description && (
                          <p className="text-slate-500 text-sm mt-1">{album.description}</p>
                        )}
                      </div>
                      <span className="shrink-0 text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                        {activeImages.length} photos
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {activeImages.map((imgItem, idx) => {
                        const imgUrl = getOptimizedImageUrl(imgItem.image, 600, 85);

                        return (
                          <div
                            key={imgItem._key || idx}
                            className="group relative bg-slate-100 border border-slate-200 rounded-xl overflow-hidden hover:border-blue-300 hover:shadow-md transition-all duration-300 flex flex-col"
                          >
                            <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-200">
                              {imgUrl ? (
                                <Image
                                  src={imgUrl}
                                  alt={imgItem.altText || album.albumName}
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-slate-400">
                                  <ImageIcon className="w-8 h-8" />
                                </div>
                              )}
                            </div>
                            {(imgItem.caption || imgItem.altText) && (
                              <div className="p-3 bg-white text-xs text-slate-600 border-t border-slate-100">
                                <p className="line-clamp-2 font-medium">{imgItem.caption || imgItem.altText}</p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>

      <Footer settings={siteSettings} />
    </div>
  );
}

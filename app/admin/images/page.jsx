import ImageUploader from '@/components/admin/ImageUploader';
import { list } from '@vercel/blob';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

export default async function ImagesPage() {
  // Fetch all images from Vercel Blob
  const { blobs } = await list();
  
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Image Management</h1>
      
      <div className="mb-10">
        <ImageUploader />
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">Uploaded Images</h2>
        
        {blobs.length === 0 ? (
          <p className="text-gray-500">No images uploaded yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blobs.map((blob) => (
              <div key={blob.url} className="border rounded-lg overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={blob.url}
                    alt={blob.pathname}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium truncate">{blob.pathname}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(blob.uploadedAt).toLocaleDateString()}
                  </p>
                  <div className="mt-2 flex justify-between">
                    <a
                      href={blob.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 hover:underline"
                    >
                      View
                    </a>
                    <button
                      // TODO: Implement delete functionality
                      className="text-xs text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 
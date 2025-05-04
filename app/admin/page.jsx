export default function AdminDashboard() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Images</h2>
          <p className="text-gray-600 mb-4">
            Upload and manage images for your website.
          </p>
          <a
            href="/admin/images"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Manage Images
          </a>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Blog Posts</h2>
          <p className="text-gray-600 mb-4">
            Create and edit blog posts for your website.
          </p>
          <a
            href="/admin/blog"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Manage Blog
          </a>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Pages</h2>
          <p className="text-gray-600 mb-4">
            Create and edit pages for your website.
          </p>
          <a
            href="/admin/pages"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Manage Pages
          </a>
        </div>
      </div>
    </div>
  );
} 
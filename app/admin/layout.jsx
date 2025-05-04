export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h1 className="text-xl font-bold mb-6">Admin Panel</h1>
        <nav>
          <ul className="space-y-2">
            <li>
              <a 
                href="/admin" 
                className="block py-2 px-4 rounded hover:bg-gray-700"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a 
                href="/admin/images" 
                className="block py-2 px-4 rounded hover:bg-gray-700"
              >
                Images
              </a>
            </li>
            <li>
              <a 
                href="/admin/blog" 
                className="block py-2 px-4 rounded hover:bg-gray-700"
              >
                Blog Posts
              </a>
            </li>
            <li>
              <a 
                href="/admin/pages" 
                className="block py-2 px-4 rounded hover:bg-gray-700"
              >
                Pages
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      
      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
} 
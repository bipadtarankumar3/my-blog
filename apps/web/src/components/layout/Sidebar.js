import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="admin-sidebar">
      <h2>AI Blog</h2>

      <nav>
        <Link href="/admin/dashboard">Dashboard</Link>
        <Link href="/admin/posts">Posts</Link>
        <Link href="/admin/categories">Categories</Link>
        <Link href="/admin/menus">Menus</Link>
        <Link href="/admin/ai/settings">AI Settings</Link>
        <Link href="/admin/media">Media</Link>
        <Link href="/admin/seo">SEO</Link>
        <Link href="/admin/users">Users</Link>
      </nav>
    </aside>
  );
}

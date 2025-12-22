import Link from "next/link";

export default function PublicHeader() {
  return (
    <header className="site-header">
      <Link href="/">AI Blog</Link>
      <nav>
        <Link href="/category/technology">Technology</Link>
        <Link href="/category/finance">Finance</Link>
      </nav>
    </header>
  );
}

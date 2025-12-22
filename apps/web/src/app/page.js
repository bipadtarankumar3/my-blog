import PublicHeader from "@/components/layout/PublicHeader";
import PublicFooter from "@/components/layout/PublicFooter";

export default function HomePage() {
  return (
    <>
      <PublicHeader />
      <main className="container">
        <h1>Latest Blogs</h1>
      </main>
      <PublicFooter />
    </>
  );
}

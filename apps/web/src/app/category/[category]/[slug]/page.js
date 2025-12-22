export default function BlogDetail({ params }) {
  return (
    <div>
      <h1>{params.slug}</h1>
      <p>Blog content here</p>
    </div>
  );
}

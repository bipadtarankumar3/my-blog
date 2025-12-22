export default function CreatePost() {
  return (
    <div>
      <h1>Create Post</h1>

      <input placeholder="Title" />
      <textarea placeholder="Content" rows={10}></textarea>

      <button>Create</button>
    </div>
  );
}

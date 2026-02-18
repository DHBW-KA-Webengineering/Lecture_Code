export default async function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const blogContent = getContentFromServer(id);
  return (
    <>
      <h1>Blog Post</h1>

      <span>{blogContent}</span>
    </>
  );
}
function getContentFromServer(id: string) {
  return "Inhalt des Blogposts mit der ID: " + id;
}

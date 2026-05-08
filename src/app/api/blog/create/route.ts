export async function POST(req: Request) {
  try {
    const { title, content, authorId } = await req.json();
    if (!title || !content || !authorId) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
        },
      );
    }
    // Here you would typically save the blog post to your database
    console.log("Blog post created:", { title, content, authorId });
    return new Response(
      JSON.stringify({ message: "Blog post created successfully" }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    console.error("Error creating blog post:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

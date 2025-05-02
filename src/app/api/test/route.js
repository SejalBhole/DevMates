import dbConnect from "@/lib/mongodb";

export async function GET() {
  try {
    await dbConnect();
    return new Response(JSON.stringify({ message: "Connected to MongoDB" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Connection failed" }), {
      status: 500,
    });
  }
}

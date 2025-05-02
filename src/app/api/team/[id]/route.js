import dbConnect from "@/lib/mongodb";
import TeamMember from "@/models/TeamMember";

export async function DELETE(req, { params }) {
  const { id } = params;
  try {
    await dbConnect();

    const deletedMember = await TeamMember.findByIdAndDelete(id);

    if (!deletedMember) {
      return new Response(
        JSON.stringify({ error: "Member not found" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ message: "Member deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
    const { id } = params;
    const body = await req.json();
  
    try {
      await dbConnect();
  
      const updatedMember = await TeamMember.findByIdAndUpdate(id, body, {
        new: true, 
      });
  
      if (!updatedMember) {
        return new Response(
          JSON.stringify({ error: "Member not found" }),
          { status: 404 }
        );
      }
  
      return new Response(
        JSON.stringify(updatedMember),
        { status: 200 }
      );
    } catch (error) {
      return new Response(
        JSON.stringify({ error: error.message }),
        { status: 500 }
      );
    }
  }

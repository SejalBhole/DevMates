export default function Navbar() {
    return (
      <nav className="bg-black bg-opacity-70 text-white px-6 py-4 shadow-md flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-xl font-bold">DevConnect</h1>
        <div className="space-x-4">
          <a href="#add" className="hover:text-yellow-300">Add Member</a>
          <a href="#team" className="hover:text-yellow-300">Team</a>
        </div>
      </nav>
    );
  }
  
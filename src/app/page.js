"use client";
import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Home() {
  const [form, setForm] = useState({
    name: '',
    role: '',
    techStack: '',
    available: true,
  });

  const [team, setTeam] = useState([]);
  const [editingMember, setEditingMember] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch('/api/team')
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const memberData = {
      ...form,
      techStack: form.techStack.split(',').map((s) => s.trim()),
    };
    let res;
    if (editingMember) {
      res = await fetch(`/api/team/${editingMember}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(memberData),
      });
      const updated = await res.json();
      setTeam((prev) =>
        prev.map((member) => (member._id === editingMember ? updated : member))
      );
      setEditingMember(null);
    } else {
      res = await fetch('/api/team', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(memberData),
      });
      const newMember = await res.json();
      setTeam((prev) => [...prev, newMember]);
    }
    setForm({ name: '', role: '', techStack: '', available: true });
  };

  const handleEdit = (member) => {
    setForm({
      name: member.name,
      role: member.role,
      techStack: member.techStack.join(', '),
      available: member.available,
    });
    setEditingMember(member._id);
  };

  const handleDelete = async (id) => {
    const res = await fetch(`/api/team/${id}`, { method: 'DELETE' });
    if (res.ok) {
      setTeam(team.filter((member) => member._id !== id));
    }
  };

  const filteredTeam = team.filter((member) =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.techStack.join(', ').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (

    <>
      <Head>
        <title>DevConnect | Build Your Dev Team</title>
        <meta name="description" content="Create and manage your tech team dynamically with DevConnect." />
        <meta name="keywords" content="Next.js, MongoDB, team manager, developers, full stack app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <div
        className="h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?technology,developer')" }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-xl">
          <h1 className="text-4xl font-bold mb-4">Build Your Dream Dev Team</h1>
          <p className="text-lg">Quickly manage and collaborate with tech experts.</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Add Team Member</h1>

        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-md">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full border p-2 rounded" required />
          <input name="role" value={form.role} onChange={handleChange} placeholder="Role" className="w-full border p-2 rounded" required />
          <input name="techStack" value={form.techStack} onChange={handleChange} placeholder="Tech Stack (comma separated)" className="w-full border p-2 rounded" required />
          <label className="flex items-center space-x-2">
            <input type="checkbox" name="available" checked={form.available} onChange={handleChange} />
            <span>Available</span>
          </label>
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-all">
            {editingMember ? 'Update' : 'Add'}
          </button>
        </form>

        {/* Search Bar */}
        <div className="mt-10 mb-4">
          <input
            type="text"
            placeholder="Search by name, role, or tech..."
            className="w-full border p-2 rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <h2 className="text-xl font-semibold mt-6 mb-4">Team Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTeam.map((member) => (
            <div key={member._id} className="border p-4 rounded-xl shadow hover:shadow-lg transition-all bg-white">
              <h3 className="text-lg font-bold text-blue-800">{member.name}</h3>
              <p className="text-sm text-gray-700">{member.role}</p>
              <p className="text-sm text-gray-500 mt-1">Tech Stack: {member.techStack.join(', ')}</p>
              <p className="text-sm mt-1">Status: <span className={member.available ? 'text-green-600' : 'text-red-600'}>{member.available ? 'Available' : 'Unavailable'}</span></p>
              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => handleEdit(member)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(member._id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

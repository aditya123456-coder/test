import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAsyncError } from 'react-router-dom';
const Home = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState("");
    const [students, setStudents] = useState([]);


    useEffect(() => {
        const getStudents = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/students");

                setStudents(res.data.data);
                console.log(students);
            } catch (err) {
                console.log(err);
            } finally {

            }
        };

        getStudents();
    }, []);


    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-10">
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* LEFT — User Form */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">

                    <div className="mb-8">
                        <h1 className="text-3xl font-bold tracking-tight text-white">
                            Welcome Home
                        </h1>

                        <p className="mt-2 text-sm text-slate-400">
                            Enter your personal information
                        </p>
                    </div>

                    <form className="space-y-6"
                        onSubmit={async (e) => {
                            e.preventDefault();
                            console.log("Submit clicked");

                            try {
                                const response = await axios.post(
                                    "http://localhost:5000/api/students",
                                    {
                                        name,
                                        email,
                                        department
                                    }
                                );

                                console.log("Backend response:", response.data);
                                if (response.data.success) {
                                    alert(response.data.message);
                                } else {
                                    alert(response.data.message);
                                }

                            } catch (error) {
                                console.error("Login error:", error);
                            } finally {
                            }
                        }}
                    >

                        {/* Username */}
                        <div>
                            <label
                                htmlFor="username"
                                className="mb-2 block text-sm font-medium text-slate-200"
                            >
                                User Name
                            </label>

                            <input
                                id="username"
                                type="text"
                                placeholder="Enter your username"
                                className="w-full rounded-xl border border-white/10 bg-slate-900/70
                         px-4 py-3 text-white placeholder-slate-500
                         outline-none transition
                         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium text-slate-200"
                            >
                                Email Address
                            </label>

                            <input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                className="w-full rounded-xl border border-white/10 bg-slate-900/70
                         px-4 py-3 text-white placeholder-slate-500
                         outline-none transition
                         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>

                        {/* Department */}
                        <div>
                            <label
                                htmlFor="department"
                                className="mb-2 block text-sm font-medium text-slate-200"
                            >
                                Department
                            </label>

                            <input
                                id="department"
                                type="text"
                                placeholder="Enter your department"
                                className="w-full rounded-xl border border-white/10 bg-slate-900/70
                         px-4 py-3 text-white placeholder-slate-500
                         outline-none transition
                         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                                value={department}
                                onChange={(e) => {
                                    setDepartment(e.target.value);
                                }}
                            />
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full rounded-xl bg-indigo-600 px-4 py-3
                       font-semibold text-white shadow-lg
                       shadow-indigo-600/20 transition
                       hover:bg-indigo-500"
                        >
                            Add Student
                        </button>

                    </form>
                </div>


                {/* RIGHT — Students Table */}
                <div className="rounded-2xl border border-white/10 bg-white/5
                      p-6 shadow-2xl backdrop-blur-xl">

                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-white">
                            All Students
                        </h2>

                        <p className="mt-1 text-sm text-slate-400">
                            List of registered students
                        </p>
                    </div>

                    <div className="overflow-x-auto overflow-y-auto max-h-[450px] rounded-xl border border-white/10">
                        <table className="w-full text-left text-sm">
                            <thead className="sticky top-0 bg-slate-900 text-xs uppercase text-slate-400">
                                <tr>
                                    <th className="px-5 py-4">ID</th>
                                    <th className="px-5 py-4">Name</th>
                                    <th className="px-5 py-4">Email</th>
                                    <th className="px-5 py-4">Department</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-white/10">
                                {students.map((student) => (
                                    <tr
                                        key={student.id}
                                        className="transition hover:bg-white/5"
                                    >
                                        <td className="px-5 py-4 text-slate-400">
                                            {student.id}
                                        </td>

                                        <td className="px-5 py-4 font-medium text-white">
                                            {student.name}
                                        </td>

                                        <td className="px-5 py-4 text-slate-400">
                                            {student.email}
                                        </td>

                                        <td className="px-5 py-4 text-slate-400">
                                            {student.department}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Home
import { useState } from "react";

export function CustomSignInForm({ signIn }: any) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            signIn({ username, password });
          }}
          className="bg-white p-6 rounded-2xl shadow-lg w-96"
        >
          <h1 className="text-2xl font-bold text-center mb-4">Welcome Back</h1>
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              className="w-full border rounded p-2"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your email"
              type="text"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Password</label>
            <input
              className="w-full border rounded p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              type="password"
              required
            />
          </div>
          <button
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            type="submit"
          >
            Sign In
          </button>
        </form>
      </div>
    );
  }
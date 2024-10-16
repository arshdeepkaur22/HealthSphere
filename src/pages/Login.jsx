import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Clear error message if validation passes
    setError("");

    // Here you can send the login data to an API for authentication
    // Example: axios.post('/api/login', { email, password })
    console.log("Submitted", { email, password });
  };

  return (
    <div className="flex items-center justify-center p-10 bg-backgroundcolour ">
      <div className="bg-white px-40 py-10 rounded-2xl shadow-md min-w-96 mb-16">
        <h2 className="text-4xl font-semibold my-8 font-sora text-center ">WELCOME BACK</h2>
        
        {error && <div className="text-red-500 mb-4">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-2xl focus:outline-none focus:ring-1 focus:ring-blue-100"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-2xl focus:outline-none focus:ring-1 focus:ring-blue-100"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-2xl hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

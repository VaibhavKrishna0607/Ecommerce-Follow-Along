// import React, { useState } from "react";

// function LoginPage() {
//   const [credentials, setCreds] = useState({
//     username: '',
//     password: '',
//     rememberMe: false,
//   });

//   const handleChange = (event) => {
//     const { name, value, type, checked } = event.target;
//     setCreds({
//       ...credentials,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleClickLogin = (event) => {
//     event.preventDefault();
//     // Add Axios for login functionality
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-6">
//       <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
//         <div className="text-center">
//           <h2 className="text-3xl font-bold text-gray-800 mb-6">LOGIN</h2>
//         </div>
//         <form className="space-y-6" onSubmit={handleClickLogin}>
//           <div>
//             <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
//               Username
//             </label>
//             <input
//               type="text"
//               name="username"
//               id="username"
//               required
//               value={credentials.username}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
//               placeholder="Enter your username"
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               required
//               value={credentials.password}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
//               placeholder="Enter your password"
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <label className="flex items-center text-sm text-gray-700">
//               <input
//                 type="checkbox"
//                 name="rememberMe"
//                 checked={credentials.rememberMe}
//                 onChange={handleChange}
//                 className="mr-2"
//               />
//               Remember me
//             </label>
//             <a href="#" className="text-sm text-purple-600 hover:text-purple-500">
//               Forgot?
//             </a>
//           </div>
//           <button
//             type="submit"
//             className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           >
//             LOGIN
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;






import React, { useState } from "react";

function LoginPage() {
  const [credentials, setCreds] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCreds({
      ...credentials,
      [name]: value,
    });
  };

  const handleClickLogin = (event) => {
    event.preventDefault();
    // Add Axios for login functionality
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-12">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-xl shadow-lg">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Sign in to your account</h2>
        </div>

        {/* Login Form */}
        <form className="space-y-6" onSubmit={handleClickLogin}>
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
              value={credentials.email}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-3 border rounded-lg shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
              required
              value={credentials.password}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-3 border rounded-lg shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter your password"
            />
            <div className="text-right mt-2">
              <a href="#" className="text-sm text-purple-600 hover:text-purple-500">
                Forgot password?
              </a>
            </div>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
function UserLogin() {
  return (
    <div className="form">
      <h2>User Login</h2>

      <input
        type="email"
        placeholder="Email"
      />

      <input
        type="password"
        placeholder="Password"
      />

      <button>Login</button>
    </div>
  );
}

export default UserLogin;
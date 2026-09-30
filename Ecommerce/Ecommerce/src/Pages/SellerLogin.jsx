function SellerLogin() {
  return (
    <div className="form">
      <h2>Seller Login</h2>

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

export default SellerLogin;
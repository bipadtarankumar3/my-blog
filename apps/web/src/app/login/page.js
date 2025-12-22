"use client";

export default function LoginPage() {
  return (
    <div className="login-page">
      <form className="login-box">
        <h1>Admin Login</h1>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

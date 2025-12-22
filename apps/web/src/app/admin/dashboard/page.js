export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Posts</h3>
          <p>120</p>
        </div>
        <div className="stat-card">
          <h3>AI Posts Today</h3>
          <p>8</p>
        </div>
        <div className="stat-card">
          <h3>Categories</h3>
          <p>24</p>
        </div>
        <div className="stat-card">
          <h3>Total Views</h3>
          <p>1.2M</p>
        </div>
      </div>
    </div>
  );
}

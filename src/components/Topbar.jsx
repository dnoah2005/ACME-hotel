export function Topbar({ onAction }) {
  return (
    <header className="topbar">
      <div className="search">
        Search
        <span>Search guests, rooms, reservations...</span>
        <kbd>Ctrl K</kbd>
      </div>
      <div className="top-actions">
        <button className="circle">
          Alerts<em>3</em>
        </button>
        <button className="circle">Clock</button>
        <div className="date">
          <b>Tuesday, Oct 27</b>
          <small>78 F · Santa Monica, CA</small>
        </div>
        <button className="new-btn" onClick={onAction}>
          + New reservation
        </button>
      </div>
    </header>
  );
}

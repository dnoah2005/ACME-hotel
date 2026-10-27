const navigationItems = [
  ["overview", "Home", "Overview"],
  ["rooms", "Grid", "Room status"],
  ["reservations", "List", "Reservations"],
  ["guests", "Guests", "Guests"],
  ["billing", "Bill", "Billing"],
];

export function Sidebar({ active, setActive }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand-mark">A</span>
        <span>
          ACME
          <br />
          <b>HOTELS</b>
        </span>
      </div>
      <div className="property">
        <span>SEASIDE HOUSE</span>
        <i>v</i>
      </div>
      <nav className="nav">
        {navigationItems.map(([id, icon, label]) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            className={active === id ? "active" : ""}
          >
            <span className="icon">{icon}</span>
            {label}
          </button>
        ))}
      </nav>
      <div className="side-bottom">
        <button>
          <span className="icon">?</span>Help center
        </button>
        <button>
          <span className="icon">Settings</span>Front desk settings
        </button>
        <div className="profile">
          <div className="avatar">AM</div>
          <div>
            <b>Alex Morgan</b>
            <small>Front desk</small>
          </div>
          <span>v</span>
        </div>
      </div>
    </aside>
  );
}

export function Rooms({ setModal }) {
  return (
    <main className="content">
      <div className="page-head">
        <div>
          <p className="eyebrow">PROPERTY MANAGEMENT</p>
          <h1>Room status</h1>
          <p className="muted">
            A real-time view of every room at Seaside House.
          </p>
        </div>
        <button className="new-btn">+ Block room</button>
      </div>
      <div className="filters">
        <button className="selected">All floors</button>
        {[1, 2, 3, 4, 5].map((floor) => (
          <button key={floor}>Floor {floor}</button>
        ))}
        <span />
        <button>Search room</button>
      </div>
      <section className="room-list">
        {[1, 2, 3, 4, 5].map((floor) => (
          <Floor key={floor} floor={floor} setModal={setModal} />
        ))}
      </section>
    </main>
  );
}

function Floor({ floor, setModal }) {
  return (
    <div className="floor">
      <div className="floor-label">
        Floor {floor}
        <small>12 rooms</small>
      </div>
      <div className="mini-rooms">
        {Array.from({ length: 12 }, (_, index) => {
          const number = `${floor}${String(index + 1).padStart(2, "0")}`;
          const status =
            index === 0 || index === 8
              ? "Occupied"
              : index === 2
                ? "Cleaning"
                : "Available";
          return (
            <button
              key={number}
              onClick={() =>
                setModal({
                  number,
                  status,
                  view: index < 6 ? "Ocean" : "Pool",
                  type: index % 2 ? "Queen" : "King",
                })
              }
              className={`mini ${status.toLowerCase()}`}
            >
              <b>{number}</b>
              <span>{status}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

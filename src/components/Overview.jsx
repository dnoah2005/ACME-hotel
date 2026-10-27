import { reservations, rooms } from "../data/hotelData";

function Stat({ label, value, detail, tone }) {
  return (
    <div className="stat">
      <div>
        <p>{label}</p>
        <h2>{value}</h2>
        <small className={tone}>Up {detail}</small>
      </div>
      <div className={`stat-icon ${tone}`}>
        {label === "Today’s revenue" ? "$" : "*"}
      </div>
    </div>
  );
}

function RoomCard({ room, setModal }) {
  return (
    <button onClick={() => setModal(room)} className="room-card">
      <div className="room-head">
        <b>{room.number}</b>
        <span className={room.color}>{room.view} view</span>
      </div>
      <p>{room.type === "King" ? "Single king" : "Double queen"}</p>
      <div className="room-foot">
        <span className={`pill ${room.status.toLowerCase()}`}>
          {room.status}
        </span>
        {room.guest && (
          <small>
            {room.guest}
            <br />
            {room.checkout}
          </small>
        )}
      </div>
    </button>
  );
}

function Activity({ dot, title, detail }) {
  return (
    <div className="activity-row">
      <i className={dot} />
      <div>
        <b>{title}</b>
        <small>{detail}</small>
      </div>
    </div>
  );
}

export function Overview({ setModal, setActive }) {
  return (
    <main className="content">
      <div className="page-head">
        <div>
          <p className="eyebrow">TODAY AT A GLANCE</p>
          <h1>
            Good morning, Alex <span>*</span>
          </h1>
          <p className="muted">
            Here’s what’s happening at Seaside House today.
          </p>
        </div>
        <button className="outline" onClick={() => setActive("rooms")}>
          View room grid →
        </button>
      </div>
      <section className="stats">
        <Stat
          label="Occupancy"
          value="76%"
          detail="8 rooms from yesterday"
          tone="green"
        />
        <Stat label="Arrivals" value="12" detail="4 checked in" tone="blue" />
        <Stat
          label="Departures"
          value="8"
          detail="3 checked out"
          tone="orange"
        />
        <Stat
          label="Today’s revenue"
          value="$8,640"
          detail="12% vs. last Tuesday"
          tone="green"
        />
      </section>
      <section className="split">
        <div className="panel arrivals">
          <div className="panel-title">
            <div>
              <h3>Today’s arrivals</h3>
              <p>12 guests expected</p>
            </div>
            <button onClick={() => setActive("reservations")}>
              View all →
            </button>
          </div>
          {reservations.map((reservation, index) => (
            <div className="arrival" key={reservation.id}>
              <div className="guest-dot">{["OB", "ML", "NC"][index]}</div>
              <div>
                <b>{reservation.guest}</b>
                <small>
                  {reservation.id} · {reservation.dates}
                </small>
              </div>
              <div className="arrival-room">
                <b>Room {reservation.room}</b>
                <small>
                  {index === 1
                    ? "Pool · King"
                    : `Ocean · ${index === 0 ? "King" : "Queen"}`}
                </small>
              </div>
              <span
                className={`pill ${reservation.status === "Checked in" ? "checked" : "upcoming"}`}
              >
                {reservation.status}
              </span>
              {reservation.status === "Upcoming" && (
                <button
                  className="checkin"
                  onClick={() => setModal(reservation)}
                >
                  Check in
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="panel activity">
          <div className="panel-title">
            <div>
              <h3>Recent activity</h3>
              <p>Live property updates</p>
            </div>
            <button>View log →</button>
          </div>
          <div className="timeline">
            <Activity
              dot="green"
              title="Olivia Bennett checked in"
              detail="Room 201 · 8 minutes ago"
            />
            <Activity
              dot="orange"
              title="Room 203 marked for cleaning"
              detail="Housekeeping · 24 minutes ago"
            />
            <Activity
              dot="blue"
              title="New reservation received"
              detail="Naomi Carter · Room 304 · 36 minutes ago"
            />
            <Activity
              dot="purple"
              title="Breakfast charge added"
              detail="Marcus Lee · Room 207 · $28.00"
            />
          </div>
        </div>
      </section>
      <section className="panel room-panel">
        <div className="panel-title">
          <div>
            <h3>Room status</h3>
            <p>Floor 2 · 8 rooms shown</p>
          </div>
          <div className="legend">
            <span>
              <i className="available" />
              Available
            </span>
            <span>
              <i className="occupied" />
              Occupied
            </span>
            <span>
              <i className="cleaning" />
              Cleaning
            </span>
          </div>
        </div>
        <div className="room-grid">
          {rooms.map((room) => (
            <RoomCard key={room.number} room={room} setModal={setModal} />
          ))}
        </div>
      </section>
    </main>
  );
}

import { reservations } from "../data/hotelData";

const allReservations = [
  ...reservations,
  {
    id: "ACM-4819",
    guest: "David Kim",
    room: "110",
    dates: "Oct 25 - Oct 28",
    amount: "$450.00",
    status: "Checked out",
  },
];

export function Reservations({ setModal }) {
  return (
    <main className="content">
      <div className="page-head">
        <div>
          <p className="eyebrow">GUEST STAYS</p>
          <h1>Reservations</h1>
          <p className="muted">
            Manage upcoming, current, and past guest stays.
          </p>
        </div>
        <button
          className="new-btn"
          onClick={() => setModal({ newReservation: true })}
        >
          + New reservation
        </button>
      </div>
      <div className="table-panel">
        <div className="table-filters">
          <button className="selected">All stays</button>
          <button>Arriving today</button>
          <button>In house</button>
          <button>Departing today</button>
          <span />
          <button>Search</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>RESERVATION</th>
              <th>GUEST</th>
              <th>ROOM</th>
              <th>STAY</th>
              <th>TOTAL</th>
              <th>STATUS</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {allReservations.map((reservation) => (
              <tr key={reservation.id}>
                <td>
                  <b>{reservation.id}</b>
                </td>
                <td>{reservation.guest}</td>
                <td>#{reservation.room}</td>
                <td>{reservation.dates}</td>
                <td>{reservation.amount}</td>
                <td>
                  <span
                    className={`pill ${reservation.status.toLowerCase().replace(" ", "")}`}
                  >
                    {reservation.status}
                  </span>
                </td>
                <td>
                  <button onClick={() => setModal(reservation)}>...</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

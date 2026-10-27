export function Modal({ item, close }) {
  const isNew = item?.newReservation;
  const title = isNew
    ? "New reservation"
    : (item?.guest ?? `Room ${item?.number}`);
  return (
    <div className="overlay" onMouseDown={close}>
      <div className="modal" onMouseDown={(event) => event.stopPropagation()}>
        <button className="close" onClick={close}>
          x
        </button>
        <p className="eyebrow">
          {isNew
            ? "CREATE A STAY"
            : item?.guest
              ? "GUEST STAY"
              : "ROOM DETAILS"}
        </p>
        <h2>{title}</h2>
        {isNew ? (
          <NewReservationForm close={close} />
        ) : (
          <StayDetails item={item} />
        )}
      </div>
    </div>
  );
}

function NewReservationForm({ close }) {
  return (
    <>
      <div className="form-row">
        <label>
          Guest name
          <input placeholder="Full name" />
        </label>
        <label>
          Arrival
          <input type="date" defaultValue="2026-10-29" />
        </label>
      </div>
      <div className="form-row">
        <label>
          Departure
          <input type="date" defaultValue="2026-11-01" />
        </label>
        <label>
          Room preference
          <select>
            <option>Ocean · Single king</option>
            <option>Ocean · Double queen</option>
            <option>Pool · Single king</option>
          </select>
        </label>
      </div>
      <button className="confirm" onClick={close}>
        Find available room
      </button>
    </>
  );
}

function StayDetails({ item }) {
  return (
    <div className="modal-body">
      <div className="detail-grid">
        <span>
          Status <b className="pill available">{item?.status || "Upcoming"}</b>
        </span>
        <span>
          Room <b>{item?.room || item?.number}</b>
        </span>
        <span>
          View <b>{item?.view || "Ocean"} view</b>
        </span>
        <span>
          Bed <b>{item?.type === "Queen" ? "Double queen" : "Single king"}</b>
        </span>
      </div>
      <div className="modal-actions">
        <button className="outline">View reservation</button>
        <button className="confirm">
          {item?.status === "Upcoming" ? "Check in guest" : "Manage stay"}
        </button>
      </div>
    </div>
  );
}

import { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { Modal } from "./components/Modal";
import { Overview } from "./components/Overview";
import { Reservations } from "./components/Reservations";
import { Rooms } from "./components/Rooms";
import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";
import "./styles.css";

function App() {
  const [active, setActive] = useState("overview");
  const [modal, setModal] = useState(null);

  const content = useMemo(() => {
    if (active === "rooms") {
      return <Rooms setModal={setModal} />;
    }

    if (active === "reservations") {
      return <Reservations setModal={setModal} />;
    }

    return <Overview setModal={setModal} setActive={setActive} />;
  }, [active]);

  return (
    <div className="app">
      <Sidebar active={active} setActive={setActive} />
      <div className="workspace">
        <Topbar onAction={() => setModal({ newReservation: true })} />
        {content}
      </div>
      {modal && <Modal item={modal} close={() => setModal(null)} />}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);

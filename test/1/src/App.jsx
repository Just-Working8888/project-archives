import { useState } from "react";

import "./App.css";
import Aside from "./components/Aside";
import Header from "./components/Header";
import ChatComponent from "./components/Chattt";

function App() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className="">
        <Header open={open} setOpen={setOpen} />

        <div className="flex">
          <Aside open={open} setOpen={setOpen} />
          <ChatComponent />
        </div>
      </div>
    </>
  );
}

export default App;

import { useState, Suspense } from "react";
import TabButton from "./TabButton.js";
import AngularTab from "./AngularTab.js";
import ReactTab from "./ReactTab.js";
import VueTab from "./VueTab.js";
import "./styles.css";

export default function App() {
  const [tab, setTab] = useState("react");

  return (
    <div className="App">
      <h1>useTransition</h1>
      <p style={{ marginBottom: "2rem" }}>
        <b>useTransition</b> is a React Hook that lets you update the state
        without blocking the UI.
      </p>
      <hr />

      <Suspense fallback={<h2>Loading...</h2>}>
        <div className="content-container">
          <div className="tab-conatiner">
            <TabButton
              isActive={tab === "react"}
              onClick={() => setTab("react")}
            >
              React
            </TabButton>
            &nbsp;&nbsp;&nbsp;
            <TabButton
              isActive={tab === "angular"}
              onClick={() => setTab("angular")}
            >
              Angular
            </TabButton>
            &nbsp;&nbsp;&nbsp;
            <TabButton isActive={tab === "vue"} onClick={() => setTab("vue")}>
              Vue
            </TabButton>
          </div>
          <div className="partition-line"></div>
          <div style={{ paddingLeft: "1rem" }}>
            {tab === "angular" && <AngularTab />}
            {tab === "react" && <ReactTab />}
            {tab === "vue" && <VueTab />}
          </div>
        </div>
      </Suspense>
    </div>
  );
}

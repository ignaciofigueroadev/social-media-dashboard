import React from "react";

// Component imports
import Header from "./components/Header/Header";
import Overview from "./components/Overview/Overview";
import Statistics from "./components/Statistics/Statistics";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-very-dark-blue font-inter lg:px-14">
      <Header />
      <Statistics />
      <Overview />
    </div>
  );
}

export default App;

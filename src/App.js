import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import AppRouter from "./components/AppRouter.js";
import Characters from "./components/CharacterList.js";
import Locations from "./components/LocationsList.js";
import Episodes from "./components/EpisodeList.js";

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <AppRouter />
      <Locations />
    </main>
  );
}

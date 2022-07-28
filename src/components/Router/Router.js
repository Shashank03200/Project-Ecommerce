import { Routes, Route, Navigate } from "react-router-dom";

import React from "react";
import Team from "../../pages/Team";
import Store from "../../pages/Store";
import Product from "../../pages/Product";
import JourneyPage from "../../pages/JourneyPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/store/:product/:productID" element={<Product />} />
      <Route path="team" element={<Team />} />
      <Route path="/store" element={<Store />} />
      <Route path="/journey" element={<JourneyPage />} />
      <Route path="/" element={<Navigate to="/store" />} />
    </Routes>
  );
};

export default Router;

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Layout } from "antd";

import Search from "./pages/search";
import SelectRoute from "./pages/route";
import Seat from "./pages/seat";
import Passenger from "./pages/passenger";
import Paymnet from "./pages/payment";

const MyLayout = () => {
  return (
    <Layout>
      <Layout.Content style={{ minHeight: "100vh" }}>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MyLayout />}>
          <Route path="/" element={<Search />} />
          <Route path="/2" element={<SelectRoute />} />
          <Route path="/3" element={<Seat />} />
          <Route path="/4" element={<Passenger />} />
          <Route path="/5" element={<Paymnet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

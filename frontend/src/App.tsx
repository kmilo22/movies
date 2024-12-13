import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import routes from "./routes/routes";
import Footer from "./components/footer";


const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};
export default App;
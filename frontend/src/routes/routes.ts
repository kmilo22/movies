import Home from "../pages/Home";
import AddMovie from "../pages/AddMovie";
import MovieDetails from "../pages/MovieDetails";
import Favorites from "../pages/Favorites";
import RegisterUser from "../pages/RegisterUser";
import UsersList from "../pages/UsersList";

interface Route {
  path: string;
  component: React.FC;
}

const routes: Route[] = [
  { path: "/", component: Home },
  { path: "/add-movie", component: AddMovie },
  { path: "/movie/:id", component: MovieDetails },
  { path: "/favorites", component: Favorites },
  { path: "/register-users", component: RegisterUser },
  { path: "/users", component: UsersList },
];

export default routes;
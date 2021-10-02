import Home from "../pages/Home";
import Account from "../pages/Account";

const tabRoutes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/account",
    exact: true,
    component: Account,
  },
];

export default tabRoutes;

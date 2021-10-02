import Home from "../pages/Home";
import Account from "../pages/Account";

const tabRoutes = [
  {
    path: "/:tab(home)",
    exact: true,
    component: Home,
  },
  {
    path: "/:tab(account)",
    exact: true,
    component: Account,
  },
];

export default tabRoutes;

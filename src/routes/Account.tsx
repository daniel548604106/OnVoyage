import Home from "../pages/Home";
import Account from "../pages/Account";
import Setting from "../pages/Account/Setting";

const AccountRoutes = [
  {
    path: "/account",
    exact: true,
    component: Account,
  },
  {
    path: "/account/setting",
    exact: true,
    component: Setting,
  },
];

export default AccountRoutes;

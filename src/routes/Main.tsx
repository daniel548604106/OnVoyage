import Messages from "../pages/Messages/index";
import Message from "../pages/Messages/Message";

const MainRoutes = [
  {
    path: "/messages",
    exact: true,
    component: Messages,
  },
  {
    path: "/messages/:message_id",
    exact: true,
    component: Message,
  },
];

export default MainRoutes;

import LJDiscover from "@/pages/discover";
import LJFriend from "@/pages/friend";
import LJMine from "@/pages/mine";

const routers = [
  {
    path: "/",
    exact: true,
    component: LJDiscover,
  },
  {
    path: "/mine",
    component: LJMine,
  },
  {
    path: "/friend",
    component: LJFriend,
  },
];

export default routers;

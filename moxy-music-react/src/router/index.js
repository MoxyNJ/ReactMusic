import React, { lazy } from "react";
import { Redirect } from "react-router-dom";

const LJDiscover = lazy(() => import("../pages/discover"));
const LJRecommend = lazy(() => import("@/pages/discover/c-pages/recommend"));
const LJRanking = lazy(() => import("@/pages/discover/c-pages/ranking"));
const LJSongs = lazy(() => import("@/pages/discover/c-pages/songs"));
const LJDjradio = lazy(() => import("@/pages/discover/c-pages/djradio"));
const LJArtist = lazy(() => import("@/pages/discover/c-pages/artist"));
const LJAlbum = lazy(() => import("@/pages/discover/c-pages/album"));

const LJPlayer = lazy(() => import("@/pages/player/app-player-full"));
const LJFriend = lazy(() => import("@/pages/friend"));
const LJMine = lazy(() => import("@/pages/mine"));

// import LJDiscover from "@/pages/discover";
// import LJRecommend from "@/pages/discover/c-pages/recommend";
// import LJRanking from "@/pages/discover/c-pages/ranking";
// import LJSongs from "@/pages/discover/c-pages/songs";
// import LJDjradio from "@/pages/discover/c-pages/djradio";
// import LJArtist from "@/pages/discover/c-pages/artist";
// import LJAlbum from "@/pages/discover/c-pages/album";
// import LJPlayer from "@/pages/player";
// import LJFriend from "@/pages/friend";
// import LJMine from "@/pages/mine";
const route = [
  {
    path: "/",
    exact: true,
    // component: LJDiscover,
    // 设置重定向到 discover
    render: () => <Redirect to="/discover" />,
  },
  {
    path: "/discover",
    component: LJDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: "/discover/recommend",
        component: LJRecommend,
      },
      {
        path: "/discover/ranking",
        component: LJRanking,
      },
      {
        path: "/discover/songs",
        component: LJSongs,
      },
      {
        path: "/discover/djradio",
        component: LJDjradio,
      },
      {
        path: "/discover/artist",
        component: LJArtist,
      },
      {
        path: "/discover/album",
        component: LJAlbum,
      },
      {
        path: "/discover/player",
        component: LJPlayer,
      },
    ],
  },
  {
    path: "/player",
    // 设置重定向到 discover
    render: () => <Redirect to="/discover/player" />,
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

export default route;

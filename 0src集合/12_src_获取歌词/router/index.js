import React from "react";

import LJDiscover from "@/pages/discover";
import LJRecommend from "@/pages/discover/c-pages/recommend";
import LJRanking from "@/pages/discover/c-pages/ranking";
import LJSongs from "@/pages/discover/c-pages/songs";
import LJDjradio from "@/pages/discover/c-pages/djradio";
import LJArtist from "@/pages/discover/c-pages/artist";
import LJAlbum from "@/pages/discover/c-pages/album";

import LJPlayer from "@/pages/player";
import LJFriend from "@/pages/friend";
import LJMine from "@/pages/mine";

import { Redirect } from "react-router-dom";

const routes = [
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
    ],
  },
  {
    path: "/player",
    component: LJPlayer,
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

export default routes;

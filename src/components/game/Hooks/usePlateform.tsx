import React from "react";
import useGame, { Platform } from "./useGame";
import useData from "./useData";

const usePlateform = () => useData<Platform>("/platforms/lists/parents");

export default usePlateform;

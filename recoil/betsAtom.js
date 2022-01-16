import React from "react";
import { atom } from "recoil";

const bets = atom({
    key: 'todoListState',
    default: [],
});
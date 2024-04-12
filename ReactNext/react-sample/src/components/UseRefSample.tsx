import { resolve } from "path";
import React, {useState, useRef} from "react";

const sleep = (ms: number) => new Promise((reslove) => setTimeout(resolve, ms))

import React from "react";
import { useHistory, Link, useLocation } from "react-router-dom";

import styles from "./not-found-404.module.css";

export function NotFound404() {
  return (
    <>
      <h1>Oops! 404 Error</h1>
      <p>The page you requested does not exist</p>
    </>
  );
}

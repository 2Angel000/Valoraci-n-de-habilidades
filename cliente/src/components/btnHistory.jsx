import React from "react";
import { Link } from "react-router-dom";

export default function btnHistory({ userData }) {
  return (
    <Link
      to={{
        pathname: "/print",
        state: { userData }, // Pasar userData como state
      }}
      className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
    >
      Print
    </Link>
  );
}

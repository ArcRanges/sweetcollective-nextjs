import React from "react";

export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        backgroundColor: "beige",
      }}
    >
      <span>SweetCollectiveCo</span>
      <div>
        <span style={{ marginRight: 5 }}>Home</span>
        <span style={{ marginRight: 5 }}>About</span>
        <span style={{ marginRight: 5 }}>Contact</span>
      </div>
    </div>
  );
}

import headerimg from './clean.jpg';
import React from 'react';

function Paintings() {
  return (
    <div style={{ maxWidth: "800px", margin: "auto", textAlign: "center", marginTop: 32, marginBottom: 64 }}>
      <img src={headerimg} style={{ display: "flex", width: "100%" }} alt="headerimg" />

    </div>
  );
}

export default Paintings;

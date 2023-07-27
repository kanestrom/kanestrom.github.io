import headerimg from './clean.jpg';
import React from 'react';
// Kode for å kommentere vekk: To slasher for hel linje utenfor en funksjon (javascript). Men inni en funksjon, dvs inni "return" er det HTML, og der er tegnene: {/* i starten og */} på slutten.
function Paintings() {
  return (
    <div style={{ maxWidth: "800px", margin: "auto", textAlign: "center", marginTop: 32, marginBottom: 64 }}>
{/* <h1 style={{ marginTop: 64, marginBottom: 32 }}>Malerier</h1> */}
      <img src={headerimg} style={{ display: "flex", width: "100%" }} alt="headerimg" />
      <img src={IMG_6463} style={{ display: "flex", width: "100%" }} alt="IMG_6463" />
      <img src={FullSizeRender} style={{ display: "flex", width: "100%" }} alt="FullSizeRender" />
    </div>
  );
}

export default Paintings;

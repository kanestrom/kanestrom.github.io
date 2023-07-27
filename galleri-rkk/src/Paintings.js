import headerimg from './clean.jpg';
import Minneparken2 from './IMG_6463.jpeg';
import Minneparken3 from './FullSizeRender.jpeg';
import React from 'react';
// Kode for å kommentere vekk: To slasher for hel linje utenfor en funksjon (javascript). Men inni en funksjon, dvs inni "return" er det HTML, og der er tegnene: {/* i starten og */} på slutten.
function Paintings() {
  return (
    <div style={{ maxWidth: "800px", margin: "auto", textAlign: "center", marginTop: 32, marginBottom: 64 }}>
{/* <h1 style={{ marginTop: 64, marginBottom: 32 }}>Malerier</h1> */}
      <img src={headerimg} style={{ display: "flex", width: "100%" }} alt="headerimg" />
      <img src={Minneparken2} style={{ display: "flex", width: "100%" }} alt="Minneparken2" />
      <img src={Minneparken3} style={{ display: "flex", width: "100%" }} alt="Minneparken3" />
    </div>
  );
}

export default Paintings;

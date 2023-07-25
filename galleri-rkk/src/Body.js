import Accordion from 'react-bootstrap/Accordion';
import React from 'react';
import headerimg from './fjes.jpg';

function Body() {
  return (
    <div style={{ maxWidth: "800px", margin: "auto", textAlign: "left" }}>

      <img src={headerimg} style={{ display: "flex", width: "100%" }} alt="headerimg" />

      <Accordion>
        <Accordion.Item eventKey="0">
          {/* <Accordion.Header>BIOGRAFI OG BESKRIVELSE AV KUNSTNERSTIL (NORSK)</Accordion.Header> */}
          <Accordion.Header>Biografi og beskrivelse av kunstnerstil (Norsk)</Accordion.Header>
          <Accordion.Body>

            <h2>Biografi
            </h2>
            <p>
              Det er en tid for alt. Rakel Kristin Kanestrøm var 53 år da hun begynte på Nydalen Kunstskole, og i 2022 var 3-årig billedkunstutdanning fullført.

            </p>

            <p>
              Kanestrøm hadde allerede en vitenskapelig utdannelse med doktorgrad i teknisk kybernetikk, og arbeidserfaring som førsteamanuensis i prosessregulering og sjefsingeniør i olje- og gassindustrien. Livets omstendigheter har ført til at Kanestrøm har utforsket en rekke holistiske helseteorier, og hun er spesielt interessert i sammenhengen mellom livshendelser og sykdom. Hun har også hatt stor glede av energiarbeid som kinesisk Feng Shui. 
  Interessen for den menneskelige bevissthet gir nok en spirituell touch til hennes kunstneriske arbeider.

            </p>

            <p>

              Kanestrøm lever et rolig liv Bergen.
            </p>

            <h2>Min kunstnerstil
            </h2>
            <p>

              De første maleriene mine var abstrakte, intuitive bilder med flater bygget opp av flere lag. I løpet av utdannelsen ble det mer figurativt arbeid. Jeg jobber primært med akryl på lerret og papir, og bruker redskaper som kniv eller sparkel, pensler, papir etc. Kull og blekk er også med i verktøykassen.
            </p>
            <p>

              Motivene mine er kollasjer av elementer fra eget liv, og jeg lar gjerne objektene sveve i løse luften. Noen vil nok observere at jeg inspireres av det vakre i matematikken. Jeg forsøker å bruke fargene slik at bildet kan formidle en overordnet ro. Den uvanlige sammenstillingen av elementer inviterer betrakteren til refleksjoner rundt eget liv og det som er.
            </p>
            <p>


              Jeg lager også giclée trykk i begrenset opplag. Disse kan være inspirert av utsnitt fra noen av mine større arbeider, og blir gjerne videre bearbeidet digitalt, med maling eller på andre kreative måter for å large det endelige giclée-trykket.
            </p>
            <p>


              -Rakel Kristin Kanestrøm.
            </p>


          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Biography and artist statement (English)</Accordion.Header>
          <Accordion.Body>

            <h2>Biography
            </h2>
            <p>
              There is a time for everything. Rakel Kristin Kanestrøm turned 53 before she attended her initial visual art studies at Nydalen Kunstskole in 2019. In 2022, she will complete a 3-year visual arts education.

            </p>

            <p>
              Kanestrøm already has a scientific education with a PhD in Engineering Cybernetics, and work experiences  as associate professor in process control, as chief engineer in the oil and gas industry, as well as board work. Kanestrøm explores a broad range of holistic health theories. She has a special interest in the correlation between life circumstances and illnesses, genetics, and the Chinese Feng Shui. Her main interest is the exploration of consciousness. This lends a spiritual touch to her artistic works.

            </p>

            <p>

              Kanestrøm lives in Bergen, Norway.
            </p>

            <h2>Artist Statement
            </h2>
            <p>

              The word Reflections describes well what I want to convey on paper and canvases. My earliest paintings manifested as half-figurative, with several layers making up the surface. Lately I have gone more figurative. I work primarily with acrylic paint on canvas, using various tools – knife, trowel, brush, paper etc. During my ongoing studies, charcoal and ink have entered my toolkit.
            </p>
            <p>

              I create the paintings by putting together elements from my own life, enlarging and amplifying and I like to let the objects float in the loose air. Some will probably observe that I am inspired by the beauty of mathematics. I am also inspired by words – both the written and the spoken.
              Despite the turmoil the composition can sometimes create, I try to convey an overall calm. My unusual juxtaposition of elements invites viewers to reflect on their own lives and what is.
            </p>
            <p>


              I also make limited edition giclée prints. These may be inspired by a portion of my larger works, which are then processed further – on a computer, with paint, or in any other creative way – to make the resulting giclée print.
            </p>
            <p>


              -Rakel Kristin Kanestrøm.
            </p>

          </Accordion.Body>
        </Accordion.Item>

      </Accordion>


    </div>
  );
}

export default Body;
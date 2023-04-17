const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
app.get("/", (req, res) => {
  res.send("Render Puppeteer server is up and running!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));



const sdk = require('api')('@render-api/v1.0#dnrc1ulf088q9j');

  console.log("Restarting Docker...");
  sdk.auth('rnd_BfFOGga8fMG5E4Qb5yFYTEphl5F5');
  sdk.createDeploy({clearCache: 'clear'}, {serviceId: 'srv-cgtjt9iut4mcfrm72rsg'})
  .then(({ data }) => console.log(data))


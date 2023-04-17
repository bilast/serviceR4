const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
app.get("/", (req, res) => {
  res.send("Render Puppeteer server is up and running!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));



const sdk = require('api')('@render-api/v1.0#dnrc1ulf088q9j');
let seconds = 0;
console.log("Server restart is up and running!");

function restartDocker() {
  console.log("Restarting Docker...");
  sdk.auth('rnd_9di2QmDpfF4byPI9TkrE7N9cSiCw');
  sdk.createDeploy({clearCache: 'clear'}, {serviceId: 'srv-cgud92l269vbmeqep7mg'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));
  
  console.log("Restarting Docker...");
  sdk.auth('rnd_9di2QmDpfF4byPI9TkrE7N9cSiCw');
  sdk.createDeploy({clearCache: 'clear'}, {serviceId: 'srv-cgud9od269vbmeqetn5g'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));
}

function timer() {
  seconds = seconds + 1; // remove 'let' keyword here
  if (seconds <= 450) {
    console.log(seconds, "s /450s to restart Docker");
    setTimeout(timer, 1000);
  }
  else {
    restartDocker();
  }
}

// timer();


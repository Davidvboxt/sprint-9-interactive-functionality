import express from 'express'

const url = "https://zoeken.oba.nl/api/v1/search/";
const urlSearch = "?q=";
const urlDefault = "boek";
const urlKey = "&authorization=1e19898c87464e239192c8bfe422f280";
const urlOutput = "&refine=true&output=json";


// Maak een nieuwe express app
const app = express()

// Stel in hoe we express gebruiken
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))

// Maak een route voor de index pagina
app.get('/', (request, response) => {
  const booksUrl = url + urlSearch + urlDefault + urlKey + urlOutput;

  fetchJson(booksUrl).then((data) => {
    response.render('index', data)
    // console.log(data);
  })

})

// Maakt een route voor de reserveringspagina
app.get('/reserveer', (request, response) => {
  response.render('reserveer')
})

app.post('/reserveer', (request, response) => {
  const postURL = 'https://api.oba.fdnd.nl/api/v1/'
  const url = `${postURL}/reserveer`

  console.log(request.body)

  postJson(url, request.body).then((data) => {
    // console.log(JSON.stringify(data))
  })
})

// Maak een route voor de detail pagina
app.get("/detail", async (request, response) => {
  let isbn = request.query.resultIsbn || "9789045117621";

  const uniqueUrl =
    url + urlSearch + isbn + urlKey + urlOutput;

  const data = await fetch(uniqueUrl)
    .then((response) => response.json())
    .catch((err) => err);
  response.render("detail", data);

});

// Stel het poortnummer in en start express
app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})

/**
 * Wraps the fetch api and returns the response body parsed through json
 * @param {*} url the api endpoint to address
 * @returns the json response from the api endpoint
 */
async function fetchJson(url) {
  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => error)
}

// Stel afhandeling van formulieren in
server.use(express.json())
server.use(express.urlencoded({
  extended: true
}))

// Verstuurt de data naar de API
server.post("/reserveren", (request, response) => {
  const baseurl = "https://api.oba.fdnd.nl/api/v1";
  const url = `${baseurl}/reserveringen`;

  postJson(url, request.body).then((data) => {

  });
});
import express from 'express'

const url = "https://zoeken.oba.nl/api/v1/search/";
const urlSearch = "?q=";
// const urlDefault = "boek";
const urlDefault = "special:all";
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
  response.render('reserveer', {id: request.query.id})
})

// Maakt een route voor de succes pagina
app.get('/succes', (request, response) => {
  response.render('succes')
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
app.set('port', process.env.PORT || 2000)
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
export async function postJson(url, body) {
  return await fetch(url, {
    method: 'post',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .catch((error) => error)
}

// Stuurt de reserveer data naar de API
app.post('/reserveer', (request, response) => {
  const postURL = 'https://api.oba.fdnd.nl/api/v1/reserveringen'
  const url = `${postURL}reserveringen`
console.log(url)

  postJson(url, request.body).then((data) => {
    let newReservering = { ... request.body }
    console.log(newReservering);
    if (data.id) {
      response.redirect('/succes') 
      console.log("werkt!")
      

    } else{
      response.redirect('/succes')
    }
  })
})
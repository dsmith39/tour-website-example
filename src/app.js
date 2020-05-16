const path = require(`path`);
const express = require(`express`);
const hbs = require(`hbs`);

//creates a new instance of express called app
const app = express();

//setup a port for heroku deployment or port 3000 if it does not exist
const port = process.env.PORT || 3000;

//create a path, based off of __dirname, which points to C:\Users\Lukah\Documents\WEBSITES\udemyNode\web-server\src , then works off of that path to move to the public folder
const publicDirectoryPath = path.join(__dirname, `../public`);
// points to views
const viewsPath = path.join(__dirname, `../templates/views`);
const paritalsPath = path.join(__dirname, `../templates/partials`);

//.use runs express.static in the given directory. I use express.static to serve up static files
app.use(express.static(publicDirectoryPath));

//app.set assigns setting names, the first arg, to the setting found in the second arg
app.set(`view engine`, `hbs`);
app.set(`views`, viewsPath);
//sets path for the partials directory
hbs.registerPartials(paritalsPath);

//setup of HTTP GET requests
//index page route
app.get(``, (req, res) => {
  res.render(`index`, {
    title: `Natours | Exciting tours for adventurous people`,
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

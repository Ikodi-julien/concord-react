/* eslint-disable prefer-destructuring */
/*
 * Require
 */
const express = require('express');
const bodyParser = require('body-parser');
const Server = require('http').Server;
const socket = require('socket.io');
const { response } = require('express');

/*
 * Vars
 */
const app = express();
const server = Server(app);
const io = socket(server);
const port = 3001;

const db = {
  users: {
    'bouclierman@herocorp.io': {
      password: 'jennifer',
      username: 'John',
      color: '#c23616',
    },
    'acidman@herocorp.io': {
      password: 'fructis',
      username: 'Burt',
      color: '#009432',
    },
    'captain.sportsextremes@herocorp.io': {
      password: 'pingpong',
      username: 'Karin',
      color: '#f0f',
    },
  },
  channels: [
    {
      id: 5246,
      channelTitle: 'Le channel de test',
      messages: [
        { id: 1, nickname: 'Bernard', content: 'Tu la connais celle des deux poissons rouge dans un bocal ?' },
        { id: 2, nickname: 'Bianca', content: 'Non, raconte !' },
        { id: 3, nickname: 'Belle', content: 'Moi je la connais' },
        { id: 4, nickname: 'Sébastien', content: "Ouais, ben ils sont en train de tourner et puis d'un seul coup, y'en a un qui dit à l'autre \"J'arrive pas à croire qu'on est déjà jeudi\"" },
      ],
      users: [
        {
          id: 2, nickname: 'Bianca', avatar: ';o)', isConnected: true,
        },
        {
          id: 1, nickname: 'Bernard', avatar: '(_;_)', isConnected: true,
        },
        {
          id: 3, nickname: 'Belle', avatar: ':-/', isConnected: false,
        },
        {
          id: 4, nickname: 'Sébastien', avatar: 'o.0', isConnected: false,
        },
      ],
      myChannelLinks: [
        { id: 1, slug: 'filmsdhorreur', name: "Films d'horreur" },
        { id: 2, slug: 'cuisine', name: 'Cuisine méditéranéenne' },
      ],
    },
  ],
  tags: [
    { id: 'af', name: 'Lancé de savonnette' },
    { id: 'ax', name: 'La littérature anglaise du 16ème siècle' },
    { id: 'al', name: 'La biologie marine dans la mer des Sargasses' },
    { id: 'dz', name: 'Les poissons rouges' },
    { id: 'as', name: 'Le chocolat' },
  ],
};

/*
 * Express
 */
app.use(bodyParser.json());
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  // response.header('Access-Control-Allow-Credentials', true);
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// Page d'accueil du serveur : GET /
app.get('/', (request, response) => {
  response.send(`
    <div style="margin: 5em auto; width: 400px; line-height: 1.5">
      <h1 style="text-align: center">Hello!</h1>
      <p>Si tu vois ce message, c'est que ton serveur est bien lancé !</p>
      <div>Désormais, tu dois venir utiliser l'API</div>
      <ul style="display: inline-block; margin-top: .2em">
        <li><code>POST http://localhost:${port}/channel/5246</code></li>
        // <li><code>POST http://localhost:${port}/forgot</code></li>
        // <li><code>GET http://localhost:${port}/theme/{email}</code></li>
      </ul>
    </div>
  `);
});

/*
 * GET un Channel
 */
app.get('/channels/5246', (request, response) => {
  console.log('<< 200 OK');
  response.json(db.channels[0]);
});
app.get('/navdata', (req, res) => {
  console.log('le front fetch la navbar data !');
  res.json({
    tags: db.tags,
    channels: db.channels,
  });
});

/*
 * Socket.io
 */
let id = 10;
io.on('connection', (ws) => {
  console.log('>> socket.io - connected');
  ws.on('message', (message) => {
    // eslint-disable-next-line no-plusplus
    message.id = ++id;
    io.emit('message', message);
  });
});

/*
 * Server
 */
server.listen(port, () => {
  console.log(`listening on *:${port}`);
});

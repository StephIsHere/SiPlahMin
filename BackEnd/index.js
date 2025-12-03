import 'dotenv/config';
import express from 'express';
import session from 'express-session';
import cors from 'cors';
import sequelize from './config/db.js';
import userRoute from './routes/user-route.js';

const app = express();
const PORT = process.env.PORT;

app.use(cors({
  origin: process.env.CLIENT_URL,
  methods: "GET,POST,PUT,DELETE",
  credentials: true
}));

app.use(session({
  name: 'PelatihanSession',
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,         
    sameSite: 'lax',       
    maxAge: 24 * 60 * 60 * 1000
  }
}));

app.get("/", (req, res) => {
  res.send("hello")
})

app.use(userRoute);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('Gagal sinkronisasi DB:', err);
});
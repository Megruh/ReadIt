require("dotenv").config();
const path = require("path");
const Sequelize = require("sequelize");
const bcrypt = require("bcrypt")

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

const login = (req, res) => {
    let { 
        username,
        password,
     } = req.body;

    sequelize
      .query(
        (`SELECT * FROM users WHERE username = '${username}'`)
      )
      .then(async (dbRes) => {
          const pwdMatch = await bcrypt.compareSync(password, dbRes[0][0].password)
          const usrMatch = username.toLowerCase() === dbRes[0][0].username
          if (!pwdMatch) {
            res.status(400).send("Passwords don't match")
          } else {
            const {username, user_id} = dbRes[0][0]
            // req.session.user = {
            //   username,
            //   user_id
            // }
            res.status(200).send(dbRes[0][0]);
          }
      })
      .catch(err => res.status(500).send(err));
  };

  const register = async (req, res) => {
    let { 
        username,
        password,
        confirmedPassword,
     } = req.body;

     const hashedPwd = bcrypt.hashSync(password, 10)

    sequelize
      .query(
        `INSERT INTO users (username, password)
      VALUES ('${username}', '${hashedPwd}')`
      )
      .then((dbRes) => {
        res.status(201).send(dbRes[0][0]);
      });
  };

  const library = (req, res) => {
    const {book_id} = req.body
    const {shelf_id} = req.body
    const {user_id} = req.body
    sequelize.query(`INSERT INTO library (google_books_id, shelf_id, user_id) VALUES ('${book_id}', '${shelf_id}', ${user_id}) RETURNING *`)
    .then((dbRes) => {
      res.status(201).send(dbRes[0][0])
    })
    .catch(err => res.status(500).send(err))
  }

  const user = (req, res) => {
    if(req.session.user){
      res.status(200).send(req.session.user)
  } 
      res.sendStatus(200)
  }

  const libShelves = (req, res) => {
    const {shelf_id} = req.query
    sequelize.query(`SELECT * FROM library WHERE shelf_id='${shelf_id}'`)
    .then(dbRes => {
      res.status(200).send(dbRes[0])
    })
    .catch(err => res.status(500).send(err))
  }

  const deleteBook = (req, res) => {
    const { book_id, shelf_id } = req.body;
    sequelize
      .query(`DELETE FROM library WHERE book_id = ${book_id} AND shelf_id = '${shelf_id}';`)
      .then(res.sendStatus(200))
      .catch((error) => console.log(error));
  };

  module.exports = {
    login,
    register,
    library,
    user,
    libShelves,
    deleteBook
  }
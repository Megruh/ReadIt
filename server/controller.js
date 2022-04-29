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

    console.log(req.body)
    sequelize
      .query(
        (`SELECT * FROM users`)
      )
      .then(async (dbRes) => {
          const pwdMatch = await bcrypt.compareSync(password, dbRes[0][0].password)
          const usrMatch = username.toLowerCase() === dbRes[0][0].username
        res.status(200).send(dbRes[0][0]);
      });
  };

  const register = async (req, res) => {
    let { 
        username,
        password,
        confirmedPassword,
     } = req.body;

     console.log(req.body)
     const hashedPwd = bcrypt.hashSync(password, 10)

    sequelize
      .query(
        `INSERT INTO users (username, password)
      VALUES ('${username}', '${hashedPwd}')`
      )
      .then((dbRes) => {
        res.status(201).send(dbRes[0][0]);
        console.log(dbRes);
      });
  };



  module.exports = {
    login,
    register
  }
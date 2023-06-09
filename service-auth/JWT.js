const express = require("express");
const database = require("./connexion_mysql"); // importation de la connexion à la base de données
const con = database.getConnection();
// const bodyParser = require('body-parser')
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("./controllers/user.controller.js");
const config = require("./config");

router.get("/", (req, res) => {
  res.send("Ok");
});

router.post("/login", (req, res) => {
  // Pour afficher un utilisateur
  con.query(
    "SELECT * FROM `cesi`.`Users` INNER JOIN `cesi`.`Roles` ON Roles.id = Users.id_role WHERE email = ? AND password = ? AND `Users`.`date_out` IS NULL",
    [req.body.email, req.body.password],
    (err, result) => {
      if (err) {
        res.send({"error": err, "status" : "error", "message" : "Utilisateur introuvable"});
        // console.log(err);
      } else {
        // console.log(result[0]);
        if (result.length == 0) {
          res.status(401).json({
            "message": "Email ou mot de passe invalide", "status" : "error"
          });

        }
        const user = {
          id: result[0].id,
          firstname: result[0].firstname,
          lastname: result[0].lastname,
          role: result[0].id_role,
          email: result[0].email,
          phone: result[0].phone,
          birthday: result[0].birthday,
          gender: result[0].gender,
          is_customer: result[0].customer,
          is_delivery_person: result[0].delivery_person,
          is_restorant: result[0].restorant,
          is_administrator: result[0].administrator,
          is_sales_department: result[0].sales_department,
          is_technical_department: result[0].technical_department,
          is_developer_tier: result[0].developer_tier,
        };
        const token = jwt.sign(user, config.secret, {
          expiresIn: config.tokenLife,
        });
        const response = {
          status: "success",
          response: token,
        };
        res.status(200).json(response);
      }
    }
  );
});

module.exports = router;

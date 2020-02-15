"use strict";

const mysql = require("mysql");

const app = mysql();

const PORT = process.env.PORT || 3306;

app.use(mysql.urlencoded({ extended: true }));
app.use(mysql.json());

require("")(app);
require("")(app);

app.listen(PORT, () => console.log("App listening on PORT: " + PORT));

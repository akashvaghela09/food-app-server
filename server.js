const  { app} = require("./src/index");
const  { connect } = require("./src/config/db")
require("dotenv").config();
const PORT = 2255

console.log(process.env.DATABASE_URL)
app.listen(process.env.PORT || PORT, async () => {
    await connect()
    console.log(`Listening on port ${PORT}`);
})

const  { app} = require("./index")
const  { connect } = require("./config/db")
require("dotenv").config();
const PORT = 2244

console.log(process.env.DATABASE_URL)
app.listen(process.env.PORT || PORT, async () => {
    await connect()
    console.log(`Listening on port ${PORT}`);
})

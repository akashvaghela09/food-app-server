const  { app} = require("./index")
const  { connect } = require("./config/db")
require("dotenv").config();
const PORT = 2244

app.listen(process.env.PORT, async () => {
    await connect()
    console.log(`Listening on port ${PORT}`);
})

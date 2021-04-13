// Mocking the BrowserRouter
// This allows me to run my AppRouter inside The MemoryRouter without conflict

import React from "react"
const rrd = require("react-router-dom")
// Just render plain div with its children
rrd.BrowserRouter = (props: any) => <div>{props.children}</div>
module.exports = rrd

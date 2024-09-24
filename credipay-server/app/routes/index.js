const express = require('express');
const router = express.Router();
const userroutes = require('../routes/users.route')
const loginroute = require('../routes/login.route');
const dossierRoute = require('../routes/dossier-details.route');
defaultRoutes = [
    {
        path: '/user',
        route: userroutes
    },
    {
        path: '/login',
        route: loginroute
    },
    {
        path: '/dossier',
        route: dossierRoute
    }
]


defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;
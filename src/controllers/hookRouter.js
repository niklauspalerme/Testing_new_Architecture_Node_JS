const express = require("express");
const originalRouterFunc = express.Router;
const asyncHandler = require("express-async-handler");


function hookRouter() {
    function hookAllRouteMethods(router) {
        const methods = ["get", "post", "put", "delete", "options", "head", "all", "use"]; // all router methods
        methods.forEach(method => {
            const originalRouterFunc = router[method];
            const hookedRouterMethod = async function (path, ...routeHandlers) {
                routeHandlers = routeHandlers.map(f =>
                    asyncHandler(function (req, res, next) { // async error handler
                        // sync error handler start
                        try {
                            return f(req, res, next); // original route handler
                        } catch (e) {
                            console.log("hahah I caught you =)");
                            next(e, req, res); // pass exception to our error handler.
                        }
                        // sync error handler end
                    })
                );
                originalRouterFunc.apply(router, [path, ...routeHandlers]);
            };
            router[method] = hookedRouterMethod;
        });
    }

    function hookRouterCreation() {
        express.Router = function () {
            const router = originalRouterFunc.apply(this, arguments);
            hookAllRouteMethods(router);
            return router;
        };
    }
    hookRouterCreation();
}

module.exports={
    hookRouter
}
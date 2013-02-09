// Module: controller.js
// Name: Controller
var Montage = require("montage/core/core").Montage;
exports.Controller = Montage.create(Montage, {
    handleAction: {
        value: function(event) {
            console.log("Button event handled...!");
            // Do login stuff...
        }
    },
});

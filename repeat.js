var Montage = require("montage").Montage,
    ArrayController = require("montage/ui/controller/array-controller").ArrayController;

exports.Repeat = Montage.create(Montage, {

    arrayController: {
        value: null
    },

    didCreate: {
        value: function () {
            var content = ["a", "b", "c"];
            this.arrayController = ArrayController.create().initWithContent(content);
        }
    },

    handleChangeButtonAction: {
        value: function (evt) {
            var newContentCount = Math.floor(Math.random() * 11),
                newContent = [],
                i;

            for (i = 0; i < newContentCount; i++) {
                newContent.push(Math.random());
            }

            this.arrayController.content = newContent;
            console.log(newContent);
        }
    }
});

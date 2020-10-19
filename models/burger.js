const orm = require('../config/orm');

const burgers = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    insertOne: function (name, cb) {
        orm.insertOne("burgers", [
            "burger_name", "devoured"
        ], [
            name, false
        ], cb);
    },

    updateOne: function (id, cb) {
        const condition = "id=" + id;

        orm.updateOne("burgers", {
            devoured: true
        }, condition, cb);
    }
};

module.exports = burgers;
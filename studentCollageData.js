"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCollageData = exports.getCollageDtata = exports.studentCollageData = void 0;
exports.studentCollageData = [
    {
        CollageId: 1,
        CollageName: "KDK",
        CollageCity: "Nagpur"
    },
    {
        CollageId: 2,
        CollageName: "YCC",
        CollageCity: "Nagpur"
    },
    {
        CollageId: 3,
        CollageName: "JIT",
        CollageCity: "Nagpur"
    },
    {
        CollageId: 4,
        CollageName: "NIT",
        CollageCity: "Nagpur"
    }
];
var getCollageDtata = function (id) {
    exports.studentCollageData.map(function (value) {
        if (value.CollageId === id) {
            console.log(value);
        }
    });
};
exports.getCollageDtata = getCollageDtata;
var getAllCollageData = function () {
    exports.studentCollageData.map(function (value) {
        console.log(value);
    });
};
exports.getAllCollageData = getAllCollageData;

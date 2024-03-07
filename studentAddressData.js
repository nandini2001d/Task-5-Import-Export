"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllAddressData = exports.getAddressDtata = exports.studentAddressData = void 0;
exports.studentAddressData = [
    {
        AddressId: 1,
        City: "Nagpur",
        Pincode: 6789
    },
    {
        AddressId: 2,
        City: "Jaypur",
        Pincode: 6780
    },
    {
        AddressId: 3,
        City: "nagpur",
        Pincode: 4567
    },
    {
        AddressId: 4,
        City: "pune",
        Pincode: 5678
    }
];
var getAddressDtata = function (id) {
    exports.studentAddressData.map(function (value) {
        if (value.AddressId === id) {
            console.log(value);
        }
    });
};
exports.getAddressDtata = getAddressDtata;
var getAllAddressData = function () {
    exports.studentAddressData.map(function (value) {
        console.log(value);
    });
};
exports.getAllAddressData = getAllAddressData;

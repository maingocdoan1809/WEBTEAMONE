"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPriority = exports.getState = void 0;
const DBTypes_1 = require("../types/DBTypes");
function getState(state) {
    switch (state) {
        case DBTypes_1.AccountState.ACTIVE:
            return DBTypes_1.AccountState.ACTIVE;
        case DBTypes_1.AccountState.DELETE:
            return DBTypes_1.AccountState.DELETE;
    }
    return undefined;
}
exports.getState = getState;
function getPriority(state) {
    switch (state) {
        case DBTypes_1.AccountPriority.ADMIN:
            return DBTypes_1.AccountPriority.ADMIN;
        case DBTypes_1.AccountPriority.NORMAL:
            return DBTypes_1.AccountPriority.NORMAL;
    }
    return undefined;
}
exports.getPriority = getPriority;

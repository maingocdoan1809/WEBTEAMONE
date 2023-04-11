"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountPriority = exports.AccountState = void 0;
var AccountState;
(function (AccountState) {
    AccountState[AccountState["DELETE"] = 0] = "DELETE";
    AccountState[AccountState["ACTIVE"] = 1] = "ACTIVE";
})(AccountState = exports.AccountState || (exports.AccountState = {}));
var AccountPriority;
(function (AccountPriority) {
    AccountPriority[AccountPriority["NORMAL"] = 0] = "NORMAL";
    AccountPriority[AccountPriority["ADMIN"] = 1] = "ADMIN";
})(AccountPriority = exports.AccountPriority || (exports.AccountPriority = {}));

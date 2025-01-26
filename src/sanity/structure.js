"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.structure = void 0;
// https://www.sanity.io/docs/structure-builder-cheat-sheet
var structure = function (S) {
    return S.list()
        .title('Content')
        .items(S.documentTypeListItems());
};
exports.structure = structure;

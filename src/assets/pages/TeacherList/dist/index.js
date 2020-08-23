"use strict";
exports.__esModule = true;
var react_1 = require("react");
var PageHeader_1 = require("../../../components/PageHeader");
require("./styles.css");
var TeacherItem_1 = require("../../../components/TeacherItem");
function TeacherList() {
    return (react_1["default"].createElement("div", { id: "page-teacher-list", className: "container" },
        react_1["default"].createElement(PageHeader_1["default"], { title: "Estes s\u00E3o os proffys dispon\u00EDveis." },
            react_1["default"].createElement("form", { action: "", id: "search-teachers" },
                react_1["default"].createElement("div", { className: "input-block" },
                    react_1["default"].createElement("label", { htmlFor: "subject" }, "Mat\u00E9ria"),
                    react_1["default"].createElement("input", { type: "text", id: "subject" })),
                react_1["default"].createElement("div", { className: "input-block" },
                    react_1["default"].createElement("label", { htmlFor: "week_day" }, "Dias da semana"),
                    react_1["default"].createElement("input", { type: "text", id: "week_day" })),
                react_1["default"].createElement("div", { className: "input-block" },
                    react_1["default"].createElement("label", { htmlFor: "time" }, "Hora"),
                    react_1["default"].createElement("input", { type: "text", id: "time" })))),
        react_1["default"].createElement("main", null,
            react_1["default"].createElement(TeacherItem_1["default"], null))));
}
exports["default"] = TeacherList;

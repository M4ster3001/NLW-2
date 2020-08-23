"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./styles.css");
var userprof_png_1 = require("../../assets/images/userprof.png");
var whatsapp_svg_1 = require("../../assets/images/icons/whatsapp.svg");
function TeacherItem() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("article", { className: "teacher-item" },
            react_1["default"].createElement("header", null,
                react_1["default"].createElement("img", { src: userprof_png_1["default"], alt: "Prof. Aldo Junior" }),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("strong", null, "Aldo Junior"),
                    react_1["default"].createElement("span", null, "Informatica"))),
            react_1["default"].createElement("p", null,
                "Apaixonado pela area de TI e entusiasta das melhores tecnologias na parte de programa\u00E7\u00E3o.",
                react_1["default"].createElement("br", null),
                "Ama misturar linguages para ver no que d\u00E1."),
            react_1["default"].createElement("footer", null,
                react_1["default"].createElement("p", null,
                    "Pre\u00E7o/ Hora",
                    react_1["default"].createElement("strong", null, " R$ 100,00")),
                react_1["default"].createElement("button", { type: "button" },
                    react_1["default"].createElement("img", { src: whatsapp_svg_1["default"], alt: "Whatsapp" }),
                    "Entrar em contato"))),
        react_1["default"].createElement("article", { className: "teacher-item" },
            react_1["default"].createElement("header", null,
                react_1["default"].createElement("img", { src: userprof_png_1["default"], alt: "Prof. Aldo Junior" }),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("strong", null, "Jaqueline"),
                    react_1["default"].createElement("span", null, "Investiga\u00E7\u00E3o"))),
            react_1["default"].createElement("p", null,
                "Apaixonado por misterios e enigmas.",
                react_1["default"].createElement("br", null),
                "Considerada por tr\u00EAs anos seguidos a melhor investigadora de Mirandopolis."),
            react_1["default"].createElement("footer", null,
                react_1["default"].createElement("p", null,
                    "Pre\u00E7o/ Hora",
                    react_1["default"].createElement("strong", null, " R$ 250,00")),
                react_1["default"].createElement("button", { type: "button" },
                    react_1["default"].createElement("img", { src: whatsapp_svg_1["default"], alt: "Whatsapp" }),
                    "Entrar em contato")))));
}
exports["default"] = TeacherItem;
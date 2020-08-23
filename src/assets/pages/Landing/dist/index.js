"use strict";
exports.__esModule = true;
var react_1 = require("react");
var logo_svg_1 = require("../../images/logo.svg");
var landing_svg_1 = require("../../images/landing.svg");
var study_svg_1 = require("../../images/icons/study.svg");
var give_classes_svg_1 = require("../../images/icons/give-classes.svg");
var purple_heart_svg_1 = require("../../images/icons/purple-heart.svg");
require("./styles.css");
function Landing() {
    return (react_1["default"].createElement("div", { id: "page-landing" },
        react_1["default"].createElement("div", { id: "page-landing-content", className: "container" },
            react_1["default"].createElement("div", { className: "logo-container" },
                react_1["default"].createElement("img", { src: logo_svg_1["default"], alt: "Proffy Logo" }),
                react_1["default"].createElement("h2", null, "Sua plataforma de estudos online.")),
            react_1["default"].createElement("img", { src: landing_svg_1["default"], alt: "Plataforma de estudos", className: "hero-image" }),
            react_1["default"].createElement("div", { className: "buttons-container" },
                react_1["default"].createElement("a", { href: "/study", className: "study" },
                    react_1["default"].createElement("img", { src: study_svg_1["default"], alt: "Estudar" }),
                    "Estudar"),
                react_1["default"].createElement("a", { href: "/give-classes", className: "give-classes" },
                    react_1["default"].createElement("img", { src: give_classes_svg_1["default"], alt: "Estudar" }),
                    "Dar aulas")),
            react_1["default"].createElement("span", { className: "total-connections" },
                "Total de 200 conex\u00F5es j\u00E1 realizadas ",
                react_1["default"].createElement("img", { src: purple_heart_svg_1["default"], alt: "Cora\u00E7\u00E3o roxo" })))));
}
exports["default"] = Landing;

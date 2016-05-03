"use strict";
const SampleData = [
    {
        "index": 0,
        "guid": "9115d5a0-906a-4859-8584-d75b39d8cca2",
        "component": {
            "name": "Align",
            "description": "Aligns other components either horizontally or vertically.",
            "slideIndex": "0"
        }
    },
    {
        "index": 1,
        "guid": "a23be417-d3cf-4ad1-bc93-f9b15462697g",
        "component": {
            "name": "Button",
            "description": "Defines a clickable button.",
            "slideIndex": "1"
        }
    },
    {
        "index": 2,
        "guid": "d1f4326e-85dd-446d-93d1-1620efc6a90x",
        "component": {
            "name": "Card",
            "description": "Defines a blank card, that can contain other components.",
            "slideIndex": "2"
        }
    },
    {
        "index": 3,
        "guid": "d1f4326e-85dd-446d-93d1-1620efc6a90d",
        "component": {
            "name": "Checkbox",
            "description": "A small box that, when selected by the user, shows that a particular feature has been enabled or a particular option chosen.",
            "slideIndex": "3"
        }
    },
    {
        "index": 4,
        "guid": "d1f4326e-85dd-446d-93d1-1620efc6a90a",
        "component": {
            "name": "Door",
            "description": "Opens a component vertically if a certain event happens, by default Doors are always closed.",
            "slideIndex": "4"
        }
    },
    {
        "index": 5,
        "guid": "d1f4326e-85dd-446d-93d1-1620efc6a90qwt",
        "component": {
            "name": "Dropdown",
            "description": "Dropdown appears when it is selected, and remaining until used or dismissed.",
            "slideIndex": "5"
        }
    },
    {
        "index": 6,
        "guid": "d1f4326e-85dd-446d-93d1-1620efc6a90sdfh",
        "component": {
            "name": "Emerge",
            "description": "Staggers children into view if a certain event happens.",
            "slideIndex": "6"
        }
    },
    {
        "index": 7,
        "guid": "d1f4326e-85dd-446d-93d1-1620efc6a90xc",
        "component": {
            "name": "Grid",
            "description": "Arrange data like text, images, links, other tables, etc. into rows and columns of cells. ",
            "slideIndex": "7"
        }
    },
    {
        "index": 8,
        "guid": "d1f4326e-85dd-446d-93d1-1620efc6a90fbc",
        "component": {
            "name": "Input",
            "description": "Advanced version of the HTML input control.",
            "slideIndex": "8"
        }
    },
    {
        "index": 9,
        "guid": "d1f4326e-85dd-446d-93d1-1620efc6a90f",
        "component": {
            "name": "Layer",
            "description": "Advanced version of the standard HTML <div> tag.",
            "slideIndex": "9"
        }
    },
    {
        "index": 10,
        "guid": "d1f4326e-85dd-446d-93d1-1620efc6a90f",
        "component": {
            "name": "Loading",
            "description": "Component that shows a loading state if a certain event happens.",
            "slideIndex": "10"
        }
    },
    {
        "index": 11,
        "guid": "d1f4326e-85dd-446d-93d1-1620efc6a90f",
        "component": {
            "name": "Modal",
            "description": "A dialog box/pop up window.",
            "slideIndex": "11"
        }
    },
    {
        "index": 12,
        "guid": "d1f4326e-85dd-446d-93d1-1620efc6a90f",
        "component": {
            "name": "Pane",
            "description": "A dialog box that appears relative to the parent from a certain direction.",
            "slideIndex": "12"
        }
    },
    {
        "index": 13,
        "guid": "d1f4326e-85dd-446d-93d1-1620efc6a90f",
        "component": {
            "name": "Selectable",
            "description": "Allows any element to be Selectable.",
            "slideIndex": "13"
        }
    },
    {
        "index": 14,
        "guid": "d1f4326e-85dd-446d-93d1-1620efc6a90f",
        "component": {
            "name": "Shrink",
            "description": "Shrink and disable an element if a certain event happens.",
            "slideIndex": "14"
        }
    },
    {
        "index": 15,
        "guid": "d1f4326e-85dd-446d-93d1-1620efc6a90f",
        "component": {
            "name": "Toggle",
            "description": "Toggle between different states.",
            "slideIndex": "15"
        }
    },
    {
        "index": 16,
        "guid": "d1f4326e-85dd-446d-93d1-1620efc6a90f",
        "component": {
            "name": "Toolbar",
            "description": "Gives advanced options to a group of input, dropdowns and buttons.",
            "slideIndex": "16"
        }
    },
    {
        "index": 17,
        "guid": "d1f4326e-85dd-446d-93d1-1620efc6a90f",
        "component": {
            "name": "Transform",
            "description": "Move an element with CSS Transform if a certain event happens.",
            "slideIndex": "17"
        }
    },
    {
        "index": 18,
        "guid": "d1f4326e-85dd-446d-93d1-1620efc6a90f",
        "component": {
            "name": "Wizard",
            "description": "A stanard slider.",
            "slideIndex": "18"
        }
    }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SampleData;

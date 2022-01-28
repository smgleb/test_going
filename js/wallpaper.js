(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    document.addEventListener("click", (function(e) {
        let burger = document.querySelector(".icon-menu");
        let menu = document.querySelector(".menu");
        let plashMask = document.querySelector(".backgroundMask");
        let body = document.querySelector("body");
        if (e.target.classList.contains("backgroundMask")) {
            burger.classList.remove("_active");
            menu.classList.remove("_active");
            body.classList.remove("_lock");
            plashMask.style = "display: none;";
        }
        if (e.target.closest(".icon-menu-active")) {
            burger.classList.remove("_active");
            menu.classList.remove("_active");
            body.classList.remove("_lock");
            plashMask.style = "display: none;";
        }
        if (e.target.closest(".icon-menu")) {
            burger.classList.toggle("_active");
            menu.classList.toggle("_active");
            body.classList.add("_lock");
            plashMask.style = "display: block;";
        }
    }));
    let wallpaperForm = document.forms.wallpapercalc;
    let deleteActiveTabAndBody = () => {
        let tabPage = document.querySelectorAll(".tab-page");
        let tabMore = document.querySelectorAll(".tab-more");
        let bodyPage = document.querySelectorAll(".calc-count");
        let inpBlockPage = document.querySelectorAll(".inp-block_change");
        tabPage.forEach((elem => {
            if (elem.classList.contains("_active")) elem.classList.remove("_active");
        }));
        tabMore.forEach((elem => {
            if (elem.classList.contains("_active")) elem.classList.remove("_active");
        }));
        bodyPage.forEach((elem => {
            if (elem.classList.contains("_active")) elem.classList.remove("_active");
        }));
        inpBlockPage.forEach((elem => {
            if (elem.classList.contains("_active")) elem.classList.remove("_active");
        }));
    };
    let radioDel = e => {
        let radioBody = e.target.parentNode.parentNode.parentNode;
        let allRadio = radioBody.querySelectorAll(".radio__text");
        let allRadioInp = radioBody.querySelectorAll(".radio__inp");
        allRadio.forEach((elem => {
            if (elem.classList.contains("_active")) elem.classList.remove("_active");
        }));
        allRadioInp.forEach((elem => {
            elem.checked = "";
            if (localStorage.getItem(elem.id)) localStorage.setItem(elem.id, "");
        }));
    };
    let radioDelStock = e => {
        let radioBody = e.target.parentNode.parentNode.parentNode.parentNode;
        let allRadio = radioBody.querySelectorAll(".radio__text");
        let allRadioInp = radioBody.querySelectorAll(".radio__inp");
        allRadio.forEach((elem => {
            if (elem.classList.contains("_active")) elem.classList.remove("_active");
        }));
        allRadioInp.forEach((elem => {
            elem.checked = "";
            if (localStorage.getItem(elem.id)) localStorage.setItem(elem.id, "");
        }));
    };
    let radioDelLocal = inp => {
        let radioBody = inp.parentNode.parentNode.parentNode;
        let allRadio = radioBody.querySelectorAll(".radio__text");
        let allRadioInp = radioBody.querySelectorAll(".radio__inp");
        allRadio.forEach((elem => {
            if (elem.classList.contains("_active")) elem.classList.remove("_active");
        }));
        allRadioInp.forEach((elem => {
            elem.checked = "";
        }));
    };
    let radioDelAll = () => {
        let allRadioAll = document.querySelectorAll(".radio__text");
        allRadioAll.forEach((elem => {
            if (elem.classList.contains("_active")) elem.classList.remove("_active");
        }));
    };
    let addRoom = () => {
        deleteActiveTabAndBody();
        let roomTab = document.querySelector("#room-tab");
        let roomBody = document.querySelector("#room-body");
        let roomBlock = document.querySelector("#room-block");
        roomTab.classList.add("_active");
        roomBody.classList.add("_active");
        roomBlock.classList.add("_active");
    };
    let addWall = () => {
        deleteActiveTabAndBody();
        let wallTab = document.querySelector("#wall-tab");
        let wallBody = document.querySelector("#room-body");
        let wallBlock = document.querySelector("#wall-block");
        wallTab.classList.add("_active");
        wallBlock.classList.add("_active");
        wallBody.classList.add("_active");
    };
    let addDetails = () => {
        deleteActiveTabAndBody();
        let detailsTab = document.querySelector("#details-tab");
        let detailsBody = document.querySelector("#details-body");
        detailsTab.classList.add("_active");
        detailsBody.classList.add("_active");
    };
    let addInstruction = () => {
        deleteActiveTabAndBody();
        let instructionTab = document.querySelector("#instruction-tab");
        let instructionBody = document.querySelector("#instruction-body");
        instructionTab.classList.add("_active");
        instructionBody.classList.add("_active");
    };
    let marginBtnAdd = sectionBody => {
        let sectionItem = sectionBody.querySelectorAll(".inp-item");
        let sectionItemLength = sectionItem.length;
        if (0 === sectionItemLength) {
            let btnItem = sectionBody.parentNode.parentNode.querySelector(".inp-block__btn");
            btnItem.classList.add("_no-item");
        }
    };
    let addOrDelSectionBlock = (e, addOrDel) => {
        let sectionBody = e.target.parentNode.parentNode.parentNode;
        let sectionContainer = sectionBody.querySelector(".inp-block__items");
        let sectionItem = sectionBody.querySelectorAll(".inp-item");
        let sectionItemLength = sectionItem.length + 1;
        if (addOrDel) {
            if ("room-block" === sectionBody.id) sectionContainer.insertAdjacentHTML("beforeend", `<div class="inp-block__item inp-item">\n\t\t\t<div class="inp-item__header">\n\t\t\t\t<div class="inp-item__title">Комната <span class="inp-item__title-num">${sectionItemLength}</span></div>\n\t\t\t\t<div class="_icon-del inp-item__rotate-del"></div>\n\t\t\t</div>\n\t\t\t<div class="inp-item__body">\n\t\t\t\t<div class="inp-item__inp-row">\n\t\t\t\t\t<div class="inp-item__name">Ширина</div>\n\t\t\t\t\t<input class="inp-item__input" id="room-width_${sectionItemLength}" autocomplete="off"\n\t\t\t\t\t\ttype="number" name="room" data-error="Ошибка" data-value=""\n\t\t\t\t\t\tplaceholder="5,18" step="0.001">\n\t\t\t\t\t<div class="inp-item__unit">м</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="inp-item__inp-row">\n\t\t\t\t\t<div class="inp-item__name">Длина</div>\n\t\t\t\t\t<input class="inp-item__input" id="room-length_${sectionItemLength}" autocomplete="off"\n\t\t\t\t\t\ttype="number" name="room" data-error="Ошибка" data-value=""\n\t\t\t\t\t\tplaceholder="5,18" step="0.001">\n\t\t\t\t\t<div class="inp-item__unit">м</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="inp-item__inp-row">\n\t\t\t\t\t<div class="inp-item__name">Высота</div>\n\t\t\t\t\t<input class="inp-item__input" id="room-height_${sectionItemLength}" autocomplete="off"\n\t\t\t\t\t\ttype="number" name="room" data-error="Ошибка" data-value=""\n\t\t\t\t\t\tplaceholder="5,18" step="0.001">\n\t\t\t\t\t<div class="inp-item__unit">м</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>`);
            if ("wall-block" === sectionBody.id) sectionContainer.insertAdjacentHTML("beforeend", `<div class="inp-block__item inp-item">\n\t\t\t\t<div class="inp-item__header">\n\t\t\t\t\t<div class="inp-item__title">Стена <span class="inp-item__title-num">${sectionItemLength}</span></div>\n\t\t\t\t\t<div class="_icon-del inp-item__rotate-del"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="inp-item__body">\n\t\t\t\t\t<div class="inp-item__inp-row">\n\t\t\t\t\t\t<div class="inp-item__name">Ширина</div>\n\t\t\t\t\t\t<input class="inp-item__input" id="wall-width_${sectionItemLength}" autocomplete="off"\n\t\t\t\t\t\t\ttype="number" name="wall" data-error="Ошибка" data-value=""\n\t\t\t\t\t\t\tplaceholder="5,18" step="0.001">\n\t\t\t\t\t\t<div class="inp-item__unit">м</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="inp-item__inp-row">\n\t\t\t\t\t\t<div class="inp-item__name">Высота</div>\n\t\t\t\t\t\t<input class="inp-item__input" id="wall-height_${sectionItemLength}" autocomplete="off"\n\t\t\t\t\t\t\ttype="number" name="wall" data-error="Ошибка" data-value=""\n\t\t\t\t\t\t\tplaceholder="5,18" step="0.001">\n\t\t\t\t\t\t<div class="inp-item__unit">м</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>`);
            if ("window-block" === sectionBody.id) sectionContainer.insertAdjacentHTML("beforeend", `<div class="inp-block__item inp-item">\n\t\t\t\t<div class="inp-item__header">\n\t\t\t\t\t<div class="inp-item__title">Окно <span class="inp-item__title-num">${sectionItemLength}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="_icon-del inp-item__rotate-del"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="inp-item__body">\n\t\t\t\t\t<div class="inp-item__inp-row">\n\t\t\t\t\t\t<div class="inp-item__name">Ширина</div>\n\t\t\t\t\t\t<input class="inp-item__input" id="window-width_${sectionItemLength}" autocomplete="off"\n\t\t\t\t\t\t\ttype="number" name="window" data-error="Ошибка" data-value=""\n\t\t\t\t\t\t\tplaceholder="5,18" step="0.001">\n\t\t\t\t\t\t<div class="inp-item__unit">м</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="inp-item__inp-row">\n\t\t\t\t\t\t<div class="inp-item__name">Высота</div>\n\t\t\t\t\t\t<input class="inp-item__input" id="window-length_${sectionItemLength}" autocomplete="off"\n\t\t\t\t\t\t\ttype="number" name="window" data-error="Ошибка" data-value=""\n\t\t\t\t\t\t\tplaceholder="5,18" step="0.001">\n\t\t\t\t\t\t<div class="inp-item__unit">м</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="inp-item__inp-row inp-item__inp-row_num">\n\t\t\t\t\t\t<div class="inp-item__name inp-item__name_num">Колличество</div>\n\t\t\t\t\t\t<input class="inp-item__input inp-item__input_num" id="window-num_${sectionItemLength}"\n\t\t\t\t\t\t\tautocomplete="off" type="number" name="window" data-error="Ошибка"\n\t\t\t\t\t\t\tdata-value="" placeholder="1" value="1" step="1">\n\t\t\t\t\t\t<div class="inp-item__unit inp-item__unit_num">шт.</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>`);
            if ("door-block" === sectionBody.id) sectionContainer.insertAdjacentHTML("beforeend", `<div class="inp-block__item inp-item">\n\t\t\t\t<div class="inp-item__header">\n\t\t\t\t\t<div class="inp-item__title">Дверь <span class="inp-item__title-num">${sectionItemLength}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="_icon-del inp-item__rotate-del"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="inp-item__body">\n\t\t\t\t\t<div class="inp-item__inp-row">\n\t\t\t\t\t\t<div class="inp-item__name">Ширина</div>\n\t\t\t\t\t\t<input class="inp-item__input" id="door-width_${sectionItemLength}" autocomplete="off"\n\t\t\t\t\t\t\ttype="number" name="door" data-error="Ошибка" data-value=""\n\t\t\t\t\t\t\tplaceholder="5,18" step="0.001">\n\t\t\t\t\t\t<div class="inp-item__unit">м</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="inp-item__inp-row">\n\t\t\t\t\t\t<div class="inp-item__name">Высота</div>\n\t\t\t\t\t\t<input class="inp-item__input" id="door-length_${sectionItemLength}" autocomplete="off"\n\t\t\t\t\t\t\ttype="number" name="door" data-error="Ошибка" data-value=""\n\t\t\t\t\t\t\tplaceholder="5,18" step="0.001">\n\t\t\t\t\t\t<div class="inp-item__unit">м</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="inp-item__inp-row inp-item__inp-row_num">\n\t\t\t\t\t\t<div class="inp-item__name inp-item__name_num">Колличество</div>\n\t\t\t\t\t\t<input class="inp-item__input inp-item__input_num" id="door-num_${sectionItemLength}"\n\t\t\t\t\t\t\tautocomplete="off" type="number" name="door" data-error="Ошибка"\n\t\t\t\t\t\t\tdata-value="" placeholder="1" value="1" step="1">\n\t\t\t\t\t\t<div class="inp-item__unit inp-item__unit_num">шт.</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>`);
            let btnItem = sectionBody.querySelector(".inp-block__btn");
            btnItem.classList.remove("_no-item");
        }
        if ("room-block" === e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id || "wall-block" === e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id) {
            if (!addOrDel && sectionItemLength > 2) {
                e.target.parentNode.parentNode.remove();
                let sectionBlockTitle = sectionBody.querySelectorAll(".inp-item__title-num");
                sectionBlockTitle.forEach(((elem, index) => {
                    elem.innerHTML = index + 1;
                }));
            }
        } else {
            if (!addOrDel) {
                e.target.parentNode.parentNode.remove();
                let sectionBlockTitle = sectionBody.querySelectorAll(".inp-item__title-num");
                sectionBlockTitle.forEach(((elem, index) => {
                    elem.innerHTML = index + 1;
                }));
            }
            marginBtnAdd(sectionBody);
        }
    };
    let InpCorrect = () => {
        let doorBlock = document.querySelector("#door-block");
        let InpDoor = doorBlock.querySelectorAll("input");
        for (let i = InpDoor.length - 1; i >= 0; i--) if ("" !== InpDoor[i].value) arrTrue.push(true); else {
            arrTrue.push(false);
            InpDoor[i].classList.add("_correct");
            InpDoor[i].focus();
        }
        let windowBlock = document.querySelector("#window-block");
        let InpWindow = windowBlock.querySelectorAll("input");
        for (let i = InpWindow.length - 1; i >= 0; i--) if ("" !== InpWindow[i].value) arrTrue.push(true); else {
            arrTrue.push(false);
            InpWindow[i].classList.add("_correct");
            InpWindow[i].focus();
        }
        let raportBlock = document.querySelector("#raport");
        let InpRaport = raportBlock.querySelectorAll("input");
        for (let i = 0; i < InpRaport.length; i++) if ("" === InpRaport[i].value) {
            arrTrue.push(true);
            InpRaport[i].value = 0;
        } else arrTrue.push(true);
    };
    let resArr = "";
    let roomBlock = document.querySelector("#room-block");
    let wallBlock = document.querySelector("#wall-block");
    let submitRes = () => {
        arrTrue = [];
        if (roomBlock.classList.contains("_active")) {
            InpCorrect();
            let InpRoom = roomBlock.querySelectorAll("input");
            for (let i = InpRoom.length - 1; i >= 0; i--) if ("" !== InpRoom[i].value) arrTrue.push(true); else {
                arrTrue.push(false);
                InpRoom[i].classList.add("_correct");
                InpRoom[i].focus();
            }
        }
        if (wallBlock.classList.contains("_active")) {
            InpCorrect();
            let InpWall = wallBlock.querySelectorAll("input");
            for (let i = InpWall.length - 1; i >= 0; i--) if ("" !== InpWall[i].value) arrTrue.push(true); else {
                arrTrue.push(false);
                InpWall[i].classList.add("_correct");
                InpWall[i].focus();
            }
        }
        resArr = true;
        arrTrue.map((elem => {
            if (!elem) resArr = false;
        }));
    };
    let addLacalStorageIItem = () => {
        let ids = [];
        let inpAlls = wallpaperForm.elements;
        for (let i = 0; i < inpAlls.length; i++) ids.push(inpAlls[i].id);
        for (let id of ids) {
            let input = document.getElementById(id);
            input.classList.remove("_correct");
            getId(id, input);
        }
        let roomItem = document.querySelector("#room-items").innerHTML;
        let wallItem = document.querySelector("#wall-items").innerHTML;
        let windowItem = document.querySelector("#window-items").innerHTML;
        let doorItem = document.querySelector("#door-items").innerHTML;
        localStorage.setItem("roomItem", roomItem);
        localStorage.setItem("wallItem", wallItem);
        localStorage.setItem("windowItem", windowItem);
        localStorage.setItem("doorItem", doorItem);
    };
    let formValuesArray = [];
    let resultWidthNum = null;
    let resultLengthNum = null;
    let resultFinalWallapers = null;
    let squareWallpapers = null;
    let squareRoom = null;
    let arrRoomHeight = [];
    let arrWallHeight = [];
    let resultFinalBlock = res => {
        formValuesArray = [];
        arrRoomHeight = [];
        arrWallHeight = [];
        let arrRoom = [];
        let arrRoomRes = [];
        let arrWallRes = [];
        let arrWindow = [];
        let arrDoor = [];
        let arrWindowWidth = [];
        let arrDoorWidth = [];
        let arrResWidthWindow = [];
        let arrResWidthDoor = [];
        let numWindow = [];
        let numDoor = [];
        let widthWindowPlus = null;
        let widthDoorPlus = null;
        let rulonResWidth = null;
        let rulonResLength = null;
        let rulonResStock = null;
        let rulonCustomWidth = null;
        let rulonCustomLength = null;
        let rulonCustomStock = null;
        let raportSize = null;
        let raportBias = null;
        let resultRoomWidth = null;
        let resultRoomLength = null;
        let resultWallWidth = null;
        let perimeter = null;
        let windowNum = 0;
        let doorNum = 0;
        let resultRoomHeight = null;
        let resultWallHeight = null;
        let resultHeight = null;
        let resultDoorHeigth = 0;
        let resultWindowHeigth = 0;
        resultWidthNum = null;
        resultLengthNum = null;
        let resultStock = null;
        let allInput = wallpaperForm.elements;
        for (let i = 0; i < allInput.length; i++) {
            if ("number" === allInput[i].type) formValuesArray.push([ allInput[i].id, allInput[i].value ]);
            if ("radio" === allInput[i].type && allInput[i].checked) formValuesArray.push([ allInput[i].id, allInput[i].value ]);
        }
        formValuesArray.forEach((elem => {
            if ("rulon_05-width" === elem[0] || "rulon_106-width" === elem[0]) rulonResWidth = elem[1];
            if ("rulon_10-length" === elem[0] || "rulon_15-length" === elem[0]) rulonResLength = elem[1];
            if ("stock_5" === elem[0] || "stock_10" === elem[0] || "stock_no" === elem[0]) rulonResStock = elem[1];
            if ("custom_rulon-width" === elem[0] && "" !== elem[1]) rulonCustomWidth = +elem[1];
            if ("custom_rulon-length" === elem[0] && "" !== elem[1]) rulonCustomLength = +elem[1];
            if ("custom_stock" === elem[0] && "" !== elem[1]) rulonCustomStock = +elem[1];
            if ("raport-size" === elem[0]) raportSize = elem[1];
            if ("raport-bias" === elem[0]) raportBias = elem[1];
            if (-1 !== elem[0].indexOf("room-width")) {
                arrRoom.push(+elem[1]);
                resultRoomWidth += +elem[1];
            }
            if (-1 !== elem[0].indexOf("room-length")) {
                arrRoom.push(+elem[1]);
                resultRoomLength += +elem[1];
            }
            if (-1 !== elem[0].indexOf("room-height")) arrRoomHeight.push(+elem[1]);
            if (-1 !== elem[0].indexOf("wall-width")) {
                arrWallRes.push(+elem[1]);
                resultWallWidth += +elem[1];
            }
            if (-1 !== elem[0].indexOf("wall-height")) arrWallHeight.push(+elem[1]);
            if (-1 !== elem[0].indexOf("window-length")) arrWindow.push(+elem[1]);
            if (-1 !== elem[0].indexOf("window-width")) arrWindowWidth.push(+elem[1]);
            if (-1 !== elem[0].indexOf("window-num")) {
                numWindow.push(+elem[1]);
                windowNum += +elem[1];
            }
            if (-1 !== elem[0].indexOf("door-num")) {
                numDoor.push(+elem[1]);
                doorNum += +elem[1];
            }
            if (-1 !== elem[0].indexOf("door-length")) arrDoor.push(+elem[1]);
            if (-1 !== elem[0].indexOf("door-width")) arrDoorWidth.push(+elem[1]);
        }));
        if (null !== rulonCustomWidth) resultWidthNum = rulonCustomWidth; else resultWidthNum = rulonResWidth;
        if (null !== rulonCustomLength) resultLengthNum = rulonCustomLength; else resultLengthNum = rulonResLength;
        if (null !== rulonCustomStock) resultStock = rulonCustomStock / 100; else resultStock = rulonResStock;
        for (let i = 0; i < arrRoom.length; i++) if (0 === i) ; else if (1 === i) arrRoomRes.push(2 * (arrRoom[i] + arrRoom[i - 1])); else if (i % 2 !== 0) arrRoomRes.push(2 * (arrRoom[i] + arrRoom[i - 1]));
        if (1 === res) perimeter = 2 * (resultRoomWidth + resultRoomLength);
        if (0 === res) perimeter = resultWallWidth;
        let arrPescentRoom = [];
        arrRoomRes.forEach((elem => {
            arrPescentRoom.push(100 * elem / perimeter);
        }));
        arrRoomHeight.forEach(((elem, index) => {
            resultRoomHeight += elem * (arrPescentRoom[index] / 100);
        }));
        let arrPescentWall = [];
        arrWallRes.forEach((elem => {
            arrPescentWall.push(100 * elem / perimeter);
        }));
        arrWallHeight.forEach(((elem, index) => {
            resultWallHeight += elem * (arrPescentWall[index] / 100);
        }));
        if (1 === res) resultHeight = resultRoomHeight;
        if (0 === res) resultHeight = resultWallHeight;
        arrWindowWidth.forEach(((elem, index) => {
            arrResWidthWindow.push(elem * numWindow[index]);
        }));
        arrDoorWidth.forEach(((elem, index) => {
            arrResWidthDoor.push(elem * numDoor[index]);
        }));
        for (let i = 0; i < arrResWidthWindow.length; i++) widthWindowPlus += arrResWidthWindow[i];
        for (let i = 0; i < arrResWidthDoor.length; i++) widthDoorPlus += arrResWidthDoor[i];
        let arrPescentWindow = [];
        arrResWidthWindow.forEach((elem => {
            arrPescentWindow.push(100 * elem / widthWindowPlus);
        }));
        arrWindow.forEach(((elem, index) => {
            resultWindowHeigth += elem * (arrPescentWindow[index] / 100);
        }));
        let arrPescentDoor = [];
        arrResWidthDoor.forEach((elem => {
            arrPescentDoor.push(100 * elem / widthDoorPlus);
        }));
        arrDoor.forEach(((elem, index) => {
            resultDoorHeigth += elem * (arrPescentDoor[index] / 100);
        }));
        let perimetrOne = perimeter - widthWindowPlus - widthDoorPlus;
        let perimetrTwo = widthWindowPlus;
        let perimetrThree = widthDoorPlus;
        let heightAllItem = resultHeight + +raportSize + +raportBias + .1;
        let resultHeightDoor = resultDoorHeigth;
        let resultHeightWindow = resultWindowHeigth;
        let resultFinalWallapersStepOne = perimetrOne / resultWidthNum / Math.floor(resultLengthNum / heightAllItem);
        let resultFinalWallapersStepWindow = perimetrTwo / resultWidthNum / Math.floor(resultLengthNum / (heightAllItem - resultHeightWindow));
        let resultFinalWallapersStepDoor = perimetrThree / resultWidthNum / Math.floor(resultLengthNum / (heightAllItem - resultHeightDoor));
        resultFinalWallapers = Math.ceil((resultFinalWallapersStepOne + resultFinalWallapersStepWindow + resultFinalWallapersStepDoor) * (1 + +resultStock));
        squareWallpapers = perimetrOne * resultHeight + perimetrTwo * (resultHeight - resultHeightWindow) + perimetrThree * (resultHeight - resultHeightDoor);
        squareWallpapers = Math.floor(100 * squareWallpapers) / 100;
        squareRoom = resultFinalWallapers * resultLengthNum * resultWidthNum;
        squareRoom = Math.floor(100 * Math.ceil(squareRoom)) / 100;
    };
    let limit = 24 * 3600 * 1e3;
    let localStorageInitTime = localStorage.getItem("localStorageInitTime");
    if (null === localStorageInitTime) localStorage.setItem("localStorageInitTime", +new Date); else if (+new Date - localStorageInitTime > limit) {
        localStorage.clear();
        localStorage.setItem("localStorageInitTime", +new Date);
    }
    if ("room" === localStorage.getItem("pageHeaderSave")) addRoom();
    if ("wall" === localStorage.getItem("pageHeaderSave")) addWall();
    if ("details" === localStorage.getItem("pageHeaderSave")) addDetails();
    if ("instruction" === localStorage.getItem("pageHeaderSave")) addInstruction();
    if (localStorage.getItem("roomItem")) {
        let roomItem = document.querySelector("#room-items");
        roomItem.innerHTML = localStorage.getItem("roomItem");
    }
    if (localStorage.getItem("wallItem")) {
        let wallItem = document.querySelector("#wall-items");
        wallItem.innerHTML = localStorage.getItem("wallItem");
    }
    if (localStorage.getItem("windowItem")) {
        let windowItem = document.querySelector("#window-items");
        windowItem.innerHTML = localStorage.getItem("windowItem");
        marginBtnAdd(windowItem);
    }
    if (localStorage.getItem("doorItem")) {
        let doorItem = document.querySelector("#door-items");
        doorItem.innerHTML = localStorage.getItem("doorItem");
        marginBtnAdd(doorItem);
    }
    let marginBtnPage = section => {
        let sectionItem = section.querySelectorAll(".inp-item");
        let sectionItemLength = sectionItem.length;
        if (0 === sectionItemLength) {
            let btnItem = section.querySelector(".inp-block__btn");
            btnItem.classList.add("_no-item");
            console.log("dsfsdf");
        }
    };
    marginBtnPage(document.querySelector("#window-block"));
    marginBtnPage(document.querySelector("#door-block"));
    let getId = (id, input) => {
        input.addEventListener("change", (() => {
            if ("number" === input.type && "" !== input.value) {
                let inpVal = input.value.replace(/[^0-9.,]/g, "").replace(/^0+/g, "");
                if ("," === inpVal[0] || "." === inpVal[0]) inpVal = 0 + inpVal;
                localStorage.setItem(id, inpVal);
            }
            if ("radio" === input.type) localStorage.setItem(id, input.checked);
        }));
    };
    document.addEventListener("DOMContentLoaded", (() => {
        let ids = [];
        let inpAlls = wallpaperForm.elements;
        for (let i = 0; i < inpAlls.length; i++) ids.push(inpAlls[i].id);
        for (let id of ids) {
            let input = document.getElementById(id);
            if (localStorage.getItem(id)) {
                if ("number" === input.type) {
                    input.value = localStorage.getItem(id);
                    if ("custom_rulon-width" === id && "" !== input.value) {
                        let inpRadioDefW = document.querySelector("#rulon_05-width");
                        inpRadioDefW.checked = "";
                        inpRadioDefW.nextElementSibling.classList.remove("_active");
                    }
                    if ("custom_rulon-length" === id && "" !== input.value) {
                        let inpRadioDefL = document.querySelector("#rulon_10-length");
                        inpRadioDefL.checked = "";
                        inpRadioDefL.nextElementSibling.classList.remove("_active");
                    }
                    if ("custom_stock" === id && "" !== input.value) {
                        let InpDefFive = document.querySelector("#stock_5");
                        InpDefFive.checked = "";
                        InpDefFive.nextElementSibling.classList.remove("_active");
                    }
                }
                if ("radio" === input.type && "true" === localStorage.getItem(id)) {
                    radioDelLocal(input);
                    input.checked = "checked";
                    input.nextElementSibling.classList.add("_active");
                }
            }
            getId(id, input);
        }
    }));
    document.addEventListener("click", (e => {
        let resBlock = document.querySelector(".result__body");
        if (e.target.closest("#room-tab")) {
            addRoom();
            resBlock.innerHTML = "";
            localStorage.setItem("pageHeaderSave", "room");
        }
        if (e.target.closest("#wall-tab")) {
            addWall();
            resBlock.innerHTML = "";
            localStorage.setItem("pageHeaderSave", "wall");
        }
        if (e.target.closest("#details-tab")) {
            addDetails();
            localStorage.setItem("pageHeaderSave", "details");
        }
        if (e.target.closest("#instruction-tab")) {
            addInstruction();
            localStorage.setItem("pageHeaderSave", "instruction");
        }
        if (e.target.closest("#icon-info-mobile")) {
            let infoMobile = document.querySelector("#info-body-mobile");
            infoMobile.classList.toggle("_active");
        }
        if (!e.target.closest("#icon-info-mobile") && !e.target.closest("#info-body-mobile") && document.querySelector("#info-body-mobile").classList.contains("_active")) {
            let infoMobile = document.querySelector("#info-body-mobile");
            infoMobile.classList.remove("_active");
        }
        if (e.target.closest(".radio__inp")) {
            radioDel(e);
            e.target.checked = "checked";
            let radioLabel = e.target.nextElementSibling;
            radioLabel.classList.add("_active");
            let inpCustom = e.target.parentNode.parentNode.parentNode.querySelector(".inp-item__input_сustom");
            let inpCustomStock = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector("#custom_stock");
            if (inpCustom) {
                inpCustom.value = "";
                localStorage.setItem(inpCustom.id, "");
            }
            if (inpCustomStock) {
                inpCustomStock.value = "";
                localStorage.setItem(inpCustomStock.id, "");
            }
        }
        if (e.target.closest(".inp-block__btn")) {
            addOrDelSectionBlock(e, true);
            addLacalStorageIItem();
        }
        if (e.target.closest(".inp-item__rotate-del")) {
            addOrDelSectionBlock(e, false);
            addLacalStorageIItem();
        }
        if (e.target.closest(".result__btn-reset")) {
            let wallpaperForm = document.forms.wallpapercalc;
            wallpaperForm.reset();
            e.preventDefault();
            radioDelAll();
            let inpRadioDefW = document.querySelector("#rulon_05-width");
            let inpRadioDefL = document.querySelector("#rulon_10-length");
            let InpDefFive = document.querySelector("#stock_5");
            InpDefFive.checked = "checked";
            inpRadioDefW.checked = "checked";
            inpRadioDefL.checked = "checked";
            inpRadioDefW.nextElementSibling.classList.add("_active");
            inpRadioDefL.nextElementSibling.classList.add("_active");
            InpDefFive.nextElementSibling.classList.add("_active");
            let ids = [];
            let inpAlls = wallpaperForm.elements;
            for (let i = 0; i < inpAlls.length; i++) ids.push(inpAlls[i].id);
            for (let id of ids) if (localStorage.getItem(id)) localStorage.setItem(id, "");
        }
    }));
    document.addEventListener("focusout", (e => {
        if (e.target.closest(".inp-item__input")) {
            let inpValue = e.target.value;
            e.target.value = inpValue.replace(/^0+/g, "").replace(/[^0-9.,]/g, "");
            if ("," === e.target.value[0] || "." === e.target.value[0]) e.target.value = 0 + e.target.value;
            if ("" !== e.target.value) e.target.classList.remove("_correct");
        }
        if (e.target.closest("#custom_rulon-width")) {
            let inpCustomRulonWidth = document.querySelector("#custom_rulon-width");
            if ("" !== inpCustomRulonWidth.value) radioDel(e);
            if ("" === inpCustomRulonWidth.value) {
                let inpRadioDefW = document.querySelector("#rulon_05-width");
                radioDel(e);
                inpCustomRulonWidth.value = "";
                inpRadioDefW.checked = "checked";
                inpRadioDefW.nextElementSibling.classList.add("_active");
            }
        }
        if (e.target.closest("#custom_rulon-length")) {
            let inpCustomRulonLength = document.querySelector("#custom_rulon-length");
            if ("" !== inpCustomRulonLength.value) radioDel(e);
            if ("" === inpCustomRulonLength.value) {
                let inpRadioDefL = document.querySelector("#rulon_10-length");
                radioDel(e);
                inpCustomRulonLength.value = "";
                inpRadioDefL.checked = "checked";
                inpRadioDefL.nextElementSibling.classList.add("_active");
            }
        }
        if (e.target.closest("#custom_stock")) {
            let inpCustomRulonCustom = document.querySelector("#custom_stock");
            if ("" !== inpCustomRulonCustom.value) radioDelStock(e);
            if ("" === inpCustomRulonCustom.value) {
                radioDelStock(e);
                let InpDefFive = document.querySelector("#stock_5");
                InpDefFive.checked = "checked";
                inpCustomRulonCustom.value = "";
                InpDefFive.nextElementSibling.classList.add("_active");
            }
        }
    }));
    let arrTrue = [];
    wallpaperForm.addEventListener("submit", (e => {
        e.preventDefault();
        submitRes();
        let resultContainer = document.querySelector(".result__body");
        if (roomBlock.classList.contains("_active")) if (false !== resArr) {
            resultFinalBlock(1);
            if (!resultFinalWallapers || !isFinite(resultFinalWallapers) || resultFinalWallapers < 0) {
                resultFinalWallapers = '<br><span style="font-size:18px">Введите данные корректно</span>';
                squareRoom = '<span style="font-size:18px">-</span>';
                squareWallpapers = '<span style="font-size:18px">-</span>';
            }
            arrRoomHeight.forEach((elem => {
                if (+elem > +resultLengthNum) {
                    resultFinalWallapers = '<br><span style="font-size:18px">Введите высоту корректно</span>';
                    squareRoom = '<span style="font-size:18px">-</span>';
                    squareWallpapers = '<span style="font-size:18px">-</span>';
                }
            }));
            resultContainer.innerHTML = "";
            resultContainer.insertAdjacentHTML("beforeend", `<div class="body-result__title">Результат расчета по Комнатам:</div>\n\t\t\t\t<div class="body-result__block">\n\t\t\t\t\t<div class="body-result__num-rulon"><span style="font-size:25px">Итого трубок:</span> ${resultFinalWallapers}</div>\n\t\t\t\t\t<div class="body-result__num-other">${resultWidthNum} м х ${resultLengthNum} м</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="body-result__subinfo">\n\t\t\t\t\t<div class="body-result__square-wall">Количество обоев: ${squareRoom} кв.м</div>\n\t\t\t\t\t<div class="body-result__square">Площадь оклейки: ${squareWallpapers} кв.м</div>\n\t\t\t\t</div>`);
        } else {
            resultContainer.innerHTML = "";
            resultContainer.insertAdjacentHTML("beforeend", `<div class="body-result__title">Пожалуйста, введите данные корректно!</div>`);
        }
        if (wallBlock.classList.contains("_active")) if (false !== resArr) {
            resultFinalBlock(0);
            if (!resultFinalWallapers || !isFinite(resultFinalWallapers) || resultFinalWallapers < 0) {
                resultFinalWallapers = '<br><span style="font-size:18px">Введите данные корректно</span>';
                squareRoom = '<span style="font-size:18px">-</span>';
                squareWallpapers = '<span style="font-size:18px">-</span>';
            }
            arrWallHeight.forEach((elem => {
                if (+elem > +resultLengthNum) {
                    resultFinalWallapers = '<br><span style="font-size:18px">Введите высоту корректно</span>';
                    squareRoom = '<span style="font-size:18px">-</span>';
                    squareWallpapers = '<span style="font-size:18px">-</span>';
                }
            }));
            resultContainer.innerHTML = "";
            resultContainer.insertAdjacentHTML("beforeend", `<div class="body-result__title">Результат расчета по Стенам:</div>\n\t\t\t\t<div class="body-result__block">\n\t\t\t\t\t<div class="body-result__num-rulon"><span style="font-size:25px">Итого трубок:</span> ${resultFinalWallapers}</div>\n\t\t\t\t\t<div class="body-result__num-other">${resultWidthNum} м х ${resultLengthNum} м</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="body-result__subinfo">\n\t\t\t\t\t<div class="body-result__square-wall">Количество обоев: ${squareRoom} кв.м</div>\n\t\t\t\t\t<div class="body-result__square">Площадь оклейки: ${squareWallpapers} кв.м</div>\n\t\t\t\t</div>`);
        } else {
            resultContainer.innerHTML = "";
            resultContainer.insertAdjacentHTML("beforeend", `<div class="body-result__title">Пожалуйста, введите данные корректно!</div>`);
        }
    }));
    window["FLS"] = true;
    isWebp();
})();
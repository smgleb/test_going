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
    window["FLS"] = true;
    isWebp();
})();
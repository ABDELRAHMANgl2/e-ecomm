let phoneslid = document.querySelectorAll(".phoneslid a");
let phonimgg = document.querySelectorAll(".phoneslid a img")

phoneslid.forEach(function (ele) {
    ele.onclick = function () {
        phoneslid.forEach(function (ele) {
        ele.classList.remove("imdd1")
        });
        this.classList.add("imdd1");
    };
});

phonimgg.forEach(function (ele) {
    ele.onclick = function () {
        phonimgg.forEach(function (ele) {
        ele.classList.remove("active")
        });
        this.classList.add("active");
    };
});

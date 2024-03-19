let imgs = document.querySelectorAll(".gallery .image"),
    bullets = document.querySelectorAll(".bullets span");
bullets.forEach(e => {
    e.addEventListener("click", el => {
        if (cu !== el.target.dataset.order) {
            let def;
            if (cu > el.target.dataset.order - 1) {
                def = cu - (el.target.dataset.order - 1);
                while (def > 0) {
                    def--;
                    document.querySelectorAll(".fa-angle-left")[cu].click();
                };
            }
            else {
                def = el.target.dataset.order - 1 - cu;
                while (def > 0) {
                    def--;
                    document.querySelectorAll(".fa-angle-right")[cu].click();
                };
            };
        };
    });
});
imgs.forEach(function (img) {
    let began;
    img.addEventListener("dragstart", function (e) { began = e.offsetX; });
    img.addEventListener("dragover", e => { e.preventDefault(); });
    img.addEventListener("drop", e => {
        if (e.offsetX > began) document.querySelectorAll(".fa-angle-left")[cu].click();
        else document.querySelectorAll(".fa-angle-right")[cu].click();
    });
});
let cu = 0;
let angles = document.querySelectorAll(".angle");
angles.forEach(an => {
    an.addEventListener("click", e => {
        document.querySelector(".bullets .active").classList.remove("active");
        if (e.target.classList.contains("fa-angle-right")) {
            e.target.parentElement.className = "image go-left";
            cu++;
            if (cu >= imgs.length) cu = 0;
            bullets[cu].classList.add("active");
            imgs[cu].className = "image active come-from-right";
        } else {
            e.target.parentElement.className = "image go-right";
            cu--;
            if (cu < 0) cu = 2;
            bullets[cu].classList.add("active");
            imgs[cu].className = "image active come-from-left";
        };
    });
});
let ques = document.querySelectorAll(".ques li");
ques.forEach(li => {
    li.addEventListener("click", e => {
        e.target.classList.toggle("active");
        if (e.target.classList.contains("active")) e.target.style.height = `${(e.target.children[0].offsetHeight + e.target.offsetHeight) + 10}px`;
        else e.target.style.height = "55px";
        for (q of ques) if (q !== e.target) {
            q.classList.remove("active");
            q.style.height = "55px";
        };
    });
});
let c = "1",
    options = document.querySelectorAll(".options li"),
    space = document.querySelector(".space"),
    floor = document.querySelector(".floor"),
    room = document.querySelector(".room"),
    park = document.querySelector(".park"),
    pay = document.querySelector(".pay"),
    img = document.querySelector(".img"),
    option = document.querySelector(".option");
options.forEach(li => {
    li.addEventListener("click", e => {
        if (e.target.dataset.num != c) {
            document.querySelector(".Details").style.opacity = "0";
            setTimeout(() => {
                e.target.classList.add("active");
                for (i of options) if (i !== e.target) i.classList.remove("active");
                if (e.target.dataset.num === "1") {
                    space.textContent = "185 m2";
                    floor.textContent = "26th";
                    room.textContent = "4";
                    park.textContent = "Yes";
                    pay.textContent = "Bank";
                    img.src = "../imgs/deal-01.jpg";
                    option.textContent = "Property";
                }
                else if (e.target.dataset.num === "2") {
                    space.textContent = "250 m2";
                    floor.textContent = "26th";
                    room.textContent = "5";
                    park.textContent = "Yes";
                    pay.textContent = "Bank";
                    img.src = "../imgs/deal-02.jpg";
                    option.textContent = "Villa";
                }
                else if (e.target.dataset.num === "3") {
                    space.textContent = "320 m2";
                    floor.textContent = "34th";
                    room.textContent = "6";
                    park.textContent = "Yes";
                    pay.textContent = "Bank";
                    img.src = "../imgs/deal-03.jpg";
                    option.textContent = "Penthouse";
                };
                setTimeout(() => { document.querySelector(".Details").style.opacity = "1"; }, 100);
                c = e.target.dataset.num;
            }, 100);
        };
    });
});
window.onscroll = () => {
    if (window.scrollY > document.querySelector(".main-header").offsetTop + 120) document.querySelector(".main-header").classList.add("fixed");
    else document.querySelector(".main-header").classList.remove("fixed");
};
let buttons = document.querySelectorAll(".buttons li"),
    cards = document.querySelectorAll(".cards .card");
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        document.querySelector(".buttons li.active").classList.remove("active");
        button.classList.add("active");
        if (e.target.dataset.type === "all") cards.forEach(card => { card.classList.remove("no"); });
        else {
            cards.forEach(card => {
                if (card.classList.contains(e.target.dataset.type)) card.classList.remove("no");
                else card.classList.add("no");
            });
        };
    });
});
document.querySelector(".miniLinks").onclick = () => {
    document.querySelector(".main-header .container").classList.toggle("show");
    if (document.querySelector(".main-header .container").classList.contains("show")) {
        document.querySelector(".main-header .container .links").style.height = "0";
        setTimeout(() => { document.querySelector(".main-header .container .links").style.height = "184px"; }, 50);
    };
};
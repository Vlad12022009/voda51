// ===============================
// ВОДА52
// script.js
// ===============================

// Плавное появление блоков

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".card, .step, .review, .gallery img, .form-box"
).forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

// ===============================
// Кнопка "Наверх"
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.className = "top-button";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.classList.add("visible");

    } else {

        topButton.classList.remove("visible");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

burger.addEventListener("click", () => {

    if (mobileMenu.style.display === "flex") {
        mobileMenu.style.display = "none";
    } else {
        mobileMenu.style.display = "flex";
    }

});
const requestForm = document.getElementById("requestForm");
const successMessage = document.getElementById("successMessage");

if (requestForm) {
    requestForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const formData = new FormData(requestForm);

        try {
            const response = await fetch("https://formspree.io/f/mvzjdzrg", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json"
                }
            });

            if (response.ok) {
                requestForm.reset();
                requestForm.style.display = "none";
                successMessage.style.display = "block";
            } else {
                alert("Не удалось отправить заявку. Попробуйте ещё раз.");
            }
        } catch (error) {
            alert("Ошибка соединения. Попробуйте ещё раз.");
        }
    });
}

const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const imgText = document.querySelector(".caption");

previews.forEach((item) => {
    item.addEventListener("click", () => {
        modal.classList.add("open");
        original.classList.add('open');
        // Dynamic change text and img
        const originaSrc = item.getAttribute('data-original');
        original.src = `./preview/${originaSrc}`
        const altText = item.alt;
        imgText.textContent = altText;
    });
});
modal.addEventListener("click", (e) => {
    if (e.target.classList.contains('modal')) {
        modal.classList.remove('open');
        original.classList.remove('open');
    }
});
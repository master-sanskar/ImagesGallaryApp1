const form = document.querySelector("form");
const container = document.querySelector(".image-container");
console.log(container);

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let author = form[0].value;
    let image_url = form[1].value;

    if (!author.trim() || !image_url.trim()) {
        return alert = ("Invalid value")
    }

    container.innerHTML += <div
        class="card card-css d-flex me-3 mb-3"
        style="background-image: url(${image_url});">

        <div class="text-light card-body d-flex justify-content-between align-items-end">

            <h5 class="card-title">${author}</h5>
            <span
                class=" text-light text-decoration-none fs-3">
                <i class="delete-card ri-delete-bin-6-fill">
                </i></span>
        </div>
    </div>;
    form[0].value = "";
    form[1].value = "";
    

    container.addEventListener("submit",function(e){
        if (e.target.classList[0] === "delete-card") {
            e.target.parentNode.parentNode.parentNode.remove();
        }
    })
});
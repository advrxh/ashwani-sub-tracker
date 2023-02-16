var SUBS = 0;
document.addEventListener("DOMContentLoaded", () => {
    fetch("https://sub-count-worker.aadilvarsh.workers.dev")
        .then((res) => res.text())
        .then((txt) => {
            SUBS = Number(txt);
            sub_percent = (SUBS / 1_000_000) * 100;
            console.log(sub_percent);
            document.getElementById("sub-percent").innerText =
                sub_percent + "%";

            document.getElementById("sub-no").innerText = 1_000_000 - SUBS;

            var fill = document.querySelector(".fill");
            var pr_info = document.querySelector(".progress-info");
            fill.style.setProperty("width", `${sub_percent}%`);
            pr_info.style.setProperty("width", `${sub_percent}%`);
        });
});

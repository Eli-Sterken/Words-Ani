import * as jquery from "./jquery.min.js";
let letters = ["T", "I", "L", "D", "E", "N"];
let left = 13;
let type = 0;
const element = `
<div class="wordOutline" id="newOutline">
    <h1 class="word full" id="newWord"></h1>
</div>
`

for(const i of letters.values()) {
    const e = document.createElement("div");
    e.id = `${i.toLowerCase()}Contaner`;
    e.innerHTML = element;
    document.getElementsByTagName("body")[0].appendChild(e);
    const o = document.getElementById("newOutline");
    const w = document.getElementById("newWord");
    o.style.left = `${left}%`;
    left = left + 13;
    if(type === 0) {
        o.style.top = "120%";
        type = 1;
    } else {
        o.style.top = "-20%";
        type = 0;
    };
    o.id = i.toLowerCase();
    w.innerHTML = i;
    w.id = "";
};

$("#button").on("click", () => {
    $("#button").animate({left: "-20%"}, 1500).promise().done(() => {
        $(".wordOutline").animate({top: "40%"}, 1500).promise().done(() => {
            for(const i of letters.values()) {
                function change() {
                    document.getElementById(i.toLowerCase()).style.backgroundColor = "rgba(255, 255, 255, 0.25)";
                };
                document.getElementById(i.toLowerCase()).style.backgroundColor = "lime";
                setTimeout(change, 1200);
            };
            setTimeout(window.location.reload.bind(window.location), 2500);
        });
    });
}); 

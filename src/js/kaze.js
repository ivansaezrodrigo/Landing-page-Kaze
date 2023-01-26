var letra = "k";
const k = document.querySelector('#k');
const a = document.querySelector('#a');
const z = document.querySelector('#z');
const e = document.querySelector('#e');
var mediaqueryList = window.matchMedia("(max-width: 768px)");

if (mediaqueryList.matches) {
    k.style = "width: 100%;height: 7em;";
} else {
    k.style = "animation: K-k .2s forwards;";
    a.style = "animation: K-a .2s forwards;";
    z.style = "animation: K-z .2s forwards;";
    e.style = "animation: K-e .2s forwards;";

    k.addEventListener('mouseover', () => {

        if (letra == "a") {
            k.style = "animation: AK-k .2s forwards;";
            a.style = "animation: AK-a .2s forwards;";
            z.style = "animation: AK-z .2s forwards;";
            e.style = "animation: AK-e .2s forwards;";
        } else if (letra == "z") {
            k.style = "animation: ZK-k .2s forwards;";
            a.style = "animation: ZK-a .2s forwards;";
            z.style = "animation: ZK-z .2s forwards;";
            e.style = "animation: ZK-e .2s forwards;";
        } else if (letra == "e") {
            k.style = "animation: EK-k .2s forwards;";
            a.style = "animation: EK-a .2s forwards;";
            z.style = "animation: EK-z .2s forwards;";
            e.style = "animation: EK-e .2s forwards;";
        }
        letra = "k";
    });

    a.addEventListener('mouseover', () => {

        if (letra == "k") {
            k.style = "animation: KA-k .2s forwards;";
            a.style = "animation: KA-a .2s forwards;";
            z.style = "animation: KA-z .2s forwards;";
            e.style = "animation: KA-e .2s forwards;";
        } else if (letra == "z") {
            k.style = "animation: ZA-k .2s forwards;";
            a.style = "animation: ZA-a .2s forwards;";
            z.style = "animation: ZA-z .2s forwards;";
            e.style = "animation: ZA-e .2s forwards;";
        } else if (letra == "e") {
            k.style = "animation: EA-k .2s forwards;";
            a.style = "animation: EA-a .2s forwards;";
            z.style = "animation: EA-z .2s forwards;";
            e.style = "animation: EA-e .2s forwards;";
        }
        letra = "a";

    });
    z.addEventListener('mouseover', () => {

        if (letra == "a") {
            k.style = "animation: AZ-k .2s forwards;";
            a.style = "animation: AZ-a .2s forwards;";
            z.style = "animation: AZ-z .2s forwards;";
            e.style = "animation: AZ-e .2s forwards;";
        } else if (letra == "k") {
            k.style = "animation: KZ-k .2s forwards;";
            a.style = "animation: KZ-a .2s forwards;";
            z.style = "animation: KZ-z .2s forwards;";
            e.style = "animation: KZ-e .2s forwards;";
        } else if (letra == "e") {
            k.style = "animation: EZ-k .2s forwards;";
            a.style = "animation: EZ-a .2s forwards;";
            z.style = "animation: EZ-z .2s forwards;";
            e.style = "animation: EZ-e .2s forwards;";
        }
        letra = "z";
    });
    e.addEventListener('mouseover', () => {

        if (letra == "z") {
            k.style = "animation: ZE-k .2s forwards;";
            a.style = "animation: ZE-a .2s forwards;";
            z.style = "animation: ZE-z .2s forwards;";
            e.style = "animation: ZE-e .2s forwards;";
        } else if (letra == "a") {
            k.style = "animation: AE-k .2s forwards;";
            a.style = "animation: AE-a .2s forwards;";
            z.style = "animation: AE-z .2s forwards;";
            e.style = "animation: AE-e .2s forwards;";
        } else if (letra == "k") {
            k.style = "animation: KE-k .2s forwards;";
            a.style = "animation: KE-a .2s forwards;";
            z.style = "animation: KE-z .2s forwards;";
            e.style = "animation: KE-e .2s forwards;";
        }

        letra = "e";

    });

}
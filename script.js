// 🌙 MODO CLARO / ESCURO
function modo() {
    document.body.classList.toggle("light");

    // salva preferência
    if(document.body.classList.contains("light")) {
        localStorage.setItem("tema", "light");
    } else {
        localStorage.setItem("tema", "dark");
    }
}

// carregar tema salvo
window.onload = () => {
    const tema = localStorage.getItem("tema");
    if(tema === "light") {
        document.body.classList.add("light");
    }
};


// ✨ ANIMAÇÃO AO ROLAR (SCROLL REVEAL)
const elementos = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

elementos.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    observer.observe(el);
});


// 🎬 EFEITO SUAVE NO SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
        .scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// 🔝 BOTÃO VOLTAR AO TOPO
const btnTopo = document.createElement("button");
btnTopo.innerHTML = "⬆";
btnTopo.style.position = "fixed";
btnTopo.style.bottom = "20px";
btnTopo.style.right = "20px";
btnTopo.style.padding = "10px";
btnTopo.style.borderRadius = "50%";
btnTopo.style.border = "none";
btnTopo.style.cursor = "pointer";
btnTopo.style.display = "none";
btnTopo.style.zIndex = "999";
document.body.appendChild(btnTopo);

window.addEventListener("scroll", () => {
    if(window.scrollY > 300){
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
});

btnTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// 🌿 EFEITO DE DIGITAÇÃO (TÍTULO)
const titulo = document.querySelector("header h1");

if(titulo){
    const texto = titulo.innerText;
    titulo.innerText = "";
    let i = 0;

    function digitar() {
        if(i < texto.length){
            titulo.innerText += texto.charAt(i);
            i++;
            setTimeout(digitar, 50);
        }
    }

    digitar();
}

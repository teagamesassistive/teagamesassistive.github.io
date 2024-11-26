document.addEventListener("DOMContentLoaded", function () {
    // Função para abrir a janela de configurações
    document.getElementById("open-config").addEventListener("click", function () {
        document.getElementById("config-modal").style.display = "flex";
    });

    // Função para fechar a janela de configurações
    document.getElementById("close-config").addEventListener("click", function () {
        document.getElementById("config-modal").style.display = "none";
    });

    // Referências aos botões de configurações
    const themeToggleButton = document.getElementById("theme-toggle");
    const scaleToggleButton = document.getElementById("scale-toggle");

    // Recuperar configurações salvas
    let currentTheme = localStorage.getItem("theme") || "light-theme";
    let currentScale = localStorage.getItem("font-scale") || "normal-scale";

    // Definir o tema e a escala ao carregar
    document.body.classList.add(currentTheme);
    document.body.classList.add(currentScale);

    // Função para atualizar o texto dos botões de tema e escala
    function updateButtons() {
        themeToggleButton.textContent = (currentTheme === "light-theme") ? "Claro" : "Escuro";
        scaleToggleButton.textContent = (currentScale === "normal-scale") ? "Normal" : (currentScale === "small-scale") ? "Pequeno" : "Grande";
    }

    // Atualizar os botões ao carregar
    updateButtons();

    // Alternar tema
    themeToggleButton.addEventListener("click", function () {
        if (currentTheme === "light-theme") {
            document.body.classList.remove("light-theme");
            document.body.classList.add("dark-theme");
            currentTheme = "dark-theme";
        } else {
            document.body.classList.remove("dark-theme");
            document.body.classList.add("light-theme");
            currentTheme = "light-theme";
        }

        // Salvar a configuração do tema
        localStorage.setItem("theme", currentTheme);
        updateButtons();
    });

    // Alternar escala
    scaleToggleButton.addEventListener("click", function () {
        if (currentScale === "normal-scale") {
            document.body.classList.remove("normal-scale");
            document.body.classList.add("large-scale");
            currentScale = "large-scale";
        } else if (currentScale === "large-scale") {
            document.body.classList.remove("large-scale");
            document.body.classList.add("small-scale");
            currentScale = "small-scale";
        } else {
            document.body.classList.remove("small-scale");
            document.body.classList.add("normal-scale");
            currentScale = "normal-scale";
        }

        // Salvar a configuração da escala
        localStorage.setItem("font-scale", currentScale);
        updateButtons();
    });
});

import { exercicios, temas } from '../global/globals.js';

document.addEventListener("DOMContentLoaded", function () {
    
    function adicionarTemas() {
        const temasList = document.getElementById("temas-list");

        temas.forEach(function (tema) {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = "#";
            a.textContent = tema;
            li.appendChild(a);
            temasList.appendChild(li);

            a.addEventListener("click", function () {
                exibirExercicios(tema);
            });
        });
    }

    function exibirExercicios(tema) {
        const listaExercicios = document.getElementById("lista-exercicios");
        listaExercicios.innerHTML = "";

        const niveis = Object.keys(exercicios[tema]);

        niveis.forEach(function (nivel) {
            const h2 = document.createElement("h2");
            h2.textContent = nivel;
            listaExercicios.appendChild(h2);

            const ol = document.createElement("ol");
            exercicios[tema][nivel].forEach(function (exercicio, index) {
                const li = document.createElement("li");
                const a = document.createElement("a");
                a.href = "#";
                a.textContent = exercicio.enunciado;
                li.appendChild(a);
                ol.appendChild(li);

                a.addEventListener("click", function () {
                    exibirModal(exercicio, index, tema, nivel); 
                });
            });

            listaExercicios.appendChild(ol);
        });
    }

    function exibirModal(exercicio, index, tema, nivel) {
        const overlay = criarOverlay();
        const modalContent = criarModalContent();

        modalContent.innerHTML = `
            <span class="close" onclick="fecharModal('${overlay.id}')">&times;</span>
            <p>${exercicio.enunciado}</p>
            <textarea id="resposta${index}" placeholder="Digite sua resposta"></textarea>
            <div class="botoes">
                <button onclick="validarResposta(${index}, '${tema}', '${nivel}')">Validar Resposta</button>
                <button class="dica">Pedir Dica</button>
            </div>
        `;

        const dicas = exercicio.dicas || [];
        const dicasContainer = document.createElement("div");
        dicasContainer.className = "dicas-container";

        let dicaAtual = 0;

        const btnPedirDica = modalContent.querySelector(".dica");

        btnPedirDica.addEventListener("click", function () {
            if (dicaAtual < dicas.length) {
                const dicaElement = document.createElement("p");
                
                if (dicas[dicaAtual].includes("\\(") && dicas[dicaAtual].includes("\\)")) {
                    // Renderização de equações matemáticas
                    const expressaoMatematicaContainer = document.createElement("div");
                    expressaoMatematicaContainer.innerHTML = dicas[dicaAtual];
                    MathJax.Hub.Queue(["Typeset", MathJax.Hub, expressaoMatematicaContainer]);
                    dicaElement.appendChild(expressaoMatematicaContainer);
                } else {
                    dicaElement.textContent = dicas[dicaAtual];
                }

                dicasContainer.appendChild(dicaElement);
                dicaAtual++;

                dicasContainer.scrollTop = dicasContainer.scrollHeight; // Move o scroll para a última dica adicionada

            } else {
                const semDicasElement = document.createElement("p");
                semDicasElement.textContent = "Não há mais dicas disponíveis.";
                dicasContainer.appendChild(semDicasElement);
            }
        });

        overlay.appendChild(modalContent);
        document.body.appendChild(overlay);
        overlay.style.display = "flex";
        modalContent.appendChild(dicasContainer);
    }

    function criarOverlay() {
        const overlay = document.createElement("div");
        overlay.id = "modal-overlay";
        overlay.className = "modal-overlay";
        overlay.addEventListener("click", function (event) {
            if (event.target === overlay) {
                fecharModal(overlay.id);
            }
        });

        return overlay;
    }

    function criarModalContent() {
        const modalContent = document.createElement("div");
        modalContent.className = "modal-content";
        return modalContent;
    }

    window.fecharModal = function (overlayId) {
        const overlay = document.getElementById(overlayId);
        overlay.style.display = "none";
        document.body.removeChild(overlay);
    };

    window.validarResposta = function (index, tema, nivel) {
        const resposta = document.getElementById(`resposta${index}`).value;
        console.log(exercicios[tema][nivel][index]['resposta'])
        const resposta_correta = exercicios[tema][nivel][index]['resposta']
        console.log(resposta_correta)
        if(resposta==resposta_correta){
            alert("Você acertou! Parabéns")
        } else {
            alert("Essa não é a resposta correta")
        }
    };

    adicionarTemas();
});

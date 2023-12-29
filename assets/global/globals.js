export const exercicios = {
    "Campo elétrico": {
        "Nível 1": [
            {
                enunciado: "Você utilizou um resistor cerâmico cilíndrico de 2 cm de comprimento e 100 ohms em um circuito. Se você estabelecer nos terminais do resistor uma ddp de 12 V, qual é a intensidade do campo elétrico em seu interior (suposto constante)?",
                resposta: 600,
                dicas: [
                    "Saiba filtrar o que é dispensável em um enunciado. A informação da resistência sendo 100 ohms não é relevante para nenhuma das leis aprendidas.",
                    "A fórmula relacionada à DDP aprendida é a seguinte: \\(DDP = \\int_{A}^{B} \\vec{E} \\cdot d\\vec{r}\\). Isso significa que 12 = \\(\\int_{A}^{B} \\vec{E} \\cdot d\\vec{r}\\). Certo?",
                    "O campo elétrico ser constante significa que \\(\\int_{A}^{B} \\vec{E} \\cdot d\\vec{r}\\ = \\int_{A}^{B} E . dr . \\cos(\\alpha)\\), onde \\(\\alpha\\) é o menor ângulo entre os vetores \\(\\vec{E}\\) e \\(d\\vec{r}\\).",
                    "O \\(d\\vec{r}\\) nesse caso é o diferencial (uma porção muito pequena) do comprimento do cilindro. Sua direção é a mesma do campo elétrico. Consegue visualizar por quê?",
                    "Isso significa que \\(\\alpha = 0\\)",
                    "Logo, \\(12 = \\int_{A}^{B} E . dr . \\cos(0) = E \\int_{A}^{B} dr = E . r  \\), onde \\(r\\) é o comprimento do cilindro",
                    "\\(12 = E . 2.10^{-2} ∴ E = 12/2.10^{-2} = 6.10^{2} = 600  [N/C] \\)"
                ]
            },
        ],
    },
    "Possível segundo tema": {
        "Nível 1": [
            { enunciado: "Exercício exemplo", dicas: ["Dica 1", "Dica 2"] },
        ],
        "Nível 2": [
            { enunciado: "Exercício exemplo", dicas: ["Dica 1", "Dica 2", "Dica 3"] },
        ]
    }
};

export const temas = ["Campo elétrico", "Possível segundo tema"];

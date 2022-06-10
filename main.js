const response = document.querySelector("#response")
const button = document.querySelector("#button")
const question = document.querySelector("#question")
const questionResponse = document.querySelector("#response-question")

const responses = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim."
]

const askQuestion = () => {
  if (question.value == "") {
    questionResponse.innerHTML = "Nenhuma pergunta."
    response.innerHTML = "Pergunte, burro!"
    return
  } else {
    button.setAttribute("disabled", true)
    const totalResponse = responses.length
    const randomNumber = Math.floor(Math.random() * totalResponse)
    questionResponse.innerHTML = question.value
    response.innerHTML = responses[randomNumber]
    question.value = ""
    setTimeout(() => {
      button.removeAttribute("disabled")
    }, 3000)
  }
}
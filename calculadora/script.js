function adicionar_parametro(parametro){
    window.document.querySelector("[name='tela']").value += parametro
}
function calcular(){
    conta=window.document.querySelector("[name='tela']").value
    window.document.querySelector("[name='tela']").value = eval(conta)
}
function porcentagen(){
    conta=window.document.querySelector("[name='tela']").value + '/100'
    window.document.querySelector("[name='tela']").value = eval(conta)
}
function botao_AC(){
    window.document.querySelector("[name='tela']").value = ''
}
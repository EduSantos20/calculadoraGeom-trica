function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2
}

function calcularAreaRetangulo(base, altura) {
  return base * altura
}

function calcularAreaQuadrado(lado) {
  return lado * lado
}

function calcularAreaTrapezio(baseMaior, baseMenor, altura) {
  return ((baseMaior + baseMenor) * altura) / 2
}

function calcularAreaCirculo(raio) {
  const pi = 3.14
  return pi * (raio * raio)
}

function Triangulo() {
  var valor1 = document.querySelector('#valor1').value
  var valor2 = document.querySelector('#valor2').value

  var triangulo = document.getElementById('result')
  triangulo.innerHTML = calcularAreaTriangulo(valor1, valor2)
}

function Retangulo() {
  var value1 = document.querySelector('#base').value
  var value2 = document.querySelector('#altura').value

  var retangulo = document.getElementById('resultRetangulo')
  retangulo.innerHTML = calcularAreaRetangulo(value1, value2)
}

function Quadrado() {
  var value1 = document.querySelector('#baseQuadrado').value
  var quadrado = document.getElementById('resultQuadrado')
  quadrado.innerHTML = calcularAreaQuadrado(value1)
}

function Trapezio() {
  var value1 = document.querySelector('#baseMaior').value
  var value2 = document.querySelector('#baseMenor').value
  var value3 = document.querySelector('#alturaTrapezio').value

  var trapezio = document.getElementById('resultTrapezio')
  trapezio.innerHTML = calcularAreaTrapezio(value1, value2, value3)
}

function Circulo() {
  var value1 = document.querySelector('#raio').value
  var circulo = document.getElementById('resultCirculo')

  circulo.innerHTML = calcularAreaCirculo(value1)
}

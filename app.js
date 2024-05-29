const custoMercadoria = 10
const custoFixoMensal = 50000
const vendaMediaMensal = 150000
const custoFixoVendas = custoFixoMensal / vendaMediaMensal
const custoFixoVendasPorcentagem = custoFixoVendas * 100
const simplesNacionalPorcentagem = 8.95
const comissaoVendedorPorcentagem = 3
const lucroEmpresaPorcentagem = 5
const totalIncidenciaPorcentagem = (custoFixoVendasPorcentagem + simplesNacionalPorcentagem + comissaoVendedorPorcentagem + lucroEmpresaPorcentagem).toFixed(2)
const totalIncidenciaDecimal = (totalIncidenciaPorcentagem/100).toFixed(4)

console.log(totalIncidenciaDecimal,totalIncidenciaPorcentagem)

const markUpDivisor = ((1-totalIncidenciaDecimal)/1).toFixed(4)
const markUpMultp = ((1/markUpDivisor)/1).toFixed(4)

const precoFinal = (markUpMultp * custoMercadoria).toFixed(2);


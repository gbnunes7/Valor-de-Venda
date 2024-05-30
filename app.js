const btnConfirmar = document.getElementById('button__confirmar');
const areaCustoFixo = document.getElementById('custo__fixo--vendas--js');
const areaTotalIncidencias = document.getElementById('total__incidencias--js');
const txtAreaCustoMercadoria = document.getElementById('custo__mercadoria');
const txtAreaCustoFixo = document.getElementById('custo__fixo');
const txtAreaVendasMensais = document.getElementById('vendas__mensais');
const txtAreaSimplesNacional = document.getElementById('simples__nacional');
const txtAreaComissao = document.getElementById('comissao__vendedor');
const txtAreaLucro = document.getElementById('lucro__vendas');
const areaMarkUpDivisor = document.getElementById('mark__up--divisor--js');
const areaMarkUpMultiplicador = document.getElementById('mark__up--multiplicador--js');
const areaPrecoFinal = document.getElementById('preco__venda--final--js');
//Resgatando variáveis do HTML usando GetElementById (Variáveis do TEXT AREA dos inputs, botão do HTML e as areas em branco (tag span) para poder mostrar no HTML as variáveis depois de ter feito a lógica no JS)

btnConfirmar.addEventListener('click',() => { //Event Listener de click, no botão do HTML   usando como evento uma arrow function 
    const custoMercadoria = Number(txtAreaCustoMercadoria.value);
    const custoFixoEmpresa = Number(txtAreaCustoFixo.value);
    const vendasMensais = Number(txtAreaVendasMensais.value);
    const simplesNacional = Number(txtAreaSimplesNacional.value);
    const comissaoVendedor = Number(txtAreaComissao.value);
    const lucroEmpresa = Number(txtAreaLucro.value);
    // Resgatando os valores das variáveis nos inputs após o clicar no botão confirmar

    //Lógica da precificação
    const custoFixoVendas = ((custoFixoEmpresa / vendasMensais) * 100).toFixed(2)

    const totalIncidencias = Number(custoFixoVendas) + Number(simplesNacional) + Number(comissaoVendedor) + Number(lucroEmpresa)

    const totalIncidenciasDecimal = Number((totalIncidencias/100)).toFixed(4)

    const markUpDivisor = Number(((1 - totalIncidenciasDecimal)/1)).toFixed(4)
    const markUpMultp = Number(((1/markUpDivisor)/1)).toFixed(4)

    const precoFinal = (markUpMultp * custoMercadoria).toFixed(2);
    // Final lógica

    areaCustoFixo.innerHTML = `${custoFixoVendas}%`
    areaTotalIncidencias.innerHTML = `${totalIncidencias}%`
    areaMarkUpDivisor.innerHTML = markUpDivisor.toString().replace('.',',')
    areaMarkUpMultiplicador.innerHTML = markUpMultp.toString().replace('.',',')
    areaPrecoFinal.innerHTML = "R$ " + precoFinal.toString().replace('.',',')
    // Exibindo as variáveis novas no HTML por meio da propriedade innerHTML, reatribuindo o tipo delas por meio do metodo toString, pra poder user o método replace e trocar o '.' por ','
})


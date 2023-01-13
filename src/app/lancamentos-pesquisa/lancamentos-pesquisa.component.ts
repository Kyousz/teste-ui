import { Component } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {

  lancamentos = [
    {tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2022,7,30), dataPagamento: null, valor: 5.55, pessoa: 'Panificadora Alfa'},
    {tipo: 'RECEITA', descricao: 'Agiotagem', dataVencimento: new Date(2022,2,22), dataPagamento: new Date(2022,2,16), valor: 2000, pessoa: 'Jon'},
    {tipo: 'DESPESA', descricao: 'Mensalidade da escola', dataVencimento: new Date(2022,6,12), dataPagamento: null, valor: 750, pessoa: 'Escola Estrela'},
    {tipo: 'RECEITA', descricao: 'Venda de bolo', dataVencimento: new Date(2022,3,8), dataPagamento: new Date(2022,3,5), valor: 150, pessoa: 'Bolinhos'},
    {tipo: 'DESPESA', descricao: 'Jogo do Vasco', dataVencimento: new Date(2022,7,10), dataPagamento: new Date(2022,7,9), valor: 75.50, pessoa: 'Vasco'},
    {tipo: 'RECEITA', descricao: 'Venda de cartela', dataVencimento: new Date(2022,1,29), dataPagamento: new Date(2022,1,29), valor: 25, pessoa: 'Jogo do Bicho'},
    {tipo: 'DESPESA', descricao: 'Jogo do Curintia', dataVencimento: new Date(2022,3,11), dataPagamento: new Date(2022,3,19), valor: 75.50, pessoa: 'Curintiano'},
    {tipo: 'RECEITA', descricao: 'Tickets', dataVencimento: new Date(2022,4,22), dataPagamento: new Date(2022,4,29), valor: 25, pessoa: 'Jordan'}
  ];

}

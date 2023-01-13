import { Component } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {

  pessoas = [
    {nome: 'Bruno', cidade: 'Maceió', estado: 'AL', status: 'Ativo' },
    {nome: 'Carlos', cidade: 'Belém', estado: 'PA', status: 'Inativo' },
    {nome: 'Ana', cidade: 'Maceió', estado: 'AL', status: 'Ativo' },
    {nome: 'Clarice', cidade: 'Maceió', estado: 'AL', status: 'Inativo' },
    {nome: 'Jorge', cidade: 'Salvador', estado: 'BA', status: 'Ativo' },
    {nome: 'Benedita', cidade: 'Rio de Janeiro', estado: 'RJ', status: 'Inativo' },
    {nome: 'Jordan', cidade: 'Maceió', estado: 'AL', status: 'Ativo' },
    {nome: 'Maikon', cidade: 'São Paulo', estado: 'SP', status: 'Inativo' },
    {nome: 'Geraldo', cidade: 'Maceió', estado: 'AL', status: 'Ativo' },
    {nome: 'Bobby', cidade: 'Maceió', estado: 'AL', status: 'Inativo' },
  ]

}

(()=>{"use strict";class t{constructor(t){this.id=t}deposito(t){return this.saldo+=t,!0}saque(t){return t<=this.saldo&&(this.saldo-=t,!0)}}class n extends t{constructor(t){super(t),this.saldo=1050}transferencia(t,n){let o=listaUsuarios.filter((t=>null!=t.contaCorrente&&n==t.contaCorrente.id)),s=listaUsuarios.filter((t=>null!=t.contaPoupanca&&n==t.contaPoupanca.id));return o.length>0||s.length>0?t<=this.saldo?(o.length>0?o[0].contaCorrente.deposito(t):s.length>0&&s[0].contaPoupanca.deposito(t),this.saque(t),!0):!(t>=this.saldo)&&void 0:"Conta do destinatário não encontrada, gentileza conferir as informações."}}class o extends t{constructor(t){super(t),this.saldo=480}}class s{constructor(t,n){this.id=s.numeroUsuarios,this.cpf=t,this.nome=n,this.contaCorrente=null,this.contaPoupanca=null,s.numeroUsuarios++}static numeroUsuarios=0;criarContaPoupanca(){return null==this.contaPoupanca&&(this.contaPoupanca=new o(2e3+this.id),!0)}criarContaCorrente(){return null==this.contaCorrente&&(this.contaCorrente=new n(1e3+this.id),!0)}}console.log("Bem vindo ao script básico de banco. Caso precise de ajuda, digite: ajuda()\n");const e=[];function a(t=null,n=null){let o=e.filter((n=>t==n.cpf));if(null==t||null==n)throw new Error("Gentileza chamar a função informando dentro dos parênteses seu CPF e NOME.");if(0==o.length)return e.push(new s(t,n)),!0;throw new Error("Usuário já tem conta no sistema.")}let r=0;for(let t=100;t<131;t++)a(t,"teste"+r),r++})();
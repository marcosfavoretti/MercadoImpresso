export interface NovoUsuario{
    nome: string,
    email: string,
    senha: string,
    endereco: {
      bairro: string,
      rua: string,
      numero: number
    }
}
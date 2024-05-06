import { IMaterial } from "../Objects/IMaterial"

export interface Customizacoes {
    material?: IMaterial,
    preenchimento: number,
    camada: number
    notas?: string
    nome: string
    preco: number
}

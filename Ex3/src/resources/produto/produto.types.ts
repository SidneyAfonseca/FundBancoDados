import { Produto } from "@prisma/client";

export type CreateProdutoDto = Pick<Produto, 'modelo' | 'id_subcategoria' | 'fabricante' | 'preco_base' | 'quantidade_disponivel'>;
export type UpdateProdutoDto = Pick<Produto, 'modelo' | 'fabricante' | 'preco_base' | 'quantidade_disponivel'>;

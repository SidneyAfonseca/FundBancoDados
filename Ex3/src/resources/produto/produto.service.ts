import { PrismaClient, Produto } from "@prisma/client";
import { CreateProdutoDto, UpdateProdutoDto } from "./produto.types";


const prisma = new PrismaClient();
export async function getAllProdutos(): Promise<Produto[]> {
    return await prisma.produto.findMany();
}
export async function createProduto(produto: CreateProdutoDto
): Promise<Produto> {
    return await prisma.produto.create({ data: produto });
}

export async function jaExiste(modelo: string): Promise<boolean> {
    return !!(await prisma.produto.findUnique({ where: { modelo } }))
}

export async function readProduto(id: number): Promise<Produto | null> {
    return await prisma.produto.findUnique({ where: { id_produto: id } });
}

export async function updateProduto(id: number,
    produto: UpdateProdutoDto)
    : Promise<Produto> {
    return await prisma.produto.update({ data: produto, where: { id_produto: id } });
}

export async function deleteProduto(id: number)
    : Promise<Produto> {
    return await prisma.produto.delete({ where: { id_produto: id } });
}
import { Request, Response } from "express";
import { getAllProdutos, createProduto, readProduto, jaExiste, updateProduto, deleteProduto } from "./produto.service";
import { CreateProdutoDto, UpdateProdutoDto } from "./produto.types";


async function index(req: Request, res: Response) {
    try {
        const produtos = await getAllProdutos();
        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).json(error);
    }
}

async function create(req: Request, res: Response) {
    const produto = req.body as CreateProdutoDto;

    try {
        if (await jaExiste(produto.modelo)) {
            return res.status(400).json({ msg: "Produto já existe" })
        }
        const newProduto = await createProduto(produto);
        res.status(201).json(newProduto);
    } catch (error) {
        res.status(500).json({ msg: "Erro Criar Produto" })
    }
}

async function read(req: Request, res: Response) {
    const id = req.params.id;
    try {
        const produto = await readProduto(Number(id));
        if (!produto) return res.status(404).json({ msg: "Produto não encontrado" })
        res.status(200).json(produto);
    } catch (error) {
        res.status(500).json(error);
    }
}

async function update(req: Request, res: Response) {
    const id = req.params.id;
    const produto = req.body as UpdateProdutoDto;
    try {
        const produtoAtual = await readProduto(Number(id));
        if (produtoAtual?.modelo != produto.modelo && await jaExiste(produto.modelo)) {
            return res.status(400).json({ msg: "Já Existe um produto com o nome informado" })
        }
        const produtoAtualizado = await updateProduto(Number(id), produto);
        res.status(204).json(produtoAtualizado);
    } catch (error) {
        res.status(500).json({ error });
    }
}
async function remove(req: Request, res: Response) {
    const id = req.params.id;
    try {
        await deleteProduto(Number(id));
        res.status(204).json({ msg: "Produto Removido!" });
    } catch (error) {
        res.status(500).json({ error });
    }
}

export default { index, read, create, update, remove };

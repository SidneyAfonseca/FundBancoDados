import { Request, Response } from "express";
import { getAllClientes, createCliente, jaExiste, readCliente, updateCliente } from "./cliente.service";
import { CreateClienteDto, UpdateClienteDto } from "./cliente.types";


async function index(req: Request, res: Response) {
    try {
        const Clientes = await getAllClientes();
        res.status(200).json(Clientes);
    } catch (error) {
        res.status(500).json(error);
    }
}

async function create(req: Request, res: Response) {
    const Cliente = req.body as CreateClienteDto;

    try {
        if (await jaExiste(Cliente.cpf)) {
            return res.status(400).json({ msg: "Cliente já existe" })
        }
        const newCliente = await createCliente(Cliente);
        res.status(201).json(newCliente);
    } catch (error) {
        res.status(500).json({ msg: "Erro Criar Cliente" })
    }
}

async function read(req: Request, res: Response) {
    const id = req.params.id;
    try {
        const Cliente = await readCliente(Number(id));
        if (!Cliente) return res.status(404).json({ msg: "Cliente não encontrado" })
        res.status(200).json(Cliente);
    } catch (error) {
        res.status(500).json(error);
    }
}

async function update(req: Request, res: Response) {
    const id = req.params.id;
    const Cliente = req.body as UpdateClienteDto;
    try {

        const ClienteAtual = await readCliente(Number(id));
        if (ClienteAtual?.cpf != Cliente.cpf && await jaExiste(Cliente.cpf)) {
            return res.status(400).json({ msg: "Já Existe um Cliente com o cpf informado" })
        }
        const ClienteAtualizado = await updateCliente(Number(id), Cliente);
        res.status(204).json(ClienteAtualizado);
    } catch (error) {
        res.status(500).json({ error });
    }
}
async function remove(resq: Request, res: Response) { }

export default { index, read, create, update, remove };

import { PrismaClient, Cliente } from "@prisma/client";
import { CreateClienteDto, UpdateClienteDto } from "./cliente.types";


const prisma = new PrismaClient();
export async function getAllClientes(): Promise<Cliente[]> {
    return await prisma.cliente.findMany();
}
export async function createCliente(Cliente: CreateClienteDto
): Promise<Cliente> {
    return await prisma.cliente.create({ data: Cliente });
}

export async function jaExiste(cpf: string): Promise<boolean> {
    return !!(await prisma.cliente.findUnique({ where: { cpf } }))
}

export async function readCliente(id_cliente: number): Promise<Cliente | null> {
    return await prisma.cliente.findUnique({ where: { id_cliente } });
}

export async function updateCliente(id: number,
    Cliente: UpdateClienteDto)
    : Promise<Cliente> {
    return await prisma.cliente.update({ data: Cliente, where: { id_cliente: id } });
}
import { Cliente } from "@prisma/client";

export type CreateClienteDto = Pick<Cliente, 'nome_completo' | 'cpf' | 'numero_celular' | 'email' | 'data_nascimento'>;
export type UpdateClienteDto = Pick<Cliente, 'nome_completo' | 'cpf' | 'numero_celular'>;

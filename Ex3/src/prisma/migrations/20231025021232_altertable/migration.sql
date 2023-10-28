/*
  Warnings:

  - You are about to alter the column `nome_categoria` on the `categoria` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `nome_completo` on the `cliente` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(40)`.
  - You are about to alter the column `cpf` on the `cliente` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(14)`.
  - You are about to alter the column `numero_celular` on the `cliente` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(15)`.
  - You are about to alter the column `email` on the `cliente` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `forma_pagamento` on the `compra` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(40)`.
  - You are about to alter the column `endereco` on the `endereco` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `numero_serie` on the `numerosserie` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(10)`.
  - You are about to alter the column `modelo` on the `produto` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `fabricante` on the `produto` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(40)`.
  - You are about to alter the column `nome_subcategoria` on the `subcategoria` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - A unique constraint covering the columns `[modelo]` on the table `Produto` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `categoria` MODIFY `nome_categoria` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `cliente` MODIFY `nome_completo` VARCHAR(40) NOT NULL,
    MODIFY `cpf` VARCHAR(14) NOT NULL,
    MODIFY `numero_celular` VARCHAR(15) NOT NULL,
    MODIFY `email` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `compra` MODIFY `forma_pagamento` VARCHAR(40) NOT NULL;

-- AlterTable
ALTER TABLE `endereco` MODIFY `endereco` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `numerosserie` MODIFY `numero_serie` VARCHAR(10) NOT NULL;

-- AlterTable
ALTER TABLE `produto` MODIFY `modelo` VARCHAR(50) NOT NULL,
    MODIFY `fabricante` VARCHAR(40) NOT NULL;

-- AlterTable
ALTER TABLE `subcategoria` MODIFY `nome_subcategoria` VARCHAR(100) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Produto_modelo_key` ON `Produto`(`modelo`);

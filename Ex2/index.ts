import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    await prisma.categoria.create({
        data: {
            nome_categoria: "Informatica"
        }
    })
    const categoria = await prisma.categoria.findUnique({
        where: {
            id_categoria: 1,
        },
    })
    await prisma.subcategoria.create({
        data: {

            id_categoria: 1,
            nome_subcategoria: "Mouse"
        }
    })
    const allcate = await prisma.categoria.findMany()
    const allsubcate = await prisma.subcategoria.findMany()

    console.dir(allcate, { depth: null })
    console.dir(allsubcate, { depth: null })
}

main().then(async () => {
    await prisma.$disconnect()
})
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        //process.exit(1)
    })


import Stacks from "@/components/Mixed/Stacks";

export default function Home() {
    return (
        <section className="w-screen flex justify-center">
            <div className="max-w-[800px] w-full flex pt-16 mobile:pt-6">
                <div className="flex gap-3 flex-col tablet:px-6">
                    <h1 className="font-bold text-3xl mobile:text-xl">Olá! Meu nome é Caio 👋</h1>
                    <div className="flex gap-1 flex-col">
                        <p>Tenho {new Date().getFullYear() - 2007} anos, e sou um <strong>Desenvolvedor Front-end</strong> apaixonado por programação, tenho <strong>1 ano de experiência</strong> na área, fazendo freelances e projetos pessoais.</p>
                        <p>Estou constantemente em busca de aprendizado e aprimoramento dos meus conhecimentos, sempre tentando melhorar a cada dia!</p>
                    </div>
                    <Stacks/>
                </div>
            </div>
        </section>
    )
}
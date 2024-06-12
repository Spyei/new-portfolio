import Project from "./Project";

export default function ProjectsComponent() {
    return (
        <section className="w-screen flex justify-center">
            <div className="max-w-[800px] w-full flex pt-16 tablet:px-6 mobile:pt-6">
                <div className="flex gap-3 flex-col tablet:px w-full">
                    <h1 className="font-bold text-3xl mobile:text-xl">Projetos</h1>
                    <div>Projetos feitos por mim mesmo, ou ainda em desenvolvimento.</div>
                    <div className="w-full flex flex-col gap-4">
                        <Project description="Simo botlist é um site que divulga bots de discord" image="/simo/page.png" langs={["react", "tailwind", "ts"]} name="Simo" key={Math.random()} />
                        <Project name="Postboy" langs={["next", "tailwind", "ts"]} description="Postboy é um site que faz requisições http para um url." image="/postboy/page.png" key={Math.random()} />
                        <Project name="Connections" langs={["next", "tailwind", "ts"]} description="Connections Dashboard é um website que modifica propriedades do bot e gerencia conexões." image="/connections/page.png" key={Math.random()} />
                    </div>
                </div>
            </div>
        </section>
    )
}
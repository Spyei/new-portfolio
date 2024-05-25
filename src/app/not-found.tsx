export default function NotFound() {
    return (
        <section className="font-poppins w-full flex items-center justify-center flex-col gap-2 px-5 tablet:justify-start tablet:mt-44">
            <div className="flex flex-col gap-6">
                <div className="flex gap-3 items-center h-2 text-2xl mobile:text-xl justify-center text-center flex-wrap">
                    <span>404</span>
                    <hr className="rotate-90 border-neutral-800 w-6 mobile:text-sm" />
                    <div>Página não encontrada</div>
                </div>
            </div>
        </section>
    );
}
import Header from "@/components/Header";

export default function Home() {
  // Calcula o padding superior com base na altura do cabeçalho. Isso pode ser ajustado conforme necessário.
  const paddingTop = 'h-16'; // A altura do cabeçalho é 4rem (16 * 4 = 64px), então o padding deve ser pelo menos isso.

  return (
    <>
      <Header />
      <section className={`min-h-screen pt-${paddingTop} lg:bg-hero-gradient bg-hero-gradient-mobile text-[#DDDDDD] flex flex-col justify-center`}>
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-[160px] px-[16px]">
          <div className="flex items-start h-full">
            <div>
              <h1 className="text-4xl font-semibold text-start">
                Olá, eu sou a Bianca Salvador,
              </h1>
              <p className="text-start text-lg mt-4">
                Nutricionista
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

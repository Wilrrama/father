import rei_do_sertao from "../../../public/discografia/rei_do_sertao.jpg";
import natureza_e_vida from "../../../public/discografia/natureza_e_vida.jpg";
import Image from "next/image";

export default function Discografia() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-6 sm:p-24 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/imagens/12.jpg')",
        // backgroundSize: "contain",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-2xl sm:text-3xl mb-6 text-white  border border-black bg-black bg-opacity-60 rounded-lg">
        Discografia
      </h1>

      <section className="w-full max-w-md mb-8 text-center border border-black bg-black bg-opacity-60 p-4 rounded-lg">
        <figure className="m-0">
          <Image
            src={natureza_e_vida}
            alt="Natureza é vida"
            className="w-full h-auto rounded-lg"
          />
        </figure>
        <details>
          <summary className="text-white">Natureza é vida</summary>
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            <audio controls className="w-full max-w-xs">
              <source
                type="audio/mpeg"
                src="/audio/natureza_e_vida/faixa_1.mp3"
              />
            </audio>
            {" 01.Ramalhete com Amor "}
            <audio controls className="w-full max-w-xs">
              <source
                type="audio/mpeg"
                src="/audio/natureza_e_vida/faixa_2.mp3"
              />
            </audio>
            {" 02.Cheio de Amor e Paixão "}
            <audio controls className="w-full max-w-xs">
              <source
                type="audio/mpeg"
                src="/audio/natureza_e_vida/faixa_3.mp3"
              />
            </audio>
            {" 03. Amor e Amizade "}
            <audio controls className="w-full max-w-xs">
              <source
                type="audio/mpeg"
                src="/audio/natureza_e_vida/faixa_4.mp3"
              />
            </audio>
            {" 04. A Cabana na Montanha "}
            <audio controls className="w-full max-w-xs">
              <source
                type="audio/mpeg"
                src="/audio/natureza_e_vida/faixa_5.mp3"
              />
            </audio>
            {" 05. Minha Princesa "}
            <audio controls className="w-full max-w-xs">
              <source
                type="audio/mpeg"
                src="/audio/natureza_e_vida/faixa_6.mp3"
              />
            </audio>
            {" 06. Natureza é Vida "}
            <audio controls className="w-full max-w-xs">
              <source
                type="audio/mpeg"
                src="/audio/natureza_e_vida/faixa_7.mp3"
              />
            </audio>
            {" 07. Cidade das Praias "}
            <audio controls className="w-full max-w-xs">
              <source
                type="audio/mpeg"
                src="/audio/natureza_e_vida/faixa_8.mp3"
              />
            </audio>
            {" 08.Lambari na Frigideira "}
            <audio controls className="w-full max-w-xs">
              <source
                type="audio/mpeg"
                src="/audio/natureza_e_vida/faixa_9.mp3"
              />
            </audio>
            {" 09. Viola Amiga "}
            <audio controls className="w-full max-w-xs">
              <source
                type="audio/mpeg"
                src="/audio/natureza_e_vida/faixa_10.mp3"
              />
            </audio>
            {" 10. A Família e a Viola "}
          </div>
        </details>
      </section>

      <section className="w-full max-w-md mb-8 text-center border border-black bg-black bg-opacity-60 p-4 rounded-lg">
        <figure className="m-0">
          <Image
            src={rei_do_sertao}
            alt="Rei do Sertão"
            className="w-full h-auto rounded-lg"
          />
        </figure>
        <details>
          <summary className="text-white">Rei do Sertão</summary>
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            <audio controls className="w-full max-w-xs">
              <source
                type="audio/mpeg"
                src="/audio/rei_do_sertao/faixa_1.mp3"
              />
            </audio>
            {" 01.Caminheiro "}
            <audio controls className="w-full max-w-xs">
              <source
                type="audio/mpeg"
                src="/audio/rei_do_sertao/faixa_2.mp3"
              />
            </audio>
            {" 02.Minha Faculdade "}
            <audio controls className="w-full max-w-xs">
              <source
                type="audio/mpeg"
                src="/audio/rei_do_sertao/faixa_3.mp3"
              />
            </audio>
            {" 03.Chora Chororo "}
            <audio controls className="w-full max-w-xs">
              <source
                type="audio/mpeg"
                src="/audio/rei_do_sertao/faixa_4.mp3"
              />
            </audio>
            {" 04.Estrela Brilhante "}
            <audio controls className="w-full max-w-xs">
              <source
                type="audio/mpeg"
                src="/audio/rei_do_sertao/faixa_5.mp3"
              />
            </audio>
            {" 05.Saudade vem, Saudade Vai "}
            <audio controls className="w-full max-w-xs">
              <source
                type="audio/mpeg"
                src="/audio/rei_do_sertao/faixa_6.mp3"
              />
            </audio>
            {" 06.Anatomia da Viola "}
            <audio controls className="w-full max-w-xs">
              <source
                type="audio/mpeg"
                src="/audio/rei_do_sertao/faixa_7.mp3"
              />
            </audio>
            {" 07.Rei do Sertão "}
            <audio controls className="w-full max-w-xs">
              <source
                type="audio/mpeg"
                src="/audio/rei_do_sertao/faixa_8.mp3"
              />
            </audio>
            {" 08.Meu Rancho "}
            <audio controls className="w-full max-w-xs">
              <source
                type="audio/mpeg"
                src="/audio/rei_do_sertao/faixa_9.mp3"
              />
            </audio>
            {" 09.Minha Rainha "}
            <audio controls className="w-full max-w-xs">
              <source
                type="audio/mpeg"
                src="/audio/rei_do_sertao/faixa_10.mp3"
              />
            </audio>
            {" 10.Pagode Original "}
            <audio controls className="w-full max-w-xs">
              <source
                type="audio/mpeg"
                src="/audio/rei_do_sertao/faixa_11.mp3"
              />
            </audio>
            {" 11.Cheio de amor e paixão "}
            <audio controls className="w-full max-w-xs">
              <source
                type="audio/mpeg"
                src="/audio/rei_do_sertao/faixa_12.mp3"
              />
            </audio>
            {" 12.Rios e Nascentes "}
          </div>
        </details>
      </section>
    </main>
  );
}

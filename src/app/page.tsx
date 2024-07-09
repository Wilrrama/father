import Image from "next/image";
import perfil from "/public/imagens/perfil.jpg";

export default function Home() {
  return (
    <>
      <section className="flex gap-2">
        <Image src={perfil} alt="imagem perfil" className="rounded-full w-32" />
        <div>
          <h3>Wilson Franchi</h3>
          <p>compositor, músico, professor, cantor, regente e poeta</p>
        </div>
      </section>
      <section>
        <h3>Projetos</h3>
        <p>Lar do Velinhos, Regente do Coral 3 Idade, Youtuber</p>
      </section>
      <section>
        <h3>Redes Sociais</h3>
        <a href="">Instagram</a>
        <a href="">FaceBook</a>
        <a href="">Youtube</a>
      </section>
    </>
  );
}

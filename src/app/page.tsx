import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/Components/Card";
import ButtonCtAwrapper from "@/Components/ButtonCtAwrapper";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <Image
            src="/logo.svg"
            alt="Next.js Logo"
            width={48}
            height={48}
            priority
          />
          <ButtonCtAwrapper title="Começar" />
        </nav>
      </header>

      <section className={styles.heroAndDescription}>
        <div className={styles.boxDescription}>
          <h1>Nunca foi tão facil gerenciar seus Serviços.</h1>
          <h6>
            Nossa solução te oferece um sistema de controle para suas
            diligencias e para os escritorios um controle geral desde os
            processos até os correspondentes
          </h6>

        
          <ButtonCtAwrapper title="Começar" />
         
        </div>
        <Image
          className={styles.bg}
          src="background.svg"
          alt="Next.js Logo"
          width={2225}
          height={755}
          priority
        />
        <Image
          className={styles.image}
          src="/hero-homepage.svg"
          alt="Next.js Logo"
          width={1011}
          height={755}
          priority
        />
      </section>

      <section className={styles.comofunciona}>
        <h1>Como funciona?</h1>

        <p>
          Com nosso sistema, você terá todas as suas diligências gerenciadas em
          um só lugar, oferecendo praticidade e eficiência. Tenha o controle
          completo dos pagamentos, acompanhando quem já pagou e identificando os
          pagamentos em atraso. Além disso, tenha acesso fácil às audiências do
          dia, com cada registro sendo automaticamente adicionado à sua agenda
          digital.
          <br />
          <br />
          Nossa sistema oferece diversas outras funcionalidades valiosas, como
          alertas antecipados para suas audiências, possibilitando que você se
          prepare adequadamente. Além disso, você pode armazenar processos e
          petições diretamente no arquivo do sistema, facilitando o acesso a
          todas as informações relacionadas, sem a necessidade de alternar entre
          diferentes aplicativos.
        </p>
      </section>
      <section className={styles.boxCards}>
        <h3 className={styles.titleBoxCard}>Nossa solução te entrega:</h3>
        <Card img="icon-clock.svg" title="Integração Com Google Agenda">
          sincronizar automaticamente suas diligências com a sua agenda pessoal
        </Card>
        <Card img="icon-dashboard.svg" title="Controle de diligências">
          Centralize todas informações relevantes das diligências em um só lugar
        </Card>

        <Card img="icon-grafico.svg" title="Relatórios e Análises">
          recursos avançados de geração de relatórios, análises e dados
          financeiros
        </Card>
      </section>

      <section className={styles.callToAction}>
        <h3>
          Vamos simplificar as coisas para você conquistar autonomia e atrair
          mais clientes?
        </h3>
        <h6>
          Não deixe escapar a chance de conquistar um controle completo para
          suas diligências e potencializar sua carreira jurídica!
        </h6>
        <ButtonCtAwrapper title="Começar" />
      </section>
      <section className={styles.folder}>
        <Image
          src="/Component.svg"
          alt="Next.js Logo"
          width={44}
          height={24}
          priority
        />
        <p>
          Transformando empresas através da união e tecnologia, a plataforma Elo
          impulsiona o mundo jurídico para o futuro.
        </p>
        <div className={styles.socilmedia}>
          <a href="https://www.instagram.com/elo.jur/?hl=pt">
            <Image
              src="insta.svg"
              alt="Next.js Logo"
              width={44}
              height={24}
              priority
            />
          </a>
          <a href="https://api.whatsapp.com/send/?text=Gostaria+de+saber+sobre+o+sistema&type=custom_url&app_absent=0">
            <Image
              src="whatsapp.svg"
              alt="Next.js Logo"
              width={44}
              height={24}
              priority
            />
          </a>
        </div>
      </section>
    </main>
  );
}

import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/Components/Card"; 
import ButtonCtAwrapper from "@/Components/ButtonCtAwrapper" 


export default function Home() {
  return (
    <main className={styles.main}> 
    <div className={styles.navbar}>
      <Image  
      
       src="/heroa.svg"
       alt="Next.js Logo"
       width={48}
       height={48}
       priority
      /> 
           <ButtonCtAwrapper title="saber mais"/> 
    </div>
      <section className={styles.heroAndDescription}>
        <div className={styles.boxDescription}>
          <h1>Os correspondentes ideais para os seus serviços</h1>
          <h6>
            Não deixe que os processos de seleção de correspondentes ocupe todo
            seu tempo, deixe que entregamos ele para você
          </h6>
        </div>
        <Image className={styles.image}
          src="/hero.svg"
          alt="Next.js Logo"
          width={484}
          height={487}
          priority
        />
      </section>
      <section className={styles.boxCards}>
        <Card img="/cardOne.png" title="Integração Com Google Agenda">
          A integração com o Google Agenda é um recurso fundamental de nossa
          solução. Com isso, você poderá sincronizar automaticamente suas
          diligências com a sua agenda pessoal.
        </Card>
        <Card img="/chart.png" title="Controle de diligências">
          Você terá todas as informações relevantes das diligências
          centralizadas em um só lugar. Isso inclui dados do cliente, partes
          envolvidas, prazos, tarefas a serem cumpridas e documentos
          relacionados.
        </Card>

        <Card img="/Cashmoney.png" title="Relatórios e Análises">
          Tome decisões estratégicas embasadas em dados reais. Nosso sistema
          oferece recursos avançados de geração de relatórios e análises, Nosso
          sistema enviará lembretes e notificações
        </Card>
      </section>

      <section className={styles.callToAction}>
        <h3>
        Vamos repensar a forma de organizar suas diligências?
        </h3> 
        <h6>
        Não perca a opotunidade de ter um controle completo para suas diligencias. 
        </h6> 
        <ButtonCtAwrapper  title="saber mais"/> 
     
        
      </section> 
      <section className={styles.folder}>  
      <Image
          src="/Component.svg"
          alt="Next.js Logo"
          width={44}
          height={24}
          priority
        /> 
        <p>Transformando empresas através da união e tecnologia, a plataforma Elo impulsiona o mundo jurídico para o futuro.</p>
      </section>
    </main>
  );
}

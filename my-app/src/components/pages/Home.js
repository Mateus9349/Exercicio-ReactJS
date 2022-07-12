
import styles from './Home.module.css'
import Logo2 from './logo2.jpg'
import Logo3 from './logo3.png'
import Logo4 from './logo4.jpg'

function Home() {
    return (
      <div className={styles.principal}>
        <div className={styles.main}>

          <div className={styles.text}>
            <h1>Cuidamos de tudo para você!</h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>

          <img src={Logo2} className={styles.im}/>

        </div>

        <div className={styles.main}>

          <img src={Logo3} className={styles.im}/>

          <div className={styles.text}>
            <h1>Principais pacotes!</h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>

        </div>

        <div className={styles.main}>

          <div className={styles.text}>
            <h1>Programa de pontos!</h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>

          <img src={Logo4} className={styles.im}/>

        </div>
      </div>
    )
  }
  
  export default Home
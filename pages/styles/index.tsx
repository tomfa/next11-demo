import type { NextPage } from 'next'
import styles from '../../components/Button.module.css'
import otherStyles from '../../components/OtherButton.module.css'

const Index: NextPage = () => {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', maxWidth: '250px', padding: '20px'}}>
      <h2>Styles</h2>
      <button>Regular button</button>
      <button className={'error'}>Global error styling</button>
      <button className={styles.error}>Moduled error button</button>
      <button className={otherStyles.error}>.error class from other module</button>
      <button style={{ backgroundColor: 'hotpink' }}>Inline styling</button>
    </section>
  )
}

export default Index

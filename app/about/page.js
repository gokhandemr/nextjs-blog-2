import Image from 'next/image'
import styles from './styles.module.css'
export default function page() {
  return (
    <main className={styles.main}>
        <Image src={'https://picsum.photos/id/91/400/575'}
          width={400}
          height={575}
          priority
          alt='Lorem Ipsum'
        />
      <div className={styles.about}>
        <h2 className={styles.title}>
          Commodo dolore sint minim veniam minim ea duis commodo id velit non.
        </h2>
        <p className={styles.text}>
          Ad est incididunt culpa cillum proident excepteur.Elit aliqua anim labore id amet anim reprehenderit aute ipsum nulla.Id quis eiusmod tempor veniam dolore voluptate aliquip amet culpa.Non officia eu officia laboris consectetur Lorem.Qui anim laborum eu sint irure ea sint voluptate Lorem officia excepteur reprehenderit ea laborum.Irure ex exercitation exercitation anim occaecat aute magna pariatur officia anim aliquip esse proident nisi.Ullamco excepteur enim officia mollit ad duis esse cillum proident aliqua elit sit.Officia id Lorem eiusmod do sit cupidatat fugiat exercitation magna.Ipsum qui in excepteur aliquip officia nostrud nulla.Excepteur eiusmod proident cillum pariatur sit consequat tempor labore deserunt duis culpa exercitation et.Qui dolore enim dolore Lorem cupidatat eiusmod excepteur sint voluptate dolor laboris cupidatat.Ullamco eu elit laboris magna anim aliqua officia exercitation.Exercitation eiusmod quis anim esse ea aliqua amet.Excepteur mollit voluptate ea nisi.Ea nostrud ipsum dolore magna ipsum elit eiusmod tempor officia reprehenderit.
        </p>
      </div>

    </main>
  )
}

import Link from 'next/link';
import Image from 'next/image';
import styles from './Social.module.css'

export default function Social({ title, image, href }) {
  return(
      <a href={href} className={styles.social_cta}>
        <Image
          src={image}
          width="30px"
          height="30px"
          className={styles.picture}
          alt={'Logo ' + title}
        />
      </a>
  )
}
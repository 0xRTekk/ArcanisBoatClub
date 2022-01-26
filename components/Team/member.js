import Image from 'next/image';
import styles from './Team.module.css'

export default function Member({memberImg, memberName, memberRole, fadeDirection, fadeDuration}) {
  return (
    <div className={styles.teammemeber}>
      <div data-aos-duration={fadeDuration} data-aos={fadeDirection} className={styles.memberclone}>
        <div className={styles.memberdetails}>
          <h3>
            {memberName}
            <span>{memberRole}</span>
          </h3>
        </div>
        <div className={styles.picture}>
          <Image src={memberImg} alt={"NFt de " + memberName} />
        </div>
      </div>
    </div>
  );
}
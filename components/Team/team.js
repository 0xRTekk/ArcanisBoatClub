import Member from "./member";

import styles from "./Team.module.css";
import arcanis from "../../public/assets/images/1.png";
import tekky from "../../public/assets/images/20.png";
import zozore from "../../public/assets/images/19.png";

export default function Team() {
  return (
    <div className={styles.team} data-aos="fade-down" data-aos-duration="1200">
      <section className={styles.teamlist}>
        <Member
          memberName="Arcanis"
          memberRole="Artiste"
          memberImg={arcanis}
          fadeDirection="fade-down"
          fadeDuration="1000"
        />
        <Member
          memberName="Tekky"
          memberRole="Developpeur"
          memberImg={tekky}
          fadeDirection="fade-down"
          fadeDuration="1000"
          fadeDelay="500"
        />
        <Member
          memberName="Zozore"
          memberRole="copywriteuse"
          memberImg={zozore}
          fadeDirection="fade-down"
          fadeDuration="1000"
          fadeDelay="1000"
        />
      </section>
    </div>
  );
}

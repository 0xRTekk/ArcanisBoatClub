import Member from "./member";

import styles from "./Team.module.css";
import arcanis from "../../public/assets/images/9.png";
import tekky from "../../public/assets/images/15.png";
import darnom from "../../public/assets/images/7.png";
import zozore from "../../public/assets/images/6.png";

export default function Team() {
  return (
    <div className={styles.team} data-aos="fade-down" data-aos-duration="1200">
      <div className={styles.teamlist}>
        <Member
          memberName="Arcanis"
          memberRole="Artiste"
          memberImg={arcanis}
          fadeDirection="fade-down"
          fadeDuration="1000"
        />
        <Member
          memberName="Darnom"
          memberRole="Galleriste"
          memberImg={darnom}
          fadeDirection="fade-down"
          fadeDuration="1000"
          fadeDelay="500"
        />
        <Member
          memberName="Tekky"
          memberRole="Developpeur"
          memberImg={tekky}
          fadeDirection="fade-down"
          fadeDuration="1000"
          fadeDelay="1000"
        />
        <Member
          memberName="Zozore"
          memberRole="Copyrighteuse"
          memberImg={zozore}
          fadeDirection="fade-down"
          fadeDuration="1000"
          fadeDelay="1500"
        />
      </div>
    </div>
  );
}

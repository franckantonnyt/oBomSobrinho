import { carrouselPartnersCompaines } from '../../../constants/carrouselData';

import Carrousel from '../Carrousel';

import styles from './styles.module.scss';

const PartnersCompanies = () => {
  const carrouselComponent = (carrouselArray) => {
    let objectArray = [];
    const arrayContent = [];

    carrouselArray.map(({ image, title, id }) => {
      objectArray.push(
        <li key={id}>
          <div className={styles.cardPartners}>
            <img src={image} alt={title} />
          </div>
        </li>
      );
      if (objectArray.length === 3) {
        arrayContent.push(objectArray);
        objectArray = [];
      }
    });

    return arrayContent;
  };

  return (
    <section className={styles.containerPartners} id='/parceiros'>
      <header>
        <h1>Mais de 60 empresas cadastradas na região</h1>
        <h3>
          Venha fazer parte dessa <strong>Família!</strong>
        </h3>
      </header>
      <Carrousel arrayList={carrouselComponent(carrouselPartnersCompaines)} />
    </section>
  );
};

export default PartnersCompanies;

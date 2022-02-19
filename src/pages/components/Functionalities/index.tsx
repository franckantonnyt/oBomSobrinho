import { carrouselFunctionalities } from '../../../constants/carrouselData';

import Carrousel from '../Carrousel';

import ReachBuyers from '../../../../public/assets/icons/reach_buyers.svg';
import CompanyOnTheInternt from '../../../../public/assets/icons/company_on_the_internt.svg';
import SalesAndLoyalty from '../../../../public/assets/icons/sales_and_loyalty.svg';
import TargetedReach from '../../../../public/assets/icons/targeted_reach.svg';
import IncreaseYourSales from '../../../../public/assets/icons/increase_your_sales.svg';
import SmartGrowth from '../../../../public/assets/icons/smart_growth.svg';

import styles from './styles.module.scss';

const carrouselComponent = (carrouselFunctionalities) => {
  let objectArray = [];
  const arrayContent = [];

  carrouselFunctionalities.map(({ title, description, kind }, index) => {
    objectArray.push(
      <li key={index}>
        <div className={styles.cardFunctionality}>
          <div className={styles.cardImage}>
            {kind === 'reach_buyers' && <ReachBuyers />}
            {kind === 'company_on_the_internt' && <CompanyOnTheInternt />}
            {kind === 'sales_and_loyalty' && <SalesAndLoyalty />}
            {kind === 'targeted_reach' && <TargetedReach />}
            {kind === 'increase_your_sales' && <IncreaseYourSales />}
            {kind === 'smart_growth' && <SmartGrowth />}
          </div>
          <div className={styles.cardFooter}>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
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

const Functionalities = () => {
  return (
    <section className={styles.containerFunctionalities} id='/funcionalidade'>
      <header>
        <h1><b>O Bom Sobrinho</b> propõe um serviço diferente</h1>
        <h3>
          Nossa <strong>metodologia</strong> foi feita para entender o seu negócio e desenhar <br /> as <strong>melhores estratégias</strong> para você vender mais.
        </h3>
      </header>
      <Carrousel arrayList={carrouselComponent(carrouselFunctionalities)} />
    </section>
  );
};
export default Functionalities;

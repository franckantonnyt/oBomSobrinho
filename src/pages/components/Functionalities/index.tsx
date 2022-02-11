import { carrouselFunctionalities } from '../../../constants/carrouselData';

import Carrousel from '../Carrousel';

import FinancialControlIcon from '../../../../public/assets/icons/financial_control.svg';
import BudgetAndSalesIcon from '../../../../public/assets/icons/budget_and_sales.svg';
import InventoryControl from '../../../../public/assets/icons/inventory_control.svg';

import styles from './styles.module.scss';

const carrouselComponent = (carrouselFunctionalities) => {
  let objectArray = [];
  const arrayContent = [];

  carrouselFunctionalities.map(({ title, description, kind }, index) => {
    objectArray.push(
      <li key={index}>
        <div className={styles.cardFunctionality}>
          <div className={styles.cardImage}>
            {kind === 'financial_control' && <FinancialControlIcon />}
            {kind === 'inventory_control' && <BudgetAndSalesIcon />}
            {kind === 'budget_and_sales' && <InventoryControl />}
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
        <h1>Desenvolvido para você!</h1>
        <h3>
          Nossas <strong>soluções</strong> são adequadas para{' '}
          <strong>atender</strong> as necessidades de sua{' '}
          <strong>empresa.</strong>
        </h3>
      </header>
      <Carrousel arrayList={carrouselComponent(carrouselFunctionalities)} />
    </section>
  );
};
export default Functionalities;

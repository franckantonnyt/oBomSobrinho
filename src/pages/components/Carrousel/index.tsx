import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { RiCheckboxBlankCircleFill } from 'react-icons/ri';

import styles from './styles.module.scss';

type CarrouselProps = {
  arrayList: Array<Object>;
};

const Carrousel = ({ arrayList }: CarrouselProps) => {
  const [positionArray, setPositionArray] = useState(0);

  return arrayList ? (
    <div className={styles.containerCarousel}>
      <div className={styles.carouselList}>
        <IoIosArrowBack
          className={positionArray === 0 ? styles.desactiveArrow : ''}
          onClick={() =>
            positionArray !== 0 && setPositionArray(positionArray - 1)
          }
        />
        <ul>{arrayList[positionArray]}</ul>
        <IoIosArrowForward
          className={
            arrayList.length === positionArray + 1 ? styles.desactiveArrow : ''
          }
          onClick={() =>
            arrayList.length !== positionArray &&
            setPositionArray(positionArray + 1)
          }
        />
      </div>
      <div className={styles.progressCarousel}>
        <ul>
          {arrayList.map((arrayCheckbox, index) => (
            <li
              key={index}
              className={index === positionArray ? styles.activeCheckbox : ''}
            >
              <RiCheckboxBlankCircleFill />
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <div>loading...</div>
  );
};

export default Carrousel;

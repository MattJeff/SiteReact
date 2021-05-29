import React from 'react';
import Icon1 from '../../images/svg-8.svg';
import Icon2 from '../../images/svg-7.svg';
import Icon3 from '../../images/svg-3.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Nos services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Augmentez votre visibilité</ServicesH2>
          <ServicesP>
            Nous allons vous concevoir un site clé en main pour présenter votre activité à vos client
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Allez encore plus loin</ServicesH2>
          <ServicesP>
           Présentez votre activité et recevez les emails de vos clients. Imbriquez plusieurs pages à votre site. 
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Devis Premium</ServicesH2>
          <ServicesP>
            Nous vous créons un site sur mesure, unique. Vous pourez vous démarquez de vos concurents. 

          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;

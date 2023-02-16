import React from 'react';
import { CompanyBanner, CompanyNews } from '@/components/imports';
import {Container} from '../constant/imports';

function Company_Module() {
  return (
    <>
      <CompanyBanner />
      <section>
        <Container>          
          <CompanyNews />
        </Container>
      </section>
    </>
  )
}

export default Company_Module
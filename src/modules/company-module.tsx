import React from 'react';
import { CompanyBanner, NewsBox } from '@/components/imports';
import {Container} from '../constant/imports';

function Company_Module() {
  return (
    <>
      <CompanyBanner />
      <section>
        <Container>
          <NewsBox />
        </Container>
      </section>
    </>
  )
}

export default Company_Module
import Image from 'next/image';
import React from 'react';
import Company from '../../public/images/company.png';

function CompanyBanner() {
  return (
    <section>
        <div className='grid md:grid-cols-2 grid-cols-1'>
            <div>
            <Image src={Company} alt="" />
            </div>
            <div>
                <h1>E-Mock Test Giveaway Program</h1>
            </div>
        </div>
    </section>
  )
}

export default CompanyBanner
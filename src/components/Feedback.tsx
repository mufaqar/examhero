import {Container} from '@/constant/imports'
import React from 'react'

const Feedback = () => {
  return (
    <section className="bg-[url-('../../public/images/feedback-bg.png')]">
          <Container small={true}>
               <div className='grid md:grid-cols-2'>
                    <div>1</div>
                    <div>2</div>
               </div>
          </Container>
    </section>
  )
}

export default Feedback
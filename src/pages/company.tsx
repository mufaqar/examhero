import { Client } from '@/config/client';
import { Company_Module } from '@/modules/imports';
import Head from 'next/head';
import React from 'react'

function Company({events}:any) {
  return (
    <>
      <Head>
        <title>Company</title>
      </Head>
      <Company_Module events={events}/>
    </>
  )
}

export default Company



export async function getStaticProps() {

 
  const events = await Client.fetch(`*[_type == "events"]{
    title,
    image{
      asset->{
        url
      }
    },
    excerpt,
    slug,
    location,
    link,
  }`);

  return {
    props: {
      events,
    }
  };
}
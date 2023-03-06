import { Client } from '@/config/client';
import Head from 'next/head';
import React from 'react';
import { Blog_Module } from '../modules/imports';

function Blog({blog}:any) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Blog_Module blog={blog}/>
    </>
  )
}

export default Blog


export async function getStaticProps() {

  // partners 
  const blog = await Client.fetch(`*[_type == "blog"]{
    title,
    image{
      asset->{
        url
      }
    },
    excerpt,
    slug,
    href,
    author,
    releaseDate
  }`);

  return {
    props: {
      blog,
    }
  };
}
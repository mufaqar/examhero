import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Post10, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9 } from '../../public/images/imports';

function Blog_Articles({blog}) {
    console.log("🚀 ~ file: blog-articles.tsx:7 ~ Blog_Articles ~ blog:", blog)
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 md:gap-14 gap-10'>
            {blog.map((item:any, index:number) => (
                <div key={index} className='h-[588px] shadow-xl rounded-[10px] grid justify-between'>
                    <Image src={item?.image.asset.url} alt="" className='rounded-tr-[10px] rounded-tl-[10px]' width={700} height={200}/>
                    <div className='md:px-6 px-4'>
                        <h3 className='text-[#1D2130] md:text-[24px] md:leading-[33px] text-[18px] leading-[26px] font-bold Urbanist'>
                            {item?.title}
                        </h3>
                        <p className='text-[#F00A0A] md:text-[16px] md:leading-[24px] text-[18px] leading-[26px] font-normal Urbanist mt-1'>
                            {item?.excerpt}
                        </p>
                        <p className='md:text-[16px] md:leading-[24px] text-[14px] leading-[26px] font-normal Urbanist mt-1'>
                            <span className='text-[#F00A0A]'>
                                {item.author}
                            </span> | <span className='text-[#1D2130]'>
                                {item.releaseDate}
                            </span>
                        </p>
                    </div>
                    <div className='md:px-6 px-4'>
                        <Link href={item?.href} target="_blank" className='text-white bg-main hover:bg-main/90 md:text-[16px] md:leading-[24px] font-normal Urbanist px-3 py-1 rounded-[2px]'>
                        learn more
                        </Link>
                        
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Blog_Articles

export const Articles = [
    {
        title: "AI 生成高數題，難出新高度：MIT 提出可出題做題、評分的算法模型",
        content: "MIT 與哥倫比亞大學、哈佛大學、滑鐵盧大學的聯合研究團隊發表了一篇長 達 114 頁的論文，提出了首個可以大規模自動解決、評分和生成大學水平數學問題的模 型，可以說是人工智能和高等教育的一個重要里程碑。",
        publish: "January 5. 2022",
        author: "機器之心",
        linkTxt: "learn more",
        feature: Post2,
    },
    {
        title: "AI 生成高數題，難出新高度：MIT 提出可出題做題、評分的算法模型",
        content: "MIT 與哥倫比亞大學、哈佛大學、滑鐵盧大學的聯合研究團隊發表了一篇長 達 114 頁的論文，提出了首個可以大規模自動解決、評分和生成大學水平數學問題的模 型，可以說是人工智能和高等教育的一個重要里程碑。",
        publish: "January 5. 2022",
        author: "機器之心",
        linkTxt: "learn more",
        feature: Post3,
    },
    {
        title: "AI 生成高數題，難出新高度：MIT 提出可出題做題、評分的算法模型",
        content: "MIT 與哥倫比亞大學、哈佛大學、滑鐵盧大學的聯合研究團隊發表了一篇長 達 114 頁的論文，提出了首個可以大規模自動解決、評分和生成大學水平數學問題的模 型，可以說是人工智能和高等教育的一個重要里程碑。",
        publish: "January 5. 2022",
        author: "機器之心",
        linkTxt: "learn more",
        feature: Post4,
    },
    {
        title: "AI 生成高數題，難出新高度：MIT 提出可出題做題、評分的算法模型",
        content: "MIT 與哥倫比亞大學、哈佛大學、滑鐵盧大學的聯合研究團隊發表了一篇長 達 114 頁的論文，提出了首個可以大規模自動解決、評分和生成大學水平數學問題的模 型，可以說是人工智能和高等教育的一個重要里程碑。",
        publish: "January 5. 2022",
        author: "機器之心",
        linkTxt: "learn more",
        feature: Post5,
    },
    {
        title: "AI 生成高數題，難出新高度：MIT 提出可出題做題、評分的算法模型",
        content: "MIT 與哥倫比亞大學、哈佛大學、滑鐵盧大學的聯合研究團隊發表了一篇長 達 114 頁的論文，提出了首個可以大規模自動解決、評分和生成大學水平數學問題的模 型，可以說是人工智能和高等教育的一個重要里程碑。",
        publish: "January 5. 2022",
        author: "機器之心",
        linkTxt: "learn more",
        feature: Post6,
    },
    {
        title: "AI 生成高數題，難出新高度：MIT 提出可出題做題、評分的算法模型",
        content: "MIT 與哥倫比亞大學、哈佛大學、滑鐵盧大學的聯合研究團隊發表了一篇長 達 114 頁的論文，提出了首個可以大規模自動解決、評分和生成大學水平數學問題的模 型，可以說是人工智能和高等教育的一個重要里程碑。",
        publish: "January 5. 2022",
        author: "機器之心",
        linkTxt: "learn more",
        feature: Post7,
    },
    {
        title: "AI 生成高數題，難出新高度：MIT 提出可出題做題、評分的算法模型",
        content: "MIT 與哥倫比亞大學、哈佛大學、滑鐵盧大學的聯合研究團隊發表了一篇長 達 114 頁的論文，提出了首個可以大規模自動解決、評分和生成大學水平數學問題的模 型，可以說是人工智能和高等教育的一個重要里程碑。",
        publish: "January 5. 2022",
        author: "機器之心",
        linkTxt: "learn more",
        feature: Post8,
    },
    {
        title: "AI 生成高數題，難出新高度：MIT 提出可出題做題、評分的算法模型",
        content: "MIT 與哥倫比亞大學、哈佛大學、滑鐵盧大學的聯合研究團隊發表了一篇長 達 114 頁的論文，提出了首個可以大規模自動解決、評分和生成大學水平數學問題的模 型，可以說是人工智能和高等教育的一個重要里程碑。",
        publish: "January 5. 2022",
        author: "機器之心",
        linkTxt: "learn more",
        feature: Post9,
    },
    {
        title: "AI 生成高數題，難出新高度：MIT 提出可出題做題、評分的算法模型",
        content: "MIT 與哥倫比亞大學、哈佛大學、滑鐵盧大學的聯合研究團隊發表了一篇長 達 114 頁的論文，提出了首個可以大規模自動解決、評分和生成大學水平數學問題的模 型，可以說是人工智能和高等教育的一個重要里程碑。",
        publish: "January 5. 2022",
        author: "機器之心",
        linkTxt: "learn more",
        feature: Post10,
    },
]

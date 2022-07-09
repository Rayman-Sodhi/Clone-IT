import React, { useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'

import AutoPlayVideo from '../components/MainPage/AutoPlayVideo'
import Carrousel from '../components/MainPage/Carrousel'
import RecommendedChannels from '../components/MainPage/RecommendedChannels'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar/SideBar'

import style from '../styles/MainPage.module.scss'
import Categories from '../components/MainPage/Categories'
import CategorySpan from '../components/MainPage/TopCategories'
import MadeBy from '../components/SmallComponents/MadeBy'

export default function Home() {
  const [collapse, setCollapse] = useState(false)

  return (
    <div className={style.MainBackground}>
        <Head>
          <title>Twitch Clone</title>
          <meta property="og:title" key="title" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/Logo.png" />
        </Head>
        <Navbar />
        <MadeBy />
        <SideBar collapse={collapse} setCollapse={setCollapse} />
        <div className={style.PageContent}>
          <Carrousel collapse={collapse} />
          <RecommendedChannels collapse={collapse} title="Live channels we think you’ll like" />
          <Categories collapse={collapse} />
          <CategorySpan collapse={collapse} />
          <RecommendedChannels collapse={collapse} title="Recommended smaller communities" />
          <RecommendedChannels collapse={collapse} title="All aboard the Hype Train!" />
          <RecommendedChannels collapse={collapse} title="Recommended Just Chatting channels" />
        </div>
    </div>
  )
}

import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import homeStyles from "@/styles/Home.module.css";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jae Seok Lee</title>
      </Head>
      <section className={homeStyles.headingMd}>
        <p>[Jae Seok Lee Introduction]</p>
        <p>
          (This is a website)
        </p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}>

        </ul>
      </section>
    </div>
  )
}

export default Home
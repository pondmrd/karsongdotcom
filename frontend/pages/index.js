import { useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Style from '../styles/Page.module.css'
import Logo from '../public/weblogo.png'
import Image2 from '../public/image2.jpg'
import Navbar from '../subcomponents/Navbar'
import CompanyCard from '../components/CompanyCard'
import ProductCard from '../components/ProductCard'
import HomeList from '../components/HomeList'
import Footer from '../components/Footer'

const Home = () => {

    const [category, setCategory] = useState("volvo")

    const onChangeCategory = (e) => {
        setCategory(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div>
            <Head>
                <title>Karsong | Home</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar/>
            <div className={Style.content}>
                <div className={Style.category}>
                    <div>MARKETS</div>
                    <div>Content1</div>
                    <div>Content1</div>
                    <div>Content1</div>
                    <div>Content1</div>
                    <div>Content1</div>
                    <div>Content1</div>
                    <div>Content1</div>
                    <div>Content1</div>
                </div>
                <div className={Style.pagination}>
                    <div className={Style.paginationimage}>
                        <Image src={Image2} layout='fill' objectFit="contain" />
                    </div>
                    <div className={Style.paginationselect}>
                        <div >
                            <p>vvv</p>
                        </div>
                        <div>
                            <p>vvv</p>
                        </div>
                        <div>
                            <p>vvv</p>
                        </div>
                        <div>
                            <p>vvv</p>
                        </div>
                    </div>
                </div>
                <div className={Style.rightcontent}>
                    <div>
                        <Image src={Image2} layout='fill' objectFit="contain" />
                    </div>
                    <div>
                        <Image src={Image2} layout='fill' objectFit="contain" />
                    </div>
                    <div>
                        <Image src={Image2} layout='fill' objectFit="contain" />
                    </div>
                </div>
            </div>
            <HomeList />
            <br/>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home
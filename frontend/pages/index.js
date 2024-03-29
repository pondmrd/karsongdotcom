import { useState, useEffect } from 'react'
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
import AccountNotVerify from '../subcomponents/AccountNotVerify'

import api from '../api/api'
import axios from 'axios'

const Home = ({ data }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userId, setUserId] = useState(-1)
    const [username, setUsername] = useState("")

    useEffect(async () => {
        try {
            const result = await axios.get(api.isloggedin, { headers: { 'x-access-token': data.token } })
            if (result.data.auth) {
                setIsLoggedIn(true)
                setUserId(result.data.data.id)
                setUsername(result.data.data.username)
            } else {
                setIsLoggedIn(false)
            }
            console.log(result.data)
        } catch (err) {
            console.log(err)
        }
    }, [data])

    return (
        <div>
            <Head>
                <title>Karsong | Home</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <AccountNotVerify />
            <Navbar isLoggedIn={isLoggedIn} id={userId} username={username} />

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
            <br />
            <div>
                <Footer />
            </div>
        </div>
    )
}

export const getServerSideProps = async ({ req, res }) => {
    const { cookies } = req
    return {
        props: { data: cookies }
    }
}

export default Home
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Style from '../styles/Register.module.css'
import Background from '../public/image1.jpg'
import Qoobee from '../public/weblogo.png'
import Logo from '../public/karsonglogo2.png'
import { Input } from 'antd'
import { Select } from 'antd'
import Footer from '../components/Footer'

const { Option } = Select

const Register = () => {

    // function handleChange(value) {
    //     console.log(`selected ${value}`);
    // }

    return (
        <div>
            <Head>
                <title>Karsong | Register</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={Style.head}>
                <div className={Style.lefthead}>
                    <Image src={Logo} alt="web logo" layout='fill' objectFit='contain' />
                </div>
                {/* <div className={Style.righthead}>
                    <Select defaultValue="thai" style={{ width: 120 }} onChange={handleChange}>
                        <Option value="thai">ภาษาไทย</Option>
                        <Option value="english">English</Option>
                    </Select>
                </div> */}
            </div>
            <div className={Style.middle}>
                <div className={Style.leftmiddle}>
                </div>
                <div className={Style.rightmiddle}>
                    <br />
                    <h2 style={{ textAlign: 'center' }}>สมัครสมาชิก</h2>
                    <br />
                    <div className={Style.rightmiddleform}>
                        <p>Username:
                            <Input
                                placeholder="กำหนดชื่อผู้ใช้"
                            />
                        </p>

                        <p>Email:
                            <Input
                                placeholder="อีเมล"
                            />
                        </p>
                        <p>Password:
                            <Input
                                placeholder="รหัสผ่าน"
                            />
                        </p>
                        <p>ยืนยัน Password:
                            <Input
                                placeholder="ยืนยันรหัสผ่าน"
                            />
                        </p>
                        <p style={{ color: "green" }}>
                            *สมัครสมาชิกฟรี <br />
                            *กรุณาตั้งรหัสผ่านโดยคำนึงถึงความปลอดภัย
                        </p>
                        <button className={Style.button}>Submit</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Register

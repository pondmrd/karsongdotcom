import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Style from '../styles/Register.module.css'
import Background from '../public/image1.jpg'
import Qoobee from '../public/weblogo.png'
import { Input } from 'antd'
import { Select } from 'antd'

const { Option } = Select

const Register = () => {

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (
        <div>
            <Head>
                <title>Karsong | Register</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={Style.head}>
                <div className={Style.lefthead}>
                    <Image src={Qoobee} alt="web logo" height={90} width={300}/>
                </div>
                <div className={Style.righthead}>
                    <Select defaultValue="thai" style={{ width: 120 }} onChange={handleChange}>
                        <Option value="thai">ภาษาไทย</Option>
                        <Option value="english">English</Option>
                    </Select>
                </div>
            </div>
            {/* <br/> */}
            <div className={Style.middle}>
                <div className={Style.leftmiddle}>

                </div>
                <div className={Style.rightmiddle}>
                    <h2 style={{ textAlign: 'center' }}>สมัครสมาชิก</h2>
                    <div className={Style.rightmiddleform}>
                        <p>Email:</p>
                        <Input
                            placeholder="email"
                        />
                        <p>Password:</p>
                        <Input
                            placeholder="password"
                        />
                        <p>Confirm Password:</p>
                        <Input
                            placeholder="confirm password"
                        />
                        <br /><br />
                        <p>
                            *สมัครสมาชิกฟรี <br />
                            *กรุณาตั้งรหัสผ่านโดยคำนึงถึงความปลอดภัย
                        </p>
                        <button className={Style.button}>Submit</button>
                    </div>
                </div>
            </div>
            <footer className={Style.footer}>

            </footer>
        </div>
    )
}

export default Register

import { usePage } from 'context/page'
import useSWR from 'hooks/useSWR'
import Head from 'next/head'
import Image from 'next/image'
import { Transition, Dialog } from '@headlessui/react'
import { Fragment } from 'react'
import clquConfig from '../../clqu.config'
import Button from 'components/Global/Button'
import Carousel from "react-multi-carousel";

export default function About() {
    const { page } = usePage();

    return <>
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between w-full h-full py-24 gap-24">
                <div>
                    <h1 className="text-4xl font-bold">Who Am <span className="relative whitespace-nowrap text-primary">I</span>?</h1>
                    <p className="text-xl mt-1">
                        Hello, Im swonz. I am 15 years old.
                        I am a 1rd year high school student, I have been dealing with software for about 4 months.
                        Writing software has always been my dream. My brother was also a developer.
so I was very interested in this topic. My first breakthrough was to write a discord bot. I spent days and weeks on this but it failed. Then I worked on a discord bot again and it was my biggest breakthrough. You can still use it if you want it active. 
                        Thank you for reading <i className="fa fa-heart" />
                    </p>
                    
                </div>
                <div className="relative flex-shrink-0">
                    <img src="https://softwareer.net/avatars/clqu" style={{ zIndex: 1 }} className="relative shadow-xl z-1 w-full lg:w-64 h-full lg:h-64 rounded-full lg:rounded-lg" />
                    <div className="-right-3 top-3 absolute w-full h-full top-0 right-0 border-4 rounded-full lg:rounded-lg border-primary bg-gradient-to-t from-primary" />
                </div>
            </div>
        </div>

    </>
}

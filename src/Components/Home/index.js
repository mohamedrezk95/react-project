import React from 'react'
import "./style.js"
import {  HomeBtn, HomeDesc, HomeInfo, HomeInformation, HomeSection, HomeTitle, Span } from './style.js'
export default function Home() {
  return (
    <HomeSection>
            <div className='container'>
                <HomeInformation>
                    <HomeTitle>Josn Adam</HomeTitle>
                    <HomeInfo>Creative Director</HomeInfo>
                    <HomeDesc>
                        Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeSection>
  )
}

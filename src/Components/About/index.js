import React from 'react'


import { Creative, CreativeInfo, InfoDesc, InfoTitle } from './style.js'
export default function About() {
  return (
    <Creative>
    <div className="container">
        <CreativeInfo>
         <InfoTitle>This is Me <br/>
         Creative Director</InfoTitle>
            <InfoDesc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
            </InfoDesc>
            <InfoDesc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
            </InfoDesc>
        </CreativeInfo>
    </div>
</Creative>
  )
}

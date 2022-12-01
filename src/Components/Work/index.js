import React from 'react'
import { Icon, Line, MainPart, Part, PartDesc, PartTitle, Span, WorkSection, WorkTitle } from "./style.js"
import worksdata from './worksdata.jsx'
export default function Work() {
  return (
    <WorkSection>
            <div className="container">
            <WorkTitle><Span>My</Span> Work</WorkTitle>
            <MainPart>    
            {worksdata.map(item=>{
                  return(
                     <Part  key={item.id}>
                     <Icon className={item.Icon}></Icon>
                    
                     <PartTitle>{item.PartTitle}</PartTitle>
                     <Line></Line>
                     <PartDesc>{item.PartDesc}</PartDesc>
                     </Part>
                  )
              })}
                
                
                
              </MainPart>
            </div>
            
        </WorkSection>
  )
}

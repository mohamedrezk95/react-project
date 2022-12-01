import React from 'react'

import socialdata from './socialdata'
import { Icon, P, Social, Socialmedia, Span, SpanInfo } from './style'
export default function SocialMedia() {
  return (
    <Socialmedia>
            
   
    {socialdata.map(item=>{
      return(
        <Social item={item.id} key={item.id}>
        <Icon className={item.icon}></Icon>
        <P>
        <Span>{item.title}</Span>
        <SpanInfo>{item.body}</SpanInfo>
    </P>
    </Social>
      )
      
    })}

      

</Socialmedia>
  )
}

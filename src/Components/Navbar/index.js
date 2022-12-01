import React from 'react'
import { Anchor, List, Logo, LogoText, NavbarSection, Test, Ul } from './style.js'
export default function Navbar() {
  return (
    <NavbarSection>
            
            <div className="container">
                <Test>
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
              
                
                <Ul>
                    <List><Anchor href='#'>Home</Anchor></List>
                    <List><Anchor href="#">Work</Anchor></List>
                    <List><Anchor href="#">Portfolio</Anchor></List>
                    <List><Anchor href="#">Resume</Anchor></List>
                    <List><Anchor href="#">About</Anchor></List>
                    <List><Anchor href="#">Contact</Anchor></List>
                </Ul>
                </Test>
            </div>
            
        </NavbarSection>
  )
}

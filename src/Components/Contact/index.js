import React from 'react'

import { Drop, DropTitle, Span,Form, FormInput, Input, Sub, TextArea, Submait } from './style.js'
export default function Contact() {
  return (
    <Drop>
    <div className='container'>
        <DropTitle><Span>Drop </Span>Me A line</DropTitle>
        <Form action="">
            <FormInput>
                <Input type="text" placeholder="Your Name"/>
                <Input type="email" placeholder="Your Email"/>
            </FormInput>
            <Sub type="text" class="sub" placeholder="Your Subject"/>
            <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
            <Submait type="submit" value="Send Message"/>
        </Form>
    </div>
</Drop>
  )
}

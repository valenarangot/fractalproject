import React from 'react'
import { Cabezote, ServicesSlider, ProjectForm, Footer, Header, ContactSection } from '../components'

export function TestPage () {
    return (
      <>
        <Header/>

        <Cabezote type='UI' />
        <Cabezote type='UX' />
        <Cabezote type='Frontend' />
        <Cabezote type='Branding' />
        <Cabezote type='Consultancy' />
        <Cabezote type='Projects' />
  
        <ServicesSlider />
        <ProjectForm />
        <ContactSection />
        <Footer/>
      </>
    )
  }
  
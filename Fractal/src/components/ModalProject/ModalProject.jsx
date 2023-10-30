import React from 'react'
import { ButtonFirst } from '../buttons/button-first/ButtonFirst'
import { ButtonSecond } from '../buttons/button-second/ButtonSecond'
// import { ButtonCancel } from '../buttons/buttonCancel/ButtonCancel'
import { logos } from '../../data/toolsLogoData'
import styles from './ModalProject.module.css'

export function ModalProject () {
  const ProjectInfo = [
    {
      id: 1,
      images: ['./assets/projects/Project1.png', './assets/projects/Project2.png', './assets/projects/Project3.png'],
      title: 'Nintendo OOH Experience',
      type: 'UI - Branding',
      members: 'Isabella Barona, Andrés Narvaez',
      designTools: {
        Figma: true,
        Illustrator: true,
        Photoshop: false,
        AfterEffects: false,
        PremierePro: false
      },
      codingTools: {
        React: true,
        JS: true,
        HTML: true,
        CSS: true,
        Node: true
      },
      description: 'This project looks forward to create an interactive prototype of an Out-Of-Home experience. It is a gaming experience with the goal of catching leads for Nintendo.'
    }
  ]

  const designTools = ProjectInfo[0].designTools
  const designToolLogos = Object.keys(designTools)
    .filter((tool) => designTools[tool])
    .map((tool) => logos[tool])

  const codingTools = ProjectInfo[0].codingTools
  const codingToolLogos = Object.keys(codingTools)
    .filter((tool) => codingTools[tool])
    .map((tool) => logos[tool])

  return (
    <div>
      <Project
        ProjectInfo={ProjectInfo}
        designToolLogos={designToolLogos}
        codingToolLogos={codingToolLogos}
      />
    </div>
  )
}

export function Project ({ ProjectInfo, designToolLogos, codingToolLogos }) {
  const { id, images, title, type, members, description } = ProjectInfo[0]

  return (
    
    <div key={id} className={styles.Modal}>
      <div className={styles.Header}>
        <div className={styles.HeaderBackground}>
          <ImageGallery images={images} />
        </div>
        <div className={styles.HeaderTitle}>
          <h1> {title} </h1>
          <h3> <i>{type}</i>  </h3>
        </div>
      </div>
      <div className={styles.Body}>
        <div className={styles.Info}>
          <div className={styles.InfoDescription}>
            <h2> Made by: {members}</h2>
            <p> {description}</p>
          </div>

          <div className={styles.InfoTools}>
            <h2>Tools</h2>

            <div className={styles.ToolLogos}>
              {designToolLogos.map((tool, index) => (
                <img
                  key={`designTool-${index}`}
                  src={tool}
                  alt='Design Tool'
                  className={styles.ToolLogo}
                />
              ))}
            </div>
            <div>
              {codingToolLogos.map((tool, index) => (
                <img
                  key={`codingTool-${index}`}
                  src={tool}
                  alt='Coding Tool'
                  className={styles.ToolLogo}
                />
              ))}
            </div>
          </div>

        </div>

        <div className={styles.ButtonDiv}>
          <ButtonSecond title='Go back' />
          <ButtonFirst title='Go to Behance'/>
        </div>
      </div>
    </div>
  )
}

function ImageGallery ({ images }) {
  return (
    <div className={styles.BackgroundImages}>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index}`} />
      ))}
    </div>
  )
}

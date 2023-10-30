import React from 'react'
import { ButtonFirst } from '../buttons/button-first/ButtonFirst'
import { ButtonSecond } from '../buttons/button-second/ButtonSecond'
// import { ButtonCancel } from '../buttons/buttonCancel/ButtonCancel'
import { logos } from '../../data/toolsLogoData'
import { ProjectData } from '../../data/projectData'
import styles from './ModalProject.module.css'

export function ModalProject () {
  const ProjectInfo = [ProjectData[0]]
  
  // images: ['./assets/projects/Project1.png', './assets/projects/Project2.png', './assets/projects/Project3.png'],

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
    <div className={styles.BackgroundImage}>
      <img src={images} alt={`Image`} />
    </div>
  )
}

// function ImageGallery ({ images }) {
//   return (
//     <div className={styles.BackgroundImages}>
//       {images.map((image, index) => (
//         <img key={index} src={image} alt={`Image ${index}`} />
//       ))}
//     </div>
//   )
// }

import React from 'react'
import useGreeting from '~/hooks/useGreeting'
import TextCarousel from '~/components/TextCarousel'

import {
  Title,
  CarouselWrapper,
} from './styles'

const phrases = [
  "Full-Stack Development",
  "NodeJS, JavaScript",
  "React",
  "GatsbyJS, NextJS",
  "SQL, MongoDB",
  "GraphQL, REST",
  "Cloud Computing, AWS",
  "Golang",
  "Python & PHP",
  "Machine Learning"
]

const Header = () => (
  <header>
    <Title>{useGreeting()},</Title>
    <p>
      I‘m a Junior Full-Stack web and software developer with love for awesome design and extensive experiences in NodeJS, React, GO as well as Linux server administration. 
    </p>
    <p>
      I‘m not just another full stack guy, but could also gain valuable insights and knowledge from own e-commerce endeavors. I have experiences with the
      following technologies.
    </p>
    <CarouselWrapper>
      <TextCarousel
        phrases={phrases}
        interval={2000}
        loopPhrases={true}
      />
    </CarouselWrapper>
    <p>
      You can check out my open source projects on <a target="_blank" rel="noopener noreferrer" href="https://github.com/AlexanderProd">GitHub</a>.
    </p>
  </header>
)

export default Header

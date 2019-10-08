import React, { useEffect } from 'react'
import styled from '@emotion/styled'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/Header'
import useTypewriter from '../hooks/useTypewriter'
import { MainText, colors } from '../ui/styles'

const Paragraph = styled.p`
  :before {
    content: counter(lines);
    position: absolute;
    left: -20px;
    color: ${colors.grey};
    visibility: ${({ visible }) => visible ? 'block' : 'hidden'};
    counter-increment: lines;
  }
`

const IndexPage = () => {
  const [text0, text0IsDone] = useTypewriter('My name is Alexander Hörl, I\'m a fullstack web and software developer.', true, 50)
  const [text1, text1IsDone] = useTypewriter('I have great experiences in NodeJS, React, GO as well as Linux server administration.', text0IsDone, 40)
  const [text2, text2IsDone] = useTypewriter('You can download my resume or check out my open source work on github.', text1IsDone, 40)

  useEffect(() => {
    if (text2IsDone === true) {
      const elem = document.getElementById('text2')
      const newElem = 'You can download my <u>resume</u> or check out my open source work on <u>github</u>.'
      elem.innerHTML = newElem
    }
  }, [text2[1]])

  return (
    <Layout>
      <SEO title='Home' />
      <Header />
      <MainText>
        <Paragraph visible={true}>{text0}</Paragraph>
        <Paragraph visible={text0IsDone}>{text1}</Paragraph>
        <Paragraph visible={text1IsDone} id='text2'>{text2}</Paragraph>
      </MainText>
    </Layout>
  )
}

export default IndexPage

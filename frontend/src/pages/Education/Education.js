import React from 'react'

import { EducationContainer } from './styled'
import Title from '../../components/UI/Title'
import Card from '../../components/UI/Card'

const Education = () => {
  return (
    <EducationContainer>
      <Title h1 content={'Education'} maxFontSize={'52'} minFontSize={'30'} />
      <Card>
        <Title h2 content={'Next.js - Udemy Certification'} maxFontSize={'18'} minFontSize={'16'} />
        <div>jolaasdasd</div>
      </Card>
      <Card>
        <Title h2 content={'React.js - Udemy Certification'} maxFontSize={'18'} minFontSize={'16'} />
        <div>jolaasdasd</div>
      </Card>
      <Card>
        <Title h2 content={'Primera Escuela de Diseño Multimedial Davinci'} maxFontSize={'18'} minFontSize={'16'} />
        <div>jolaasdasd</div>
      </Card>
      <Card>
        <Title h2 content={'Coderhouse'} maxFontSize={'18'} minFontSize={'16'} />
        <div>jolaasdasd</div>
      </Card>
      <Card>
        <Title h2 content={'Universidad Católica Andrés Bello'} maxFontSize={'18'} minFontSize={'16'} />
        <div>jolaasdasd</div>
      </Card>
    </EducationContainer>
  )
}

export default Education

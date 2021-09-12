import React from 'react'

import Title from '../../components/UI/Title'
import Card from '../../components/UI/Card'
import { WorkExperienceContainer } from './styled'

const WorkExperience = () => {
  return (
    <WorkExperienceContainer>
      <Title
        h1
        content={'Work Experience'}
        maxFontSize={'52'}
        minFontSize={'30'}
      />
       <Card>
        <Title h2 content={'Zx Ventures'} maxFontSize={'18'} minFontSize={'16'} />
        <div>jolaasdasd</div>
      </Card>
      <Card>
        <Title h2 content={'Mercado Libre'} maxFontSize={'18'} minFontSize={'16'} />
        <div>jolaasdasd</div>
      </Card>
      <Card>
        <Title h2 content={'Rappi'} maxFontSize={'18'} minFontSize={'16'} />
        <div>jolaasdasd</div>
      </Card>
      <Card>
        <Title h2 content={'Global Hitts Cono Sur'} maxFontSize={'18'} minFontSize={'16'} />
        <div>jolaasdasd</div>
      </Card>
      <Card>
        <Title h2 content={'BlueAlba'} maxFontSize={'18'} minFontSize={'16'} />
        <div>jolaasdasd</div>
      </Card>
      <Card>
        <Title h2 content={'Toolbox - The Unified TV Ecosystem'} maxFontSize={'18'} minFontSize={'16'} />
        <div>jolaasdasd</div>
      </Card>
      <Card>
        <Title h2 content={'Crandi'} maxFontSize={'18'} minFontSize={'16'} />
        <div>jolaasdasd</div>
      </Card>
      <Card>
        <Title h2 content={'Nextperience'} maxFontSize={'18'} minFontSize={'16'} />
        <div>jolaasdasd</div>
      </Card>
    </WorkExperienceContainer>
  )
}

export default WorkExperience

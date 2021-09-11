import React from 'react'

import Title from '../../components/UI/Title'
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
    </WorkExperienceContainer>
  )
}

export default WorkExperience

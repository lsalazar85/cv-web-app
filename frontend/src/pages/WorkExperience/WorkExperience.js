import React from 'react'

import Title from '../../components/UI/Title'
import Card from '../../components/UI/Card'
import { WorkExperienceContainer } from './styled'
import { DataExperience } from "../../constans/dataExperience";

const WorkExperience = () => {
  return (
    <WorkExperienceContainer>
      <Title
        h1
        content={'Work Experience'}
        maxFontSize={'52'}
        minFontSize={'30'}
      />
        {DataExperience.map(item => {
            return (
                <Card key={item.id}>
                    <a href={item.linkSite} target='_blank'>
                        <Title h2 content={item.title} maxFontSize={'18'} minFontSize={'16'} />
                    </a>
                    <div>{item.occupation} - ({item.years})</div>
                    <div>
                        {item.content.map(item => {
                            return(
                                <div key={item.key}>{item.text}</div>
                            )
                        })}
                    </div>
                    <div>
                        Tech-Stack:
                        {item.techStack.map(tech => {
                            return (
                                <div key={tech.key}>{tech.label}</div>
                            )
                        })}
                    </div>
                </Card>
            )
        })}
    </WorkExperienceContainer>
  )
}

export default WorkExperience

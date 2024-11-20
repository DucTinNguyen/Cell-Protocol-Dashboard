'use client'
import DetailStep from '@/components/create-project/detail/detail-step'
import HeadCreateProject from '@/components/create-project/header'
import LinkStep from '@/components/create-project/link'
import MediaStep from '@/components/create-project/media'
import Member from '@/components/create-project/member'
import ResourceStep from '@/components/create-project/resources'
import ProjectSubmitted from '@/components/create-project/submited'
import WrapBodyContent from '@/components/create-project/wrap-body'
import React, { useCallback, useEffect, useState } from 'react'

const CreateProject = () => {
  const [currentStep, setCurrentStep] = useState(1);



  const handleRenderStep = useCallback(() => {
    switch (currentStep) { 
      case 1:
        return <DetailStep step={currentStep} setCurrentStep={setCurrentStep}/>
      case 2:
        return <LinkStep step={currentStep} setCurrentStep={setCurrentStep} />
      case 3:
        return <MediaStep step={currentStep} setCurrentStep={setCurrentStep} />
      case 4:
        return <ResourceStep step={currentStep} setCurrentStep={setCurrentStep} />
      case 5:
        return <Member step={currentStep} setCurrentStep={setCurrentStep} />
      case 6:
        return <ProjectSubmitted />
    }
  },[currentStep])

  useEffect(() => {
    handleRenderStep()
  },[currentStep, handleRenderStep])


 

  return (
    <main>
          <HeadCreateProject currentStep={currentStep} setCurrentStep={setCurrentStep}/>   
          <WrapBodyContent>
            {handleRenderStep()}
          </WrapBodyContent>
    </main>
  )
}

export default CreateProject
import DetailStep from '@/components/create-project/detail/detail-step'
import HeadCreateProject from '@/components/create-project/header'
import WrapBodyContent from '@/components/create-project/wrap-body'
import React from 'react'

const CreateProject = () => {
  return (
    <main>
          <HeadCreateProject />   
          <WrapBodyContent>
              <DetailStep />
          </WrapBodyContent>
    </main>
  )
}

export default CreateProject
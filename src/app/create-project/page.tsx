import DetailStep from '@/components/create-project/detail/detail-step'
import HeadCreateProject from '@/components/create-project/header'
import LinkStep from '@/components/create-project/link'
import MediaStep from '@/components/create-project/media'
import WrapBodyContent from '@/components/create-project/wrap-body'
import React from 'react'

const CreateProject = () => {
  return (
    <main>
          <HeadCreateProject />   
          <WrapBodyContent>
            {/* <DetailStep /> */}
        {/* <LinkStep /> */}
            <MediaStep />
          </WrapBodyContent>
    </main>
  )
}

export default CreateProject
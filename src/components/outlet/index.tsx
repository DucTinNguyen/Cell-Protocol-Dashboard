'use client'
import { useSearchParams } from 'next/navigation'
import React, { useMemo } from 'react'
import Projects from '../projects';
import JobBoard from '../jobs-board';
import ProjectDetail from '../projects/detail';

const Outlet = () => {

  const params = useSearchParams().get('tab');  
  const projectID = useSearchParams().get('id')

  const handleRenderComponent = useMemo(() => {
    if (params === ('projects') && !projectID) return <Projects />
    if(params === ('projects') && projectID) return <ProjectDetail projectId={Number(projectID)} />
    if(params?.includes('job-board')) return <JobBoard />
  },[params, projectID])

  return (
    <main className='bg-black py-3 px-4 grow h-svh overflow-y-scroll pb-10'>
      {handleRenderComponent}
    </main>
  )
}

export default Outlet
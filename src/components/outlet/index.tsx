'use client'
import { useSearchParams } from 'next/navigation'
import React, { useMemo } from 'react'
import Projects from '../projects';
import JobBoard from '../jobs-board';

const Outlet = () => {

  const params = useSearchParams().get('tab');  

  const handleRenderComponent = useMemo(() => {
    if (params?.includes('projects')) return <Projects />
    if(params?.includes('job')) return <JobBoard />
  },[params])

  return (
    <main className='bg-black py-3 px-4 grow h-svh overflow-y-scroll pb-10'>
      {handleRenderComponent}
    </main>
  )
}

export default Outlet
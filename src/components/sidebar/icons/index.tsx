import React from 'react'
import IconHome from './home'
import { IconProject } from './project'
import { IconEvent } from './event'
import { IconCell } from './cell'
import { IconJob } from './job'
import { IconNFTS } from './nfts'
import { IconAppStore } from './app-store';
import { IconP2P } from './p2p'
import { IconResource } from './resource'

export const IconItem = ({ index, isActive }: { index: number, isActive: boolean }) => {
    
    const ICONS = {
        0: <IconHome isActive={isActive} />,
        1: <IconProject isActive={isActive} />,
        2: <IconEvent isActive={isActive} />,
        3: <IconCell isActive={isActive} />,
        4: <IconJob isActive={isActive} />,
        5: <IconNFTS isActive={isActive} />,
        6: <IconAppStore isActive={isActive} />,
        7: <IconP2P isActive={isActive} />,
        8: <IconResource isActive={isActive} />
    }




  return (
      <>
          {ICONS[index as keyof typeof ICONS]}
      </>
  )
}

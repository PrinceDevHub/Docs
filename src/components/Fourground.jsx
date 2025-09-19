import React from 'react'
import Card from './Card'
import { useRef } from 'react';


function Fourground() {

const ref = useRef(null)
   const data = [
  {
    desc: '📄 Final project proposal including goals, timeline, and budget estimates for Q4.',
    filesize: '1.1MB',
    close: false,
    tag: { isOpen: true, tagTitle: 'Download Proposal', tagColor: 'blue' },
  },
  {
    desc: '🖼️ High-resolution marketing assets for the October campaign, including banners and social media posts.',
    filesize: '22.4MB',
    close: false,
    tag: { isOpen: true, tagTitle: 'Download Assets', tagColor: 'green' },
  },
  {
    desc: '📊 Performance report: Website analytics and engagement stats from the last 30 days.',
    filesize: '870KB',
    close: true,
    tag: { isOpen: false, tagTitle: '', tagColor: '' },
  },
  {
    desc: '📝 Meeting notes from the cross-team sync on September 14 — includes action items and owner list.',
    filesize: '540KB',
    close: false,
    tag: { isOpen: true, tagTitle: 'View Notes', tagColor: 'blue' },
  },
  {
    desc: '🎨 UI design mockups for the mobile app onboarding flow, created in Figma.',
    filesize: '4.6MB',
    close: false,
    tag: { isOpen: true, tagTitle: 'Open in Figma', tagColor: 'green' },
  },
  {
    desc: '📁 Legal documents and compliance forms required for client onboarding (PDF bundle).',
    filesize: '3.2MB',
    close: true,
    tag: { isOpen: true, tagTitle: 'Review Docs', tagColor: 'blue' },
  },
];

  return (
   <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
    {data.map((item, index)=>(
        <Card  key={index} data={item} reference={ref}/>
    ))}
 
   </div>
  )
}

export default Fourground

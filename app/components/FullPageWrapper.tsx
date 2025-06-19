'use client'

import { useEffect, useRef } from 'react'
import ReactFullpage from '@fullpage/react-fullpage'

interface FullPageWrapperProps {
  children: React.ReactNode
}

export default function FullPageWrapper({ children }: FullPageWrapperProps) {
  useEffect(() => {
    console.log('FullPageWrapper mounted');
    // Load image directly to check if it's accessible
    const img = new Image();
    img.onload = () => console.log('Background image loaded successfully');
    img.onerror = () => console.log('Error loading background image');
    img.src = '/bring-background.png';
  }, []);

  const options = {
    licenseKey: 'TX6L9-29OSK-PT1KK-2JSLI-JZLYM',
    credits: { enabled: false },
    normalScrollElements: '.section_page-content.is-fixed',
    scrollingSpeed: 700,
    navigation: true,
    navigationPosition: 'right',
    css3: true,
    scrollBar: true,
    autoScrolling: false,
    fitToSection: false,
    paddingTop: '0px',
    paddingBottom: '0px',
    responsiveWidth: 991,
    afterLoad: function(origin: any, destination: any, direction: string) {
      // Handle section load if needed
    }
  }

  return (
    <ReactFullpage
      {...options}
      render={({ state, fullpageApi }) => {
        return (
          <div 
            id="fullpage" 
            className="page-wrapper"
            style={{
              position: 'relative',
              zIndex: 1,
              backgroundColor: 'pink',
              backgroundImage: `url('/bring-background.png')`,
              backgroundPosition: 'center 10%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '400px auto',
            }}
          >
            {children}
          </div>
        )
      }}
    />
  )
} 
import React from 'react'
import './App.css'
import { BigText } from './Reuse-components/BigText'
import { Conten1t } from './Conten1t'
import { Awrds } from './Reuse-components/Awrds'

export const TwoConnect = () => {
  return (
    <div>
      <div className='background-Awrds'>
        <div className='flex-dir'>
          

          <div className='flex-aw'>
            <div className='awrds-first'>
            <Conten1t content={"we ve won"} />

              <BigText bigtex={"Multiple international awards, every year, since 2012! Apart from the 16 international awards that we've won, we're also a Google Certified Partner and Bing Ads Accredited Professional Company. We've also been featured and mentioned in many leading tech magazines and portals for our various contributions."} />
              <button>view more</button>
              <img src="https://cdn.acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/awards-gif.gif" alt="" />

            </div>
            <div>
              <Awrds/>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

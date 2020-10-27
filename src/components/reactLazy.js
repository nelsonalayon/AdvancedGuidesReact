import React, {Suspense} from 'react'
// import OtherComponent from './otherComponent'

const OtherComponent = React.lazy(() => import ('./otherComponent'))






const Lazy = () => {
    
    return(<Suspense fallback={<div>Loading...</div>}>      
                          
        <OtherComponent />
        <OtherComponent />

        <OtherComponent />
        <OtherComponent />
        <OtherComponent />

        <OtherComponent />

                
      </Suspense>)
}

export default Lazy
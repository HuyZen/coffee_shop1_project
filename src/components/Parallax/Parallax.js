import React from 'react';
import * as dataImg from '../../constant/dataImg'

const Parallax = () => {
  return (
    <>
        <div className="col l-12 t-12 c-12">
            <div
              style={{
                backgroundImage: `url(${dataImg.Parallax})`,
              }}
              className="parallax bg-cover bg-center mt-[128px] bg-no-repeat h-[400px] w-[100vw] relative left-[calc(-50vw+50%)] bg-fixed"
            ></div>
          </div>
    </>
  )
}

export default Parallax
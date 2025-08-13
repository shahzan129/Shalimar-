import React from 'react'

const Bottom1 = () => {
  return (
    <div>
      <div className='flex justify-evenly'>
        {/* Youtube */}
        <div className='flex items-center text-black'>
          <div className='lg:block hidden mr-4'>

            <div className='flex gap-2 items-center border border-gray-300 w-30 h-10'>

              <img className='h-6 w-6 mx-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5WDnUU5bvKG-RQhabLJY2m4rXT1AhbFdiLQ&s' />
              <span className='font-bold'>Shalimar</span>
            </div>
          </div>
          <div className='lg:hidden block border border-gray-400'>
            <img className='h-6 w-6' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5WDnUU5bvKG-RQhabLJY2m4rXT1AhbFdiLQ&s' />
          </div>
        </div>

        {/* Linkdin */}
        <div className='flex items-center text-black'>
          <div className='lg:block hidden mr-4'>

            <div className='flex gap-2 items-center border border-gray-300 w-30 h-10'>

              <img className='h-6 w-6 mx-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCkU-0zCMujefIHQArGDtdJCG-V9m3pLXs7w&s' />
              <span className='font-bold'>Shalimar</span>
            </div>
          </div>
          <div className='lg:hidden block border border-gray-400'>
            <img className='h-6 w-6' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCkU-0zCMujefIHQArGDtdJCG-V9m3pLXs7w&s' />
          </div>
        </div>

        {/* Instagram */}
        <div className='flex items-center text-black'>
          <div className='lg:block hidden mr-4'>

            <div className='flex gap-2 items-center border border-gray-300 w-30 h-10'>

              <img className='h-6 w-6 mx-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8lv-iEOWtRxGDqsOR-Pa1kIiqN298569zVA&s' />
              <span className='font-bold'>Shalimar</span>
            </div>
          </div>
          <div className='lg:hidden block border border-gray-400'>
            <img className='h-6 w-6' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8lv-iEOWtRxGDqsOR-Pa1kIiqN298569zVA&s' />
          </div>
        </div>

        {/* Facebook */}
        <div className='flex items-center text-black'>
          <div className='lg:block hidden mr-4'>

            <div className='flex gap-2 items-center border border-gray-300 w-30 h-10'>

              <img className='h-6 w-6 mx-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvVXFRtorrWJxofDtjz-nYNykSzuhy_NhTJQ&s' />
              <span className='font-bold'>Shalimar</span>
            </div>
          </div>
          <div className='lg:hidden block border border-gray-400'>
            <img className='h-6 w-6' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvVXFRtorrWJxofDtjz-nYNykSzuhy_NhTJQ&s' />
          </div>
        </div>

        {/* Twitter */}
        <div className='flex items-center text-black'>
          <div className='lg:block hidden mr-4'>

            <div className='flex gap-2 items-center border border-gray-300 w-30 h-10'>

              <img className='h-6 w-8' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSCdHOcw26caVnIs7MlcSrzD3sjUkxmMpkGQ&s' />
              <span className='font-bold'>Shalimar</span>
            </div>
          </div>
          <div className='lg:hidden block border border-gray-400'>
            <img className='h-6 w-7' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSCdHOcw26caVnIs7MlcSrzD3sjUkxmMpkGQ&s' />
          </div>
        </div>
      </div>

      <div className='lg:block hidden'>
        <div className='my-7 flex justify-around'>
          {/*Support*/}
          <div className='w-20'>
            <div className='font-bold'>Support</div>
            <span >Contact Us</span>
          </div>

          {/*Policies*/}
          <div className='w-50'>
            <div className='font-bold'>Policies</div>
            <span>Terms & Conditions
              Privacy Policy
              Return, Replacement & Refund.</span>
          </div>

          {/*Know More*/}
          <div className='w-30'>
            <div className='font-bold'>Know More</div>
            <span>About Us
              Our Stores
              Service Center</span>
          </div>

          {/*Contact Information Head Office*/}
          <div className='w-60'>
            <div className='font-bold'>Contact Information Head Office</div>
            <span>Registered Office Address:
              CRAZZYHUB RETAIL PVT. LTD,
              SS-1281 Sector-H Ashiyana, LDA Colony,
              Lucknow, 226012 Uttar Pradesh, India.
              CIN - U52590UP2021PTC153464</span>
          </div>
        </div>
      </div>
      {/*Mobile View*/}
      <div className='lg:hidden block my-5'>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <div className='font-bold'>Support</div>
            <span>Contact Us</span>
          </div>

          <div>
            <div className='font-bold'>Policies</div>
            <span>Terms & Conditions Privacy Policy Return, Replacement & Refund.</span>
          </div>

          <div>
            <div className='font-bold'>Know More</div>
            <span>About Us Our Stores Service Center</span>
          </div>

          <div>
            <div className='font-bold'>Contact Information Head Office</div>
            <span>Registered Office Address: CRAZZYHUB RETAIL PVT. LTD, SS-1281 Sector-H Ashiyana, LDA Colony, Lucknow, 226012 Uttar Pradesh, India. CIN - U52590UP2021PTC153464</span>
          </div>
        </div>

      </div>
      <div className='border border-gray-300 h-18 w-full lg:w-full flex items-center justify-center '>
        <div className='lg:text-lg text-sm'>©2025 SHALIMAR RETAIL PVT. LTD. All Rights Reserved | Designed by Shahzan Khan! </div>
        
      </div>

    </div>






  )
}

export default Bottom1

import Image from 'next/image'

const Guide = () => {
    return (
        <section className="flexCenter flex-col">
            <div className="padding-container max-container w-full pb-24">
                <Image
                    src='/storeIcon.jpg'
                    alt="store"
                    width={50}
                    height={50}
                />
                <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
                    we are here for you
                </p>
                <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
                    <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
                        Thrift Decor Guidelines
                    </h2>
                    <p className="regular-16 text-gray-30 xl:max-w-[520px]  text-justify">
                        At Thrift Decor, we prioritize quality, cleanliness, and safety to ensure a positive experience for all our users. When listing items on our platform,
                        we kindly request that sellers adhere to our guidelines. Please ensure that all furniture and decor items are thoroughly cleaned and free from dirt, stains,
                        and odors before listing them. Provide accurate descriptions and photographs to give potential buyers a clear understanding of their condition and appearance.
                        Additionally, sell only authentic items and refrain from listing counterfeit or misrepresented products. Prioritize safety by checking for any potential hazards
                        or defects in your items before listing them for sale. Finally, treat fellow users with respect and professionalism in all your interactions.
                        By following these guidelines, you contribute to creating a positive and trustworthy environment for all our users. Thank you for your cooperation!
                    </p>
                </div>
            </div>

            <div className="flexCenter max-container relative w-full">
                <Image
                    src='/dada_design-fgdgwgmT1b4-unsplash (1).jpg'
                    alt='mirror'
                    width={1440}
                    height={580}
                    className="w-full object-cover object-center 2xl:rounded-5xl "
                    style={{ height: '580px' }} // Adjust the height as needed

                />
                <div className="absolute flex bg-white py-8 pl-8 pr-9 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
                    <div className='flexBetween flex-col w-full'>
                        <img src="/icons8-close-50.png" alt="Close" className="w-6 h-6 absolute top-2 right-2 cursor-pointer m-2" />
                        <div className='flex w-full flex-col'>
                            <div className='flexBetween w-full'>
                                <p className='regular- text-gray-20'>Price </p>
                            </div>
                            <p className='bold-20'>₹4999</p>
                        </div>
                        <div className='flex w-full flex-col pt-5'>
                            <div className='flexBetween w-full'>
                                <p className='regular- text-gray-20'>Contact </p>
                            </div>
                            <p className='bold-20'>89270086</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Guide


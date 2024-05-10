import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import { useState } from "react"; // Import useState for component state

interface CarouselProps {
    backgroundImage: string;
    title: string;
    username: string;
    addedInCart: string;
}

const CarouselSlider = ({ backgroundImage, title, username, addedInCart }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0); // State for current image index

    return (
        <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
            <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
                <div className="flexCenter gap-4">
                    <div className="rounded-full bg-green-50 p-4">
                        <Image
                            src="/folded-map.svg"
                            alt="map"
                            width={28}
                            height={28}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="bold-18 text-white">{title}</h4>
                        <p className="regular-14 text-white"> {username}</p>
                    </div>
                </div>

                <div className="flexCenter gap-6">
                    <span className="flex -space-x-4 overflow-hidden">
                        {PEOPLE_URL.map((url) => (
                            <Image
                                className="inline-block h-10 w-10 rounded-full"
                                src={url}
                                key={url}
                                alt="person"
                                width={52}
                                height={52}
                            />
                        ))}
                    </span>
                    <p className="bold-16 md:bold-20 text-white">{addedInCart}</p>
                </div>
            </div>
        </div>
    )
}

const StoreGallery = () => {
    return (
        <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
            <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
                <CarouselSlider
                    backgroundImage="bg-bg-img-2"
                    title="Wooden dining table "
                    username="Francesca Tosolini"
                    addedInCart="30+ Added in Cart"
                />
                <CarouselSlider
                    backgroundImage="bg-bg-img-1"
                    title="Vintage Sofa with Pillows"
                    username="Ana Ferreira"
                    addedInCart="50+ Added in Cart"
                />

            </div>
            <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
                <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
                    <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
                        Elevate Your <strong>Decor on a Budget</strong>
                    </h2>
                    <p className="regular-14 xl:regular-16 mt-5 text-white">
                        Start your journey by clicking on the photo of the item you love. Upload any necessary details and decide on a price that fits your budget.
                        Engage in bargaining with other users to get the best deal possible. And if you're looking to trade, explore exchange options available on our platform.
                        At Thrift Decor, it's a seamless process from discovery to negotiation to exchange, helping you create the perfect home decor within your budget.
                    </p>
                    <Image
                        src='/quote.svg'
                        alt="quote"
                        width={186}
                        height={219}
                        className="camp-quote"
                    />
                </div>
            </div>
        </section>
    )
}

export default StoreGallery
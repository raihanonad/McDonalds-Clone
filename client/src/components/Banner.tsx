import Image from "next/image";
import banner1 from "../../assets/banner1.jpg"
import banner2 from "../../assets/banner2.jpg"
import banner3 from "../../assets/banner3.jpg"

export default function Banner() {
    return (
        <>
          <div className="w-full mt-20">
              <Image
                alt="banner1"
                src={banner1}
                className="w-full"
              />
          </div>
          <div className="w-full h-64">
              <Image
                alt="banner2"
                src={banner2}
                className="w-full"
              />
          </div>
          <div className="w-full mt-36">
              <Image
                alt="banner3"
                src={banner3}
                className="w-full"
              />
          </div>
        </>
    );
}
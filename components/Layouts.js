import Image from 'next/image';
import Link from 'next/link'; 
import logo from '../public/photos/image.png';  
import girman from '../public/photos/Girman.png';  
import tech from '../public/photos/TECHNOLOGIES.png';  

export default function Layout({ children }) {
  return (
    <div>
      <nav className="w-full py-4 px-6 flex justify-between items-center bg-white shadow-md">
        <div className="flex items-center">
          <Image src={logo} alt="Girman Technologies logo" width={50} height={50} />
          <div className="flex flex-col ml-3">
            <Image src={girman} alt="Girman Technologies" width={100} height={50} />
            <Image src={tech} alt="Technologies" width={100} height={50} className="mt-1" />
          </div>
        </div>
        <div className="flex items-center space-x-6 text-[#111111]">
          <Link href="/" className="underline text-blue-500 font-semibold" passHref>
            SEARCH
          </Link>
          <a href="http://girmantech.com" className="hover:underline">Website</a>
          <a href="https://linkedin.com/company/girman-technologies" className="hover:underline">LinkedIn</a>
          <a href="mailto:contact@girmantech.com" className="hover:underline">Contact</a>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}

import { SocialIcon } from "react-social-icons";

export default function Header() {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-4xl mx-auto z-20 xl:items-center p-5">
        <div className="flex flex-row items-center">
            <SocialIcon target="_blank" url="https://twitter.com/MrinmoyDev_Gzie" fgColor="gray" bgColor="transparent"/>
            <SocialIcon target="_blank" url="https://twitter.com/MrinmoyDev_Gzie" fgColor="gray" bgColor="transparent"/>
            <SocialIcon target="_blank" url="https://twitter.com/MrinmoyDev_Gzie" fgColor="gray" bgColor="transparent"/>
            <SocialIcon target="_blank" url="https://twitter.com/MrinmoyDev_Gzie" fgColor="gray" bgColor="transparent"/>
        </div>
        <div className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon className="cursor-pointer" network="email" fgColor="gray" bgColor="transparent"/>
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p>
        </div>
    </header>
  )
}

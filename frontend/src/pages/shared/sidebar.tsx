import { forwardRef,LegacyRef } from "react";
import { useLocation } from "react-router-dom";
import { useRouter } from "next/router"
import Link from "next/link"
import { MdCottage, MdGroup, MdShopTwo, MdCategory } from "react-icons/md"
import Image from "next/image"

const SideBar = forwardRef(({ }, ref:LegacyRef<HTMLDivElement>) => {
    const route=useRouter()
    const listMenu = [
        { to: '/', path: '/', icon: <MdCottage />, name: 'Home' },
        { to: 'user', path: 'user', icon: <MdGroup />, name: 'User' },
        { to: 'category', path: 'category', icon: <MdCategory />, name: 'Category' },
        { to: 'product', path: 'product', icon: <MdShopTwo />, name: 'Product' }
    ]
    return (
        <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm">
            <div className="flex justify-center mt-6 mb-14">
                <picture>
                    <Image
                        className="w-32 h-auto"
                        width="20"
                        height="20"
                        src="../../next.svg"
                        alt="company logo"
                    />
                </picture>
            </div>

            <div className="flex flex-col">
                {(listMenu || []).map((item) => (

                    <Link href={`${item.to}`}>
                        <div
                            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${ route.pathname == item.path
                                    ? "bg-orange-100 text-orange-500"
                                    : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
                                }`}
                        >
                            <div className=" mr-2">{item.icon}
                            </div>
                            <div>
                                <p>{item.name}</p>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>
        </div>
    );
});

SideBar.displayName = "SideBar";

export default SideBar;
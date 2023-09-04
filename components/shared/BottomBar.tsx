'use client'

import { sidebarLinks } from "@/constants";
import Link from 'next/link';
import Image from 'next/image';
import {usePathname, useRouter} from 'next/navigation';
function BottomBar() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <section className="bottombar">
      <div className="bottombar_container">
      {sidebarLinks.map(item => {
            const isActive = (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route;
            return (
              <Link href={item.route} key={item.label} className={'bottombar_link w-full ' + `${isActive && ' bg-primary-500'}`}>
                <Image src={item.Icon} alt={item.label} width="24" height={"24"} />
                <p className="text-subtle-medium text-light-1 max-sm:hidden">
                  {item.label.split(/\s+/)[0]}
                </p>
              </Link>
            )}
      )}
      </div>
    </section>
  
  )
}

export default BottomBar
"use client"
import { sidebarLinks } from '@/constants/index';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { SignOutButton, SignedIn } from '@clerk/nextjs';
import { EnterIcon } from '@radix-ui/react-icons'

function LeftSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <section className="custon-scollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-3 px-3">
        {
          sidebarLinks.map(item => {
            const isActive = (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route;
            return (
              <Link href={item.route} key={item.label} className={'leftsidebar_link w-full ' + `${isActive && ' bg-primary-500'}`}>
                <Image src={item.Icon} alt={item.label} width="24" height={"24"} />
                <p className=" text-light-1 max-lg:hidden">
                  {item.label}
                </p>
              </Link>
            )
          })
        }
      </div>
      <div className='mt-10 px-4 w-full'>
        <SignedIn>
          <SignOutButton signOutCallback={()=>router.push('/sign-in')}>
            <div className='flex cursor-pointer text-white gap-3 px-3 w-full' >
              <EnterIcon width={24} height={24} />
              <p className=" text-light-2 max-lg:hidden">
                Logout
              </p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  )
}

export default LeftSidebar
import Link from 'next/link';
import Image from 'next/image';
import { OrganizationSwitcher, SignOutButton, SignedIn, UserButton } from '@clerk/nextjs';
import { EnterIcon } from '@radix-ui/react-icons'
import { dark } from '@clerk/themes';
function TopBar() {
  return (
    <nav className="topbar">
      <Link href="/" className='flex items-center gap-1'>
        <Image src="/assets/Logo.svg" alt="logo" width={35} height={35} />
        <div className="text-heading3-bold text-light-1 max-xs:hidden">
          Threads
        </div>
      </Link>
      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className='flex cursor-pointer text-white'>
                <EnterIcon width={28} height={28}/>
              </div>
              </SignOutButton>
          </SignedIn>
        </div>
        <OrganizationSwitcher appearance={{
          baseTheme:dark,
          elements:{
            organizationSwitcherTrigger:  "py-2 px-4"
          }
        }} />
      </div>
    </nav>
  )
}

export default TopBar
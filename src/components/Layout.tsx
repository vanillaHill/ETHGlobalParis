import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { FC, PropsWithChildren, forwardRef, useState } from "react";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';

import RplyLogo from "~/svg/rply-logo.svg"
import clsxm from "@/lib/clsxm";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen-small relative z-[1] grid grid-cols-1 grid-rows-[auto,1fr]">
      <header className="sticky top-0 h-10 z-10 border-b border-[rgba(255,255,255,0.025)] bg-[rgba(255,255,255,0.025)] shadow-2xl backdrop-blur-lg">
        <div className="layout relative flex items-center justify-between">
          <div className="flex items-center gap-4 px-4 py-1 max-md:pl-1">

            <div className="flex flex-[1_0_0] items-start gap-[40rem]">
              {/* Desktop navigation */}
              <NavigationMenu.Root>
                <NavigationMenu.List className="hidden md:flex">
                  <NavigationMenu.Item>
                    <NavigationMenu.Link
                      className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
                      href="http://localhost:3000/app/"
                    >
                      App
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item>
                    <NavigationMenu.Link
                      className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
                      href="http://localhost:3000/app/board/"
                    >
                      Board
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item>
                    <NavigationMenu.Link
                      className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
                      href="http://localhost:3000/app/dao/"
                    >
                      DAO
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                </NavigationMenu.List>
              </NavigationMenu.Root>
            </div>
          </div>
        </div>
      </header>
      <div className="layout py-4 md:py-8">{children}</div>
    </div>
  )
};


type ListItemProps = LinkProps & { className?: string, title: string  }

// eslint-disable-next-line react/display-name
const ListItem = forwardRef<
HTMLAnchorElement,
PropsWithChildren<ListItemProps>
>(({ className, title, children, ...props }, forwardedRef) => {
  return (
    <li>
      <NavigationMenu.Link asChild>
        <Link
          className={clsxm(
            'focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors',
            className
          )}
          {...props}
          ref={forwardedRef}
        >
          <div className="text-violet12 mb-[5px] font-medium leading-[1.2]">{title}</div>
          <p className="text-mauve11 leading-[1.4]">{children}</p>
        </Link>
      </NavigationMenu.Link>
    </li>
  )
});

export default Layout;

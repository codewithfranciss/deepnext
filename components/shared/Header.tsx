// components/shared/Header.tsx
import { SidebarTrigger } from "../ui/sidebar"
import { SubmitButton } from "../submit /SubmitForm"

type HeaderProps = {
  title: string
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-800 bg-card/50 backdrop-blur-sm">
      <div className="flex items-center justify-between px-3 py-3 sm:px-4 sm:py-[18px] lg:px-6">
        <div className="flex items-center gap-2 sm:gap-4">
          <SidebarTrigger className="text-white hover:text-[#7c3aed]" />
          <h1 className="text-lg sm:text-xl font-semibold text-white">{title}</h1>
        </div>
        <SubmitButton />
      </div>
    </header>
  )
}

import Image from "next/image"
import Link from "next/link"
import { DottedSeparator } from "./dotted-separator"
import { Navigation } from "./navigation"
import { WorkspaceSwitcher } from "./workspace-switcher"
import { Projects } from "./projects"

export const Sidebar = () => {
    return (
        <aside className="h-full bg-neutral-100 p-4 w-full">
            <Link href="/">
                <Image 
                    src="/sprint_sync_logo.svg"
                    alt="sprint-sync"
                    width={164}
                    height={48}
                />
            </Link>
            <DottedSeparator className="mb-4" />
            <WorkspaceSwitcher />
            <DottedSeparator className="my-4" />
            <Navigation />
            <DottedSeparator className="my-4" />
            <Projects />
        </aside>
    )
}
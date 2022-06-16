import { ChatTeardropDots } from "phosphor-react"
import { Popover } from '@headlessui/react'
import { WidgetForm } from "./WidgetForm";

<iframe width="560" height="315" src="https://www.youtube.com/embed/fKopy74weus" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

export function Widget() {

    return (
        <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
            <Popover.Panel>
                <WidgetForm />
            </Popover.Panel>
            <Popover.Button className="bg-violet-500 rounded-full px-3 h-12 text-white flex items-center group">
                <ChatTeardropDots className="w-6 h-6 " />

                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-700 ease-linear">
                    <span className="pl-2"> </span>
                    Feedback
                </span>
            </Popover.Button>
        </Popover>
    )
}
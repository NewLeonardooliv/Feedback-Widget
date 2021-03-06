import { ChatTeardropDots } from "phosphor-react";
import { useState } from "react";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "./WidgetForm";

export function Widget() {
    return (
        <Popover className="corner">
            <Popover.Panel>
                <WidgetForm />
            </Popover.Panel>

            <Popover.Button className="bg-red-600 rounded-full px-3 h-12 text-white flex items-center group">
                <ChatTeardropDots className="balloon" />

                <span className="feedback">
                    <span className="feedback2"></span>
                    Feedback
                </span>
            </Popover.Button>
        </Popover>
    );
}

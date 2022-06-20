import { CloseButton } from "../closeButton";

import bugImageUrl from "../../assets/Bug.svg";
import ideaImageUrl from "../../assets/Idea.svg";
import thoughtImageUrl from "../../assets/Thought.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
    BUG: {
        title: "Problemas",
        image: {
            source: bugImageUrl,
            alt: "Imagem inseto",
        },
    },
    IDEA: {
        title: "Ideias",
        image: {
            source: ideaImageUrl,
            alt: "Imagem lâmpada",
        },
    },
    OTHER: {
        title: "Outros",
        image: {
            source: thoughtImageUrl,
            alt: "Imagem balão de pensamento",
        },
    },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    function handleRestartFeedback() {
        setFeedbackType(null);
    }

    return (
        <div className="widgetForm">
            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : (
                <FeedbackContentStep
                    feedbackType={feedbackType}
                    onFeedbackRestartRequested={handleRestartFeedback}
                />
            )}
            <footer className="text-xs text-neutral-100">
                <span>Desenvolvido Por </span>
                <a
                    className="underline underline-offset-1"
                    href="https://github.com/NewLeonardooliv"
                >
                    Leonardo Oliveira
                </a>
            </footer>
        </div>
    );
}

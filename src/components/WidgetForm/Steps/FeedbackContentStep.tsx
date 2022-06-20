import { ArrowLeft, Camera } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../closeButton";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({
    feedbackType,
    onFeedbackRestartRequested,
}: FeedbackContentStepProps) {
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    return (
        <>
            <header>
                <button
                    type="button"
                    className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
                    onClick={onFeedbackRestartRequested}
                >
                    <ArrowLeft weight="bold" className="w-4 h-4" />
                </button>
                <span className="text-xl leading-6 flex items-center gap-2">
                    <img
                        src={feedbackTypeInfo.image.source}
                        alt={feedbackTypeInfo.image.alt}
                        className="w-6 h-6"
                    />
                    {feedbackTypeInfo.title}
                </span>
                <CloseButton />
            </header>
            <form className="my-4 w-full">
                <textarea className="min-w-[304px] w-full min-h-[112px] text-sm text-white border-white bg-transparent rounded-md focus:border-red-700 focus:ring-white focus:ring-1 focus:outline-none resize-none scrollbar-thumb-white scrollbar-track-transparent scrollbar-thin" />
                <footer className="flex gap-2 mt-2">
                    <button
                        type="button"
                        className=" p-2 bg-red-700 rounded-md border-transparent hover:bg-red-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-600 focus:ring-red-700"
                    >
                        <Camera className="w-6 h-6" />
                    </button>
                    <button
                        type="submit"
                        className="p-2 bg-red-700 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-600 focus:ring-red-700 transition-colors"
                    >
                        Enviar Feedback
                    </button>
                </footer>
            </form>
        </>
    );
}

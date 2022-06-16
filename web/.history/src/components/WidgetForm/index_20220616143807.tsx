import { useState } from "react";

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import heartImageUrl from '../../assets/heart.svg';
import musicImageUrl from '../../assets/music.svg';
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

<div>
<video controls width="575" height="240">
    <source src="Midia/CharlieBrownJr-MeuNovoMundo.mp4" type="video/mp4"> <source/>
</video>
</div>

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        },
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        },
    },
    HEART: {
        title: 'Elogio',
        image: {
            source: heartImageUrl,
            alt: 'Imagem de um coração'
        },
    },
    MUSICA: {
        title: 'Sugerir uma música',
        image: {
            source: musicImageUrl,
            alt: 'Imagem de uma nota musical'
        },
    },
};

export type feedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<feedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                    ) : (
                        <FeedbackContentStep
                            feedbackType={feedbackType}
                            onFeedbackRestartRequested={handleRestartFeedback}
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )}
                </>
            )}

            <footer className="p-2 text-xs text-neutral-400">
                Feito com ♥ por <a className="underline underline-offset-1" href="https://github.com/ThiagoMonreal21" >Thiago Monreal</a>
            </footer>
        </div>
    );
}


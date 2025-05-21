import { useRef, useEffect } from "react";

type Props = React.HTMLAttributes<HTMLElement> & {
    onClickAway?: () => void;
    children?: React.ReactElement<HTMLElement>;
};

export default function ClickawayListener({ onClickAway, children }: Props) {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInitializedRef = useRef<boolean>(false);

    useEffect(() => {
        let stack: HTMLElement[] = [];

        const refreshStack = () => {
            stack = [];
            let currentNode = ref.current as HTMLElement;
            const tempStack: HTMLElement[] = [currentNode];

            do {
                const currentItem = tempStack.shift();
                if (
                    currentItem?.hasChildNodes() &&
                    currentItem?.nodeName !== "svg"
                ) {
                    currentItem.childNodes.forEach((element) => {
                        tempStack.push(element as HTMLElement);
                    });
                }

                stack.push(currentItem as HTMLElement);
            } while (tempStack.length > 0);
        };

        const handleClick = (e: MouseEvent) => {
            e.stopPropagation();
            if (!isInitializedRef.current) {
                isInitializedRef.current = true;
                return;
            }

            !stack.includes(e.target as HTMLElement) && onClickAway?.();
        };

        const observer = new MutationObserver((mutationList) => {
            for (const mutation of mutationList) {
                if (mutation.type === "childList") {
                    refreshStack();
                }
            }
        });

        observer.observe(ref.current!, { childList: true, subtree: true });

        refreshStack();
        window.addEventListener("click", handleClick);

        return () => {
            isInitializedRef.current = false;
            window.removeEventListener("click", handleClick);
            observer.disconnect();
        };
    }, []);

    return <div ref={ref}>{children}</div>;
}

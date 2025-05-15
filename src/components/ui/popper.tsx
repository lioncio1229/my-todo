"use client";

import { createPortal } from "react-dom";
import { useRef, useState, useLayoutEffect } from "react";

type Props = {
    open?: boolean;
    anchorEl?: HTMLElement | null;
    children?: React.ReactNode;
    placement?: "top" | "bottom" | "left" | "right";
    placementAlignment?: "start" | "end" | "center";
    placementOffset?: number;
};

export default function Popper({
    open = false,
    anchorEl,
    placement = "right",
    placementAlignment = "end",
    placementOffset = 8,
    children,
}: Props) {
    const ref = useRef<HTMLDivElement>(null);

    const [rect, setRect] = useState({ x: 0, y: 0, width: 0, height: 0 });
    const [popperRect, setPopperRect] = useState({ width: 0, height: 0 });

    let posX = 0;
    let posY = 0;
    if (placement === "top") {
        posX = rect.x;
        posY = rect.y - popperRect.height - placementOffset;
    } else if (placement === "bottom") {
        posX = rect.x;
        posY = rect.y + rect.height + placementOffset;
    } else if (placement === "left") {
        posX = rect.x - popperRect.width - placementOffset;
        posY = rect.y;
    } else if (placement === "right") {
        posX = rect.x + rect.width + placementOffset;
        posY = rect.y;
    }

    const horizontalAlignment = placement === "top" || placement === "bottom";
    const verticalAlignment = placement === "left" || placement === "right";

    if (horizontalAlignment) {
        if (placementAlignment === "center") posX -= popperRect.width / 2;
        else if (placementAlignment === "end")
            posX -= popperRect.width - rect.width;
    } else if (verticalAlignment) {
        if (placementAlignment === "center") posY -= popperRect.height / 2;
        else if (placementAlignment === "end")
            posY -= popperRect.height - rect.height;
    }

    useLayoutEffect(() => {
        if (anchorEl) {
            const rect = anchorEl.getBoundingClientRect();
            setRect({
                x: rect.left,
                y: rect.top,
                width: rect.width,
                height: rect.height,
            });

            if (ref.current) {
                const popperRect = ref.current.getBoundingClientRect();
                setPopperRect({
                    width: popperRect.width,
                    height: popperRect.height,
                });
            }
        }
    }, [anchorEl]);

    return createPortal(
        <div
            ref={ref}
            style={{ position: "absolute", zIndex: 10, left: posX, top: posY }}
        >
            {open && children}
        </div>,
        document.body,
    );
}

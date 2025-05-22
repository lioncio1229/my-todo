"use client";

import { createPortal } from "react-dom";
import { useRef, useLayoutEffect } from "react";

type Placement = "top" | "bottom" | "left" | "right";
type PlacementAlignment = "start" | "end" | "center";

type Props = {
    open?: boolean;
    anchorEl?: HTMLElement | null;
    placement?: Placement;
    placementAlignment?: PlacementAlignment;
    placementOffset?: number;
    popperBoundery?: HTMLElement | null;
    children?: React.ReactNode;
};

export default function Popper({
    open = false,
    anchorEl,
    placement = "bottom",
    placementAlignment = "center",
    placementOffset = 8,
    popperBoundery = null,
    children,
}: Props) {
    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!anchorEl || !ref.current) return;

        let _animationId = 0;
        let _targetRectXTemp = 0;
        let _targetRectYTemp = 0;
        let _targetRect: DOMRect;
        let _popperRect: DOMRect;
        let _viewportHeightTemp = 0;
        let _viewportWidthTemp = 0;
        const overflowOffset = 8;

        const isVerticalAlign = placement === "top" || placement === "bottom";

        const calculatePopperRawPosition = (
            placement: Placement,
            placementAlignment: PlacementAlignment,
            targetRect: DOMRect = _targetRect,
            popperRect: DOMRect = _popperRect,
        ) => {
            let posX = 0;
            let posY = 0;

            if (placement === "top") {
                posX = targetRect.left;
                posY = targetRect.top - popperRect.height - placementOffset;
            } else if (placement === "bottom") {
                posX = targetRect.left;
                posY = targetRect.bottom + placementOffset;
            } else if (placement === "left") {
                posX = targetRect.left - popperRect.width - placementOffset;
                posY = targetRect.top;
            } else if (placement === "right") {
                posX = targetRect.right + placementOffset;
                posY = targetRect.top;
            }

            if (isVerticalAlign) {
                if (placementAlignment === "center")
                    posX -= popperRect.width / 2 - targetRect.width / 2;
                else if (placementAlignment === "end")
                    posX -= popperRect.width - targetRect.width;
            } else {
                if (placementAlignment === "center")
                    posY -= popperRect.height / 2 - targetRect.height / 2;
                else if (placementAlignment === "end")
                    posY -= popperRect.height - targetRect.height;
            }

            return { posX, posY };
        };

        const updatePopperDisplay = (posX: number, posY: number) => {
            const style = ref.current!.style;
            style.left = `${posX}px`;
            style.top = `${posY}px`;
        };

        const calculateOverflow = (posX: number, posY: number) => {
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            const bottomBoundaryExceed = () =>
                posY + _popperRect.height + overflowOffset > window.innerHeight;
            const topBoundaryExceed = () => posY - overflowOffset < 0;
            const rightBoundaryExceed = () =>
                posX + _popperRect.width + overflowOffset > window.innerWidth;
            const leftBoundaryExceed = () => posX - overflowOffset < 0;

            if (bottomBoundaryExceed()) {
                if (placement === "bottom") {
                    posY = calculatePopperRawPosition(
                        "top",
                        placementAlignment,
                    ).posY;
                } else if (placement === "left" || placement === "right") {
                    posY = calculatePopperRawPosition(placement, "center").posY;
                    if (bottomBoundaryExceed()) {
                        posY = calculatePopperRawPosition(
                            placement,
                            "end",
                        ).posY;
                    }
                }
                posY = Math.min(
                    posY,
                    viewportHeight - _popperRect.height - placementOffset,
                );
            } else if (topBoundaryExceed()) {
                if (placement === "top") {
                    posY = calculatePopperRawPosition(
                        "bottom",
                        placementAlignment,
                    ).posY;
                } else if (placement === "left" || placement === "right") {
                    posY = calculatePopperRawPosition(placement, "start").posY;
                }
                posY = Math.min(
                    posY,
                    viewportHeight - _popperRect.height - placementOffset,
                );
            }

            if (rightBoundaryExceed()) {
                if (placement === "right") {
                    posX = calculatePopperRawPosition(
                        "left",
                        placementAlignment,
                    ).posX;
                } else if (placement === "top" || placement === "bottom") {
                    posX = calculatePopperRawPosition(placement, "center").posX;
                    if (rightBoundaryExceed()) {
                        posX = calculatePopperRawPosition(
                            placement,
                            "end",
                        ).posX;
                    }
                }
                posX = Math.max(posX, placementOffset);
            } else if (leftBoundaryExceed()) {
                if (placement === "left") {
                    posX = calculatePopperRawPosition(
                        "right",
                        placementAlignment,
                    ).posX;
                } else if (placement === "top" || placement === "bottom") {
                    posX = calculatePopperRawPosition(placement, "center").posX;
                    if (leftBoundaryExceed()) {
                        posX = calculatePopperRawPosition(
                            placement,
                            "start",
                        ).posX;
                    }
                }
                posX = Math.min(
                    posX,
                    viewportWidth - _popperRect.width - placementOffset,
                );
            }

            return { posX, posY };
        };

        const handleRenderPopper = () => {
            _targetRect = anchorEl.getBoundingClientRect();
            _popperRect = ref.current!.getBoundingClientRect();

            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            if (
                _targetRectXTemp === _targetRect.x &&
                _targetRectYTemp === _targetRect.y &&
                _viewportWidthTemp === viewportWidth &&
                _viewportHeightTemp === viewportHeight
            ) {
                _animationId = requestAnimationFrame(handleRenderPopper);
                return;
            }

            _targetRectXTemp = _targetRect.x;
            _targetRectYTemp = _targetRect.y;
            _viewportWidthTemp = viewportWidth;
            _viewportHeightTemp = viewportHeight;

            let { posX, posY } = calculatePopperRawPosition(
                placement,
                placementAlignment,
            );

            const finalPosition = calculateOverflow(posX, posY);
            updatePopperDisplay(
                finalPosition.posX + window.scrollX,
                finalPosition.posY + window.scrollY,
            );

            _animationId = requestAnimationFrame(handleRenderPopper);
        };

        _animationId = requestAnimationFrame(handleRenderPopper);

        return () => {
            cancelAnimationFrame(_animationId);
        };
    }, [anchorEl]);

    return createPortal(
        <div
            ref={ref}
            style={{ position: "absolute", zIndex: "10", width: "max-content" }}
        >
            {open && children}
        </div>,
        popperBoundery || document.body,
    );
}

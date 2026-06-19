"use client";

import { useEffect, useRef, useState } from "react";

export function LuxuryCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const currentPointRef = useRef({ x: -100, y: -100 });
  const targetPointRef = useRef({ x: -100, y: -100 });
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    if (!finePointer) {
      return;
    }

    const renderCursor = () => {
      const cursor = cursorRef.current;
      const currentPoint = currentPointRef.current;
      const targetPoint = targetPointRef.current;

      currentPoint.x += (targetPoint.x - currentPoint.x) * 0.16;
      currentPoint.y += (targetPoint.y - currentPoint.y) * 0.16;

      if (cursor) {
        cursor.style.transform = `translate3d(${currentPoint.x}px, ${currentPoint.y}px, 0) translate(-50%, -50%)`;
      }

      frameRef.current = window.requestAnimationFrame(renderCursor);
    };

    const moveCursor = (event: PointerEvent) => {
      targetPointRef.current = { x: event.clientX, y: event.clientY };
      setVisible(true);

      const target = event.target;
      const isInteractive =
        target instanceof Element &&
        Boolean(target.closest("a, button, input, textarea, select, [data-cursor='hover']"));
      setActive((current) => (current === isInteractive ? current : isInteractive));

      if (currentPointRef.current.x < 0 && currentPointRef.current.y < 0) {
        currentPointRef.current = { x: event.clientX, y: event.clientY };
      }

      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(renderCursor);
      }
    };

    const hideCursor = () => setVisible(false);

    window.addEventListener("pointermove", moveCursor);
    window.addEventListener("pointerleave", hideCursor);

    return () => {
      window.removeEventListener("pointermove", moveCursor);
      window.removeEventListener("pointerleave", hideCursor);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className={`luxury-cursor ${active ? "is-active" : ""} ${visible ? "is-visible" : ""}`}
    >
      <span className="luxury-cursor__ring" />
      <span className="luxury-cursor__dot" />
    </div>
  );
}

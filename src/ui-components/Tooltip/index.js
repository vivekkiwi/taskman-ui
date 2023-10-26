/* eslint-disable react/prop-types */
import React, {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle
} from "react";
import ReactDOM from "react-dom";
import {
  useOnEscape,
  useRepositionOnResize,
  useOnClickOutside,
  useOnEvents,
  useRepositionOnScroll,
  useIsomorphicLayoutEffect
} from "./hooks";

import styles from "./styles";
import calculatePosition from "./utils";
import "./index.css";

let popupIdCounter = 0;

const getRootPopup = () => {
  let PopupRoot = document.getElementById("popup-root");

  if (PopupRoot === null) {
    PopupRoot = document.createElement("div");
    PopupRoot.setAttribute("id", "popup-root");
    document.body.appendChild(PopupRoot);
  }

  return PopupRoot;
};

const Tooltip = forwardRef(
  (
    {
      trigger = null,
      onOpen = () => {},
      onClose = () => {},
      defaultOpen = false,
      open = undefined,
      disabled = false,
      nested = false,
      closeOnDocumentClick = true,
      repositionOnResize = false,
      repositionOnScroll = false,
      closeOnEscape = true,
      on = ["click"],
      contentStyle = {},
      arrowStyle = {},
      overlay = false,
      overlayStyle = {},
      className = "",
      position = "bottom center",
      arrow = true,
      offsetX = 0,
      offsetY = 0,
      mouseEnterDelay = 100,
      mouseLeaveDelay = 100,
      keepTooltipInside = false,
      children
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(open || defaultOpen);
    const contentRef = useRef(null);
    const arrowRef = useRef(null);
    const focusedElBeforeOpen = useRef(null);
    // eslint-disable-next-line no-plusplus
    const popupId = useRef(`popup-${++popupIdCounter}`);
    const timeOut = useRef(0);
    const triggerRef = trigger();

    // set Position
    const setPosition = () => {
      if (!triggerRef?.current || !contentRef?.current) return; /// show error as one of ref is undefined
      const triggerBoundary = triggerRef.current.getBoundingClientRect();
      const contentBoundary = contentRef.current.getBoundingClientRect();
      const cords = calculatePosition(
        triggerBoundary,
        contentBoundary,
        position,
        arrow,
        {
          offsetX,
          offsetY
        },
        keepTooltipInside
      );

      contentRef.current.style.top = `${cords.top + window.scrollY}px`;
      contentRef.current.style.left = `${cords.left + window.scrollX}px`;
      if (arrow && !!arrowRef.current) {
        arrowRef.current.style.transform = cords.transform;
        arrowRef.current.style.setProperty("-ms-transform", cords.transform);
        arrowRef.current.style.setProperty(
          "-webkit-transform",
          cords.transform
        );
        arrowRef.current.style.top =
          arrowStyle.top?.toString() || cords.arrowTop;
        arrowRef.current.style.left =
          arrowStyle.left?.toString() || cords.arrowLeft;
      }
    };
    const openPopup = (event) => {
      if (isOpen || disabled) return;
      setIsOpen(true);
      setTimeout(() => onOpen(event), 0);
    };
    const closePopup = (event) => {
      if (!isOpen || disabled) {
        return;
      }
      setIsOpen(false);
      setTimeout(() => onClose(event), 0);
    };
    const togglePopup = (event) => {
      event?.stopPropagation();
      if (!isOpen) openPopup(event);
      else closePopup(event);
    };
    const onMouseEnter = (event) => {
      clearTimeout(timeOut.current);
      timeOut.current = setTimeout(() => openPopup(event), mouseEnterDelay);
    };
    const onMouseLeave = (event) => {
      clearTimeout(timeOut.current);
      timeOut.current = setTimeout(() => closePopup(event), mouseLeaveDelay);
    };
    const focusContentOnOpen = () => {
      const focusableEls = contentRef?.current?.querySelectorAll(
        'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'
      );
      const firstEl = Array.prototype.slice.call(focusableEls)[0];
      firstEl?.focus();
    };

    useOnEvents(triggerRef, on, popupId.current, {
      togglePopup,
      onMouseEnter,
      onMouseLeave
    });

    useIsomorphicLayoutEffect(() => {
      if (isOpen) {
        focusedElBeforeOpen.current = document.activeElement;
        setPosition();
        focusContentOnOpen(); // for accessibility
      }
      return () => {
        clearTimeout(timeOut.current);
      };
    }, [isOpen]);
    // for uncontrolled popup we need to sync isOpen with open prop
    useEffect(() => {
      if (typeof open === "boolean") {
        if (open) openPopup();
        else closePopup();
      }
    }, [open, disabled]);
    useImperativeHandle(ref, () => ({
      open: () => {
        openPopup();
      },
      close: () => {
        closePopup();
      },
      toggle: () => {
        togglePopup();
      }
    }));
    // hooks
    useOnEscape(closePopup, closeOnEscape); // can be optimized if we disabled for hover
    useRepositionOnResize(setPosition, repositionOnResize);
    useRepositionOnScroll(setPosition, repositionOnScroll);
    useOnClickOutside(
      triggerRef ? [contentRef, triggerRef] : [contentRef],
      closePopup,
      closeOnDocumentClick && !nested
    );
    const addWarperAction = () => {
      const popupContentStyle = styles.popupContent.tooltip;
      const childrenElementProps = {
        className: `popup-content ${
          isOpen ? "tooltip-enter" : "tooltip-end"
        } ${className}`,
        style: {
          ...popupContentStyle,
          ...contentStyle,
          pointerEvents: "auto" // closeOnDocumentClick && nested ? 'auto' : 'none',
        },
        ref: contentRef,
        onClick: (e) => {
          e.stopPropagation();
        }
      };
      if (on.indexOf("hover") >= 0) {
        childrenElementProps.onMouseEnter = onMouseEnter;
        childrenElementProps.onMouseLeave = onMouseLeave;
      }
      return childrenElementProps;
    };
    const renderContent = () => {
      return (
        <div {...addWarperAction()} key="C" role="tooltip" id={popupId.current}>
          {arrow && (
            <div ref={arrowRef} style={styles.popupArrow}>
              <svg
                data-testid="arrow"
                className={`popup-arrow ${
                  className !== ""
                    ? className
                        .split(" ")
                        .map((c) => `${c}-arrow`)
                        .join(" ")
                    : ""
                }`}
                viewBox="0 0 32 12"
                style={{
                  position: "absolute",
                  ...arrowStyle
                }}
              >
                <path d="M16 0l16 16H0z" fill="currentcolor" />
              </svg>
            </div>
          )}
          {children && typeof children === "function"
            ? children(closePopup, isOpen)
            : children}
        </div>
      );
    };
    const ovStyle = styles.overlay.tooltip;
    const content = [
      overlay && (
        <div
          key="O"
          data-testid="overlay"
          data-popup="tooltip"
          className={`popup-overlay ${
            className !== ""
              ? className
                  .split(" ")
                  .map((c) => `${c}-overlay`)
                  .join(" ")
              : ""
          }`}
          style={{
            ...ovStyle,
            ...overlayStyle,
            pointerEvents: (closeOnDocumentClick && nested) || "none"
          }}
          onClick={closeOnDocumentClick && nested ? closePopup : undefined}
          tabIndex={-1}
        />
      ),
      renderContent()
    ];

    return isOpen && ReactDOM.createPortal(content, getRootPopup());
  }
);

export default Tooltip;

"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useReducer, useRef } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
export default function Modal({ children }) {
  const modalRef = useRef(null);
  const router = useRouter();
  const onHide = () => {
    router.back();
  };
  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current.showModal();
    }
  }, []);
  return createPortal(
    <dialog
      ref={modalRef}
      onClose={onHide}
      className="shadow-teal-700 shadow-md border border-teal-600 flex flex-col p-2 rounded-md "
    >
      <span onClick={onHide} className="flex justify-end cursor-pointer">
        <Image src="/xmark.svg" alt="close" width={30} height={30} />
      </span>

      {children}
    </dialog>,
    document.getElementById("modal-root-content")
  );
}

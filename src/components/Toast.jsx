import React from "react";

const ToastManage = {
    success:{
        render(content, closeToast) {
            return (
                <div className="toast-success flex flex-row justify-between">
                    <div className="flex flex-row items-center space-x-[24px]">
                        <div className="text-secondary-500 text-[48px]">
                        <i class="fa-solid fa-circle-check"></i>
                        </div>
                        <div>
                            <p className="h3 text-neutral-500">Success</p>
                            <p className="body">{content}</p>
                        </div>
                    </div>
                    <button onClick={() => closeToast({ display: false })} className="text-neutral-500">
                    <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
            )
        }
    },
    error:{
        render(content, closeToast) {
            return (
                <div className="toast-error flex flex-row justify-between">
                    <div className="flex flex-row items-center space-x-[24px]">
                        <div className="text-error-500 text-[48px]">
                        <i class="fa-solid fa-circle-exclamation"></i>
                        </div>
                        <div>
                            <p className="h3 text-neutral-500">Error</p>
                            <p className="body">{content}</p>
                        </div>
                    </div>
                    <button onClick={() => closeToast({ display: false })} className="text-neutral-500">
                    <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
            )
        }
    },
    warning:{
        render(content, closeToast) {
            return (
                <div className="toast-warning flex flex-row justify-between">
                    <div className="flex flex-row items-center space-x-[24px]">
                        <div className="text-warning-500 text-[48px]">
                        <i class="fa-solid fa-circle-exclamation"></i>
                        </div>
                        <div>
                            <p className="h3 text-neutral-500">Warning</p>
                            <p className="body">{content}</p>
                        </div>
                    </div>
                    <button onClick={() => closeToast({ display: false })} className="text-neutral-500">
                    <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
            )
        }
    },
    info:{
        render(content, closeToast) {
            return (
                <div className="toast-info flex flex-row justify-between">
                    <div className="flex flex-row items-center space-x-[24px]">
                        <div className="text-primary-500 text-[48px]">
                        <i class="fa-solid fa-circle-exclamation"></i>
                        </div>
                        <div>
                            <p className="h3 text-neutral-500">Info</p>
                            <p className="body">{content}</p>
                        </div>
                    </div>
                    <button onClick={() => closeToast({ display: false })} className="text-neutral-500">
                    <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
            )
        }
    }
};

function Toast({ type, content, closeToast }) {
    setTimeout(() => closeToast({ display: false }), 2000)
    return (
        <div className="fixed z-10 top-24 w-[420px] animate-slideIn">
            {ToastManage[type].render(content, closeToast)}
        </div>
    )
}

export default Toast;
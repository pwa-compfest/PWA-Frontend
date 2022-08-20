import React from "react";

const ToastManage = {
    success:{
        render(content, closeToast) {
            return (
                <div className="toast-success flex flex-row justify-between">
                    <div className="flex flex-row items-center space-x-[24px]">
                        <div className="text-secondary-500 text-[48px]">
                        <i className="fa-solid fa-circle-check"></i>
                        </div>
                        <div>
                            <p className="h3 text-neutral-500">Success</p>
                            <p className="body">{content}</p>
                        </div>
                    </div>
                    <button onClick={() => closeToast({ display: false })} className="text-neutral-500">
                    <i className="fa-solid fa-xmark"></i>
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
                        <i className="fa-solid fa-circle-exclamation"></i>
                        </div>
                        <div>
                            <p className="h3 text-neutral-500">Error</p>
                            <p className="body">{content}</p>
                        </div>
                    </div>
                    <button onClick={() => closeToast({ display: false })} className="text-neutral-500">
                    <i className="fa-solid fa-xmark"></i>
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
                        <i className="fa-solid fa-circle-exclamation"></i>
                        </div>
                        <div>
                            <p className="h3 text-neutral-500">Warning</p>
                            <p className="body">{content}</p>
                        </div>
                    </div>
                    <button onClick={() => closeToast({ display: false })} className="text-neutral-500">
                    <i className="fa-solid fa-xmark"></i>
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
                        <i className="fa-solid fa-circle-exclamation"></i>
                        </div>
                        <div>
                            <p className="h3 text-neutral-500">Info</p>
                            <p className="body">{content}</p>
                        </div>
                    </div>
                    <button onClick={() => closeToast({ display: false })} className="text-neutral-500">
                    <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
            )
        }
    }
};

function Toast({ type, content, closeToast }) {
    setTimeout(() => closeToast({ display: false }), 2000)
    return (
        <div className="w-screen z-10 h-screen fixed top-0 right-0">
            <div className="flex justify-center mt-[100px]">
                <div className="sm:w-[420px] w-[360px] animate-slideIn">
                    {ToastManage[type].render(content, closeToast)}
                </div>
            </div>
        </div>
    )
}

export default Toast;
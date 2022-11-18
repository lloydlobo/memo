import React from "react";

export function ToastTopStart(props: { alert1: any; alert2: any }) {
    let { alert1, alert2 } = props;
    return (
        <div className="toast-start toast toast-top py-24">
            {alert1 !== "" ? (
                <div className="alert alert-info">
                    <div>
                        <span>{alert1}</span>
                    </div>
                </div>
            ) : (
                ""
            )}
            {alert2 !== "" ? (
                <div className="alert alert-success">
                    <div>
                        <span>{alert2}</span>
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}

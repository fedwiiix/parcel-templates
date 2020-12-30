import React from "react";

export default function Button({onClick, children}){

    return <button type="submit" onClick={onClick}>{children}</button>
}
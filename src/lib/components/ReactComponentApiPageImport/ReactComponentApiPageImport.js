/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";


export const displayName = "RCDE-ReactComponentApiPageImport";

const ReactComponentApiPageImport = React.forwardRef(function (props, ref) {
    const {
        children,
    } = props;
    return children;
});

ReactComponentApiPageImport.displayName = displayName;

export default ReactComponentApiPageImport;

/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";


export const displayName = "RCDE-ReactComponentApiPageFooter";

const ReactComponentApiPageFooter = React.forwardRef(function (props, ref) {
    const {
        children,
    } = props;
    return children;
});

ReactComponentApiPageFooter.displayName = displayName;

export default ReactComponentApiPageFooter;

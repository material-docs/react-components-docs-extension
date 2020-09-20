/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";


export const displayName = "RCDE-ReactComponentApiPageSummary";

const ReactComponentApiPageSummary = React.forwardRef(function (props, ref) {
    const {
        children,
    } = props;
    return children;
});

ReactComponentApiPageSummary.displayName = displayName;

export default ReactComponentApiPageSummary;

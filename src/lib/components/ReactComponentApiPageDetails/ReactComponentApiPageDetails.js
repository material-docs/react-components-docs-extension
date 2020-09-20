/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import withLang from "@material-docs/core/HOCs/withLang";

export const displayName = "RCDE-ReactComponentApiPageDetails";

const ReactComponentApiPageDetails = React.forwardRef(function (props, ref) {
    const {
        children,
    } = props;
    return children;
});

ReactComponentApiPageDetails.displayName = displayName;

export default ReactComponentApiPageDetails;
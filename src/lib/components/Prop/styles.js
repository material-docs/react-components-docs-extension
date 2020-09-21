/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import {createStyles} from "@material-ui/styles";
import {grey, purple} from "@material-ui/core/colors";

export const styles = theme => createStyles( {
    typeLabel: {
        fontFamily: "monospace",
        color: purple[700],
        fontSize: 15
    },
    nameLabel: {
        fontFamily: "monospace",
        fontSize: 15
    },
    defaultLabel: {
        fontFamily: "monospace",
        fontSize: 15,
        textDecoration: `underline dotted ${grey[500]}`
    },
})
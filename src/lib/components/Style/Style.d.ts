/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020. 
 */

import {Containerable} from "@material-docs/core";

export const displayName: string;

export interface StyleProps
    extends Containerable {
    /**
     * name - name of the style rule.
     * @type string | any
     */
    name: string | any;
    /**
     * global - global name of the style rule.
     * @type string | any
     */
    global?: string | any;
}

export default function Style(props: StyleProps): JSX.Element;

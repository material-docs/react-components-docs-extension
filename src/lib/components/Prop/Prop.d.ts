/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020. 
 */

import {Containerable, Stylable} from "@material-docs/core";

export const displayName: string;

export interface PropProps
    extends Containerable, Stylable {
    /**
     * name - name of the prop.
     * @type string | any
     */
    name: string | any;
    /**
     * type - type of the prop.
     * @type string | any
     */
    type?: string | any;
    /**
     * def - default value of the prop.
     * @type string | any
     */
    def?: string | any;
}

export default function Prop(props: PropProps): JSX.Element;

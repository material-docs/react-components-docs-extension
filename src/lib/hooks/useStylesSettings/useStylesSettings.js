/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

export const StylesSettingsContext = React.createContext({
    enableGlobal: true,
    enableDescription: true,
});

const useStylesSettings = () => React.useContext(StylesSettingsContext);
export default useStylesSettings;

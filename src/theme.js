import {
  teamsDarkTheme,
  teamsTheme,
  mergeThemes,
} from "@fluentui/react-northstar";

function lightScheme(colors) {
  return {
    backgroundPressed: colors.brand[800],
    foregroundFocus3: colors.brand[200],
    foregroundPressed1: colors.white,
    backgroundHover1: colors.brand[50],
    foregroundHover2: colors.brand[200],
    borderPressed: colors.brand[300],
    foreground1: colors.brand[600],
    backgroundFocus2: colors.brand[900],
    backgroundFocus3: colors.brand[1000],
    background4: colors.brand[800],
    background6: colors.brand[600],
    shadowHover: colors.black,
    foregroundHover1: colors.white,
    borderDisabled: colors.grey[150],
    foreground2: colors.brand[700],
    borderActive: colors.grey[200],
    borderActive2: colors.brand[300],
    foregroundFocus2: colors.brand[700],
    background2: colors.brand[900],
    borderActive1: colors.brand[200],
    foregroundFocus4: colors.white,
    background: colors.brand[600],
    border1: colors.brand[200],
    backgroundHover: colors.brand[700],
    foregroundHover: colors.brand[600],
    border2: colors.brand[300],
    background3: colors.brand[1000],
    foregroundActive2: colors.brand[200],
    backgroundHover2: colors.brand[100],
    foregroundFocus: colors.brand[600],
    foreground: colors.brand[600],
    foregroundActive: colors.brand[600],
    borderFocus1: colors.brand[600],
    foregroundActive1: colors.brand[600],
    background1: colors.brand[100],
    backgroundFocus: colors.brand[600],
    foregroundDisabled: colors.grey[250],
    backgroundActive1: colors.brand[600],
    backgroundActive: colors.brand[600],
    borderFocus: colors.black,
    foreground5: colors.white,
    foreground3: colors.brand[200],
    backgroundDisabled1: colors.grey[150],
    border: colors.grey[200],
    shadow: colors.black,
    background5: colors.brand[100],
    backgroundDisabled: colors.grey[150],
    foregroundPressed: colors.brand[800],
    foregroundDisabled1: colors.grey[250],
    foregroundFocus1: colors.brand[600],
    foreground4: colors.white,
    borderHover: colors.brand[300],
    backgroundFocus1: colors.brand[100],
    borderFocusWithin: colors.white,
  };
}

function darkScheme(colors) {
  return {
    backgroundPressed: colors.brand[700],
    foregroundFocus3: colors.brand[200],
    foregroundPressed1: colors.white,
    backgroundHover1: colors.brand[900],
    foregroundHover2: colors.brand[200],
    borderPressed: colors.brand[800],
    foreground1: colors.brand[400],
    backgroundFocus2: colors.brand[900],
    backgroundFocus3: colors.brand[1000],
    background4: colors.grey[650],
    background6: colors.brand[450],
    shadowHover: colors.black,
    foregroundHover1: colors.white,
    borderDisabled: colors.grey[550],
    foreground2: colors.brand[400],
    borderActive: colors.grey[450],
    borderActive2: colors.brand[800],
    foregroundFocus2: colors.brand[400],
    background2: colors.brand[900],
    borderActive1: colors.brand[800],
    foregroundFocus4: colors.white,
    background: colors.brand[600],
    border1: colors.brand[800],
    backgroundHover: colors.brand[500],
    foregroundHover: colors.brand[400],
    border2: colors.brand[800],
    background3: colors.brand[1000],
    foregroundActive2: colors.brand[200],
    backgroundHover2: colors.brand[900],
    foregroundFocus: colors.brand[400],
    foreground: colors.brand[400],
    foregroundActive: colors.brand[400],
    borderFocus1: colors.brand[400],
    foregroundActive1: colors.brand[400],
    backgroundDisabled2: colors.grey[650],
    background1: colors.brand[900],
    backgroundFocus: colors.brand[600],
    foregroundDisabled: colors.grey[450],
    backgroundActive1: colors.brand[400],
    backgroundActive: colors.brand[400],
    borderFocus: colors.white,
    foreground5: colors.grey[750],
    foreground3: colors.brand[200],
    backgroundDisabled1: colors.grey[550],
    border: colors.grey[450],
    shadow: colors.black,
    background5: colors.brand[900],
    backgroundDisabled: colors.grey[550],
    foregroundPressed: colors.brand[200],
    foregroundDisabled1: colors.grey[450],
    foregroundFocus1: colors.brand[400],
    foreground4: colors.white,
    borderHover: colors.brand[600],
    backgroundFocus1: colors.brand[900],
    borderFocusWithin: colors.black,
  };
}

function customTheme(v, color, darkp) {
  let brand = v.categoryColors[color];
  let newColors = { ...v.colors, brand: brand };
  let schemeFn = darkp ? darkScheme : lightScheme;
  return {
    siteVariables: {
      colorScheme: { brand: schemeFn(newColors) },
      colors: { brand: brand },
    },
  };
}

function darkTheme(color) {
  return mergeThemes(
    teamsDarkTheme,
    customTheme(teamsDarkTheme.siteVariables, color, true)
  );
}

function lightTheme(color) {
  return mergeThemes(
    teamsTheme,
    customTheme(teamsTheme.siteVariables, color, false)
  );
}

const createTheme = { dark: darkTheme, light: lightTheme };

const siteTheme = {
  dark: createTheme.dark("green"),
  light: createTheme.light("green"),
};

function getTheme(darkp) {
  return siteTheme[darkp ? "dark" : "light"];
}

const MODULE = { create: createTheme, site: siteTheme, get: getTheme };

export default MODULE
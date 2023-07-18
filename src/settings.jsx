import useLocalStorage from "./useLocalStorage.jsx";

const useLocalFallback = (key, fallback) => {
  var [local, setLocal] = useLocalStorage(key);
  return [local === null ? fallback : local, setLocal];
};

export var useLocalHistory = () => useLocalFallback("history", "[]");
export var useLocalAppearance = () => useLocalFallback("appearance", "default");
export var useLocalTitle = () => useLocalStorage("title");
export var useLocalIcon = () => useLocalStorage("icon");
export var useLocalCustomStyle = () => useLocalFallback("customStyle", "");
export var useLocalHome = () => useLocalFallback("homeURL", "cobalt://home");
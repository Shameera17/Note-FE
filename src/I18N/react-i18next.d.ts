import "i18next";

import { defaultNS, resources } from "./i18n";
declare module "react-i18next" {
  interface Resources {
    defaultNS: typeof defaultNS;
    resources: typeof resources["en"];
  }
}
declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: defaultNS;
    resources: resources["en"];
  }
}

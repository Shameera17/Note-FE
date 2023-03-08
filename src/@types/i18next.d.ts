import { resources } from "../I18N/i18n";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: typeof resources["en"];
  }
}

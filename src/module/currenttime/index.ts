import { defineCustomElement } from "vue";
import CurrentTime from "./index.ce.vue";

const CurrentTimeElement = defineCustomElement(CurrentTime);

export const register = (tagName = "wbcp-current-time") =>
  window.customElements.define(tagName, CurrentTimeElement);

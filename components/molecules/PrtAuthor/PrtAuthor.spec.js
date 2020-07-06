import { shallowMount } from "@vue/test-utils";
import PrtAuthor from "./PrtAuthor.vue";

describe("PrtAuthor.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(PrtAuthor);
    expect(component.contains(".prt-author")).toBe(true);
  });
});


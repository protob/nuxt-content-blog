import { shallowMount } from "@vue/test-utils";
import PrtNav from "./PrtNav.vue";

describe("PrtNav.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(PrtNav);
    expect(component.contains(".prt-nav")).toBe(true);
  });
});


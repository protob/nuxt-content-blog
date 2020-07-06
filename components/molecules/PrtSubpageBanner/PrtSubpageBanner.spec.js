import { shallowMount } from "@vue/test-utils";
import PrtSubpageBanner from "./PrtSubpageBanner.vue";

describe("PrtSubpageBanner.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(PrtSubpageBanner);
    expect(component.contains(".prt-subpage-banner")).toBe(true);
  });
});


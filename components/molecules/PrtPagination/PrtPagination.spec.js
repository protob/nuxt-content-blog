import { shallowMount } from "@vue/test-utils";
import PrtPagination from "./PrtPagination.vue";

describe("PrtPagination.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(PrtPagination);
    expect(component.contains(".prt-pagination")).toBe(true);
  });
});


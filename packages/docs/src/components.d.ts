// components.d.ts
declare module 'vue' {
  export interface GlobalComponents {
    GButton: typeof import('@groggy-ui/vue')['GButton'];
    GCheckbox: typeof import('@groggy-ui/vue')['GCheckbox'];
    GCard: typeof import('@groggy-ui/vue')['GCard'];
  }
}

export { };


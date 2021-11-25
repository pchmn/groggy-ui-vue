// components.d.ts
declare module 'vue' {
  export interface GlobalComponents {
    GButton: typeof import('@groggy-ui/vue')['GButton'];
    GCheckbox: typeof import('@groggy-ui/vue')['GCheckbox'];
    GRadio: typeof import('@groggy-ui/vue')['GRadio'];
    GCard: typeof import('@groggy-ui/vue')['GCard'];
    GIcon: typeof import('@groggy-ui/vue')['GIcon'];
    GIconButton: typeof import('@groggy-ui/vue')['GIconButton'];
    GSpinner: typeof import('@groggy-ui/vue')['GSpinner'];
    GInput: typeof import('@groggy-ui/vue')['GInput'];
    GSwitch: typeof import('@groggy-ui/vue')['GSwitch'];
    GSelect: typeof import('@groggy-ui/vue')['GSelect'];
  }
}

export {};

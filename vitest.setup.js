import { config } from '@vue/test-utils'
import { vi } from 'vitest'

config.global.mocks = {
  $t: (msg) => msg,
  $route: {},
  $router: {
    push: vi.fn(),
  },
}

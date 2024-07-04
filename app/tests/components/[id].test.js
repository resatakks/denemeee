import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useRoute, useRouter } from 'vue-router'
import { vi } from 'vitest'
import JobDetailPage from '../../pages/jobdetail/[id].vue'
import Breadcrumb from '../../pages/jobdetail/breadCrumb.vue'
import TopCard from '../../pages/jobdetail/topCard.vue'
import JobDetailContent from '../../pages/jobdetail/jobDetailContent.vue'
import CandidateCriteria from '../../pages/jobdetail/candidateCriteria.vue'
import SeoField from '../../pages/jobdetail/seoField.vue'

vi.mock('vue-router', async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    useRoute: vi.fn(),
    useRouter: vi.fn(),
  }
})

vi.mock('primevue/button', () => ({
  default: {
    template: '<button></button>',
  },
}))

describe('JobDetailPage.vue', () => {
  beforeEach(() => {
    useRoute.mockReturnValue({
      params: { id: '1' },
    })
    useRouter.mockReturnValue({
      push: vi.fn(),
    })
  })

  test('renders job detail page correctly', async () => {
    const jobDetailData = {
      id: '1',
      companyLocation: 'Istanbul',
      positionName: 'Software Engineer',
      companyName: 'Tech Company',
      imageUrl: 'https://via.placeholder.com/65',
      workModel: 'Remote',
      workType: 'Full-Time',
      createdDate: '2024-07-01',
      generalQualifications: 'Some qualifications',
      positionDescription: 'Some description',
      positionLevel: 'Senior',
      department: 'Engineering',
      applicationNumber: '123',
      experience: '3 years',
      educationLevel: 'Bachelor',
      militaryService: 'Completed',
      driverLicense: 'B',
    }

    const wrapper = mount(JobDetailPage, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              jobDetail: {
                jobDetailLoading: false,
                jobDetailData,
              },
            },
            stubActions: false,
          }),
        ],
        stubs: {
          Breadcrumb,
          TopCard,
          JobDetailContent,
          CandidateCriteria,
          SeoField,
          Button: true,
        },
      },
    })

    await wrapper.vm.$nextTick()

    expect(wrapper.findComponent(Breadcrumb).exists()).toBe(true)
    expect(wrapper.findComponent(TopCard).exists()).toBe(true)
    expect(wrapper.findComponent(JobDetailContent).exists()).toBe(true)
    expect(wrapper.findComponent(CandidateCriteria).exists()).toBe(true)
    expect(wrapper.findComponent(SeoField).exists()).toBe(true)
  })

  test('renders correctly when loading', async () => {
    const wrapper = mount(JobDetailPage, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              jobDetail: {
                jobDetailLoading: true,
                jobDetailData: null,
              },
            },
            stubActions: false,
          }),
        ],
        stubs: {
          Breadcrumb,
          TopCard,
          JobDetailContent,
          CandidateCriteria,
          SeoField,
          Button: true,
        },
      },
    })

    await wrapper.vm.$nextTick()

    expect(wrapper.findComponent(Breadcrumb).exists()).toBe(false)
    expect(wrapper.findComponent(TopCard).exists()).toBe(false)
    expect(wrapper.findComponent(JobDetailContent).exists()).toBe(false)
    expect(wrapper.findComponent(CandidateCriteria).exists()).toBe(false)
    expect(wrapper.findComponent(SeoField).exists()).toBe(false)
  })
})

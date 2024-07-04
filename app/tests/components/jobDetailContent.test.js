import { mount } from '@vue/test-utils'
import JobDetailContent from '../../pages/jobdetail/jobDetailContent.vue'

describe('JobDetailContent.vue', () => {
  const jobDetailData = {
    generalQualifications: 'Some qualifications',
    positionDescription: 'Some description',
  }

  test('renders job detail content correctly', () => {
    const wrapper = mount(JobDetailContent, {
      props: {
        jobDetailData,
      },
    })

    expect(wrapper.find('h2.card-title').text()).toBe(
      'GENEL NİTELİKLER VE İŞ TANIMI'
    )

    const generalQualificationsList = wrapper.findAll(
      '.job-detail-qualifications .list:nth-of-type(1) li'
    )
    generalQualificationsList.forEach((item) => {
      expect(item.text()).toBe(jobDetailData.generalQualifications)
    })

    const positionDescriptionList = wrapper.findAll(
      '.job-detail-qualifications .list:nth-of-type(2) li'
    )
    positionDescriptionList.forEach((item) => {
      expect(item.text()).toBe(jobDetailData.positionDescription)
    })

    expect(wrapper.find('.job-detail-button-detail').text()).toBe(
      'İlanı Şikayet Et'
    )
  })
})

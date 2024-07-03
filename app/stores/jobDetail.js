import { defineStore } from 'pinia'
import axios from 'axios'

export const useJobDetail = defineStore('jobDetail', {
  state: () => ({
    jobDetailLoading: false,
    jobDetailData: null,
  }),
  actions: {
    async getJobDetail(jobId) {
      this.jobDetailLoading = true
      try {
        const response = await axios.get(
          `https://667fcc0f56c2c76b495a24ea.mockapi.io/api/kariyertask/job-detail/${jobId}`
        )
        this.jobDetailData = response.data
        this.jobDetailLoading = false
      } catch (error) {
        this.jobDetailLoading = false
        console.error('Error fetching job detail', error)
      }
    },
  },
})

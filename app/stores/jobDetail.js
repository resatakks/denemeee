import { defineStore } from 'pinia'
import axios from 'axios'

export const useJobDetail = defineStore('jobDetail', {
  state: () => ({
    jobDetailLoading: false,
    jobDetailData: null,
    error: null,
  }),
  actions: {
    async getJobDetail(jobId) {
      this.jobDetailLoading = true
      this.error = null
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/job-detail/${jobId}`
        )
        this.jobDetailData = response.data
        this.jobDetailLoading = false
      } catch (error) {
        this.jobDetailLoading = false
        this.error = 'Error fetching job detail'
        console.error('Error fetching job detail', error)
      }
    },
  },
})

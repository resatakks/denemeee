import { defineStore } from 'pinia'
import axios from 'axios'

export const usejobList = defineStore('jobList', {
  state: () => ({
    jobListLoading: false,
    jobListData: [],
    filteredJobListData: [],
    paginatedJobListData: [],
    currentPage: 1,
    totalItems: 0,
    itemsPerPage: 10,
    searchTerm: '',
    citySearchTerm: '',
  }),
  actions: {
    async getJobList() {
      this.jobListLoading = true
      try {
        const response = await axios.get(
          'https://667fcc0f56c2c76b495a24ea.mockapi.io/api/kariyertask/job-list'
        )
        this.jobListData = response.data
        this.filterJobList()
        this.jobListLoading = false
      } catch (error) {
        this.jobListLoading = false
        console.error('Error fetching job list', error)
      }
    },
    filterJobList() {
      this.filteredJobListData = this.jobListData.filter((job) => {
        const searchTermLower = this.searchTerm.toLowerCase()
        const citySearchTermLower = this.citySearchTerm.toLowerCase()
        return (
          (job.positionName.toLowerCase().includes(searchTermLower) ||
            job.companyName.toLowerCase().includes(searchTermLower)) &&
          job.cityName.toLowerCase().includes(citySearchTermLower)
        )
      })
      this.totalItems = this.filteredJobListData.length
      this.paginate()
    },
    paginate() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      this.paginatedJobListData = this.filteredJobListData.slice(start, end)
    },
    onPageChange(event) {
      this.currentPage = event.page + 1
      this.paginate()
    },
    onSearch() {
      this.currentPage = 1
      this.filterJobList()
      this.paginate()
    },
  },
})

// Somewhere in your app
// import { apiStatus } from '@/constants/appConstants'
// console.log(apiStatus.PENDING)

export const apiStatus = {
  IDLE: Symbol('IDLE'),
  PENDING: Symbol('PENDING'),
  SUCCESS: Symbol('SUCCESS'),
  ERROR: Symbol('ERROR')
}

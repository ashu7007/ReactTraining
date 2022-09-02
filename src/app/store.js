import { configureStore } from '@reduxjs/toolkit'
import { formData } from '../reducer/reducer'

export default configureStore({
  reducer: {
    registerUser :formData
  }
})
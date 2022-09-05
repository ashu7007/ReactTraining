import { configureStore } from '@reduxjs/toolkit'
import formDataSlice  from '../reducer/reducer'

export default configureStore({
  reducer: {
    formValue : formDataSlice
  }
})
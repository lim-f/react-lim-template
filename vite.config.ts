/*
 * @Author: chenzhongsheng
 * @Date: 2024-07-15 17:51:04
 * @Description: Coding something
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactLim from 'react-lim/vite'

export default defineConfig({
  plugins: [reactLim(), react()],
})

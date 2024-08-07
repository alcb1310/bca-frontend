import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	preview: {
		port: 5143,
		strictPort: true,
	},
	server: {
		port: 5143,
		strictPort: true,
		host: true,
		origin: "http://0.0.0.0:5143",
	}
})

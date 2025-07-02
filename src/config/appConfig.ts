// Environment configuration
export const config = {
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
    key: import.meta.env.VITE_API_KEY || '',
  },
  app: {
    name: import.meta.env.VITE_APP_NAME || 'My App',
    debugMode: import.meta.env.VITE_DEBUG_MODE === 'true',
  },
}

// Helper function to check if we're in development
export const isDevelopment = import.meta.env.DEV
export const isProduction = import.meta.env.PROD

// API helper functions
export const createApiUrl = (endpoint: string): string => {
  return `${config.api.baseUrl}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`
}

export const getApiHeaders = (): Record<string, string> => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }

  if (config.api.key) {
    headers['Authorization'] = `Bearer ${config.api.key}`
  }

  return headers
}

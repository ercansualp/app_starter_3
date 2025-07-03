export default defineNuxtRouteMiddleware((to) => {
  // Sadece client-side'da çalışsın
  if (process.server) return

  // Onboarding sayfalarında değilse kontrol et
  if (!to.path.startsWith('/onboarding/')) {
    const onboardingCompleted = localStorage.getItem('onboardingCompleted')
    const selectedCurrency = localStorage.getItem('selectedCurrency')
    const paymentInfo = localStorage.getItem('paymentInfo')
    
    // Onboarding tamamlanmamışsa
    if (!onboardingCompleted) {
      // Para birimi seçilmemişse currency sayfasına yönlendir
      if (!selectedCurrency) {
        return navigateTo('/onboarding/currency')
      }
      // Ödeme bilgileri girilmemişse payment sayfasına yönlendir
      if (!paymentInfo) {
        return navigateTo('/onboarding/payment')
      }
      // Para birimi ve ödeme tamam ama proje seçimi yapılmamışsa proje seçim sayfasına yönlendir
      return navigateTo('/onboarding/project-selection')
    }
  }
  
  // Onboarding sayfalarındaysa ve onboarding tamamlanmışsa ana sayfaya yönlendir
  if (to.path.startsWith('/onboarding/')) {
    const onboardingCompleted = localStorage.getItem('onboardingCompleted')
    if (onboardingCompleted) {
      return navigateTo('/')
    }
  }
})
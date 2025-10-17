import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App)

app.directive('tilt', {
  mounted(el) {
    el.addEventListener('mousemove', handleTilt)
    el.addEventListener('mouseleave', resetTilt)
  },
  unmounted(el) {
    el.removeEventListener('mousemove', handleTilt)
    el.removeEventListener('mouseleave', resetTilt)
  }
})

app.directive('animate-on-scroll', {
  mounted(el) {
    const delay = Number(el.dataset.animateDelay || 0)
    if (delay) {
      el.style.setProperty('--delay', delay)
    }

    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -10% 0px'
    })

    observer.observe(el)
    el.__observer = observer

    const rect = el.getBoundingClientRect()
    if (rect.top <= window.innerHeight * 0.85) {
      el.classList.add('is-visible')
      observer.unobserve(el)
    }
  },
  unmounted(el) {
    if (el.__observer) {
      el.__observer.disconnect()
      delete el.__observer
    }
  }
})

function handleTilt(event) {
  const { currentTarget } = event
  const rect = currentTarget.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const rotateX = ((y - centerY) / centerY) * -6
  const rotateY = ((x - centerX) / centerX) * 6

  currentTarget.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(12px)`
}

function resetTilt(event) {
  event.currentTarget.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg) translateZ(0)'
}

app.use(router).mount('#app')
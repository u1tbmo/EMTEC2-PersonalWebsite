import { Gradient } from './Gradient.js'

// Create your instance
const gradient = new Gradient()
const gradientFooter = new Gradient()
const gradientAboutMe = new Gradient()
const gradientMyArt = new Gradient()

// Call `initGradient` with the selector to your canvas
gradient.initGradient('#gradient-canvas-index')
gradientFooter.initGradient('#gradient-canvas-footer')
gradientAboutMe.initGradient('#gradient-canvas-aboutme')
gradientMyArt.initGradient('#gradient-canvas-myart')
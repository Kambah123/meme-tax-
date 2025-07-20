import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  TrendingUp, 
  Shield, 
  Zap, 
  Users, 
  Star, 
  ArrowRight, 
  CheckCircle, 
  Calculator,
  Building,
  MessageCircle,
  Phone,
  Mail,
  Menu,
  X,
  Rocket,
  Target,
  Award,
  Globe,
  BarChart3,
  PieChart,
  DollarSign,
  FileText,
  Briefcase,
  HeadphonesIcon
} from 'lucide-react'
import dogeIcon from './assets/dogecoin-logo.png'
import shibaIcon from './assets/shiba-logo.png'
import pepeIcon from './assets/pepe-logo.png'
import bonkIcon from './assets/bonk-logo.png'
import flokiIcon from './assets/floki-logo.png'
import './App.css'

const memecoins = [
  { name: 'Dogecoin', icon: dogeIcon, color: '#D4AF37' },
  { name: 'Shiba Inu', icon: shibaIcon, color: '#FF6B35' },
  { name: 'Pepe', icon: pepeIcon, color: '#4CAF50' },
  { name: 'Bonk', icon: bonkIcon, color: '#FFD700' },
  { name: 'Floki', icon: flokiIcon, color: '#FF4500' }
]

const services = [
  {
    icon: Calculator,
    title: "Crypto Tax Returns",
    description: "Expert handling of your memecoin gains, losses, and everything in between. We speak degen.",
    features: ["Capital Gains Optimization", "FIFO/LIFO Methods", "ATO Compliance", "Audit Protection"],
    price: "From $299"
  },
  {
    icon: Building,
    title: "Company Setup",
    description: "Structure your trading empire properly. From Pty Ltd to family trusts - we got you covered.",
    features: ["ASIC Registration", "Tax Structure Planning", "ABN/TFN Setup", "Ongoing Compliance"],
    price: "From $899"
  },
  {
    icon: HeadphonesIcon,
    title: "Premium Consulting",
    description: "One-on-one guidance for complex scenarios. DeFi, NFTs, international tax - we handle it all.",
    features: ["Portfolio Review", "Tax Strategy", "International Planning", "24/7 Support"],
    price: "From $199/hr"
  }
]

const testimonials = [
  {
    name: "Diamond Hands Dave",
    role: "Memecoin Millionaire",
    content: "These legends saved me $50K in taxes on my DOGE gains. Worth every penny!",
    rating: 5,
    avatar: "🚀"
  },
  {
    name: "Shiba Sarah",
    role: "DeFi Degen",
    content: "Finally, accountants who understand the game. No more explaining what a memecoin is!",
    rating: 5,
    avatar: "💎"
  },
  {
    name: "Pepe Pete",
    role: "NFT Collector",
    content: "Professional service with a sense of humor. They get the culture and the numbers.",
    rating: 5,
    avatar: "🐸"
  }
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    setIsMenuOpen(false)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x / 10,
            y: mousePosition.y / 10,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: -mousePosition.x / 15,
            y: -mousePosition.y / 15,
          }}
          transition={{ type: "spring", stiffness: 30, damping: 20 }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Rocket className="h-8 w-8 text-yellow-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                CryptoTax Legends
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'services', 'about', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors hover:text-yellow-400 ${
                    activeSection === item ? 'text-yellow-400' : 'text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
              <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/90 backdrop-blur-md"
            >
              <div className="px-4 py-4 space-y-4">
                {['home', 'services', 'about', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left capitalize py-2 hover:text-yellow-400 transition-colors"
                  >
                    {item}
                  </button>
                ))}
                <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold">
                  Get Started
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
              🚀 Australia's #1 Memecoin Tax Experts
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Don't Let Tax Season
              <br />
              <span className="text-white">Ruin Your</span> Gains
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We speak fluent degen and know the ATO inside out. From DOGE to PEPE, 
              we'll maximize your gains and minimize your stress.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold text-lg px-8 py-4"
              onClick={() => scrollToSection('services')}
            >
              Calculate My Savings <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4"
              onClick={() => scrollToSection('contact')}
            >
              Free Consultation <MessageCircle className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Memecoin Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <p className="text-gray-400 mb-6">Trusted by holders of:</p>
            <div className="flex justify-center items-center space-x-8 md:space-x-12">
              {memecoins.map((coin, index) => (
                <motion.div
                  key={coin.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="group cursor-pointer"
                >
                  <div className="relative">
                    <img 
                      src={coin.icon} 
                      alt={coin.name}
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full group-hover:shadow-lg transition-all duration-300"
                      style={{ filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.3))' }}
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {coin.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {[
              { number: "$50M+", label: "Tax Saved" },
              { number: "2,500+", label: "Happy Degens" },
              { number: "99.9%", label: "ATO Compliance" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-400">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
              💎 Premium Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Services That Actually
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Get It</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              No more explaining what a memecoin is. We're degens who became accountants, 
              not accountants trying to understand crypto.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="h-8 w-8 text-yellow-400" />
                      </div>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                        {service.price}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl text-white group-hover:text-yellow-400 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300 text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold group-hover:scale-105 transition-transform duration-300">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-gradient-to-r from-green-500 to-blue-500 text-white border-0">
              🌟 Success Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Legends </span>
              Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-3">{testimonial.avatar}</div>
                      <div>
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 italic">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                🎯 About Us
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                We're Not Your
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Average </span>
                Accountants
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Started as memecoin degens, evolved into tax legends. We've been through every bull run, 
                bear market, and rug pull. Now we use that experience to save you money.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: Award, title: "CPA Certified", desc: "Fully licensed professionals" },
                  { icon: Shield, title: "Audit Protection", desc: "We stand behind our work" },
                  { icon: Globe, title: "ATO Experts", desc: "Deep knowledge of Australian tax law" },
                  { icon: Zap, title: "Fast Turnaround", desc: "Most returns done in 48 hours" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="p-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-lg">
                      <item.icon className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold"
                onClick={() => scrollToSection('contact')}
              >
                Meet the Team <Users className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 backdrop-blur-md border border-white/10">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: BarChart3, value: "500%", label: "Avg. Tax Savings" },
                    { icon: PieChart, value: "15min", label: "Avg. Response Time" },
                    { icon: DollarSign, value: "$2.5M", label: "Largest Refund" },
                    { icon: FileText, value: "100%", label: "Success Rate" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center p-4 bg-white/5 rounded-lg"
                    >
                      <stat.icon className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-gradient-to-r from-green-500 to-blue-500 text-white border-0">
              🚀 Ready to Launch?
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Make Your
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Taxes </span>
              Legendary
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to turn your crypto chaos into tax clarity? Let's chat about your situation 
              and show you how much you could save.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Get Your Free Consultation</CardTitle>
                  <CardDescription className="text-gray-300">
                    No obligation, no boring sales pitch. Just straight talk about your tax situation.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="First Name" 
                      className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    <input 
                      type="text" 
                      placeholder="Last Name" 
                      className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <textarea 
                    placeholder="Tell us about your crypto portfolio and tax situation..." 
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                  />
                  <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold text-lg py-3">
                    Book Free Consultation <Rocket className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  {[
                    { icon: Phone, title: "Call Us", content: "+61 1300 CRYPTO", desc: "Mon-Fri 9AM-6PM AEST" },
                    { icon: Mail, title: "Email Us", content: "hello@cryptotaxlegends.com.au", desc: "We reply within 2 hours" },
                    { icon: MessageCircle, title: "Live Chat", content: "Available on website", desc: "Instant responses during business hours" }
                  ].map((contact, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10 }}
                      className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                    >
                      <div className="p-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-lg">
                        <contact.icon className="h-5 w-5 text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{contact.title}</h4>
                        <p className="text-yellow-400">{contact.content}</p>
                        <p className="text-gray-400 text-sm">{contact.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg p-6 border border-white/10">
                <h4 className="text-xl font-bold text-white mb-4">🎁 Limited Time Offer</h4>
                <p className="text-gray-300 mb-4">
                  Book your consultation this month and get a FREE crypto tax health check worth $299!
                </p>
                <div className="flex items-center text-yellow-400">
                  <Target className="h-5 w-5 mr-2" />
                  <span className="font-semibold">Offer expires January 31st</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Rocket className="h-6 w-6 text-yellow-400" />
                <span className="text-lg font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  CryptoTax Legends
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                Australia's premier memecoin tax specialists. We turn crypto chaos into tax clarity.
              </p>
              <div className="flex space-x-4">
                {['Twitter', 'Discord', 'Telegram'].map((social) => (
                  <div key={social} className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-400/20 transition-colors cursor-pointer">
                    <span className="text-xs text-white">{social[0]}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-yellow-400 cursor-pointer transition-colors">Crypto Tax Returns</li>
                <li className="hover:text-yellow-400 cursor-pointer transition-colors">Company Setup</li>
                <li className="hover:text-yellow-400 cursor-pointer transition-colors">Tax Consulting</li>
                <li className="hover:text-yellow-400 cursor-pointer transition-colors">Audit Support</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-yellow-400 cursor-pointer transition-colors">Crypto Tax Guide</li>
                <li className="hover:text-yellow-400 cursor-pointer transition-colors">ATO Updates</li>
                <li className="hover:text-yellow-400 cursor-pointer transition-colors">Tax Calculator</li>
                <li className="hover:text-yellow-400 cursor-pointer transition-colors">FAQ</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+61 1300 CRYPTO</li>
                <li>hello@cryptotaxlegends.com.au</li>
                <li>Sydney, Australia</li>
                <li>ABN: 12 345 678 901</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 CryptoTax Legends. All rights reserved. | Privacy Policy | Terms of Service
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              🚀 To the moon, responsibly.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App


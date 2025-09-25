import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Star, 
  Users, 
  Target, 
  Zap, 
  Shield, 
  ArrowRight,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Code,
  BookOpen,
  Trophy,
  Clock,
  Calendar,
  Award,
  Briefcase,
  GraduationCap,
  Building,
  MessageCircle,
  Play,
  TrendingUp,
  Globe,
  Cpu,
  Database,
  Lightbulb,
  Timer,
  Gift,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Youtube
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [stats, setStats] = useState({
    studentsPlaced: 0,
    companiesPartnered: 0,
    contestsConducted: 0
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Animate stats counter
    const animateStats = () => {
      const targetStats = {
        studentsPlaced: 5000,
        companiesPartnered: 150,
        contestsConducted: 200
      };
      
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      
      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setStats({
          studentsPlaced: Math.floor(targetStats.studentsPlaced * progress),
          companiesPartnered: Math.floor(targetStats.companiesPartnered * progress),
          contestsConducted: Math.floor(targetStats.contestsConducted * progress)
        });
        
        if (currentStep >= steps) {
          clearInterval(interval);
          setStats(targetStats);
        }
      }, stepDuration);
    };
    
    const timer = setTimeout(animateStats, 1000);
    
    // Testimonial rotation
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(testimonialInterval);
    };
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer at Microsoft",
      content: "BeingZero's mentorship and coding practice helped me crack my dream job at Microsoft. The DSA course was exceptional!",
      rating: 5,
      company: "Microsoft"
    },
    {
      name: "Rahul Kumar",
      role: "Full Stack Developer at Amazon",
      content: "The interview preparation course was a game-changer. Got placed at Amazon within 3 months of completing the program.",
      rating: 5,
      company: "Amazon"
    },
    {
      name: "Sneha Patel",
      role: "Software Developer at JPMorgan Chase",
      content: "Amazing community and support system. The weekly contests kept me motivated throughout my preparation journey.",
      rating: 5,
      company: "JPMorgan Chase"
    },
    {
      name: "Arjun Singh",
      role: "Backend Engineer at PayPal",
      content: "BeingZero's system design course gave me the confidence to tackle complex technical interviews. Highly recommended!",
      rating: 5,
      company: "PayPal"
    },
    {
      name: "Kavya Reddy",
      role: "Software Consultant at Deloitte",
      content: "The personalized mentoring and career counseling helped me transition from a non-tech background to landing at Deloitte.",
      rating: 5,
      company: "Deloitte"
    }
  ];

  const courses = [
    {
      title: "Full Stack Development",
      description: "Master modern web development with React, Node.js, and cloud technologies",
      icon: Code,
      duration: "6 months",
      level: "Beginner to Advanced",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Coding Interview Preparation",
      description: "Crack technical interviews at top tech companies with our comprehensive program",
      icon: Target,
      duration: "3 months",
      level: "Intermediate",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "System Design",
      description: "Learn to design scalable systems and ace system design interviews",
      icon: Database,
      duration: "4 months",
      level: "Advanced",
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Sustainable Development",
      description: "Build eco-friendly applications and learn green coding practices",
      icon: Globe,
      duration: "2 months",
      level: "Intermediate",
      color: "from-green-500 to-lime-500"
    },
    {
      title: "Creative Problem Solving",
      description: "Develop algorithmic thinking and creative approaches to complex problems",
      icon: Lightbulb,
      duration: "3 months",
      level: "All Levels",
      color: "from-orange-500 to-red-500"
    }
  ];

  const upcomingEvents = [
    {
      title: "Full Stack Bootcamp",
      date: "2025-02-15",
      type: "Bootcamp",
      description: "Intensive 7-day bootcamp covering React, Node.js, and deployment",
      badge: "Limited Seats"
    },
    {
      title: "Weekly Coding Contest #47",
      date: "2025-01-25",
      type: "Contest",
      description: "Solve challenging problems and compete with peers",
      badge: "Free Entry"
    },
    {
      title: "Tech Giants Hiring Drive",
      date: "2025-02-01",
      type: "Hiring",
      description: "Direct placement opportunities with top tech companies",
      badge: "Premium"
    }
  ];

  const getTimeUntil = (dateString: string) => {
    const targetDate = new Date(dateString);
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    
    if (difference <= 0) return "Event Started";
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    return `${days}d ${hours}h`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  BeingZero
                </span>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Home', 'Courses', 'About', 'Success Stories', 'Events', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-blue-50 rounded-lg"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
                Get Started
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white border-b border-gray-100`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['Home', 'Courses', 'About', 'Success Stories', 'Events', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 hover:bg-blue-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-800 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Trophy className="w-4 h-4 mr-2" />
              #1 Tech Education Platform in India
            </div>
            
            <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="block">Elevate Your</span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Coding Skills
              </span>
              <span className="block">to the Next Level</span>
            </h1>
            
            <p className={`text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Empowering developers with humility and excellence. Join thousands of students who've transformed their careers through our comprehensive tech education and placement programs.
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button className="group border-2 border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <Play size={20} className="group-hover:scale-110 transition-transform duration-200" />
                <span>Learn More</span>
              </button>
            </div>

            <div className="mt-16 animate-bounce">
              <ChevronDown size={32} className="text-gray-400 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stats.studentsPlaced.toLocaleString()}+
              </div>
              <div className="text-gray-600 font-medium text-lg">Students Placed</div>
              <div className="text-sm text-gray-500 mt-1">At top tech companies</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stats.companiesPartnered}+
              </div>
              <div className="text-gray-600 font-medium text-lg">Partner Companies</div>
              <div className="text-sm text-gray-500 mt-1">Including Fortune 500</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stats.contestsConducted}+
              </div>
              <div className="text-gray-600 font-medium text-lg">Contests Conducted</div>
              <div className="text-sm text-gray-500 mt-1">Weekly coding challenges</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed for every stage of your tech journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  For Students
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Personalized mentoring & career counseling</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Comprehensive coding practice platform</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Interview preparation & mock sessions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Placement assistance & job referrals</span>
                </li>
              </ul>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-purple-200">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  For Professionals
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Refresher courses & skill upskilling</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Advanced system design workshops</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Leadership & tech management training</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Career transition support</span>
                </li>
              </ul>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-emerald-200">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                  For Colleges
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Tailored group training programs</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Campus placement preparation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Faculty development workshops</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Industry-academia collaboration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Why Choose BeingZero?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our proven methodology and comprehensive support system
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Target, 
                title: "Quality DSA Training", 
                description: "Master data structures and algorithms with our structured curriculum and expert guidance",
                color: "from-blue-500 to-cyan-500"
              },
              { 
                icon: Award, 
                title: "Specialized Courses", 
                description: "Industry-relevant courses designed by experts from top tech companies",
                color: "from-purple-500 to-pink-500"
              },
              { 
                icon: Trophy, 
                title: "Weekly Contests", 
                description: "Regular coding competitions to sharpen your skills and track progress",
                color: "from-emerald-500 to-teal-500"
              },
              { 
                icon: MessageCircle, 
                title: "24x7 Support", 
                description: "Round-the-clock mentorship and doubt resolution support",
                color: "from-orange-500 to-red-500"
              }
            ].map((feature, index) => (
              <div key={feature.title} className="group text-center p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success-stories" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Hear from our students who've landed their dream jobs at top tech companies
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-2xl">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-2xl sm:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                
                <div className="text-center">
                  <div className="font-bold text-xl text-gray-900 mb-1">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600 mb-2">
                    {testimonials[currentTestimonial].role}
                  </div>
                  <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    <Building className="w-4 h-4 mr-1" />
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Overview Section */}
      <section id="courses" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed to accelerate your tech career
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={course.title} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>
                <div className="p-8">
                  <div className="mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${course.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <course.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {course.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-4 h-4" />
                      <span>{course.level}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="events" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't miss out on our exciting bootcamps, contests, and hiring drives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={event.title} className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                      event.badge === 'Limited Seats' ? 'bg-red-100 text-red-800' :
                      event.badge === 'Free Entry' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {event.badge}
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Timer className="w-4 h-4" />
                      <span className="font-mono">{getTimeUntil(event.date)}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${
                      event.type === 'Bootcamp' ? 'bg-blue-100' :
                      event.type === 'Contest' ? 'bg-green-100' :
                      'bg-purple-100'
                    }`}>
                      {event.type === 'Bootcamp' ? <BookOpen className="w-6 h-6 text-blue-600" /> :
                       event.type === 'Contest' ? <Trophy className="w-6 h-6 text-green-600" /> :
                       <Briefcase className="w-6 h-6 text-purple-600" />}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(event.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}</span>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-sm">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <Gift className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Stay Updated & Get Free Resources
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for coding tips, interview guides, and exclusive course discounts
            </p>

            {isSubscribed ? (
              <div className="max-w-md mx-auto bg-emerald-600 text-white px-8 py-4 rounded-full flex items-center justify-center space-x-2">
                <CheckCircle size={24} />
                <span className="font-semibold">Welcome to the BeingZero community!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 rounded-full border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your coding journey? We're here to help you succeed
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h3>
                  <p className="text-gray-600">hello@beingzero.in</p>
                  <p className="text-gray-600">support@beingzero.in</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                  <p className="text-gray-600">Mon-Fri 9AM-6PM IST</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Visit Us</h3>
                  <p className="text-gray-600">Tech Hub, Sector 62<br />Noida, UP 201309</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Youtube, color: 'hover:text-red-600', href: '#' },
                    { icon: Linkedin, color: 'hover:text-blue-600', href: '#' },
                    { icon: Twitter, color: 'hover:text-blue-400', href: '#' },
                    { icon: Instagram, color: 'hover:text-pink-600', href: '#' },
                    { icon: Github, color: 'hover:text-gray-900', href: '#' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 ${social.color} transition-all duration-300 transform hover:scale-110`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
                    <option>Course Inquiry</option>
                    <option>Placement Support</option>
                    <option>Technical Support</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tell us about your goals and how we can help..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                BeingZero
              </span>
            </div>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Empowering the next generation of developers with humility, excellence, and comprehensive tech education.
            </p>
            
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">
                © 2025 BeingZero. All rights reserved. | Made with ❤️ for aspiring developers
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
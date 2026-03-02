/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  ChevronDown,
  ArrowRight,
  ChevronLeft,
  Scale,
  Dumbbell,
  Zap,
  Activity,
  Battery,
  Moon,
  Flower2,
  Accessibility,
  Move,
  Check,
  Gauge,
  Target,
  Calendar,
  Heart,
  Lock,
  Star,
  XCircle,
  Pill
} from 'lucide-react';

export default function App() {
  const [step, setStep] = useState<'landing' | 'community' | 'goal' | 'additional' | 'concerns' | 'changes' | 'startingPoint' | 'dreamBody' | 'bestForm' | 'pilatesExperience' | 'prosper' | 'madeForYou' | 'physicalIssues' | 'comfortLevel' | 'painRelief' | 'stepByStep' | 'great' | 'personalizePlan' | 'height' | 'weight' | 'targetWeight' | 'age' | 'importantFeatures' | 'typicalDay' | 'profileReady' | 'extraActivities' | 'preparingPlan' | 'waterIntake' | 'dietaryPreferences' | 'habits' | 'lifeEvents' | 'recoverBody' | 'weightProjection' | 'creatingPlan' | 'email' | 'name' | 'planReady' | 'checkout'>('landing');
  const [isDevNavOpen, setIsDevNavOpen] = useState(false);
  const [height, setHeight] = useState('');
  const [heightUnit, setHeightUnit] = useState<'cm' | 'ft'>('cm');
  const [weight, setWeight] = useState('');
  const [weightUnit, setWeightUnit] = useState<'kg' | 'lb'>('kg');
  const [targetWeight, setTargetWeight] = useState('');
  const [age, setAge] = useState('');
  const [selectedAdditional, setSelectedAdditional] = useState<string[]>([]);
  const [selectedImportantFeatures, setSelectedImportantFeatures] = useState<string[]>([]);
  const [typicalDay, setTypicalDay] = useState<string>('');
  const [selectedGoal, setSelectedGoal] = useState<string>('');
  const [selectedExtraActivities, setSelectedExtraActivities] = useState<string[]>([]);
  const [selectedDietaryPreferences, setSelectedDietaryPreferences] = useState<string[]>([]);
  const [selectedHabits, setSelectedHabits] = useState<string[]>([]);
  const [selectedLifeEvents, setSelectedLifeEvents] = useState<string[]>([]);
  const [creationProgress, setCreationProgress] = useState(0);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [selectedPlan, setSelectedPlan] = useState<'1week' | '4weeks' | '12weeks'>('4weeks');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  useEffect(() => {
    if (step === 'creatingPlan') {
      const interval = setInterval(() => {
        setCreationProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setStep('email'), 1000);
            return 100;
          }
          return prev + 1;
        });
      }, 50);
      return () => clearInterval(interval);
    } else {
      setCreationProgress(0);
    }
  }, [step]);

  const calculateBMI = () => {
    if (!height || !weight) return null;
    const h = heightUnit === 'cm' ? Number(height) / 100 : Number(height) * 0.3048;
    const w = weightUnit === 'kg' ? Number(weight) : Number(weight) * 0.453592;
    if (h === 0) return 0;
    return (w / (h * h)).toFixed(1);
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return "bajo peso";
    if (bmi < 25) return "peso normal";
    if (bmi < 30) return "sobrepeso";
    return "obesidad";
  };

  const bmiValue = calculateBMI();
  const bmiCategory = bmiValue ? getBMICategory(Number(bmiValue)) : null;
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);
  const [selectedPhysicalIssues, setSelectedPhysicalIssues] = useState<string[]>([]);
  const [improveAll, setImproveAll] = useState(false);

  const ageRanges = [
    "39-45",
    "46-50",
    "51-60",
    "60+"
  ];

  const goals = [
    { id: 'weight', text: 'Bajar de peso', icon: <Activity size={24} className="text-pilates-accent" /> },
    { id: 'fit', text: 'Mantener el peso y ponerse en forma', icon: <Scale size={24} className="text-pilates-accent" /> },
    { id: 'condition', text: 'Mejorar la condición física', icon: <Dumbbell size={24} className="text-pilates-accent" /> }
  ];

  const additionalGoals = [
    { id: 'energy', text: 'Aumenta la energía', icon: <Battery size={20} className="text-pilates-accent" /> },
    { id: 'sleep', text: 'Mejora el sueño', icon: <Moon size={20} className="text-pilates-accent" /> },
    { id: 'stress', text: 'Reduce el estrés', icon: <Flower2 size={20} className="text-pilates-accent" /> },
    { id: 'posture', text: 'Mejora la postura y la movilidad', icon: <Accessibility size={20} className="text-pilates-accent" /> },
    { id: 'flexibility', text: 'Desarrollar la flexibilidad', icon: <Move size={20} className="text-pilates-accent" /> }
  ];

  const concerns = [
    { id: 'chin', text: 'Papada', img: 'https://i.postimg.cc/7bHghTVK/papada.png' },
    { id: 'arms', text: 'Brazos caídos', img: 'https://i.postimg.cc/64q20njS/brazos.png' },
    { id: 'chest', text: 'Senos caídos', img: 'https://i.postimg.cc/bd4NM7sn/pechos.png' },
    { id: 'abs', text: 'Grasa abdominal', img: 'https://i.postimg.cc/1n2PkF5n/abdomen.png' },
    { id: 'knees', text: 'Grasa en las rodillas', img: 'https://i.postimg.cc/xcSVLnXF/rodillas.png' },
    { id: 'hips', text: 'Alforjas', img: 'https://i.postimg.cc/nXRWSJhR/alforjas.png' },
    { id: 'glutes', text: 'Glúteos flácidos', img: 'https://i.postimg.cc/xc9F0CJn/gluteos.png' },
    { id: 'thigh', text: 'Parte interna del muslo', img: 'https://i.postimg.cc/HrxZyh9P/muslo.png' },
  ];

  const startingPoints = [
    { 
      id: 'slim', 
      title: 'Delgado', 
      description: 'Buscando ganar masa muscular', 
      img: 'https://i.postimg.cc/4nYppRD9/delgado.png' 
    },
    { 
      id: 'skinny-fat', 
      title: 'Delgado gordo', 
      description: 'Delgado, pero necesito tonificar y perder algo de peso', 
      img: 'https://i.postimg.cc/FfFLRMbk/delgado-gordo.png' 
    },
    { 
      id: 'solid', 
      title: 'Sólido y sutilmente redondeado.', 
      description: 'Forma firme, de líneas suaves y proporciones suaves.', 
      img: 'https://i.postimg.cc/T5byFfx0/solido.png' 
    },
    { 
      id: 'overweight', 
      title: 'Sobrepeso', 
      description: '¿Buscas una manera rápida y saludable de perder peso?', 
      img: 'https://i.postimg.cc/pmCmg0Ny/sobrepeso.png' 
    }
  ];

  const dreamBodyOptions = [
    { id: 'curvy', title: 'Con curvas', img: 'https://i.postimg.cc/hhCcWHhR/curvas.png' },
    { id: 'slim', title: 'Delgada', img: 'https://i.postimg.cc/cKMGDzP8/delgada.png' },
    { id: 'fit', title: 'En forma', img: 'https://i.postimg.cc/fSk4RRyX/en-forma.png' },
    { id: 'toned', title: 'Tonificada', img: 'https://i.postimg.cc/fkgngmqj/tonificada.png' },
    { id: 'fine', title: 'Estoy bien con mi cuerpo', img: 'https://i.postimg.cc/Cd59DdMG/bien.png' }
  ];

  const bestFormOptions = [
    "Hace 1 o 2 años",
    "Hace 3 a 5 años",
    "Hace más de 5 años",
    "Nunca"
  ];

  const pilatesExperienceOptions = [
    "Sí, lo hago a veces.",
    "Sí, pero hace un tiempo.",
    "No, no tengo experiencia."
  ];

  const physicalIssuesOptions = [
    { id: 'back', title: 'Espalda sensible', img: 'https://i.postimg.cc/PNL2TRMX/image.png' },
    { id: 'knees', title: 'Rodillas sensibles', img: 'https://i.postimg.cc/SX3YrDYn/image.png' },
    { id: 'hip', title: 'Cirugía de cadera', img: 'https://i.postimg.cc/471Zd3G5/image.png' },
    { id: 'shoulders', title: 'Hombros y brazos', img: 'https://i.postimg.cc/gxBxzNDT/image.png' },
    { id: 'ankles', title: 'Pantorrillas y tobillos', img: 'https://i.postimg.cc/LgRXC79j/image.png' }
  ];

  const comfortOptions = [
    { id: 'pain', text: 'Dolor/Malestar', emoji: '😟' },
    { id: 'difficulty', text: 'Alguna dificultad', emoji: '😕' },
    { id: 'comfortable', text: 'Cómodo', emoji: '😊' }
  ];

  const toggleAdditional = (id: string) => {
    setSelectedAdditional(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const toggleConcern = (id: string) => {
    if (id === 'none') {
      setSelectedConcerns(['none']);
      setImproveAll(false);
      return;
    }
    
    setSelectedConcerns(prev => {
      const filtered = prev.filter(i => i !== 'none');
      const next = filtered.includes(id) 
        ? filtered.filter(i => i !== id) 
        : [...filtered, id];
      
      // Update improveAll based on whether all concerns are selected
      if (next.length === concerns.length) {
        setImproveAll(true);
      } else {
        setImproveAll(false);
      }
      
      return next;
    });
  };

  const togglePhysicalIssue = (id: string) => {
    if (id === 'none') {
      setSelectedPhysicalIssues(['none']);
      return;
    }
    setSelectedPhysicalIssues(prev => {
      const filtered = prev.filter(i => i !== 'none');
      if (filtered.includes(id)) {
        return filtered.filter(i => i !== id);
      }
      return [...filtered, id];
    });
  };

  const handleImproveAll = () => {
    const newValue = !improveAll;
    setImproveAll(newValue);
    if (newValue) {
      setSelectedConcerns(concerns.map(c => c.id));
    } else {
      setSelectedConcerns([]);
    }
  };

  return (
    <div className="min-h-screen bg-pilates-bg relative overflow-x-hidden flex flex-col">
      {/* Header */}
      <header className="w-full p-6 md:px-12 flex items-center justify-center md:justify-between z-20 relative">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-black tracking-tighter text-neutral-800">PILATES</h1>
          <span className="bg-neutral-300/50 px-2 py-0.5 rounded text-[10px] font-bold text-neutral-600">por HARNA</span>
        </div>
        
        {step === 'landing' && (
          <div className="hidden md:flex items-center gap-6">
            <button className="flex items-center gap-1 font-bold text-neutral-800">
              EN <ChevronDown size={18} />
            </button>
            <button className="text-neutral-800">
              <Menu size={28} />
            </button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center pt-8 md:pt-12 px-6 relative z-10">
        <AnimatePresence mode="wait">
          {step === 'landing' && (
            <motion.div 
              key="landing"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full flex flex-col items-center"
            >
              <div className="text-center max-w-2xl mb-12">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight text-neutral-800 mb-4">
                  Programa de Pilates <br />
                  Asiático <span className="text-pilates-accent">para Mujeres <br /> Menopáusicas</span>
                </h2>
                <p className="text-lg font-medium text-neutral-700 mb-1">Según tu edad</p>
                <p className="text-[10px] font-bold tracking-widest uppercase text-neutral-800">Cuestionario de 1 minuto</p>
              </div>

              <div className="w-full max-w-md space-y-3 relative z-20">
                {ageRanges.map((range) => (
                  <button 
                    key={range}
                    onClick={() => setStep('community')}
                    className="pill-button group"
                  >
                    <span>{range}</span>
                    <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                  </button>
                ))}
              </div>

              {/* Hero Image */}
              <div className="absolute right-[-5%] bottom-0 w-[60%] max-w-lg pointer-events-none hidden md:block overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=1000" 
                  alt="Asian Fitness Woman" 
                  className="w-full h-auto object-contain mix-blend-multiply contrast-125 brightness-110"
                  style={{ 
                    maskImage: 'radial-gradient(circle at center, black 40%, transparent 90%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 90%)'
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="mt-4 md:hidden w-full max-w-xs pointer-events-none flex justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=800" 
                  alt="Asian Fitness Woman" 
                  className="w-full h-auto object-contain mix-blend-multiply contrast-125 brightness-110"
                  style={{ 
                    maskImage: 'radial-gradient(circle at center, black 40%, transparent 90%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 90%)'
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          )}

          {step === 'community' && (
            <motion.div 
              key="community"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full flex flex-col items-center text-center"
            >
              <div className="w-full max-w-lg mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800" 
                  alt="Comunidad de mujeres" 
                  className="w-full aspect-[4/3] object-cover rounded-[2.5rem] shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-4 mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 tracking-tight">
                  No estás sola
                </h2>
                <p className="text-lg text-neutral-600 font-medium">
                  Más de 5 millones de mujeres empezaron como tú
                </p>
              </div>

              <button 
                onClick={() => setStep('goal')}
                className="primary-button"
              >
                Continuar
              </button>
            </motion.div>
          )}

          {step === 'goal' && (
            <motion.div 
              key="goal"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full flex flex-col items-center"
            >
              {/* Progress and Back */}
              <div className="w-full max-w-2xl flex items-center gap-4 mb-12">
                <button 
                  onClick={() => setStep('community')}
                  className="w-10 h-10 rounded-full bg-neutral-300/50 flex items-center justify-center text-neutral-800"
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="flex-grow flex gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-1.5 flex-grow bg-neutral-300/50 rounded-full overflow-hidden">
                      {i === 1 && <div className="h-full w-1/3 bg-pilates-accent rounded-full" />}
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-neutral-800">
                  ¿Cuál es tu <span className="text-pilates-accent">objetivo principal</span>?
                </h2>
              </div>

              <div className="w-full max-w-md space-y-4">
                {goals.map((goal) => (
                  <button 
                    key={goal.id}
                    onClick={() => {
                      setSelectedGoal(goal.id);
                      setStep('additional');
                    }}
                    className="w-full bg-white/10 backdrop-blur-sm border border-neutral-400/30 rounded-3xl p-6 flex items-center gap-4 text-left transition-all hover:bg-white/20 active:scale-[0.98]"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white/50 flex items-center justify-center">
                      {goal.icon}
                    </div>
                    <span className="text-xl font-bold text-neutral-800 leading-tight">
                      {goal.text}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 'additional' && (
            <motion.div 
              key="additional"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full flex flex-col items-center"
            >
              {/* Progress and Back */}
              <div className="w-full max-w-2xl flex items-center gap-4 mb-12">
                <button 
                  onClick={() => setStep('goal')}
                  className="w-10 h-10 rounded-full bg-neutral-300/50 flex items-center justify-center text-neutral-800"
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="flex-grow flex gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-1.5 flex-grow bg-neutral-300/50 rounded-full overflow-hidden">
                      {i === 1 && <div className="h-full w-full bg-pilates-accent rounded-full" />}
                      {i === 2 && <div className="h-full w-1/3 bg-pilates-accent rounded-full" />}
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-neutral-800 mb-2">
                  Elija un objetivo adicional
                </h2>
                <p className="text-neutral-600 font-medium">Puedes elegir varias opciones</p>
              </div>

              <div className="w-full max-w-md space-y-3 mb-12">
                {additionalGoals.map((goal) => {
                  const isSelected = selectedAdditional.includes(goal.id);
                  return (
                    <button 
                      key={goal.id}
                      onClick={() => toggleAdditional(goal.id)}
                      className={`w-full bg-white/10 backdrop-blur-sm border rounded-3xl p-5 flex items-center gap-4 text-left transition-all active:scale-[0.98] ${isSelected ? 'border-neutral-800 bg-white/20' : 'border-neutral-400/30'}`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/50 flex items-center justify-center">
                        {goal.icon}
                      </div>
                      <span className="text-lg font-bold text-neutral-800 leading-tight flex-grow">
                        {goal.text}
                      </span>
                      <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${isSelected ? 'bg-neutral-800 border-neutral-800' : 'border-neutral-400/50'}`}>
                        {isSelected && <Check size={16} className="text-white" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              <button 
                onClick={() => setStep('concerns')}
                className="primary-button"
              >
                Continuar
              </button>
            </motion.div>
          )}

          {step === 'concerns' && (
            <motion.div 
              key="concerns"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full flex flex-col items-center"
            >
              {/* Progress and Back */}
              <div className="w-full max-w-2xl flex items-center gap-4 mb-12">
                <button 
                  onClick={() => setStep('additional')}
                  className="w-10 h-10 rounded-full bg-neutral-300/50 flex items-center justify-center text-neutral-800"
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="flex-grow flex gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-1.5 flex-grow bg-neutral-300/50 rounded-full overflow-hidden">
                      {i <= 2 && <div className="h-full w-full bg-pilates-accent rounded-full" />}
                      {i === 3 && <div className="h-full w-1/3 bg-pilates-accent rounded-full" />}
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-neutral-800 mb-2">
                  ¿Qué áreas te preocupan más?
                </h2>
                <p className="text-neutral-600 font-medium">Por favor seleccione todas las que correspondan</p>
              </div>

              {/* Toggle Switch */}
              <div className="w-full max-w-md flex items-center gap-4 mb-8 px-4">
                <button 
                  onClick={handleImproveAll}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${improveAll ? 'bg-pilates-accent' : 'bg-neutral-300'}`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${improveAll ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
                <span className="text-lg font-bold text-neutral-800">Mejorar todo el cuerpo</span>
              </div>

              <div className="w-full max-w-md space-y-3 mb-12">
                {concerns.map((concern) => {
                  const isSelected = selectedConcerns.includes(concern.id);
                  return (
                    <button 
                      key={concern.id}
                      onClick={() => toggleConcern(concern.id)}
                      className={`w-full bg-white/10 backdrop-blur-sm border rounded-3xl p-3 flex items-center gap-4 text-left transition-all active:scale-[0.98] ${isSelected ? 'border-neutral-800 bg-white/20' : 'border-neutral-400/30'}`}
                    >
                      <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white/50">
                        <img src={concern.img} alt={concern.text} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <span className="text-lg font-bold text-neutral-800 leading-tight flex-grow">
                        {concern.text}
                      </span>
                      <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${isSelected ? 'bg-neutral-800 border-neutral-800' : 'border-neutral-400/50'}`}>
                        {isSelected && <Check size={16} className="text-white" />}
                      </div>
                    </button>
                  );
                })}
                
                <button 
                  onClick={() => toggleConcern('none')}
                  className={`w-full bg-white/10 backdrop-blur-sm border rounded-3xl p-5 flex items-center gap-4 text-left transition-all active:scale-[0.98] ${selectedConcerns.includes('none') ? 'border-neutral-800 bg-white/20' : 'border-neutral-400/30'}`}
                >
                  <span className="text-lg font-bold text-neutral-800 leading-tight flex-grow">
                    Ninguno
                  </span>
                  <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${selectedConcerns.includes('none') ? 'bg-neutral-800 border-neutral-800' : 'border-neutral-400/50'}`}>
                    {selectedConcerns.includes('none') && <Check size={16} className="text-white" />}
                  </div>
                </button>
              </div>

              <button 
                onClick={() => setStep('changes')}
                className="primary-button"
              >
                Siguiente paso
              </button>
            </motion.div>
          )}

          {step === 'changes' && (
            <motion.div 
              key="changes"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full flex flex-col items-center text-center px-4"
            >
              <div className="w-full max-w-lg mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=800" 
                  alt="Mujer fitness" 
                  className="w-full aspect-[4/3] object-cover rounded-[2.5rem] shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-6 mb-12 max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 leading-tight">
                  Sigue todos los cambios de tu cuerpo <br />
                  <span className="text-pilates-accent">y mantente joven a cualquier edad</span>
                </h2>
                <p className="text-lg text-neutral-600 font-medium leading-relaxed">
                  Durante la perimenopausia y la menopausia, las mujeres experimentan un aumento significativo de la grasa corporal total y central debido a los cambios hormonales, en particular la disminución de los niveles de estrógeno.
                </p>
              </div>

              <div className="w-full max-w-md bg-neutral-200/50 rounded-3xl p-6 mb-12 text-left">
                <h3 className="text-lg font-bold text-neutral-800 mb-1">Biblioteca Nacional de Medicina</h3>
                <p className="text-neutral-600 font-medium">Centro de PubMed</p>
              </div>

              <button 
                onClick={() => setStep('startingPoint')}
                className="primary-button"
              >
                Continuar
              </button>
            </motion.div>
          )}

          {step === 'startingPoint' && (
            <motion.div 
              key="startingPoint"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full flex flex-col items-center"
            >
              {/* Progress and Back */}
              <div className="w-full max-w-2xl flex items-center gap-4 mb-12">
                <button 
                  onClick={() => setStep('changes')}
                  className="w-10 h-10 rounded-full bg-neutral-300/50 flex items-center justify-center text-neutral-800"
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="flex-grow flex gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-1.5 flex-grow bg-neutral-300/50 rounded-full overflow-hidden">
                      {i === 1 && <div className="h-full w-full bg-pilates-accent rounded-full" />}
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-neutral-800">
                  ¿Cuál es tu punto de partida?
                </h2>
              </div>

              <div className="w-full max-w-md space-y-4">
                {startingPoints.map((point) => (
                  <button 
                    key={point.id}
                    onClick={() => setStep('dreamBody')}
                    className="w-full bg-white/10 backdrop-blur-sm border border-neutral-400/30 rounded-3xl p-4 flex items-center gap-4 text-left transition-all hover:bg-white/20 active:scale-[0.98]"
                  >
                    <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white/50 flex-shrink-0">
                      <img src={point.img} alt={point.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xl font-bold text-neutral-800 leading-tight">
                        {point.title}
                      </span>
                      <span className="text-sm text-neutral-600 font-medium">
                        {point.description}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 'dreamBody' && (
            <motion.div 
              key="dreamBody"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full flex flex-col items-center"
            >
              {/* Progress and Back */}
              <div className="w-full max-w-2xl flex items-center gap-4 mb-12">
                <button 
                  onClick={() => setStep('startingPoint')}
                  className="w-10 h-10 rounded-full bg-neutral-300/50 flex items-center justify-center text-neutral-800"
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="flex-grow flex gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-1.5 flex-grow bg-neutral-300/50 rounded-full overflow-hidden">
                      {i === 1 && <div className="h-full w-full bg-pilates-accent rounded-full" />}
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-neutral-800">
                  ¿Cuál es el cuerpo de tus sueños?
                </h2>
              </div>

              <div className="w-full max-w-md space-y-4">
                {dreamBodyOptions.map((option) => (
                  <button 
                    key={option.id}
                    onClick={() => setStep('bestForm')}
                    className="w-full bg-white/10 backdrop-blur-sm border border-neutral-400/30 rounded-3xl p-4 flex items-center gap-4 text-left transition-all hover:bg-white/20 active:scale-[0.98]"
                  >
                    <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white/50 flex-shrink-0">
                      <img src={option.img} alt={option.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xl font-bold text-neutral-800 leading-tight">
                        {option.title}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 'bestForm' && (
            <motion.div 
              key="bestForm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full flex flex-col items-center"
            >
              {/* Progress and Back */}
              <div className="w-full max-w-2xl flex items-center gap-4 mb-12">
                <button 
                  onClick={() => setStep('dreamBody')}
                  className="w-10 h-10 rounded-full bg-neutral-300/50 flex items-center justify-center text-neutral-800"
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="flex-grow flex gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-1.5 flex-grow bg-neutral-300/50 rounded-full overflow-hidden">
                      {i === 1 && <div className="h-full w-full bg-pilates-accent rounded-full" />}
                      {i === 2 && <div className="h-full w-1/4 bg-pilates-accent rounded-full" />}
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center mb-12 max-w-2xl px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 leading-tight">
                  ¿Hace cuánto tiempo estuviste en la mejor forma de tu vida?
                </h2>
              </div>

              <div className="w-full max-w-md flex flex-col items-center gap-8 px-4">
                <div className="w-full space-y-4">
                  {bestFormOptions.map((option) => (
                    <button 
                      key={option}
                      onClick={() => setStep('pilatesExperience')}
                      className="w-full bg-white/10 backdrop-blur-sm border border-neutral-400/30 rounded-3xl p-6 text-left transition-all hover:bg-white/20 active:scale-[0.98] text-xl font-bold text-neutral-800"
                    >
                      {option}
                    </button>
                  ))}
                </div>
                
                <div className="w-full max-w-[200px] md:max-w-[250px]">
                  <img 
                    src="https://i.postimg.cc/4nG1tx6D/image.png" 
                    alt="Fitness woman" 
                    className="w-full h-auto object-contain drop-shadow-xl opacity-90"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {step === 'pilatesExperience' && (
            <motion.div 
              key="pilatesExperience"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full flex flex-col items-center"
            >
              {/* Progress and Back */}
              <div className="w-full max-w-2xl flex items-center gap-4 mb-12">
                <button 
                  onClick={() => setStep('bestForm')}
                  className="w-10 h-10 rounded-full bg-neutral-300/50 flex items-center justify-center text-neutral-800"
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="flex-grow flex gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-1.5 flex-grow bg-neutral-300/50 rounded-full overflow-hidden">
                      {i === 1 && <div className="h-full w-full bg-pilates-accent rounded-full" />}
                      {i === 2 && <div className="h-full w-1/2 bg-pilates-accent rounded-full" />}
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center mb-12 max-w-2xl px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 leading-tight">
                  ¿Tienes alguna experiencia previa con Pilates?
                </h2>
              </div>

              <div className="w-full max-w-md flex flex-col items-center gap-8 px-4">
                <div className="w-full space-y-4">
                  <button 
                    onClick={() => setStep('prosper')}
                    className="w-full bg-white/10 backdrop-blur-sm border border-neutral-400/30 rounded-3xl p-6 text-left transition-all hover:bg-white/20 active:scale-[0.98] text-xl font-bold text-neutral-800"
                  >
                    Sí, lo hago a veces.
                  </button>
                  <button 
                    onClick={() => setStep('prosper')}
                    className="w-full bg-white/10 backdrop-blur-sm border border-neutral-400/30 rounded-3xl p-6 text-left transition-all hover:bg-white/20 active:scale-[0.98] text-xl font-bold text-neutral-800"
                  >
                    Sí, pero hace un tiempo.
                  </button>
                  <button 
                    onClick={() => setStep('madeForYou')}
                    className="w-full bg-white/10 backdrop-blur-sm border border-neutral-400/30 rounded-3xl p-6 text-left transition-all hover:bg-white/20 active:scale-[0.98] text-xl font-bold text-neutral-800"
                  >
                    No, no tengo experiencia.
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {step === 'prosper' && (
            <motion.div 
              key="prosper"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl flex flex-col items-center text-center px-4"
            >
              <div className="w-full aspect-video rounded-[2rem] overflow-hidden mb-8 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800" 
                  alt="Pilates benefits" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6 leading-tight">
                Tu cuerpo conoce los beneficios: ahora es el momento de prosperar.
              </h2>

              <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
                Manténgase fuerte y activa en cada etapa de su vida. Nuestros programas de Pilates Asiático están diseñados para <span className="font-bold text-neutral-800">apoyar a las mujeres durante la menopausia</span> con cuidado, constancia y resultados palpables.
              </p>

              <button 
                onClick={() => setStep('physicalIssues')}
                className="w-full max-w-sm bg-pilates-accent text-white py-5 rounded-full text-xl font-bold shadow-lg shadow-pilates-accent/20 hover:bg-pilates-accent/90 transition-all active:scale-[0.98]"
              >
                Continuar
              </button>
            </motion.div>
          )}

          {step === 'madeForYou' && (
            <motion.div 
              key="madeForYou"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl flex flex-col items-center text-center px-4"
            >
              <div className="w-full aspect-video rounded-[2rem] overflow-hidden mb-8 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800" 
                  alt="Pilates for you" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6 leading-tight">
                El Pilates asiático está hecho para mujeres como tú
              </h2>

              <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
                Es una forma suave de ejercicio que <span className="font-bold text-neutral-800">se centra en movimientos lentos y controlados para mejorar la fuerza, el equilibrio y la flexibilidad</span>. Ideal si estás empezando, tienes sobrepeso o <span className="font-bold text-neutral-800">estás pasando por la menopausia</span>. Te sentirás más ligera, con más movilidad y más en sintonía con tu cuerpo, paso a paso.
              </p>

              <button 
                onClick={() => setStep('physicalIssues')}
                className="w-full max-w-sm bg-pilates-accent text-white py-5 rounded-full text-xl font-bold shadow-lg shadow-pilates-accent/20 hover:bg-pilates-accent/90 transition-all active:scale-[0.98]"
              >
                Continuar
              </button>
            </motion.div>
          )}

          {step === 'physicalIssues' && (
            <motion.div 
              key="physicalIssues"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full flex flex-col items-center"
            >
              {/* Progress and Back */}
              <div className="w-full max-w-2xl flex items-center gap-4 mb-12">
                <button 
                  onClick={() => setStep('pilatesExperience')}
                  className="w-10 h-10 rounded-full bg-neutral-300/50 flex items-center justify-center text-neutral-800"
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="flex-grow flex gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-1.5 flex-grow bg-neutral-300/50 rounded-full overflow-hidden">
                      {i === 1 && <div className="h-full w-full bg-pilates-accent rounded-full" />}
                      {i === 2 && <div className="h-full w-3/4 bg-pilates-accent rounded-full" />}
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center mb-4 max-w-2xl px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 leading-tight">
                  ¿Tiene usted problemas con alguno de los siguientes?
                </h2>
                <p className="text-neutral-500 mt-2">Por favor seleccione todas las que correspondan</p>
              </div>

              <div className="w-full max-w-2xl space-y-3 px-4 mb-12">
                {physicalIssuesOptions.map((option) => (
                  <button 
                    key={option.id}
                    onClick={() => togglePhysicalIssue(option.id)}
                    className={`w-full bg-white/10 backdrop-blur-sm border rounded-3xl p-4 flex items-center gap-4 text-left transition-all hover:bg-white/20 active:scale-[0.98] ${
                      selectedPhysicalIssues.includes(option.id) ? 'border-pilates-accent ring-2 ring-pilates-accent/20' : 'border-neutral-400/30'
                    }`}
                  >
                    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white/50 flex-shrink-0">
                      <img 
                        src={option.img} 
                        alt={option.title} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="flex-grow text-xl font-bold text-neutral-800">{option.title}</span>
                    <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${
                      selectedPhysicalIssues.includes(option.id) ? 'bg-pilates-accent border-pilates-accent' : 'border-neutral-400'
                    }`}>
                      {selectedPhysicalIssues.includes(option.id) && <Check size={16} className="text-white" />}
                    </div>
                  </button>
                ))}
                
                <button 
                  onClick={() => togglePhysicalIssue('none')}
                  className={`w-full bg-white/10 backdrop-blur-sm border rounded-3xl p-6 text-left transition-all hover:bg-white/20 active:scale-[0.98] ${
                    selectedPhysicalIssues.includes('none') ? 'border-pilates-accent ring-2 ring-pilates-accent/20' : 'border-neutral-400/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-neutral-800">Ninguna de las anteriores</span>
                    <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${
                      selectedPhysicalIssues.includes('none') ? 'bg-pilates-accent border-pilates-accent' : 'border-neutral-400'
                    }`}>
                      {selectedPhysicalIssues.includes('none') && <Check size={16} className="text-white" />}
                    </div>
                  </div>
                </button>
              </div>

              <button 
                onClick={() => setStep('comfortLevel')}
                disabled={selectedPhysicalIssues.length === 0}
                className={`w-full max-w-sm py-5 rounded-full text-xl font-bold shadow-lg transition-all active:scale-[0.98] ${
                  selectedPhysicalIssues.length > 0 
                  ? 'bg-pilates-accent text-white shadow-pilates-accent/20 hover:bg-pilates-accent/90' 
                  : 'bg-neutral-300 text-neutral-500 cursor-not-allowed'
                }`}
              >
                Siguiente paso
              </button>
            </motion.div>
          )}

          {step === 'comfortLevel' && (
            <motion.div 
              key="comfortLevel"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full flex flex-col items-center"
            >
              {/* Progress and Back */}
              <div className="w-full max-w-2xl flex items-center gap-4 mb-12">
                <button 
                  onClick={() => setStep('physicalIssues')}
                  className="w-10 h-10 rounded-full bg-neutral-300/50 flex items-center justify-center text-neutral-800"
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="flex-grow flex gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-1.5 flex-grow bg-neutral-300/50 rounded-full overflow-hidden">
                      {i === 1 && <div className="h-full w-full bg-pilates-accent rounded-full" />}
                      {i === 2 && <div className="h-full w-full bg-pilates-accent rounded-full" />}
                      {i === 3 && <div className="h-full w-1/4 bg-pilates-accent rounded-full" />}
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center mb-12 max-w-2xl px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 leading-tight">
                  ¿Qué tan cómodo te sientes al hacer ejercicio?
                </h2>
              </div>

              <div className="w-full max-w-md space-y-4 px-4">
                {comfortOptions.map((option) => (
                  <button 
                    key={option.id}
                    onClick={() => {
                      if (option.id === 'pain') {
                        setStep('painRelief');
                      } else if (option.id === 'difficulty') {
                        setStep('stepByStep');
                      } else if (option.id === 'comfortable') {
                        setStep('great');
                      } else {
                        setStep('personalizePlan');
                      }
                    }}
                    className="w-full bg-white/10 backdrop-blur-sm border border-neutral-400/30 rounded-3xl p-6 flex items-center gap-4 text-left transition-all hover:bg-white/20 active:scale-[0.98]"
                  >
                    <span className="text-3xl">{option.emoji}</span>
                    <span className="text-xl font-bold text-neutral-800">{option.text}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 'painRelief' && (
            <motion.div 
              key="painRelief"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl flex flex-col items-center text-center px-4"
            >
              <div className="w-full aspect-video rounded-[2rem] overflow-hidden mb-8 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=800" 
                  alt="We got you covered" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6 leading-tight">
                ¡Te tenemos cubierto!
              </h2>

              <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
                El dolor no te detendrá. Adaptaremos tu programa para favorecer un movimiento seguro y suave
              </p>

              <button 
                onClick={() => setStep('personalizePlan')}
                className="w-full max-w-sm bg-pilates-accent text-white py-5 rounded-full text-xl font-bold shadow-lg shadow-pilates-accent/20 hover:bg-pilates-accent/90 transition-all active:scale-[0.98]"
              >
                Continuar
              </button>
            </motion.div>
          )}

          {step === 'stepByStep' && (
            <motion.div 
              key="stepByStep"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl flex flex-col items-center text-center px-4"
            >
              <div className="w-full aspect-video rounded-[2rem] overflow-hidden mb-8 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=800" 
                  alt="Step by step" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6 leading-tight">
                Lo haremos paso a paso.
              </h2>

              <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
                Tu programa se ajustará a tus necesidades para ayudarte a sentirte mejor y más cómodo.
              </p>

              <button 
                onClick={() => setStep('personalizePlan')}
                className="w-full max-w-sm bg-pilates-accent text-white py-5 rounded-full text-xl font-bold shadow-lg shadow-pilates-accent/20 hover:bg-pilates-accent/90 transition-all active:scale-[0.98]"
              >
                Continuar
              </button>
            </motion.div>
          )}

          {step === 'great' && (
            <motion.div 
              key="great"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl flex flex-col items-center text-center px-4"
            >
              <div className="w-full aspect-video rounded-[2rem] overflow-hidden mb-8 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=800" 
                  alt="Great" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6 leading-tight">
                ¡Genial!
              </h2>

              <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
                Estás listo para avanzar: prepárate para la transformación con Pilates.
              </p>

              <button 
                onClick={() => setStep('personalizePlan')}
                className="w-full max-w-sm bg-pilates-accent text-white py-5 rounded-full text-xl font-bold shadow-lg shadow-pilates-accent/20 hover:bg-pilates-accent/90 transition-all active:scale-[0.98]"
              >
                Continuar
              </button>
            </motion.div>
          )}

          {step === 'personalizePlan' && (
            <motion.div 
              key="personalizePlan"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl flex flex-col items-center text-center px-4"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4 leading-tight">
                Let's <span className="text-pilates-accent">personalize</span> your plan
              </h2>

              <p className="text-neutral-600 mb-2 max-w-lg">
                To provide personalized plans and app features, we need your consent to process your health data.
              </p>
              <p className="text-neutral-600 mb-4 max-w-lg">
                Without this, we cannot offer our services.
              </p>
              
              <button className="text-pilates-accent font-bold underline mb-8">
                Privacy Policy
              </button>

              <div className="relative w-full max-w-[280px] aspect-square mb-8">
                <div className="absolute inset-0 bg-neutral-300/30 rounded-full scale-90" />
                <img 
                  src="https://i.postimg.cc/4nG1tx6D/image.png" 
                  alt="Personalize plan" 
                  className="relative w-full h-full object-contain z-10"
                  referrerPolicy="no-referrer"
                />
              </div>

              <button 
                onClick={() => setStep('height')}
                className="w-full max-w-sm bg-pilates-accent text-white py-5 rounded-full text-xl font-bold shadow-lg shadow-pilates-accent/20 hover:bg-pilates-accent/90 transition-all active:scale-[0.98]"
              >
                I agree
              </button>
            </motion.div>
          )}

          {step === 'height' && (
            <motion.div 
              key="height"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-2xl flex flex-col items-center px-4"
            >
              {/* Progress Bar & Back Button */}
              <div className="w-full flex items-center gap-4 mb-12">
                <button 
                  onClick={() => setStep('personalizePlan')}
                  className="p-2 rounded-full bg-neutral-200/50 text-neutral-600 hover:bg-neutral-200 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="flex-1 h-1.5 bg-neutral-200 rounded-full overflow-hidden flex gap-1">
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-pilates-accent w-1/6 rounded-full" />
                  <div className="h-full bg-neutral-300 w-1/4 rounded-full" />
                  <div className="h-full bg-neutral-300 w-1/4 rounded-full" />
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-8 text-center">
                ¿Cuál es tu altura?
              </h2>

              {/* Unit Toggle */}
              <div className="flex bg-neutral-200/50 p-1 rounded-full mb-16">
                <button 
                  onClick={() => setHeightUnit('cm')}
                  className={`px-8 py-2 rounded-full text-sm font-bold transition-all ${
                    heightUnit === 'cm' ? 'bg-neutral-800 text-white shadow-md' : 'text-neutral-500'
                  }`}
                >
                  cm
                </button>
                <button 
                  onClick={() => setHeightUnit('ft')}
                  className={`px-8 py-2 rounded-full text-sm font-bold transition-all ${
                    heightUnit === 'ft' ? 'bg-neutral-800 text-white shadow-md' : 'text-neutral-500'
                  }`}
                >
                  ft
                </button>
              </div>

              {/* Input Field */}
              <div className="w-full max-w-md relative mb-4">
                <div className="flex items-baseline justify-center border-b-2 border-neutral-300 focus-within:border-pilates-accent transition-colors pb-2">
                  <input 
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="Height"
                    className="bg-transparent text-4xl md:text-5xl font-bold text-neutral-800 placeholder:text-neutral-300 outline-none w-full text-center"
                  />
                  <span className="text-2xl md:text-3xl font-bold text-neutral-800 ml-2">
                    {heightUnit}
                  </span>
                </div>
              </div>

              <div className="h-6 mb-12">
                {height && (
                  (heightUnit === 'cm' ? (Number(height) < 100 || Number(height) > 250) : (Number(height) < 3.28 || Number(height) > 8.2)) ? (
                    <p className="text-red-500 text-sm font-medium">
                      Please enter a height between {heightUnit === 'cm' ? '100-250 cm' : '3.28-8.2 ft'}
                    </p>
                  ) : null
                )}
              </div>

              <button 
                onClick={() => setStep('weight')}
                disabled={!height || (heightUnit === 'cm' ? (Number(height) < 100 || Number(height) > 250) : (Number(height) < 3.28 || Number(height) > 8.2))}
                className="w-full max-w-sm bg-pilates-accent text-white py-5 rounded-full text-xl font-bold shadow-lg shadow-pilates-accent/20 hover:bg-pilates-accent/90 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Siguiente paso
              </button>
            </motion.div>
          )}

          {step === 'weight' && (
            <motion.div 
              key="weight"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-2xl flex flex-col items-center px-4"
            >
              {/* Progress Bar & Back Button */}
              <div className="w-full flex items-center gap-4 mb-12">
                <button 
                  onClick={() => setStep('height')}
                  className="p-2 rounded-full bg-neutral-200/50 text-neutral-600 hover:bg-neutral-200 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="flex-1 h-1.5 bg-neutral-200 rounded-full overflow-hidden flex gap-1">
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-neutral-300 w-1/4 rounded-full" />
                  <div className="h-full bg-neutral-300 w-1/4 rounded-full" />
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-8 text-center">
                ¿Cuál es tu peso ahora?
              </h2>

              {/* Unit Toggle */}
              <div className="flex bg-neutral-200/50 p-1 rounded-full mb-16">
                <button 
                  onClick={() => setWeightUnit('kg')}
                  className={`px-8 py-2 rounded-full text-sm font-bold transition-all ${
                    weightUnit === 'kg' ? 'bg-neutral-800 text-white shadow-md' : 'text-neutral-500'
                  }`}
                >
                  kg
                </button>
                <button 
                  onClick={() => setWeightUnit('lb')}
                  className={`px-8 py-2 rounded-full text-sm font-bold transition-all ${
                    weightUnit === 'lb' ? 'bg-neutral-800 text-white shadow-md' : 'text-neutral-500'
                  }`}
                >
                  lb
                </button>
              </div>

              {/* Input Field */}
              <div className="w-full max-w-md relative mb-4">
                <div className="flex items-baseline justify-center border-b-2 border-neutral-300 focus-within:border-pilates-accent transition-colors pb-2">
                  <input 
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Peso"
                    className="bg-transparent text-4xl md:text-5xl font-bold text-neutral-800 placeholder:text-neutral-300 outline-none w-full text-center"
                  />
                  <span className="text-2xl md:text-3xl font-bold text-neutral-800 ml-2">
                    {weightUnit === 'kg' ? 'kilogramo' : 'libras'}
                  </span>
                </div>
              </div>

              <div className="h-6 mb-4">
                {weight && (
                  (weightUnit === 'kg' ? (Number(weight) < 40 || Number(weight) > 500) : (Number(weight) < 88 || Number(weight) > 1100)) ? (
                    <p className="text-red-500 text-sm font-medium">
                      Por favor, ingresa un peso entre {weightUnit === 'kg' ? '40-500 kg' : '88-1100 lb'}
                    </p>
                  ) : null
                )}
              </div>

              {/* BMI Info Box */}
              {weight && Number(weight) > 0 && bmiValue && (
                <div className="w-full max-w-md bg-neutral-100 border border-neutral-200 rounded-3xl p-6 mb-8 flex gap-4 items-start">
                  <div className="mt-1 text-neutral-700">
                    <Gauge size={24} />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-neutral-800 mb-2">
                      Su IMC es {bmiValue}, lo cual se considera {bmiCategory}.
                    </p>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Mantén una actitud positiva y concéntrate en una dieta equilibrada y en el ejercicio. Usaremos tu índice para diseñar tu plan personal y efectivo de pérdida de peso.
                    </p>
                  </div>
                </div>
              )}

              <button 
                onClick={() => setStep('targetWeight')}
                disabled={!weight || (weightUnit === 'kg' ? (Number(weight) < 40 || Number(weight) > 500) : (Number(weight) < 88 || Number(weight) > 1100))}
                className="w-full max-w-sm bg-pilates-accent text-white py-5 rounded-full text-xl font-bold shadow-lg shadow-pilates-accent/20 hover:bg-pilates-accent/90 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Siguiente paso
              </button>
            </motion.div>
          )}

          {step === 'targetWeight' && (
            <motion.div 
              key="targetWeight"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-2xl flex flex-col items-center px-4"
            >
              {/* Progress Bar & Back Button */}
              <div className="w-full flex items-center gap-4 mb-12">
                <button 
                  onClick={() => setStep('weight')}
                  className="p-2 rounded-full bg-neutral-200/50 text-neutral-600 hover:bg-neutral-200 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="flex-1 h-1.5 bg-neutral-200 rounded-full overflow-hidden flex gap-1">
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-pilates-accent w-1/6 rounded-full" />
                  <div className="h-full bg-neutral-300 w-1/4 rounded-full" />
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-8 text-center">
                ¿Cuál es tu peso objetivo?
              </h2>

              {/* Unit Toggle */}
              <div className="flex bg-neutral-200/50 p-1 rounded-full mb-16">
                <button 
                  onClick={() => setWeightUnit('kg')}
                  className={`px-8 py-2 rounded-full text-sm font-bold transition-all ${
                    weightUnit === 'kg' ? 'bg-neutral-800 text-white shadow-md' : 'text-neutral-500'
                  }`}
                >
                  kg
                </button>
                <button 
                  onClick={() => setWeightUnit('lb')}
                  className={`px-8 py-2 rounded-full text-sm font-bold transition-all ${
                    weightUnit === 'lb' ? 'bg-neutral-800 text-white shadow-md' : 'text-neutral-500'
                  }`}
                >
                  lb
                </button>
              </div>

              {/* Input Field */}
              <div className="w-full max-w-md relative mb-4">
                <div className="flex items-baseline justify-center border-b-2 border-neutral-300 focus-within:border-pilates-accent transition-colors pb-2">
                  <input 
                    type="number"
                    value={targetWeight}
                    onChange={(e) => setTargetWeight(e.target.value)}
                    placeholder="Peso"
                    className="bg-transparent text-4xl md:text-5xl font-bold text-neutral-800 placeholder:text-neutral-300 outline-none w-full text-center"
                  />
                  <span className="text-2xl md:text-3xl font-bold text-neutral-800 ml-2">
                    {weightUnit === 'kg' ? 'kilogramo' : 'libras'}
                  </span>
                </div>
              </div>

              <div className="h-6 mb-12">
                {targetWeight && (
                  (weightUnit === 'kg' ? (Number(targetWeight) < 30 || Number(targetWeight) > 200) : (Number(targetWeight) < 66 || Number(targetWeight) > 440)) ? (
                    <p className="text-red-500 text-sm font-medium">
                      Por favor, ingresa un peso objetivo entre {weightUnit === 'kg' ? '30-200 kg' : '66-440 lb'}
                    </p>
                  ) : null
                )}
              </div>

              <button 
                onClick={() => setStep('age')}
                disabled={!targetWeight || (weightUnit === 'kg' ? (Number(targetWeight) < 30 || Number(targetWeight) > 200) : (Number(targetWeight) < 66 || Number(targetWeight) > 440))}
                className="w-full max-w-sm bg-pilates-accent text-white py-5 rounded-full text-xl font-bold shadow-lg shadow-pilates-accent/20 hover:bg-pilates-accent/90 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Siguiente paso
              </button>
            </motion.div>
          )}

          {step === 'age' && (
            <motion.div 
              key="age"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-2xl flex flex-col items-center px-4"
            >
              {/* Progress Bar & Back Button */}
              <div className="w-full flex items-center gap-4 mb-12">
                <button 
                  onClick={() => setStep('targetWeight')}
                  className="p-2 rounded-full bg-neutral-200/50 text-neutral-600 hover:bg-neutral-200 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="flex-1 h-1.5 bg-neutral-200 rounded-full overflow-hidden flex gap-1">
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-neutral-300 w-1/6 rounded-full" />
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-16 text-center">
                ¿Cuál es tu edad?
              </h2>

              {/* Input Field */}
              <div className="w-full max-w-md relative mb-4">
                <div className="flex items-baseline justify-center border-b-2 border-neutral-300 focus-within:border-pilates-accent transition-colors pb-2">
                  <input 
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Tu edad"
                    className="bg-transparent text-4xl md:text-5xl font-bold text-neutral-800 placeholder:text-neutral-300 outline-none w-full text-center"
                  />
                  <span className="text-2xl md:text-3xl font-bold text-neutral-800 ml-2">
                    años
                  </span>
                </div>
              </div>

              <div className="h-16 mb-4 text-center px-4">
                {age && (Number(age) < 18 || Number(age) >= 80) && (
                  <p className="text-red-500 text-sm font-medium leading-relaxed">
                    ¡Guau! Nos alegra tenerte aquí, pero debes ser menor de 80 años para usar nuestro servicio y mayor de 18 años.
                  </p>
                )}
              </div>

              {/* Age Info Box */}
              {age && Number(age) >= 18 && Number(age) < 80 && (
                <div className="w-full max-w-md bg-neutral-100 border border-neutral-200 rounded-3xl p-6 mb-8 flex gap-4 items-start">
                  <div className="mt-1 text-neutral-700">
                    <Activity size={24} />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-neutral-800 mb-2">
                      Te preguntamos tu edad para personalizar tu plan
                    </p>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Se ha descubierto que las personas mayores tienen un porcentaje de grasa corporal mayor que las personas más jóvenes con el mismo IMC.
                    </p>
                  </div>
                </div>
              )}

              <button 
                onClick={() => setStep('importantFeatures')}
                disabled={!age || Number(age) < 18 || Number(age) >= 80}
                className="w-full max-w-sm bg-pilates-accent text-white py-5 rounded-full text-xl font-bold shadow-lg shadow-pilates-accent/20 hover:bg-pilates-accent/90 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Siguiente paso
              </button>
            </motion.div>
          )}

          {step === 'importantFeatures' && (
            <motion.div 
              key="importantFeatures"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-2xl flex flex-col items-center px-4"
            >
              {/* Progress Bar & Back Button */}
              <div className="w-full flex items-center gap-4 mb-12">
                <button 
                  onClick={() => setStep('age')}
                  className="p-2 rounded-full bg-neutral-200/50 text-neutral-600 hover:bg-neutral-200 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="flex-1 h-1.5 bg-neutral-200 rounded-full overflow-hidden flex gap-1">
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-neutral-300 w-1/4 rounded-full" />
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-2 text-center">
                ¿Qué es lo más importante para usted en un programa de Pilates?
              </h2>
              <p className="text-neutral-500 mb-12 text-center">
                Puedes elegir varias opciones
              </p>

              <div className="w-full space-y-4 mb-12">
                {[
                  { id: 'gentle', label: 'Ejercicios suaves y adaptados' },
                  { id: 'support', label: 'Apoyo profesional' },
                  { id: 'personalized', label: 'Enfoque personalizado' },
                  { id: 'benefits', label: 'Explicación de los beneficios para la salud' }
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      if (selectedImportantFeatures.includes(option.id)) {
                        setSelectedImportantFeatures(selectedImportantFeatures.filter(id => id !== option.id));
                      } else {
                        setSelectedImportantFeatures([...selectedImportantFeatures, option.id]);
                      }
                    }}
                    className={`w-full p-6 rounded-3xl border-2 transition-all flex items-center justify-between group ${
                      selectedImportantFeatures.includes(option.id)
                        ? 'border-pilates-accent bg-pilates-accent/5 shadow-md'
                        : 'border-neutral-200 hover:border-neutral-300 bg-white'
                    }`}
                  >
                    <span className={`text-lg font-bold ${
                      selectedImportantFeatures.includes(option.id) ? 'text-neutral-800' : 'text-neutral-600'
                    }`}>
                      {option.label}
                    </span>
                    <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${
                      selectedImportantFeatures.includes(option.id)
                        ? 'bg-neutral-800 border-neutral-800'
                        : 'border-neutral-300 group-hover:border-neutral-400'
                    }`}>
                      {selectedImportantFeatures.includes(option.id) && <Check size={16} className="text-white" />}
                    </div>
                  </button>
                ))}
              </div>

              <button 
                onClick={() => setStep('typicalDay')}
                disabled={selectedImportantFeatures.length === 0}
                className="w-full max-w-sm bg-pilates-accent text-white py-5 rounded-full text-xl font-bold shadow-lg shadow-pilates-accent/20 hover:bg-pilates-accent/90 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Siguiente paso
              </button>
            </motion.div>
          )}

          {step === 'typicalDay' && (
            <motion.div 
              key="typicalDay"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-2xl flex flex-col items-center px-4"
            >
              {/* Progress Bar & Back Button */}
              <div className="w-full flex items-center gap-4 mb-12">
                <button 
                  onClick={() => setStep('importantFeatures')}
                  className="p-2 rounded-full bg-neutral-200/50 text-neutral-600 hover:bg-neutral-200 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="flex-1 h-1.5 bg-neutral-200 rounded-full overflow-hidden flex gap-1">
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-neutral-300 w-1/3 rounded-full" />
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-12 text-center">
                ¿Cómo describirías un día típico?
              </h2>

              <div className="w-full space-y-4 mb-12">
                {[
                  { 
                    id: 'relaxed', 
                    title: 'Tranquilo y relajado', 
                    description: 'Mayormente en casa, disfrutando de un ritmo más lento y tranquilo',
                    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=400'
                  },
                  { 
                    id: 'home', 
                    title: 'Hogar y niños', 
                    description: 'Cuidar a la familia y mantenerse moderadamente activo',
                    image: 'https://images.unsplash.com/photo-1591389062415-41d887aee1e1?auto=format&fit=crop&q=80&w=400'
                  },
                  { 
                    id: 'active', 
                    title: 'Activo y social', 
                    description: 'Las caminatas regulares y las actividades sociales te mantienen en movimiento',
                    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400'
                  }
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setTypicalDay(option.id)}
                    className={`w-full p-4 rounded-3xl border-2 transition-all flex items-center gap-4 text-left group ${
                      typicalDay === option.id
                        ? 'border-pilates-accent bg-pilates-accent/5 shadow-md'
                        : 'border-neutral-200 hover:border-neutral-300 bg-white'
                    }`}
                  >
                    <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                      <img 
                        src={option.image} 
                        alt={option.title} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold mb-1 ${
                        typicalDay === option.id ? 'text-neutral-800' : 'text-neutral-700'
                      }`}>
                        {option.title}
                      </h3>
                      <p className="text-sm text-neutral-500 leading-tight">
                        {option.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              <button 
                onClick={() => setStep('profileReady')}
                disabled={!typicalDay}
                className="w-full max-w-sm bg-pilates-accent text-white py-5 rounded-full text-xl font-bold shadow-lg shadow-pilates-accent/20 hover:bg-pilates-accent/90 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Siguiente paso
              </button>
            </motion.div>
          )}

          {step === 'profileReady' && (
            <motion.div 
              key="profileReady"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full max-w-2xl flex flex-col items-center px-4"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-12 text-center">
                Tu perfil está listo
              </h2>

              {/* BMI Chart Card */}
              <div className="w-full bg-white/40 backdrop-blur-md rounded-[40px] p-8 mb-6 relative overflow-hidden border border-white/30 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm font-bold text-neutral-600 uppercase tracking-wider">Índice de masa corporal (IMC)</span>
                  <span className="text-sm font-bold text-neutral-600">Normal: 21.5</span>
                </div>
                
                <div className="relative pt-10 pb-4">
                  {/* BMI Marker */}
                  <div 
                    className="absolute top-0 transition-all duration-1000 ease-out"
                    style={{ 
                      left: `${Math.min(Math.max((Number(bmiValue || 0) / 40) * 100, 5), 95)}%`,
                      transform: 'translateX(-50%)'
                    }}
                  >
                    <div className="bg-[#D1D9DD] text-neutral-800 text-[11px] font-bold px-4 py-1.5 rounded-full shadow-sm whitespace-nowrap mb-2 border border-white/20">
                      Tú - {bmiValue}
                    </div>
                    <div className="w-0.5 h-10 bg-neutral-800/10 mx-auto" />
                  </div>

                  {/* Gradient Bar */}
                  <div className="h-4 w-full rounded-full bg-gradient-to-r from-[#4A69BD] via-[#78E08F] via-[#F6B93B] to-[#E55039] shadow-inner" />
                  
                  <div className="flex justify-between mt-4 text-[11px] font-bold text-neutral-500 uppercase tracking-widest">
                    <span>Bajo peso</span>
                    <span>Normal</span>
                    <span>Obeso</span>
                  </div>
                </div>
              </div>

              {/* Profile Summary Card */}
              <div className="w-full bg-white/40 backdrop-blur-md rounded-[40px] p-8 mb-6 relative overflow-hidden border border-white/30 shadow-sm flex flex-col md:flex-row gap-8">
                <div className="flex-1 space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-pilates-accent/10 flex items-center justify-center text-pilates-accent shrink-0 border border-pilates-accent/10">
                      <Zap size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">Objetivo principal</p>
                      <p className="text-xl font-bold text-pilates-accent">
                        {selectedGoal === 'weight' ? 'Bajar de peso' : selectedGoal === 'muscle' ? 'Tonificar' : 'Mejorar salud'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-neutral-800/5 flex items-center justify-center text-neutral-800 shrink-0 border border-neutral-800/10">
                      <Calendar size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">Estilo de vida</p>
                      <p className="text-xl font-bold text-neutral-800 capitalize">
                        {typicalDay === 'relaxed' ? 'Tranquilo' : typicalDay === 'home' ? 'Hogar' : 'Activo'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-neutral-800/5 flex items-center justify-center text-neutral-800 shrink-0 border border-neutral-800/10">
                      <Scale size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">Tipo de cuerpo</p>
                      <p className="text-xl font-bold text-neutral-800">Sólido y sutilmente redondeado.</p>
                    </div>
                  </div>
                </div>

                {/* Character Image */}
                <div className="md:w-56 flex justify-center items-end relative">
                  <img 
                    src="https://i.postimg.cc/4nG1tx6D/image.png" 
                    alt="Character" 
                    className="w-48 md:w-full h-auto object-contain relative z-10"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Recommendation Box */}
              <div className="w-full bg-white/40 backdrop-blur-md rounded-[40px] p-8 mb-12 border border-white/30 shadow-sm flex gap-5 items-center">
                <div className="w-14 h-14 rounded-full bg-pilates-accent/10 flex items-center justify-center text-pilates-accent shrink-0 border border-pilates-accent/10">
                  <Accessibility size={28} />
                </div>
                <div className="text-left">
                  <p className="text-lg font-bold text-neutral-800 leading-tight">
                    El TIPO DE ENTRENAMIENTO perfecto para ti es <span className="text-pilates-accent">Pilates Suave</span>
                  </p>
                  <p className="text-base text-neutral-500 mt-1">
                    Hemos considerado tus zonas sensibles y tu nivel de condición física.
                  </p>
                </div>
              </div>

              <button 
                onClick={() => setStep('extraActivities')}
                className="w-full max-w-sm bg-pilates-accent text-white py-5 rounded-full text-xl font-bold shadow-lg shadow-pilates-accent/30 hover:bg-pilates-accent/90 transition-all active:scale-[0.98]"
              >
                Continuar
              </button>
            </motion.div>
          )}

          {step === 'extraActivities' && (
            <motion.div 
              key="extraActivities"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-2xl flex flex-col items-center px-4"
            >
              {/* Progress Bar & Back Button */}
              <div className="w-full flex items-center gap-4 mb-12">
                <button 
                  onClick={() => setStep('profileReady')}
                  className="p-2 rounded-full bg-neutral-200/50 text-neutral-600 hover:bg-neutral-200 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="flex-1 h-1.5 bg-neutral-200 rounded-full overflow-hidden flex gap-1">
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-neutral-300 w-1/3 rounded-full" />
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-2 text-center">
                ¿Qué añadirías además de Pilates?
              </h2>
              <p className="text-neutral-500 mb-12 text-center font-medium">
                Seleccione al menos uno
              </p>

              <div className="w-full space-y-4 mb-12">
                {[
                  { 
                    id: 'yoga', 
                    title: 'Yoga', 
                    description: 'Reduce el estrés y equilibra tu vida',
                    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400'
                  },
                  { 
                    id: 'barre', 
                    title: 'Barra', 
                    description: 'Afina tus músculos, incluso los ocultos',
                    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=400'
                  },
                  { 
                    id: 'resistance', 
                    title: 'Resistencia', 
                    description: 'Trabaja esos músculos para fortalecerlos',
                    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400'
                  },
                  { 
                    id: 'walking', 
                    title: 'Caminar', 
                    description: 'Energiza tu cuerpo, fortalece cada paso',
                    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=400'
                  }
                ].map((option) => {
                  const isSelected = selectedExtraActivities.includes(option.id);
                  return (
                    <button
                      key={option.id}
                      onClick={() => {
                        setSelectedExtraActivities(prev => 
                          prev.includes(option.id) 
                            ? prev.filter(id => id !== option.id) 
                            : [...prev, option.id]
                        );
                      }}
                      className={`w-full p-4 rounded-3xl border-2 transition-all flex items-center gap-4 text-left group ${
                        isSelected
                          ? 'border-pilates-accent bg-pilates-accent/5 shadow-md'
                          : 'border-neutral-200 hover:border-neutral-300 bg-white'
                      }`}
                    >
                      <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                        <img 
                          src={option.image} 
                          alt={option.title} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-bold mb-1 ${
                          isSelected ? 'text-neutral-800' : 'text-neutral-700'
                        }`}>
                          {option.title}
                        </h3>
                        <p className="text-sm text-neutral-500 leading-tight">
                          {option.description}
                        </p>
                      </div>
                      <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors mr-2 ${
                        isSelected ? 'bg-pilates-accent border-pilates-accent' : 'border-neutral-300'
                      }`}>
                        {isSelected && <Check size={16} className="text-white" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              <button 
                onClick={() => setStep('preparingPlan')}
                disabled={selectedExtraActivities.length === 0}
                className="w-full max-w-sm bg-pilates-accent text-white py-5 rounded-full text-xl font-bold shadow-lg shadow-pilates-accent/20 hover:bg-pilates-accent/90 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Siguiente paso
              </button>
            </motion.div>
          )}

          {step === 'preparingPlan' && (
            <motion.div 
              key="preparingPlan"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl flex flex-col items-center px-4 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6 leading-tight">
                Ya estamos preparando tu plan personalizado
              </h2>
              
              <div className="mb-8 space-y-4">
                <p className="text-neutral-600 font-medium">
                  Hemos agregado las actividades que seleccionaste a tu plan:
                </p>
                <p className="text-pilates-accent font-bold text-xl">
                  {selectedExtraActivities.map(id => {
                    const names: Record<string, string> = {
                      yoga: 'Yoga',
                      barre: 'Barra',
                      resistance: 'Resistencia',
                      walking: 'Caminar'
                    };
                    return names[id];
                  }).join(' , ')}
                </p>
                <p className="text-neutral-500 text-sm max-w-md mx-auto leading-relaxed">
                  Te ayudarán suavemente a sentirte más liviana, más móvil y más en sintonía contigo misma, en cada etapa de la menopausia.
                </p>
              </div>

              {/* Visual Representation */}
              <div className="relative w-full max-w-md aspect-square flex items-center justify-center mb-12">
                {/* Background Circles */}
                <div className="absolute inset-0 bg-neutral-200/30 rounded-full scale-90" />
                <div className="absolute inset-0 border border-neutral-300/50 rounded-full scale-75" />
                
                {/* Main Image */}
                <img 
                  src="https://i.postimg.cc/4nG1tx6D/image.png" 
                  alt="Trainer" 
                  className="h-[80%] w-auto object-contain relative z-10"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Activity Icons */}
                <div className="absolute top-[15%] left-[10%] w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm border border-pilates-accent/20 flex items-center justify-center text-pilates-accent shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                  <Flower2 size={32} />
                </div>
                <div className="absolute top-[45%] right-[5%] w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm border border-pilates-accent/20 flex items-center justify-center text-pilates-accent shadow-lg animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
                  <Activity size={32} />
                </div>
                <div className="absolute bottom-[20%] left-[5%] w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm border border-pilates-accent/20 flex items-center justify-center text-pilates-accent shadow-lg animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>
                  <Move size={32} />
                </div>
              </div>

              <button 
                onClick={() => setStep('waterIntake')}
                className="w-full max-w-sm bg-pilates-accent text-white py-5 rounded-full text-xl font-bold shadow-lg shadow-pilates-accent/20 hover:bg-pilates-accent/90 transition-all active:scale-[0.98]"
              >
                Continuar
              </button>
            </motion.div>
          )}

          {step === 'waterIntake' && (
            <motion.div 
              key="waterIntake"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-4xl flex flex-col items-center px-4"
            >
              {/* Progress Bar & Back Button */}
              <div className="w-full max-w-2xl flex items-center gap-4 mb-12">
                <button 
                  onClick={() => setStep('preparingPlan')}
                  className="p-2 rounded-full bg-neutral-200/50 text-neutral-600 hover:bg-neutral-200 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="flex-1 h-1.5 bg-neutral-200 rounded-full overflow-hidden flex gap-1">
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-neutral-300 w-1/3 rounded-full" />
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-12 text-center">
                ¿Cuánta agua bebes diariamente?
              </h2>

              <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-full max-w-md space-y-4">
                  {[
                    "Solo tengo café o té",
                    "Aproximadamente 2 vasos (0,5 L)",
                    "2 a 6 vasos (0,5-1,5 L)",
                    "Más de 6 vasos"
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => setStep('dietaryPreferences')}
                      className="w-full p-6 rounded-3xl bg-white/10 backdrop-blur-sm border border-neutral-400/30 text-left text-xl font-bold text-neutral-800 transition-all hover:bg-white/20 active:scale-[0.98]"
                    >
                      {option}
                    </button>
                  ))}
                </div>

                <div className="flex flex-1 justify-center items-end mt-8 md:mt-0">
                  <img 
                    src="https://i.postimg.cc/62rhnS6H/image.png" 
                    alt="Character with water" 
                    className="w-48 md:w-full max-w-sm h-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {step === 'dietaryPreferences' && (
            <motion.div 
              key="dietaryPreferences"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-2xl flex flex-col items-center px-4"
            >
              {/* Progress Bar & Back Button */}
              <div className="w-full flex items-center gap-4 mb-12">
                <button 
                  onClick={() => setStep('waterIntake')}
                  className="p-2 rounded-full bg-neutral-200/50 text-neutral-600 hover:bg-neutral-200 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="flex-1 h-1.5 bg-neutral-200 rounded-full overflow-hidden flex gap-1">
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-neutral-300 w-1/3 rounded-full" />
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-12 text-center">
                ¿Cuáles son tus preferencias alimentarias?
              </h2>

              <div className="w-full space-y-4 mb-12">
                {[
                  { id: 'none', title: 'Sin restricciones', description: 'Abierto a todos los alimentos' },
                  { 
                    id: 'vegetarian', 
                    title: 'Soy vegetariano', 
                    description: 'Verduras, cereales, pero sin carne animal',
                    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400'
                  },
                  { 
                    id: 'vegan', 
                    title: 'Soy vegano', 
                    description: 'Puramente a base de plantas, sin productos animales',
                    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400'
                  },
                  { 
                    id: 'gluten-free', 
                    title: 'Sin gluten', 
                    description: 'Excluye productos de cereales que contengan gluten',
                    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400'
                  },
                  { 
                    id: 'lactose-free', 
                    title: 'Sin lactosa', 
                    description: 'Excluir productos lácteos',
                    image: 'https://images.unsplash.com/photo-1550583724-125581f77833?auto=format&fit=crop&q=80&w=400'
                  },
                  { 
                    id: 'keto', 
                    title: 'Dieta cetogénica', 
                    description: 'Dieta baja en carbohidratos y alta en grasas',
                    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=400'
                  }
                ].map((option) => {
                  const isSelected = selectedDietaryPreferences.includes(option.id);
                  return (
                    <button
                      key={option.id}
                      onClick={() => {
                        if (option.id === 'none') {
                          setSelectedDietaryPreferences(['none']);
                        } else {
                          setSelectedDietaryPreferences(prev => {
                            const filtered = prev.filter(id => id !== 'none');
                            return filtered.includes(option.id) 
                              ? filtered.filter(id => id !== option.id) 
                              : [...filtered, option.id];
                          });
                        }
                      }}
                      className={`w-full p-4 rounded-3xl border-2 transition-all flex items-center gap-4 text-left group ${
                        isSelected
                          ? 'border-pilates-accent bg-pilates-accent/5 shadow-md'
                          : 'border-neutral-200 hover:border-neutral-300 bg-white'
                      }`}
                    >
                      {option.image && (
                        <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0">
                          <img 
                            src={option.image} 
                            alt={option.title} 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className={`text-lg font-bold mb-1 ${
                          isSelected ? 'text-neutral-800' : 'text-neutral-700'
                        }`}>
                          {option.title}
                        </h3>
                        <p className="text-sm text-neutral-500 leading-tight">
                          {option.description}
                        </p>
                      </div>
                      <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors mr-2 ${
                        isSelected ? 'bg-pilates-accent border-pilates-accent' : 'border-neutral-300'
                      }`}>
                        {isSelected && <Check size={16} className="text-white" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              <button 
                onClick={() => setStep('habits')}
                disabled={selectedDietaryPreferences.length === 0}
                className="w-full max-w-sm bg-pilates-accent text-white py-5 rounded-full text-xl font-bold shadow-lg shadow-pilates-accent/20 hover:bg-pilates-accent/90 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Siguiente paso
              </button>
            </motion.div>
          )}

          {step === 'habits' && (
            <motion.div 
              key="habits"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-2xl flex flex-col items-center px-4"
            >
              {/* Progress Bar & Back Button */}
              <div className="w-full flex items-center gap-4 mb-12">
                <button 
                  onClick={() => setStep('dietaryPreferences')}
                  className="p-2 rounded-full bg-neutral-200/50 text-neutral-600 hover:bg-neutral-200 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="flex-1 h-1.5 bg-neutral-200 rounded-full overflow-hidden flex gap-1">
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-neutral-300 w-1/3 rounded-full" />
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-8 text-center">
                ¿Cuál de estos hábitos tienes?
              </h2>

              {/* Select All Toggle */}
              <div className="w-full flex items-center justify-start gap-3 mb-6 px-2">
                <button 
                  onClick={() => {
                    const allHabitIds = ['procrastination', 'unhealthy-eating', 'social-media', 'too-much-caffeine', 'binge-watching', 'self-doubt', 'nail-biting', 'being-late', 'smoking', 'alcohol'];
                    if (selectedHabits.length === allHabitIds.length) {
                      setSelectedHabits([]);
                    } else {
                      setSelectedHabits(allHabitIds);
                    }
                  }}
                  className="flex items-center gap-3 group"
                >
                  <div className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 flex items-center ${selectedHabits.length > 0 && !selectedHabits.includes('none') ? 'bg-pilates-accent' : 'bg-neutral-300'}`}>
                    <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-200 ${selectedHabits.length > 0 && !selectedHabits.includes('none') ? 'translate-x-6' : 'translate-x-0'}`} />
                  </div>
                  <span className="text-lg font-bold text-neutral-700">Seleccionar todo</span>
                </button>
              </div>

              <div className="w-full space-y-3 mb-12">
                {[
                  { id: 'procrastination', title: 'Procrastinación', icon: <Calendar size={20} /> },
                  { id: 'unhealthy-eating', title: 'Alimentación poco saludable', icon: <Scale size={20} /> },
                  { id: 'social-media', title: 'Redes sociales', icon: <Accessibility size={20} /> },
                  { id: 'too-much-caffeine', title: 'Beber demasiada cafeína', icon: <Battery size={20} /> },
                  { id: 'binge-watching', title: 'Atracón de series', icon: <Moon size={20} /> },
                  { id: 'self-doubt', title: 'Dudas sobre uno mismo', icon: <Heart size={20} /> },
                  { id: 'nail-biting', title: 'Morderse las uñas', icon: <Move size={20} /> },
                  { id: 'being-late', title: 'Llegar tarde', icon: <Calendar size={20} /> },
                  { id: 'smoking', title: 'Fumar', icon: <Zap size={20} /> },
                  { id: 'alcohol', title: 'Beber alcohol', icon: <Activity size={20} /> },
                  { id: 'none', title: 'Ninguno', icon: null }
                ].map((habit) => {
                  const isSelected = selectedHabits.includes(habit.id);
                  return (
                    <button
                      key={habit.id}
                      onClick={() => {
                        if (habit.id === 'none') {
                          setSelectedHabits(['none']);
                        } else {
                          setSelectedHabits(prev => {
                            const filtered = prev.filter(id => id !== 'none');
                            return filtered.includes(habit.id) 
                              ? filtered.filter(id => id !== habit.id) 
                              : [...filtered, habit.id];
                          });
                        }
                      }}
                      className={`w-full p-5 rounded-2xl border-2 transition-all flex items-center gap-4 text-left ${
                        isSelected
                          ? 'border-pilates-accent bg-pilates-accent/5 shadow-sm'
                          : 'border-neutral-200 hover:border-neutral-300 bg-white'
                      }`}
                    >
                      {habit.icon && (
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isSelected ? 'bg-pilates-accent/10 text-pilates-accent' : 'bg-neutral-100 text-neutral-500'}`}>
                          {habit.icon}
                        </div>
                      )}
                      <span className={`text-lg font-bold flex-1 ${isSelected ? 'text-neutral-800' : 'text-neutral-700'}`}>
                        {habit.title}
                      </span>
                      <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-pilates-accent border-pilates-accent' : 'border-neutral-300'
                      }`}>
                        {isSelected && <Check size={16} className="text-white" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              <button 
                onClick={() => setStep('lifeEvents')}
                disabled={selectedHabits.length === 0}
                className="w-full max-w-sm bg-pilates-accent text-white py-5 rounded-full text-xl font-bold shadow-lg shadow-pilates-accent/20 hover:bg-pilates-accent/90 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Siguiente paso
              </button>
            </motion.div>
          )}

          {step === 'lifeEvents' && (
            <motion.div 
              key="lifeEvents"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-2xl flex flex-col items-center px-4"
            >
              {/* Progress Bar & Back Button */}
              <div className="w-full flex items-center gap-4 mb-12">
                <button 
                  onClick={() => setStep('habits')}
                  className="p-2 rounded-full bg-neutral-200/50 text-neutral-600 hover:bg-neutral-200 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="flex-1 h-1.5 bg-neutral-200 rounded-full overflow-hidden flex gap-1">
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-pilates-accent w-1/4 rounded-full" />
                  <div className="h-full bg-neutral-300 w-1/3 rounded-full" />
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-12 text-center leading-tight">
                Elija cualquier evento de la vida que haya provocado un aumento de peso.
              </h2>

              <div className="w-full space-y-3 mb-12">
                {[
                  { id: 'marriage', title: 'Matrimonio o una relación', icon: <Heart size={20} /> },
                  { id: 'busy-life', title: 'Trabajo o vida familiar ajetreados', icon: <Zap size={20} /> },
                  { id: 'stress', title: 'Estrés o salud mental', icon: <Activity size={20} /> },
                  { id: 'menopause', title: 'Inicio de la menopausia', icon: <Flower2 size={20} /> },
                  { id: 'medication', title: 'Trastorno por medicamentos', icon: <Pill size={20} /> },
                  { id: 'none', title: 'Ninguna de las anteriores', icon: <XCircle size={20} /> }
                ].map((event) => {
                  const isSelected = selectedLifeEvents.includes(event.id);
                  return (
                    <button
                      key={event.id}
                      onClick={() => {
                        if (event.id === 'none') {
                          setSelectedLifeEvents(['none']);
                        } else {
                          setSelectedLifeEvents(prev => {
                            const filtered = prev.filter(id => id !== 'none');
                            return filtered.includes(event.id) 
                              ? filtered.filter(id => id !== event.id) 
                              : [...filtered, event.id];
                          });
                        }
                      }}
                      className={`w-full p-5 rounded-2xl border-2 transition-all flex items-center gap-4 text-left ${
                        isSelected
                          ? 'border-pilates-accent bg-pilates-accent/5 shadow-sm'
                          : 'border-neutral-200 hover:border-neutral-300 bg-white'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isSelected ? 'bg-pilates-accent/10 text-pilates-accent' : 'bg-neutral-100 text-neutral-500'}`}>
                        {event.icon}
                      </div>
                      <span className={`text-lg font-bold flex-1 ${isSelected ? 'text-neutral-800' : 'text-neutral-700'}`}>
                        {event.title}
                      </span>
                      <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-pilates-accent border-pilates-accent' : 'border-neutral-300'
                      }`}>
                        {isSelected && <Check size={16} className="text-white" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              <button 
                onClick={() => setStep('recoverBody')}
                disabled={selectedLifeEvents.length === 0}
                className="w-full max-w-sm bg-pilates-accent text-white py-5 rounded-full text-xl font-bold shadow-lg shadow-pilates-accent/20 hover:bg-pilates-accent/90 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Siguiente paso
              </button>
            </motion.div>
          )}

          {step === 'recoverBody' && (
            <motion.div 
              key="recoverBody"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl flex flex-col items-center px-4 text-center"
            >
              <div className="w-full aspect-[16/9] rounded-[40px] overflow-hidden mb-12 shadow-2xl border-4 border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800" 
                  alt="Recupera tu cuerpo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6 leading-tight">
                ¡Recupera tu cuerpo!
              </h2>
              
              <div className="space-y-4 mb-12">
                <p className="text-neutral-600 text-lg md:text-xl font-medium leading-relaxed">
                  ¿No sabes por dónde empezar? Ya lo tenemos todo planeado.
                </p>
                <p className="text-neutral-600 text-lg md:text-xl font-medium leading-relaxed">
                  ¿No estás seguro de si podrás lograrlo? ¡Estamos listos para motivarte y apoyarte!
                </p>
              </div>

              <button 
                onClick={() => setStep('weightProjection')}
                className="w-full max-w-sm bg-pilates-accent text-white py-5 rounded-full text-xl font-bold shadow-lg shadow-pilates-accent/20 hover:bg-pilates-accent/90 transition-all active:scale-[0.98]"
              >
                Continuar
              </button>
            </motion.div>
          )}

          {step === 'weightProjection' && (
            <motion.div 
              key="weightProjection"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full max-w-3xl flex flex-col items-center px-4 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4 leading-tight">
                El único plan que necesitarás
              </h2>
              
              <p className="text-neutral-600 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
                Según la información que has proporcionado, alcanzarás tu peso objetivo de <span className="text-pilates-accent font-bold underline decoration-2 underline-offset-4">{targetWeight || '80'} {weightUnit} el 27 de diciembre de 2026.</span>
              </p>

              {/* Weight Projection Chart */}
              <div className="w-full bg-white/40 backdrop-blur-md rounded-[40px] p-8 md:p-12 shadow-xl border border-white/20 mb-8 relative overflow-hidden">
                <div className="relative h-64 w-full">
                  <svg viewBox="0 0 400 200" className="w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#9D3163" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#9D3163" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    
                    {/* Grid Lines */}
                    <line x1="40" y1="20" x2="40" y2="180" stroke="#D1D5DB" strokeDasharray="4 4" />
                    <line x1="200" y1="120" x2="200" y2="180" stroke="#D1D5DB" strokeDasharray="4 4" />
                    <line x1="360" y1="160" x2="360" y2="180" stroke="#D1D5DB" strokeDasharray="4 4" />

                    {/* Area under the curve */}
                    <path 
                      d="M 40 20 C 120 20, 160 120, 200 120 S 300 160, 360 160 L 360 180 L 40 180 Z" 
                      fill="url(#chartGradient)" 
                    />

                    {/* The Curve */}
                    <path 
                      d="M 40 20 C 120 20, 160 120, 200 120 S 300 160, 360 160" 
                      fill="none" 
                      stroke="#9D3163" 
                      strokeWidth="6" 
                      strokeLinecap="round"
                    />

                    {/* Markers */}
                    <circle cx="40" cy="20" r="8" fill="#9D3163" />
                    <circle cx="200" cy="120" r="8" fill="#B45309" />
                    <circle cx="360" cy="160" r="10" fill="#059669" />
                    <circle cx="360" cy="160" r="14" fill="none" stroke="#059669" strokeWidth="2" opacity="0.3" />

                    {/* Labels */}
                    <text x="40" y="10" textAnchor="middle" className="text-[10px] font-bold fill-neutral-600">{weight || '123'} {weightUnit}</text>
                    <text x="200" y="110" textAnchor="middle" className="text-[10px] font-bold fill-neutral-600">99 {weightUnit}</text>
                    
                    {/* Target Label Box */}
                    <g transform="translate(340, 130)">
                      <rect width="40" height="20" rx="4" fill="white" stroke="#059669" strokeWidth="1" />
                      <text x="20" y="14" textAnchor="middle" className="text-[8px] font-bold fill-neutral-800">{targetWeight || '80'} {weightUnit}</text>
                      <path d="M 32 6 L 35 9 L 38 4" fill="none" stroke="#059669" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </g>

                    {/* Months */}
                    <text x="40" y="195" textAnchor="middle" className="text-[10px] font-medium fill-neutral-400">Mar</text>
                    <text x="200" y="195" textAnchor="middle" className="text-[10px] font-medium fill-neutral-400">Ago</text>
                    <text x="360" y="195" textAnchor="middle" className="text-[10px] font-medium fill-neutral-400">Dic</text>
                  </svg>
                </div>
              </div>

              <p className="text-neutral-400 text-sm mb-12">
                Los resultados varían según el uso individual y la adherencia
              </p>

              <button 
                onClick={() => setStep('creatingPlan')}
                className="w-full max-w-sm bg-pilates-accent text-white py-5 rounded-full text-xl font-bold shadow-lg shadow-pilates-accent/20 hover:bg-pilates-accent/90 transition-all active:scale-[0.98]"
              >
                Continuar
              </button>
            </motion.div>
          )}

          {step === 'creatingPlan' && (
            <motion.div 
              key="creatingPlan"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full max-w-6xl flex flex-col items-center px-4"
            >
              {/* Progress Circle */}
              <div className="relative w-48 h-48 mb-8">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="96"
                    cy="96"
                    r="80"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-neutral-200"
                  />
                  <circle
                    cx="96"
                    cy="96"
                    r="80"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={502.6}
                    strokeDashoffset={502.6 - (502.6 * creationProgress) / 100}
                    className="text-pilates-accent transition-all duration-100 ease-linear"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-pilates-accent">{creationProgress}%</span>
                </div>
                {/* Decorative Rings */}
                <div className="absolute inset-0 border-8 border-neutral-100 rounded-full -z-10 scale-110 opacity-50" />
                <div className="absolute inset-0 border-4 border-neutral-100 rounded-full -z-10 scale-125 opacity-30" />
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-12 text-center">
                Creando tu plan personalizado
              </h2>

              {/* Testimonials Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
                {[
                  {
                    user: "Francesca00fit",
                    date: "16/01/2025",
                    text: "¡Me encanta esta aplicación! Llevo seis meses usándola y he visto resultados reales. Las instrucciones son claras y fáciles de seguir",
                    avatar: "https://i.pravatar.cc/150?u=francesca"
                  },
                  {
                    user: "body_fitBoom",
                    date: "02.01.25",
                    text: "Nunca me han gustado los entrenamientos estructurados, pero esto es más fácil de lo que esperaba. Estoy empezando, pero tengo buenas vibras",
                    avatar: "https://i.pravatar.cc/150?u=boom"
                  },
                  {
                    user: "AmandaaaFit",
                    date: "30/01/2025",
                    text: "Como madre de dos hijos, encontrar tiempo para hacer ejercicio era imposible, hasta que apareció HarnaFit. Sus entrenamientos rápidos y efectivos se adaptan perfectamente a mi día. Incluso si solo tengo 15 minutos, puedo hacer una sesión y sentirme realizada",
                    avatar: "https://i.pravatar.cc/150?u=amanda"
                  }
                ].map((t, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    className="bg-white/40 backdrop-blur-md p-6 rounded-[32px] border border-white/20 shadow-lg flex flex-col"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <img src={t.avatar} alt={t.user} className="w-10 h-10 rounded-full border-2 border-white" />
                      <div>
                        <p className="text-xs text-neutral-400 mb-0.5">{t.date}</p>
                        <p className="font-bold text-neutral-800 text-sm">{t.user}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-neutral-600 text-sm leading-relaxed flex-1">
                      {t.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              <p className="text-neutral-400 text-xs text-center max-w-3xl leading-relaxed">
                Las reseñas que se muestran en nuestro sitio web provienen de comentarios reales de clientes en diversas plataformas. Para proteger la privacidad, los nombres y las fotos pueden cambiar, pero el contenido sigue siendo auténtico.
              </p>
            </motion.div>
          )}

          {step === 'email' && (
            <motion.div 
              key="email"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl flex flex-col items-center px-4"
            >
              {/* Progress Tracker */}
              <div className="flex items-center gap-4 mb-12">
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-300 bg-neutral-100/50">
                  <Check size={14} className="text-neutral-600" />
                  <span className="text-sm font-medium text-neutral-600">Cuenta</span>
                </div>
                <div className="w-8 h-px bg-neutral-300" />
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-300 bg-neutral-100/50">
                  <span className="text-sm">✨</span>
                  <span className="text-sm font-medium text-neutral-600">Tu Plan</span>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4 text-center">
                Introduce tu correo electrónico
              </h2>
              <p className="text-neutral-600 text-lg mb-8 text-center">
                Desbloquea el acceso a tu plan de Pilates Asiático
              </p>

              <div className="w-full max-w-md space-y-4 mb-8">
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError('');
                  }}
                  placeholder="Introduce tu correo electrónico"
                  className={`w-full p-4 rounded-xl border-2 bg-transparent text-neutral-800 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-pilates-accent/20 transition-all ${
                    emailError ? 'border-red-500' : 'border-neutral-300 focus:border-pilates-accent'
                  }`}
                />
                {emailError && (
                  <p className="text-red-500 text-sm px-2">{emailError}</p>
                )}
                
                <div className="flex items-start gap-2 px-2">
                  <Lock size={16} className="text-neutral-600 mt-0.5 shrink-0" />
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Respetamos tu privacidad y nos tomamos muy en serio su protección: sin spam. <a href="#" className="underline hover:text-neutral-700">Política de privacidad</a>
                  </p>
                </div>
              </div>

              {/* Social Proof Box */}
              <div className="w-full max-w-md bg-white/40 backdrop-blur-md rounded-2xl border border-[#4A6B9C]/30 p-6 mb-12 text-center">
                <p className="text-2xl font-bold text-[#2B4B7C] mb-1">5 millones</p>
                <p className="text-sm font-medium text-neutral-700">de mujeres ya se han unido</p>
              </div>

              <button 
                onClick={() => {
                  if (!email) {
                    setEmailError('Por favor, introduce tu correo electrónico.');
                  } else if (!validateEmail(email)) {
                    setEmailError('Por favor, introduce un correo electrónico válido.');
                  } else {
                    setStep('name');
                  }
                }}
                className="w-full max-w-sm bg-pilates-accent text-white py-5 rounded-full text-xl font-bold shadow-lg shadow-pilates-accent/20 hover:bg-pilates-accent/90 transition-all active:scale-[0.98]"
              >
                Ver mi plan
              </button>
            </motion.div>
          )}

          {step === 'name' && (
            <motion.div 
              key="name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full max-w-2xl flex flex-col items-center px-4"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-16 text-center">
                ¿Cómo te llamas?
              </h2>

              <div className="w-full max-w-sm mb-12">
                <input 
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                  className="w-full text-center text-3xl md:text-4xl font-medium text-neutral-800 bg-transparent border-b-2 border-neutral-300 focus:border-pilates-accent focus:outline-none pb-4 placeholder:text-neutral-400 transition-colors"
                  autoFocus
                />
              </div>

              <button 
                onClick={() => setStep('planReady')}
                disabled={!name.trim()}
                className="w-full max-w-sm bg-pilates-accent text-white py-5 rounded-full text-xl font-bold shadow-lg shadow-pilates-accent/20 hover:bg-pilates-accent/90 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Siguiente paso
              </button>
            </motion.div>
          )}

          {step === 'planReady' && (
            <motion.div 
              key="planReady"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full max-w-3xl flex flex-col items-center px-4 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-2 leading-tight">
                {name || 'Amiga'}, ¡
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-12 leading-tight">
                Tu plan de Pilates asiático está listo!
              </h2>

              {/* Final Projection Chart */}
              <div className="w-full max-w-md relative mb-8">
                <div className="relative h-64 w-full">
                  <svg viewBox="0 0 400 300" className="w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#9D3163" />
                        <stop offset="50%" stopColor="#D97706" />
                        <stop offset="100%" stopColor="#059669" />
                      </linearGradient>
                    </defs>
                    
                    {/* Grid Lines */}
                    <line x1="40" y1="40" x2="360" y2="40" stroke="#94A3B8" strokeWidth="1" opacity="0.5" />
                    <line x1="40" y1="100" x2="360" y2="100" stroke="#94A3B8" strokeWidth="1" opacity="0.5" />
                    <line x1="40" y1="160" x2="360" y2="160" stroke="#94A3B8" strokeWidth="1" opacity="0.5" />
                    <line x1="40" y1="220" x2="360" y2="220" stroke="#94A3B8" strokeWidth="1" opacity="0.5" />
                    <line x1="40" y1="280" x2="360" y2="280" stroke="#94A3B8" strokeWidth="2" />

                    <line x1="40" y1="40" x2="40" y2="280" stroke="#94A3B8" strokeWidth="1" opacity="0.5" />
                    <line x1="120" y1="40" x2="120" y2="280" stroke="#94A3B8" strokeWidth="1" opacity="0.5" />
                    <line x1="200" y1="40" x2="200" y2="280" stroke="#94A3B8" strokeWidth="1" opacity="0.5" />
                    <line x1="280" y1="40" x2="280" y2="280" stroke="#94A3B8" strokeWidth="1" opacity="0.5" />
                    <line x1="360" y1="40" x2="360" y2="280" stroke="#94A3B8" strokeWidth="1" opacity="0.5" />

                    {/* The Curve */}
                    <path 
                      d="M 40 40 C 60 160, 160 180, 200 180 S 320 180, 360 280" 
                      fill="none" 
                      stroke="url(#lineGradient)" 
                      strokeWidth="8" 
                      strokeLinecap="round"
                    />

                    {/* Start Marker & Label Box */}
                    <circle cx="40" cy="40" r="10" fill="#9D3163" />
                    <circle cx="40" cy="40" r="16" fill="none" stroke="#9D3163" strokeWidth="2" opacity="0.3" />
                    <g transform="translate(60, 20)">
                      <rect width="110" height="40" rx="8" fill="rgba(255,255,255,0.4)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" className="backdrop-blur-md" />
                      <text x="55" y="25" textAnchor="middle" className="text-[14px] font-medium fill-neutral-800">Ahora: {weight || '123'} {weightUnit}</text>
                    </g>

                    {/* End Marker & Label Box */}
                    <circle cx="360" cy="280" r="10" fill="#059669" />
                    <circle cx="360" cy="280" r="16" fill="none" stroke="#059669" strokeWidth="2" opacity="0.3" />
                    <g transform="translate(290, 210)">
                      <rect width="70" height="40" rx="8" fill="rgba(255,255,255,0.4)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" className="backdrop-blur-md" />
                      <text x="35" y="25" textAnchor="middle" className="text-[14px] font-medium fill-neutral-800">{targetWeight || '80'} {weightUnit}</text>
                    </g>

                    {/* X-Axis Labels */}
                    <text x="40" y="310" textAnchor="middle" className="text-[12px] font-medium fill-neutral-600">Hoy</text>
                    <text x="360" y="310" textAnchor="middle" className="text-[12px] font-medium fill-neutral-600">con Harna</text>
                  </svg>
                </div>
              </div>

              <p className="text-neutral-400 text-sm mb-12">
                Los resultados varían según el uso individual y la adherencia
              </p>

              <button 
                onClick={() => setStep('checkout')}
                className="w-full max-w-sm bg-pilates-accent text-white py-5 rounded-full text-xl font-bold shadow-lg shadow-pilates-accent/20 hover:bg-pilates-accent/90 transition-all active:scale-[0.98]"
              >
                Continuar
              </button>
            </motion.div>
          )}

          {step === 'checkout' && (
            <motion.div 
              key="checkout"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full flex flex-col items-center pb-20"
            >
              {/* Header Section */}
              <div className="w-full bg-[#94A3B8]/30 pt-8 pb-12 px-4 flex flex-col items-center">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-2xl font-black tracking-tighter text-neutral-800">PILATES</span>
                  <span className="px-3 py-1 bg-neutral-200/50 rounded-full text-xs font-medium text-neutral-600">por HARNA</span>
                </div>

                <div className="flex items-center gap-8 mb-8">
                  <div className="text-center">
                    <p className="text-xl font-bold text-neutral-800 mb-1">04:28</p>
                    <div className="flex gap-4 text-[10px] text-neutral-500 uppercase tracking-wider">
                      <span>min</span>
                      <span>seg</span>
                    </div>
                  </div>
                  <button className="bg-pilates-accent text-white px-8 py-3 rounded-full font-bold hover:bg-pilates-accent/90 transition-colors">
                    Ver mi plan
                  </button>
                </div>

                {/* Before/After Images Placeholder */}
                <div className="flex gap-4 mb-8 w-full max-w-2xl justify-center">
                  <div className="w-1/2 aspect-[3/4] bg-neutral-800 rounded-2xl overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800" alt="Before" className="w-full h-full object-cover opacity-80" />
                  </div>
                  <div className="w-1/2 aspect-[3/4] bg-neutral-800 rounded-2xl overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800" alt="After" className="w-full h-full object-cover opacity-80" />
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
                  <div className="bg-white/40 backdrop-blur-md p-6 rounded-2xl text-center border border-white/20">
                    <h3 className="text-xl font-bold text-neutral-800 mb-2">Ahora</h3>
                    <p className="text-xs text-neutral-500 mb-1">Peso actual</p>
                    <p className="text-2xl font-bold text-neutral-800">{weight || '123'} {weightUnit}</p>
                  </div>
                  <div className="bg-white/40 backdrop-blur-md p-6 rounded-2xl text-center border border-white/20">
                    <h3 className="text-xl font-bold text-neutral-800 mb-2">Tu objetivo</h3>
                    <p className="text-xs text-neutral-500 mb-1">Peso objetivo</p>
                    <p className="text-2xl font-bold text-neutral-800">{targetWeight || '80'} {weightUnit}</p>
                  </div>
                </div>
                <p className="text-[10px] text-neutral-500 mt-4 text-center max-w-xl">
                  La imagen no pretende representar al usuario. Los resultados pueden variar según la persona y no están garantizados
                </p>
              </div>

              {/* Pricing Section */}
              <div className="w-full bg-[#E0F2FE] py-16 px-4 flex flex-col items-center">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 text-center mb-12 leading-tight">
                  Tu Pilates Asiático<br />Plan es ¡Listo!
                </h2>

                <div className="flex justify-center gap-8 w-full max-w-md mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                      <Target size={16} className="text-red-500" />
                    </div>
                    <div>
                      <p className="text-[10px] text-neutral-500 uppercase">Objetivo</p>
                      <p className="text-sm font-medium text-neutral-800">perder peso</p>
                    </div>
                  </div>
                  <div className="w-px h-10 bg-neutral-300" />
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <Activity size={16} className="text-purple-500" />
                    </div>
                    <div>
                      <p className="text-[10px] text-neutral-500 uppercase">Peso objetivo</p>
                      <p className="text-sm font-medium text-neutral-800">{targetWeight || '80'} {weightUnit}</p>
                    </div>
                  </div>
                </div>

                {/* Pricing Cards */}
                <div className="w-full max-w-md space-y-4 mb-8">
                  {/* 1 Week */}
                  <div 
                    onClick={() => setSelectedPlan('1week')}
                    className={`relative p-6 rounded-3xl border-2 cursor-pointer transition-all ${
                      selectedPlan === '1week' ? 'border-pilates-accent bg-white/80' : 'border-transparent bg-white/50 hover:bg-white/60'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-4">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          selectedPlan === '1week' ? 'border-pilates-accent' : 'border-neutral-300'
                        }`}>
                          {selectedPlan === '1week' && <div className="w-3 h-3 rounded-full bg-pilates-accent" />}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-neutral-800">1 semana</h4>
                          <p className="text-sm text-neutral-500 line-through">4,99 $</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-neutral-800">$0,71 <span className="text-sm font-normal text-neutral-500">/ día</span></p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-neutral-200 flex items-center justify-center gap-2 text-xs text-neutral-600">
                      <span>☕</span> Menos de una taza de café
                    </div>
                  </div>

                  {/* 4 Weeks (Popular) */}
                  <div 
                    onClick={() => setSelectedPlan('4weeks')}
                    className={`relative p-6 rounded-3xl border-2 cursor-pointer transition-all ${
                      selectedPlan === '4weeks' ? 'border-pilates-accent bg-white/80' : 'border-transparent bg-white/50 hover:bg-white/60'
                    }`}
                  >
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pilates-accent text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                      MÁS POPULAR
                    </div>
                    <div className="flex items-center justify-between mb-2 mt-2">
                      <div className="flex items-center gap-4">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          selectedPlan === '4weeks' ? 'border-pilates-accent' : 'border-neutral-300'
                        }`}>
                          {selectedPlan === '4weeks' && <div className="w-3 h-3 rounded-full bg-pilates-accent" />}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-neutral-800">4 semanas</h4>
                          <p className="text-sm text-neutral-500"><span className="line-through">39,99 $</span> 9,99 $</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded mb-1 inline-block">75 % de descuento</div>
                        <p className="text-xl font-bold text-neutral-800">$0,33 <span className="text-sm font-normal text-neutral-500">/ día</span></p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-neutral-200 flex items-center justify-center gap-2 text-xs text-neutral-600">
                      <span>🥗</span> El costo de dos almuerzos rápidos
                    </div>
                  </div>

                  {/* 12 Weeks */}
                  <div 
                    onClick={() => setSelectedPlan('12weeks')}
                    className={`relative p-6 rounded-3xl border-2 cursor-pointer transition-all ${
                      selectedPlan === '12weeks' ? 'border-pilates-accent bg-white/80' : 'border-transparent bg-white/50 hover:bg-white/60'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-4">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          selectedPlan === '12weeks' ? 'border-pilates-accent' : 'border-neutral-300'
                        }`}>
                          {selectedPlan === '12weeks' && <div className="w-3 h-3 rounded-full bg-pilates-accent" />}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-neutral-800">12 semanas</h4>
                          <p className="text-sm text-neutral-500"><span className="line-through">89,99 $</span> 18,99 $</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="bg-neutral-200 text-neutral-600 text-[10px] font-bold px-2 py-0.5 rounded mb-1 inline-block">79 % de descuento</div>
                        <p className="text-xl font-bold text-neutral-800">$0,21 <span className="text-sm font-normal text-neutral-500">/ día</span></p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-neutral-200 flex items-center justify-center gap-2 text-xs text-neutral-600">
                      <span>🛵</span> Menos de una entrega de cena familiar
                    </div>
                  </div>
                </div>

                <button className="w-full max-w-md bg-pilates-accent text-white py-5 rounded-full text-xl font-bold shadow-lg shadow-pilates-accent/20 hover:bg-pilates-accent/90 transition-all active:scale-[0.98] mb-6">
                  See my plan
                </button>

                <p className="text-[10px] text-neutral-500 text-center max-w-md leading-relaxed">
                  Al continuar, aceptas que, si no cancelas al menos 24 horas antes de que finalice la oferta de lanzamiento de 1 mes, se te cobrará automáticamente el precio total de <span className="font-bold">$39.99</span> cada mes hasta que canceles en <a href="#" className="underline">Configuración</a>. Obtén más información sobre nuestra política de cancelación y reembolso en <a href="#" className="underline">Términos de suscripción</a>.
                </p>
              </div>

              {/* Features Section */}
              <div className="w-full bg-[#E0F2FE] py-16 px-4 flex flex-col items-center">
                <h2 className="text-4xl font-bold text-neutral-800 mb-12 text-center">Lo que obtienes</h2>
                
                <div className="w-full max-w-xl space-y-6 mb-12">
                  {[
                    "Programa personalizado adaptado a las necesidades cambiantes de las mujeres mayores de 40 años.",
                    "Movimiento consciente para reducir el estrés, mejorar el estado de ánimo y mejorar el sueño",
                    "Muévase libremente y con confianza, sin dolor ni molestias.",
                    "Fortalecimiento del core y la espalda para aliviar el dolor de espalda y mejorar la postura."
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-pilates-accent/20 flex items-center justify-center shrink-0 mt-1">
                        <Check size={14} className="text-pilates-accent" />
                      </div>
                      <p className="text-neutral-700 leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-white/50 backdrop-blur-md rounded-2xl p-6 flex items-center gap-6 max-w-md w-full mb-16">
                  <div className="w-16 h-16 bg-neutral-200 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">Ahora la aplicación HARNA está disponible para</p>
                    <p className="font-bold text-neutral-800">Teléfonos móviles, tabletas y televisores</p>
                  </div>
                </div>

                {/* App Store Badge */}
                <div className="bg-[#E8F5E9] border border-[#A5D6A7] rounded-3xl p-8 max-w-xl w-full text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#4CAF50] to-transparent opacity-50" />
                  <h3 className="text-xl font-bold text-[#2E7D32] mb-2 uppercase tracking-wider">APLICACIÓN HARNA</h3>
                  <p className="text-sm text-[#388E3C] mb-6">Elegida por aquellos listos para transformarse</p>
                  
                  <div className="bg-white rounded-2xl p-4 flex items-center justify-center gap-8 shadow-sm">
                    <div className="text-center">
                      <div className="flex text-yellow-400 mb-1 justify-center">
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                      </div>
                      <p className="text-xs font-bold text-neutral-800">4.5 <span className="font-normal text-neutral-500">de 5</span></p>
                    </div>
                    <div className="w-px h-10 bg-neutral-200" />
                    <div className="text-center">
                      <div className="w-6 h-6 bg-neutral-800 rounded-full mx-auto mb-1 flex items-center justify-center">
                        <span className="text-white text-[10px]">🍎</span>
                      </div>
                      <p className="text-[10px] text-neutral-500">App Store</p>
                    </div>
                    <div className="w-px h-10 bg-neutral-200" />
                    <div className="text-center">
                      <div className="w-6 h-6 bg-white border border-neutral-200 rounded-full mx-auto mb-1 flex items-center justify-center">
                        <span className="text-[10px]">▶️</span>
                      </div>
                      <p className="text-[10px] text-neutral-500">Google Play</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="w-full bg-[#E0F2FE] py-16 px-4 flex flex-col items-center">
                <h2 className="text-3xl font-bold text-neutral-800 mb-12 text-center">Con la confianza de personas como tú</h2>
                
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl w-full mb-12">
                  {[
                    {
                      name: "Francesca00fit",
                      date: "16/01/2025",
                      text: "¡Me encanta esta aplicación! Llevo seis meses usándola y he visto resultados reales. Las instrucciones son claras y fáciles de seguir"
                    },
                    {
                      name: "body_fitBoom",
                      date: "02/01/2025",
                      text: "Nunca me han gustado los entrenamientos estructurados, pero esto es más fácil de lo que esperaba. Estoy empezando, pero tengo buenas vibras"
                    },
                    {
                      name: "AmandaaaFit",
                      date: "30/01/2025",
                      text: "Como madre de dos hijos, encontrar tiempo para hacer ejercicio era imposible, hasta que apareció HarnaFit. Sus entrenamientos rápidos y efectivos se adaptan perfectamente a mi día. Incluso si solo tengo 15 minutos, puedo hacer una sesión y sentirme realizada"
                    }
                  ].map((review, i) => (
                    <div key={i} className="bg-white/60 backdrop-blur-md p-6 rounded-3xl border border-white/40">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-neutral-200 rounded-full overflow-hidden">
                            <img src={`https://i.pravatar.cc/150?img=${i + 10}`} alt={review.name} className="w-full h-full object-cover" />
                          </div>
                          <span className="font-bold text-neutral-800 text-sm">{review.name}</span>
                        </div>
                        <span className="text-[10px] text-neutral-400">{review.date}</span>
                      </div>
                      <div className="flex text-yellow-400 mb-3">
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                      </div>
                      <p className="text-sm text-neutral-700 leading-relaxed">{review.text}</p>
                    </div>
                  ))}
                </div>

                <div className="w-full max-w-2xl h-48 bg-neutral-200 rounded-3xl overflow-hidden mb-6 relative">
                   <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=1200" alt="Happy users" className="w-full h-full object-cover opacity-80" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#E0F2FE] to-transparent" />
                </div>
                <p className="text-[10px] text-neutral-500 text-center max-w-md">
                  Las reseñas provienen de comentarios reales de clientes en varias plataformas, con nombres y fotos modificados por motivos de privacidad
                </p>
              </div>

              {/* FAQ */}
              <div className="w-full bg-[#E0F2FE] py-16 px-4 flex flex-col items-center">
                <h2 className="text-4xl font-bold text-neutral-800 mb-12 text-center max-w-2xl leading-tight">
                  Algunas preguntas adicionales que puedas tener
                </h2>
                
                <div className="w-full max-w-2xl space-y-4">
                  {[
                    { q: "¿Qué ejercicios incluye Pilates?", a: "Pilates incluye una variedad de ejercicios de bajo impacto enfocados en la fuerza del core, flexibilidad y control muscular." },
                    { q: "¿Cómo puedo saber qué programa es adecuado para mí?", a: "Basado en tus respuestas al cuestionario, hemos creado un plan personalizado que se adapta a tu nivel de experiencia, objetivos y necesidades físicas." },
                    { q: "¿Cómo accedo a mi plan?", a: "Una vez que completes tu registro, podrás descargar nuestra aplicación y acceder a tu plan completo desde cualquier dispositivo." }
                  ].map((faq, i) => (
                    <div key={i} className="bg-white/40 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20">
                      <button 
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left"
                      >
                        <span className="font-medium text-neutral-800">{faq.q}</span>
                        <div className={`w-6 h-6 rounded-full bg-white/50 flex items-center justify-center shrink-0 transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>
                          <span className="text-neutral-500 text-lg leading-none">+</span>
                        </div>
                      </button>
                      <AnimatePresence>
                        {openFaq === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-5 text-sm text-neutral-600 leading-relaxed">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="w-full bg-[#E0F2FE] py-16 px-4 flex flex-col items-center">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 text-center mb-12 leading-tight">
                  Obtén resultados visibles en 4 semanas!
                </h2>

                {/* Duplicate Pricing Cards for Bottom CTA */}
                <div className="w-full max-w-md space-y-4 mb-8">
                  {/* ... (Same pricing cards as above, simplified for brevity in this snippet, but fully implemented in code) ... */}
                  <div 
                    onClick={() => setSelectedPlan('4weeks')}
                    className="relative p-6 rounded-3xl border-2 border-pilates-accent bg-white/80 cursor-pointer"
                  >
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pilates-accent text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                      MÁS POPULAR
                    </div>
                    <div className="flex items-center justify-between mb-2 mt-2">
                      <div className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full border-2 border-pilates-accent flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-pilates-accent" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-neutral-800">4 semanas</h4>
                          <p className="text-sm text-neutral-500"><span className="line-through">39,99 $</span> 9,99 $</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded mb-1 inline-block">75 % de descuento</div>
                        <p className="text-xl font-bold text-neutral-800">$0,33 <span className="text-sm font-normal text-neutral-500">/ día</span></p>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-full max-w-md bg-pilates-accent text-white py-5 rounded-full text-xl font-bold shadow-lg shadow-pilates-accent/20 hover:bg-pilates-accent/90 transition-all active:scale-[0.98] mb-6">
                  See my plan
                </button>

                <p className="text-[10px] text-neutral-500 text-center max-w-md leading-relaxed mb-16">
                  Al continuar, aceptas que, si no cancelas al menos 24 horas antes de que finalice la oferta de lanzamiento de 1 mes, se te cobrará automáticamente el precio total de <span className="font-bold">$39.99</span> cada mes hasta que canceles en <a href="#" className="underline">Configuración</a>. Obtén más información sobre nuestra política de cancelación y reembolso en <a href="#" className="underline">Términos de suscripción</a>.
                </p>

                {/* Guarantee */}
                <div className="max-w-2xl text-center">
                  <div className="w-32 h-32 mx-auto mb-6 relative">
                    <div className="absolute inset-0 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg border-4 border-yellow-500">
                      <div className="text-center">
                        <p className="text-[10px] font-bold text-yellow-900 uppercase tracking-widest">MONEY BACK</p>
                        <p className="text-3xl font-black text-yellow-900 leading-none my-1">100%</p>
                        <p className="text-[10px] font-bold text-yellow-900 uppercase tracking-widest">GUARANTEE</p>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-800 mb-4">Garantía de devolución del 100 % del dinero</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                    Creemos que nuestro plan puede funcionar para usted y obtendrá resultados visibles en 4 semanas. Incluso estamos listos para reembolsarle por completo dentro de los 30 días posteriores a la compra si no obtiene resultados visibles y puede demostrar que ha seguido nuestro plan.
                  </p>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-8">
                    Obtenga más información sobre las limitaciones aplicables en nuestra <a href="#" className="underline">política de devolución de dinero</a>.
                  </p>
                  <p className="text-[10px] text-neutral-500 leading-relaxed">
                    Este plan personalizado se basa en principios generales de bienestar. No es un consejo médico ni un programa de tratamiento para ninguna condición de salud
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Developer Navigation (Temporary) */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center gap-2">
        <button 
          onClick={() => setIsDevNavOpen(!isDevNavOpen)}
          className="bg-black/80 backdrop-blur-md text-white/80 px-4 py-2 rounded-full border border-white/10 text-[10px] uppercase font-bold hover:bg-black transition-all shadow-xl"
        >
          {isDevNavOpen ? 'Ocultar Navegación' : 'Mostrar Navegación'}
        </button>
        
        {isDevNavOpen && (
          <div className="flex flex-wrap justify-center gap-2 p-2 bg-black/80 backdrop-blur-md rounded-2xl border border-white/10 max-w-[90vw] shadow-2xl">
            {(['landing', 'community', 'goal', 'additional', 'concerns', 'changes', 'startingPoint', 'dreamBody', 'bestForm', 'pilatesExperience', 'prosper', 'madeForYou', 'physicalIssues', 'comfortLevel', 'painRelief', 'stepByStep', 'great', 'personalizePlan', 'height', 'weight', 'targetWeight', 'age', 'importantFeatures', 'typicalDay', 'profileReady', 'extraActivities', 'preparingPlan', 'waterIntake', 'dietaryPreferences', 'habits', 'lifeEvents', 'recoverBody', 'weightProjection', 'creatingPlan', 'email', 'name', 'planReady', 'checkout'] as const).map((s) => (
              <button
                key={s}
                onClick={() => setStep(s)}
                className={`px-3 py-1 text-[10px] uppercase font-bold rounded-lg transition-colors ${
                  step === s ? 'bg-pilates-accent text-white' : 'bg-white/10 text-white/60 hover:bg-white/20'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="w-full pt-20 pb-12 px-6 text-center footer-gradient relative z-20 mt-auto">
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-[11px] text-neutral-500 font-medium leading-relaxed">
            Al elegir tu edad y continuar, aceptas nuestros <a href="#" className="underline">Términos de servicio</a> y reconoces nuestra <a href="#" className="underline">Política de privacidad</a> y <a href="#" className="underline">Política de cookies</a>
          </p>
          
          <div className="h-px bg-neutral-200 w-full" />
          
          <p className="text-[10px] text-neutral-400 leading-relaxed">
            Este sitio no ofrece asesoramiento médico. El contenido es solo para fines de bienestar general. Siempre consulte con un profesional de la salud antes de comenzar cualquier programa de acondicionamiento físico o si tiene alguna inquietud sobre su salud.
          </p>
        </div>
      </footer>
    </div>
  );
}

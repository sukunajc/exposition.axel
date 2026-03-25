import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, RefreshCw, Trophy, Globe, Lock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MigrationTycoon from "@/components/MigrationTycoon";
import { useCheatCode } from "@/contexts/CheatCodeContext";

// Quiz Data - Extended
const questions = [
  {
    id: 1,
    question: "Quelle est la part des migrants dans la population mondiale ?",
    options: ["10%", "3.6%", "25%", "50%"],
    answer: 1,
    explanation: "Seulement 3.6% de la population mondiale vit dans un autre pays. C'est très peu !"
  },
  {
    id: 2,
    question: "Quel pays reçoit le plus d'argent de ses migrants (remittances) ?",
    options: ["Chine", "Mexique", "Inde", "France"],
    answer: 2,
    explanation: "L'Inde a reçu 111 milliards de dollars en 2022, le premier pays à dépasser 100 Mds $."
  },
  {
    id: 3,
    question: "Quelle est la principale région d'origine des immigrés en France ?",
    options: ["Europe", "Afrique", "Asie", "Amérique"],
    answer: 1,
    explanation: "48.9% des immigrés en France sont nés en Afrique, suivie par l'Europe (30.9%)."
  },
  {
    id: 4,
    question: "Un migrant international est une personne qui...",
    options: ["Change de ville", "Va en vacances", "Change de pays de résidence", "Déménage dans la même région"],
    answer: 2,
    explanation: "La définition officielle implique le franchissement d'une frontière internationale."
  },
  {
    id: 5,
    question: "Vrai ou Faux : Il y a plus d'hommes que de femmes qui migrent.",
    options: ["Vrai", "Faux"],
    answer: 0,
    explanation: "C'est vrai ! 52% d'hommes pour 48% de femmes en 2024."
  },
  {
    id: 6,
    question: "Combien de personnes sont déplacées de force dans le monde en 2024 ?",
    options: ["50 millions", "85 millions", "120 millions", "200 millions"],
    answer: 2,
    explanation: "120 millions de personnes déplacées de force en 2024, un record historique."
  },
  {
    id: 7,
    question: "Quel pays accueille le plus de réfugiés au monde ?",
    options: ["Allemagne", "Turquie", "Jordanie", "Liban"],
    answer: 1,
    explanation: "La Turquie accueille 3,8 millions de réfugiés, le plus au monde."
  },
  {
    id: 8,
    question: "Quelle est la différence principale entre un migrant et un réfugié ?",
    options: ["L'âge", "Le choix vs la force", "La nationalité", "La langue"],
    answer: 1,
    explanation: "Un migrant choisit de partir, un réfugié est forcé de fuir (guerre, persécutions)."
  },
  {
    id: 9,
    question: "Quel est le plus grand corridor migratoire du monde ?",
    options: ["Syrie → Turquie", "Mexique → États-Unis", "Bangladesh → Inde", "Afrique → Europe"],
    answer: 1,
    explanation: "Mexique → États-Unis est l'un des plus importants corridors mondiaux."
  },
  {
    id: 10,
    question: "En quelle année les envois de fonds mondiaux ont-ils atteint 831 milliards de dollars ?",
    options: ["2020", "2021", "2022", "2023"],
    answer: 2,
    explanation: "En 2022, les remittances mondiales ont atteint 831 milliards de dollars."
  },
  {
    id: 11,
    question: "Quel continent accueille le plus de migrants internationaux ?",
    options: ["Asie", "Afrique", "Europe", "Amérique du Nord"],
    answer: 2,
    explanation: "L'Europe accueille 94 millions de migrants, le plus au monde."
  },
  {
    id: 12,
    question: "Quel pourcentage des immigrés en France sont nés en Afrique ?",
    options: ["30%", "40%", "49%", "60%"],
    answer: 2,
    explanation: "48.9% des immigrés en France sont nés en Afrique."
  }
];

// Quiz Expert Corridors
const corridorQuestions = [
  {
    id: 1,
    question: "Combien de migrants empruntent le corridor Mexique → États-Unis chaque année ?",
    options: ["500 000", "1 million", "2-3 millions", "5 millions"],
    answer: 2,
    explanation: "Entre 2 et 3 millions de migrants empruntent ce corridor chaque année."
  },
  {
    id: 2,
    question: "Quel est le plus grand corridor de réfugiés ?",
    options: ["Syrie → Turquie (3.8M)", "Afghanistan → Pakistan (1.7M)", "Soudan → Égypte (1M)", "Birmanie → Thaïlande (0.5M)"],
    answer: 0,
    explanation: "Syrie → Turquie accueille 3.8 millions de réfugiés syriens."
  },
  {
    id: 3,
    question: "Quel pays reçoit le plus d'immigrants de travail ?",
    options: ["France", "Allemagne", "Arabie Saoudite", "États-Unis"],
    answer: 2,
    explanation: "L'Arabie Saoudite reçoit plus de 10 millions de travailleurs migrants."
  },
  {
    id: 4,
    question: "Combien de Bangladais vivent en Inde ?",
    options: ["2 millions", "5 millions", "10 millions", "15 millions"],
    answer: 2,
    explanation: "Environ 10 millions de Bangladais vivent en Inde."
  },
  {
    id: 5,
    question: "Quel est le corridor Europe → Europe le plus important ?",
    options: ["Pologne → Allemagne", "Roumanie → Italie", "Bulgarie → France", "Albanie → Grèce"],
    answer: 0,
    explanation: "Pologne → Allemagne est un corridor majeur avec plus de 1 million de migrants."
  },
  {
    id: 6,
    question: "Combien de Philippins travaillent à l'étranger ?",
    options: ["2 millions", "5 millions", "10 millions", "15 millions"],
    answer: 2,
    explanation: "Environ 10 millions de Philippins travaillent à l'étranger, principalement au Moyen-Orient."
  },
  {
    id: 7,
    question: "Quel est le corridor Afrique → Europe le plus important ?",
    options: ["Nigeria → France", "Maroc → Espagne", "Égypte → Italie", "Somalie → Suède"],
    answer: 1,
    explanation: "Maroc → Espagne est un corridor majeur avec plus de 700 000 migrants."
  },
  {
    id: 8,
    question: "Combien d'Indiens vivent à l'étranger ?",
    options: ["5 millions", "10 millions", "18 millions", "25 millions"],
    answer: 2,
    explanation: "Environ 18 millions d'Indiens vivent à l'étranger, la plus grande diaspora au monde."
  },
  {
    id: 9,
    question: "Quel pays accueille le plus de migrants chinois ?",
    options: ["États-Unis", "Thaïlande", "Australie", "Canada"],
    answer: 1,
    explanation: "La Thaïlande accueille plus de 1 million de migrants chinois."
  },
  {
    id: 10,
    question: "Quel est le pourcentage de migrants dans la population mondiale ?",
    options: ["1.5%", "3.6%", "5%", "10%"],
    answer: 1,
    explanation: "Les migrants représentent 3.6% de la population mondiale en 2024."
  }
];

export default function Jeux() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [activeTab, setActiveTab] = useState("quiz");
  const [corridorQuestion, setCorridorQuestion] = useState(0);
  const [corridorScore, setCorridorScore] = useState(0);
  const [corridorShowResult, setCorridorShowResult] = useState(false);
  const [corridorSelectedOption, setCorridorSelectedOption] = useState<number | null>(null);
  const [corridorIsAnswered, setCorridorIsAnswered] = useState(false);
  const { isFeatureUnlocked } = useCheatCode();

  const handleAnswer = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    
    if (index === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  const handleCorridorAnswer = (index: number) => {
    if (corridorIsAnswered) return;
    setCorridorSelectedOption(index);
    setCorridorIsAnswered(true);
    
    if (index === corridorQuestions[corridorQuestion].answer) {
      setCorridorScore(corridorScore + 1);
    }
  };

  const nextCorridorQuestion = () => {
    if (corridorQuestion < corridorQuestions.length - 1) {
      setCorridorQuestion(corridorQuestion + 1);
      setCorridorSelectedOption(null);
      setCorridorIsAnswered(false);
    } else {
      setCorridorShowResult(true);
    }
  };

  const resetCorridorQuiz = () => {
    setCorridorQuestion(0);
    setCorridorScore(0);
    setCorridorShowResult(false);
    setCorridorSelectedOption(null);
    setCorridorIsAnswered(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return "Incroyable ! Tu es un expert absolu !";
    if (percentage >= 80) return "Excellent ! Tu maîttrises très bien le sujet !";
    if (percentage >= 60) return "Pas mal ! Tu as une bonne compréhension.";
    if (percentage >= 40) return "Pas terrible... Révise un peu !";
    return "Oups... Tu devrais relire la page Comprendre !";
  };

  const getCorridorScoreMessage = () => {
    if (corridorScore === 10) return "Incroyable ! Tu es un expert mondial des corridors !";
    if (corridorScore >= 8) return "Excellent ! Tu maîttrises les corridors majeurs !";
    if (corridorScore >= 6) return "Très bien ! Tu as une bonne connaissance des corridors.";
    if (corridorScore >= 4) return "Pas mal ! Continue à explorer les corridors.";
    return "Oups... Les corridors n'ont pas de secrets pour toi... encore !";
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
          Jeux & Quiz
        </h1>
        <p className="text-xl text-muted-foreground">
          Testez vos connaissances et jouez à des jeux interactifs sur les migrations.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-slate-800 border border-slate-700">
          <TabsTrigger value="quiz" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-black">
            Quiz
          </TabsTrigger>
          <TabsTrigger 
            value="corridors" 
            className="data-[state=active]:bg-cyan-500 data-[state=active]:text-black relative" 
            disabled={!isFeatureUnlocked("expert-corridors")}
          >
            Expert Corridors
            {!isFeatureUnlocked("expert-corridors") && <Lock className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2" />}
          </TabsTrigger>
          <TabsTrigger 
            value="tycoon" 
            className="data-[state=active]:bg-cyan-500 data-[state=active]:text-black relative" 
            disabled={!isFeatureUnlocked("migration-tycoon")}
          >
            Migration Tycoon
            {!isFeatureUnlocked("migration-tycoon") && <Lock className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2" />}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="quiz" className="mt-8">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key="quiz"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <Card className="border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden">
                  <CardHeader>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-medium text-muted-foreground">Question {currentQuestion + 1}/{questions.length}</span>
                      <span className="text-sm font-bold text-primary">Score: {score}</span>
                    </div>
                    <Progress value={((currentQuestion) / questions.length) * 100} className="h-2" />
                    <CardTitle className="text-2xl mt-6 font-display leading-tight">
                      {questions[currentQuestion].question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    {questions[currentQuestion].options.map((option, index) => (
                      <Button
                        key={index}
                        variant={
                          isAnswered
                            ? index === questions[currentQuestion].answer
                              ? "default"
                              : index === selectedOption
                              ? "destructive"
                              : "outline"
                            : "outline"
                        }
                        className={`h-auto py-4 text-lg justify-start px-6 transition-all ${
                          isAnswered && index === questions[currentQuestion].answer ? "bg-green-500 hover:bg-green-600 border-green-500" : ""
                        }`}
                        onClick={() => handleAnswer(index)}
                      >
                        {isAnswered && index === questions[currentQuestion].answer && (
                          <CheckCircle2 className="w-5 h-5 mr-3 flex-shrink-0" />
                        )}
                        {isAnswered && index === selectedOption && index !== questions[currentQuestion].answer && (
                          <XCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                        )}
                        {option}
                      </Button>
                    ))}
                  </CardContent>
                  {isAnswered && (
                    <CardFooter className="flex flex-col gap-4 bg-slate-900/50">
                      <div className="w-full">
                        <p className="text-sm font-medium text-accent mb-2">Explication :</p>
                        <p className="text-sm text-muted-foreground">{questions[currentQuestion].explanation}</p>
                      </div>
                      <Button onClick={nextQuestion} className="w-full bg-primary hover:bg-primary/90 gap-2">
                        {currentQuestion === questions.length - 1 ? "Voir les résultats" : "Question suivante"} →
                      </Button>
                    </CardFooter>
                  )}
                </Card>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <Card className="border-accent/20 bg-card/50 backdrop-blur-sm overflow-hidden">
                  <CardHeader className="text-center">
                    <Trophy className="w-16 h-16 mx-auto mb-4 text-accent" />
                    <CardTitle className="text-3xl mb-2">Quiz Terminé !</CardTitle>
                    <p className="text-2xl font-bold text-primary">{score}/{questions.length}</p>
                    <p className="text-lg text-muted-foreground mt-4">{getScoreMessage()}</p>
                  </CardHeader>
                  <CardFooter>
                    <Button
                      onClick={resetQuiz}
                      size="lg" 
                      variant="outline" 
                      className="w-full gap-2"
                    >
                      <RefreshCw className="w-4 h-4" /> Recommencer
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </TabsContent>

        <TabsContent value="corridors" className="mt-8">
          {!isFeatureUnlocked("expert-corridors") ? (
            <Card className="border-accent/20 bg-accent/5 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="w-8 h-8 text-accent" />
                  <div>
                    <CardTitle>Contenu Verrouillé</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">Entrez un code de déverrouillage pour accéder au Quiz Expert Corridors.</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ) : (
            <AnimatePresence mode="wait">
              {!corridorShowResult ? (
                <motion.div
                  key="quiz"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <Card className="border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden">
                    <CardHeader>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm font-medium text-muted-foreground">Question {corridorQuestion + 1}/{corridorQuestions.length}</span>
                        <span className="text-sm font-bold text-accent">Score: {corridorScore}</span>
                      </div>
                      <Progress value={((corridorQuestion) / corridorQuestions.length) * 100} className="h-2" />
                      <CardTitle className="text-2xl mt-6 font-display leading-tight flex items-center gap-2">
                        <Globe className="w-6 h-6 text-accent" />
                        {corridorQuestions[corridorQuestion].question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                      {corridorQuestions[corridorQuestion].options.map((option, index) => (
                        <Button
                          key={index}
                          variant={
                            corridorIsAnswered
                              ? index === corridorQuestions[corridorQuestion].answer
                                ? "default"
                                : index === corridorSelectedOption
                                ? "destructive"
                                : "outline"
                              : "outline"
                          }
                          className={`h-auto py-4 text-lg justify-start px-6 transition-all ${
                            corridorIsAnswered && index === corridorQuestions[corridorQuestion].answer ? "bg-green-500 hover:bg-green-600 border-green-500" : ""
                          }`}
                          onClick={() => handleCorridorAnswer(index)}
                        >
                          {corridorIsAnswered && index === corridorQuestions[corridorQuestion].answer && (
                            <CheckCircle2 className="w-5 h-5 mr-3 flex-shrink-0" />
                          )}
                          {corridorIsAnswered && index === corridorSelectedOption && index !== corridorQuestions[corridorQuestion].answer && (
                            <XCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                          )}
                          {option}
                        </Button>
                      ))}
                    </CardContent>
                    {corridorIsAnswered && (
                      <CardFooter className="flex flex-col gap-4 bg-slate-900/50">
                        <div className="w-full">
                          <p className="text-sm font-medium text-accent mb-2">Explication :</p>
                          <p className="text-sm text-muted-foreground">{corridorQuestions[corridorQuestion].explanation}</p>
                        </div>
                        <Button onClick={nextCorridorQuestion} className="w-full bg-primary hover:bg-primary/90 gap-2">
                          {corridorQuestion === corridorQuestions.length - 1 ? "Voir les résultats" : "Question suivante"} →
                        </Button>
                      </CardFooter>
                    )}
                  </Card>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <Card className="border-accent/20 bg-card/50 backdrop-blur-sm overflow-hidden">
                    <CardHeader className="text-center">
                      <Globe className="w-16 h-16 mx-auto mb-4 text-accent" />
                      <CardTitle className="text-3xl mb-2">Quiz Expert Corridors Terminé !</CardTitle>
                      <p className="text-2xl font-bold text-primary">{corridorScore}/{corridorQuestions.length}</p>
                      <p className="text-lg text-muted-foreground mt-4">{getCorridorScoreMessage()}</p>
                    </CardHeader>
                    <CardFooter>
                      <Button
                        onClick={resetCorridorQuiz}
                        size="lg" 
                        variant="outline" 
                        className="w-full gap-2"
                      >
                        <RefreshCw className="w-4 h-4" /> Recommencer
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </TabsContent>

        <TabsContent value="tycoon" className="mt-8">
          {!isFeatureUnlocked("migration-tycoon") ? (
            <Card className="border-accent/20 bg-accent/5 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="w-8 h-8 text-accent" />
                  <div>
                    <CardTitle>Contenu Verrouillé</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">Entrez un code de déverrouillage pour accéder à Migration Tycoon.</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ) : (
            <MigrationTycoon />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
